from PIL import Image, ImageOps, ImageFilter
import numpy as np
from scipy import ndimage as ndi
S='/private/tmp/claude-501/-Users-marcos-Desktop-git-mlaina-rubicon-primaris-github-io/0b4f4241-0970-473d-b27c-1f34a0b218f6/scratchpad'
SRC='src/assets/necrones-src/'
D='public/images/necrones/'
files = {k: f'{k}.jpeg' for k in ['sautekh','szarekhan','nephrekh','nihilakh','mephrit','novokh']}
# recorte amplio en coords de miniatura (700 alto): panel + sigilos, con margen
boxes = {
 'sautekh':[170,55,360,640],'szarekhan':[140,60,385,660],'nephrekh':[165,55,395,630],
 'nihilakh':[160,65,385,660],'mephrit':[160,60,350,660],'novokh':[150,45,350,660],
}
thr = {'szarekhan':(185,0.14)}
from scipy.spatial import ConvexHull
from PIL import ImageDraw
sc=2048/700
sheet=[]
order=['nihilakh','szarekhan','nephrekh','mephrit','novokh','sautekh']
TEMPLATE={}
def comp_mask(a,mx,sat,t):
    paper=(mx>t[0])&(sat<t[1])
    lab,n=ndi.label(paper)
    border=np.unique(np.concatenate([lab[0],lab[-1],lab[:,0],lab[:,-1]]))
    keep=~np.isin(lab,border[border>0])
    return ndi.binary_opening(keep,iterations=2)
for k in order:
    import os
    if not os.path.exists(SRC+files[k]): print('falta',k); continue
    b=boxes[k]
    im=ImageOps.exif_transpose(Image.open(SRC+files[k])).convert('RGB')
    x0,y0,x1,y1=[int(v*sc) for v in b]
    im=im.crop((x0,y0,x1,y1))
    a=np.asarray(im).astype(float)
    mx=a.max(2); mn=a.min(2); sat=(mx-mn)/np.maximum(mx,1)
    t=thr.get(k,(150,0.22)); paper=(mx>t[0])&(sat<t[1])
    # inundación desde los bordes sobre papel -> exterior
    lab,n=ndi.label(paper)
    border=np.unique(np.concatenate([lab[0],lab[-1],lab[:,0],lab[:,-1]]))
    outside=np.isin(lab,border[border>0])
    keep=~outside
    keep=ndi.binary_opening(keep,iterations=2)
    lab2,n2=ndi.label(keep)
    sizes=ndi.sum(keep,lab2,range(1,n2+1))
    big=np.argmax(sizes)+1
    mask=lab2==big
    # rescatar sigilos sueltos: componentes grandes centrados en la misma vertical
    cx_main=np.where(mask)[1].mean()
    for i in range(1,n2+1):
        if i==big or sizes[i-1]<0.01*sizes[big-1]: continue
        ys_,xs_=np.where(lab2==i)
        if abs(xs_.mean()-cx_main)<0.06*mask.shape[1] and (xs_.max()-xs_.min())<0.5*mask.shape[1]:
            mask|=(lab2==i)
    # rellenar huecos solo en la franja del arte (no en los sigilos)
    widths=mask.sum(1); artrows=widths>(0.35 if k=='sautekh' else 0.6)*widths.max()
    filled=ndi.binary_fill_holes(mask)
    holes=filled&~mask
    hl,hn=ndi.label(holes)
    for i in range(1,hn+1):
        ys=np.where((hl==i).any(1))[0]
        if artrows[ys].all(): mask|=(hl==i)
    mask=ndi.binary_closing(mask,iterations=3)
    if k=='nihilakh':
        ys_,xs_=np.where(mask&artrows[:,None]); TEMPLATE['art']=mask[ys_.min():ys_.max()+1, xs_.min():xs_.max()+1]
    if k=='sautekh':
        # corrección de perspectiva: escala horizontal por filas, distinta a cada lado del eje (x=270),
        # para que las dos mitades del sarcófago tengan el mismo ángulo
        AX=270.0
        ky=[346,640,1347]; sL=[135/166,263/265,118/110]; sR=[135/104,263/262,118/127]
        h_,w_=a.shape[:2]; yy_=np.arange(h_); xx_=np.arange(w_)
        fL=np.interp(yy_,ky,sL); fR=np.interp(yy_,ky,sR)
        fL[yy_<330]=1; fR[yy_<330]=1; fL[yy_>1360]=1; fR[yy_>1360]=1
        X=np.broadcast_to(xx_,(h_,w_)).astype(float); d=X-AX
        scale=np.where(d<0,fL[:,None],fR[:,None])
        srcx=AX+d/scale; srcy=np.broadcast_to(yy_[:,None],(h_,w_)).astype(float)
        a=np.stack([ndi.map_coordinates(a[...,c],[srcy,srcx],order=1,mode='nearest') for c in range(3)],-1)
        im=Image.fromarray(a.astype(np.uint8))
        mx=a.max(2); mn=a.min(2); sat=(mx-mn)/np.maximum(mx,1)
        # polígono simétrico del sarcófago (coords del recorte 556x1712) menos muescas
        poly=[(135,354),(405,354),(533,640),(388,1347),(152,1347),(7,640)]
        pm=Image.new('L',(mask.shape[1],mask.shape[0]),0); dr=ImageDraw.Draw(pm); dr.polygon(poly,fill=255)
        for cx,cy in [(40,888),(500,890)]: dr.ellipse([cx-50,cy-50,cx+50,cy+50],fill=0)
        art=np.asarray(pm)>0
        # muescas pequeñas: papel puro pegado al borde del polígono
        pure=(mx>205)&(sat<0.10)&art
        pure[:420]=False  # la niebla superior es casi blanca: no tocar
        pl,pn=ndi.label(pure); edge=ndi.binary_dilation(~art,iterations=4)
        touch=np.unique(pl[edge&pure]); notch=np.zeros_like(art)
        for i in touch[touch>0]:
            yy,xx=np.where(pl==i)
            if len(yy)<4000 and (xx.max()-xx.min())<80 and (yy.max()-yy.min())<80: notch|=(pl==i)
        notch=ndi.binary_dilation(notch,iterations=2)
        art&=~notch
        # muescas pequeñas del lado derecho (papel en sombra): detectar en una banda de 12 px junto al borde
        band=art&~ndi.binary_erosion(art,iterations=12); band[:480]=False; band[820:]=False
        band&=(np.arange(art.shape[1])[None,:]>430)
        cand=band&(mx>135)&(sat<0.14); cl,cn=ndi.label(cand)
        for i in range(1,cn+1):
            yy,xx=np.where(cl==i)
            if len(yy)>=60:
                cy,cx=yy.mean(),xx.max()-2; print('notch',int(cx),int(cy),len(yy))
                dr.ellipse([cx-17,cy-17,cx+17,cy+17],fill=0)
        art&=np.asarray(pm)>0
        r,g,bb=a[...,0],a[...,1],a[...,2]
        green=(g>r+12)&(g>bb+12)&(mx<190)
        green[:, :150]=False; green[:, 400:]=False
        green=ndi.binary_closing(green,iterations=2)
        sl,sn=ndi.label(green); ss=ndi.sum(green,sl,range(1,sn+1)); mask=art.copy()
        for i in range(1,sn+1):
            yy,xx=np.where(sl==i)
            if ss[i-1]>2500 and (yy.min()<300 or yy.min()>1320):
                mask|=(sl==i)
        # en la unión sigilo/arte solo se permite el vástago central
        stem=np.zeros_like(art); stem[:,257:289]=True
        mask[320:360]&=(art[320:360]|stem[320:360]); mask[1330:1370]&=(art[1330:1370]|stem[1330:1370])
        mask=ndi.binary_fill_holes(mask&~art)|art
        artrows=np.zeros(mask.shape[0],bool); artrows[330:1355]=True
    if k=='szarekhan':
        # franja de papel en sombra pegada al contorno
        rim=mask&~ndi.binary_erosion(mask,iterations=7)
        fringe=rim&(mx>140)&(sat<0.12)
        mask&=~ndi.binary_dilation(fringe,iterations=1)
        mask=ndi.binary_opening(mask,iterations=1)
    # vaciar papel dentro de los sigilos (fuera de la franja del arte)
    paperish=(mx>175)&(sat<0.16)
    mask&=~(paperish&~artrows[:,None])
    # recorte al bbox de la máscara
    ys,xs=np.where(mask); y0,y1,x0,x1=ys.min(),ys.max(),xs.min(),xs.max()
    im=im.crop((x0,y0,x1+1,y1+1)); mask=mask[y0:y1+1,x0:x1+1]
    alpha=Image.fromarray((mask*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.2))
    rgba=im.convert('RGBA'); rgba.putalpha(alpha)
    H=1600; rgba=rgba.resize((int(rgba.width*H/rgba.height),H),Image.LANCZOS)
    Wc,Hc=552,1600; canvas=Image.new('RGBA',(Wc,Hc),(0,0,0,0)); canvas.alpha_composite(rgba,((Wc-rgba.width)//2,(Hc-rgba.height)//2)); canvas.save(f'{D}{k}.webp',quality=88,method=6)
    print(k,rgba.size)
    bg=Image.new('RGBA',rgba.size,(0,0,0,255)); bg.alpha_composite(rgba); sheet.append(bg.resize((rgba.width*600//H,600)))
W=sum(s.width for s in sheet)+10*len(sheet); out=Image.new('RGB',(W,600),'black'); x=0
for s in sheet: out.paste(s,(x,0)); x+=s.width+10
out.save(f'{S}/sheet3.jpg',quality=85)
