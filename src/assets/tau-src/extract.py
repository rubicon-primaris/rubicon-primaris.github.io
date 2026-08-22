# Extrae las exoarmaduras de las páginas del códex T'au (fotos) a WebP con alfa.
# Cada unidad: página, caja de recorte y límites x por tramos de y (coords de página)
# para separarla de las unidades vecinas que se solapan en la ilustración.
# Uso: python3 src/assets/tau-src/extract.py  (desde la raíz del repo)
from PIL import Image, ImageOps, ImageFilter
import numpy as np
from scipy import ndimage as ndi
import os
SRC='src/assets/tau-src/'; OUT='public/images/tau/units/'; os.makedirs(OUT,exist_ok=True)
PAGES={'p36a':'page-36a.jpeg','p36b':'page-36b.jpeg','p36c':'page-36c.jpeg','p37':'page-37.jpeg'}
# limits: lista de (y0,y1,xmin,xmax)
UNITS={
 'guerrero-fuego':   ('p36a',(310,600,670,1460),[(0,770,320,575),(770,860,320,650),(860,1060,320,600),(1060,9999,320,640)],['redband']),
 'xv25-sigilo':      ('p36a',(590,450,1105,1470),[(0,560,595,1000),(560,650,595,1045),(650,760,660,1045),(760,1060,660,1100),(1060,9999,625,1100)],[]),
 'xv8-crisis':       ('p36c',(330,450,955,1595),[(0,640,345,805),(640,790,345,825),(790,960,345,840),(960,1300,400,800),(1300,9999,380,775)],[]),
 'xv85-sentenciador':('p36b',(470,60,1175,1600),[(0,640,480,1175),(640,1060,548,1175),(1060,9999,520,1175)],[]),
 'xv88-apocalipsis': ('p37',(60,580,615,1555),[(0,750,60,405),(750,1000,60,410),(1000,9999,60,380)],[]),
 'xv104-cataclismo': ('p37',(395,50,1200,1585),[(0,600,395,1200),(600,760,420,1200),(760,1300,465,1200),(1300,9999,415,1200)],['xv02box']),
 'xv02-piloto':      ('p37',(795,1110,965,1575),[(0,1230,795,905),(1230,1310,795,952),(1310,9999,795,900)],['olive']),
}
def load(k): return np.asarray(ImageOps.exif_transpose(Image.open(SRC+PAGES[k])).convert('RGB')).astype(float)
def filt(name,a,x0,y0):
    r,g,b=a[...,0],a[...,1],a[...,2]; mx=a.max(2); mn=a.min(2); sat=(mx-mn)/np.maximum(mx,1)
    H,W=a.shape[:2]; Y=np.arange(H)[:,None]+y0; X=np.arange(W)[None,:]+x0
    if name=='redband': return (X>=590)&(Y>=690)&(Y<=880)&(r>g+35)&(b<100)
    if name=='olive': return (g>=r-10)&(b<g-16)&(mx<200)&(mx>40)
    if name=='xv02box':
        box=(X>=800)&(X<=960)&(Y>=1085)&(Y<=1565)
        return box&(((sat<0.2)&(mx>90))|(X<910))
    return np.zeros((H,W),bool)
pages={k:load(k) for k in PAGES}
for name,(pg,(x0,y0,x1,y1),limits,filters) in UNITS.items():
    a=pages[pg][y0:y1,x0:x1]; H,W=a.shape[:2]
    mx=a.max(2); mn=a.min(2); sat=(mx-mn)/np.maximum(mx,1)
    paper=(mx>150)&(sat<0.25)
    GREY={'guerrero-fuego':125,'xv25-sigilo':125,'xv8-crisis':125,'xv88-apocalipsis':105,'xv104-cataclismo':125}   # papel en sombra (gris neutro); no en unidades grises
    if name in GREY: paper|=(sat<0.06)&(mx>GREY[name])
    Y=np.arange(H)[:,None]+y0; X=np.arange(W)[None,:]+x0
    allowed=np.zeros((H,W),bool)
    for (ya,yb,xa,xb) in limits: allowed|=(Y>=ya)&(Y<yb)&(X>=xa)&(X<=xb)
    paper|=~allowed
    for f in filters: paper|=filt(f,a,x0,y0)
    lab,n=ndi.label(paper); border=np.unique(np.concatenate([lab[0],lab[-1],lab[:,0],lab[:,-1]]))
    outside=np.isin(lab,border[border>0])
    # papel encerrado (entre piernas, bajo brazos): regiones de papel grandes con el color del papel exterior
    page=a[outside&allowed].mean(0) if (outside&allowed).any() else a[outside].mean(0)
    for i in range(1,n+1):
        comp=lab==i
        if outside[comp].any(): continue
        sz=comp.sum()
        if sz<1500: continue
        col=a[comp].mean(0)
        csat=sat[comp].mean()
        if np.abs(col-page).max()<28 or (csat<0.08 and col.max()>120): outside|=comp
    keep=~outside; keep=ndi.binary_opening(keep,iterations=2)
    l2,n2=ndi.label(keep); sizes=ndi.sum(keep,l2,range(1,n2+1)); big=sizes.max()
    mask=np.zeros_like(keep)
    for i,sz in enumerate(sizes,1):
        if sz>=0.01*big: mask|=(l2==i)   # cuerpo + piezas grandes desconectadas (pods, puños)
    # solo huecos pequeños (remaches, rendijas); los grandes (entre piernas/brazos) son papel
    filled=ndi.binary_fill_holes(mask); holes=filled&~mask; hl,hn=ndi.label(holes)
    for i,sz in enumerate(ndi.sum(holes,hl,range(1,hn+1)),1):
        if sz<=900: mask|=(hl==i)
    mask=ndi.binary_closing(mask,iterations=2)
    ys,xs=np.where(mask); mask=mask[ys.min():ys.max()+1,xs.min():xs.max()+1]; a=a[ys.min():ys.max()+1,xs.min():xs.max()+1]
    alpha=Image.fromarray((mask*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.8))
    im=Image.fromarray(a.astype(np.uint8)).convert('RGBA'); im.putalpha(alpha)
    im.save(OUT+name+'.webp',quality=88,method=6); print(name,im.size)
