# Extrae los drones del catálogo X901-94 (página del códex sobre papel blanco) a WebP con alfa.
from PIL import Image, ImageOps, ImageFilter
import numpy as np
from scipy import ndimage as ndi
import os
SRC='src/assets/tau-src/page-drones.jpeg'; OUT='public/images/tau/drones/'; os.makedirs(OUT,exist_ok=True)
NAMES=[['dron-combate','dron-telemetrico','dron-reconocimiento'],['dron-artillero','dron-sigilo','dron-defensa'],
       ['dron-guardian','dron-antigravedad','dron-acelerador'],['dron-artillero-defensa','torreta-apoyo']]
a=np.asarray(ImageOps.exif_transpose(Image.open(SRC)).convert('RGB')).astype(float)
x0,y0=300,40; a=a[y0:1600,x0:1090]
mx=a.max(2); mn=a.min(2); sat=(mx-mn)/np.maximum(mx,1)
# iluminación no uniforme (sombra de encuadernación): papel relativo al brillo local
bg=ndi.gaussian_filter(ndi.grey_dilation(mx,size=(45,45)),25)
paper=(mx>0.82*bg)&(sat<0.28)
obj=ndi.binary_opening(~paper,iterations=2); obj=ndi.binary_closing(obj,iterations=6)
lab,n=ndi.label(obj); sizes=ndi.sum(obj,lab,range(1,n+1))
comps=[]
for i,sz in enumerate(sizes,1):
    if sz<6000: continue
    ys,xs=np.where(lab==i); comps.append((i,xs.min(),xs.max(),ys.min(),ys.max(),ys.mean(),xs.mean(),int(sz)))
# filas por centroide y
comps.sort(key=lambda c:c[5]); rows=[]; 
for c in comps:
    if rows and abs(c[5]-rows[-1][-1][5])<160: rows[-1].append(c)
    else: rows.append([c])
print('filas',[len(r) for r in rows])
for r,names in zip(rows,NAMES):
    r.sort(key=lambda c:c[6])
    for c,name in zip(r,names):
        i,xa,xb,ya,yb=c[:5]; m=ndi.binary_fill_holes(lab[ya:yb+1,xa:xb+1]==i)
        sub=a[ya:yb+1,xa:xb+1]
        alpha=Image.fromarray((m*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.8))
        im=Image.fromarray(sub.astype(np.uint8)).convert('RGBA'); im.putalpha(alpha); im.save(OUT+name+'.webp',quality=86,method=6)
        print(name,im.size,c[7])
