# Rubicón Primaris — convenciones de uso

Design system oscuro (temática Warhammer / Horus Heresy). **No requiere provider ni wrapper**: los componentes funcionan sueltos, pero asumen fondo oscuro — coloca todo sobre `bg-surface` (negro) o `bg-surface-raised`, nunca sobre blanco.

## Idioma de estilo: clases utilitarias de Tailwind

Estiliza tu propio layout con estas familias (todas existen en `styles.css`):

| Familia | Clases reales |
|---|---|
| Fondos | `bg-surface` (#000, fondo de página), `bg-surface-raised` (#161513, paneles), `bg-surface-overlay` (#252422), `bg-primary` (#252422), `bg-secondary` (#eb5e28, acento naranja) |
| Texto | `text-white` (principal), `text-ink-muted` (secundario), `text-ink-faint` (pies/deshabilitado) |
| Titulares | `font-bold uppercase tracking-wide` (secciones), `tracking-widest` (títulos de página) |
| Bordes | `border-white/10` (paneles), `border-white/20`–`/30` (controles) |

## Paletas de legión

18 paletas nombradas por numeral romano en minúsculas, escalas `100`–`900` (la `i` también tiene `50`): `i`, `iii`, `iv`, `v`, `vi`, `vii`, `viii`, `ix`, `x`, `xii`, `xiii`, `xiv`, `xv`, `xvi`, `xvii`, `xviii`, `xix`, `xx`. Usables como `bg-<legion>-<escala>` (p. ej. `bg-xiii-500`) y `border-t-<legion>-500`.

Mapa numeral → legión: i Dark Angels · iii Emperor's Children · iv Iron Warriors · v White Scars · vi Space Wolves · vii Imperial Fists · viii Night Lords · ix Blood Angels · x Iron Hands · xii World Eaters · xiii Ultramarines · xiv Death Guard · xv Thousand Sons · xvi Sons of Horus · xvii Word Bearers · xviii Salamanders · xix Raven Guard · xx Alpha Legion. (Las legiones ii y xi no existen — no tienen paleta.)

Los props `legion` de `Badge`, `Card` y `LegionCard` aceptan estos mismos numerales. Con `v` y `vii` (colores claros) `Badge` ya pone el texto en negro automáticamente.

## Dónde está la verdad

Lee `styles.css` (y su import `_ds_bundle.css`) antes de inventar estilos — ahí están todas las clases compiladas. Cada componente tiene su contrato en `components/ds/<Name>/<Name>.d.ts` y ejemplos en `<Name>.prompt.md`.

## Ejemplo idiomático

```jsx
import { Card, Badge, Button } from 'anira';

<div className="min-h-screen bg-surface p-8">
  <h1 className="text-4xl font-bold uppercase tracking-widest text-white">Legiones</h1>
  <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
    <Card title="Ultramarines" legion="xiii">
      <p className="text-ink-muted">La XIII Legión, señores de Ultramar.</p>
      <div className="mt-4 flex items-center gap-3">
        <Badge legion="xiii">Leales</Badge>
        <Button size="sm" variant="secondary">Ver códice</Button>
      </div>
    </Card>
  </div>
</div>
```

`Button`: `variant` = `primary` (naranja) | `secondary` (oscuro) | `ghost` | `danger` (rojo); `size` = `sm` | `md` | `lg`; `disabled`.
