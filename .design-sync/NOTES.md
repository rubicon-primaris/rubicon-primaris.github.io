# Notas de sincronización — Rubicón Primaris

- Repo de sitio Astro, no paquete npm: no hay `dist/` ni `main` en package.json. El conversor necesita SIEMPRE `--entry ./src/components/ds/index.js` (modo synth-entry); sin él falla buscando `node_modules/anira`.
- Antes del conversor hay que regenerar el CSS con `cfg.buildCmd` (Tailwind CLI compila `tailwind.config.mjs` → `.design-sync/.cache/ds.css`). El content glob de Tailwind incluye `.design-sync/previews/**/*.tsx`, así que las clases usadas en previews existen — si un preview nuevo añade clases, recompilar el CSS antes de rebuild.
- Los componentes son `.jsx` sin TypeScript; los `.d.ts` se sintetizan del JSDoc — mantener los JSDoc de `src/components/ds/*.jsx` al día.
- Los previews de `LegionCard` usan imágenes del sitio desplegado (`https://rubicon-primaris.github.io/images/legions/*.webp`). Estados con `image={null}` (legión perdida) NO se autoran: dependen del asset relativo `images/bg-chaos.jpg` del sitio y renderizan imagen rota fuera de él.
- `packageManager: pnpm@8` en package.json es inválido para pnpm 10 (warning inofensivo "Cannot switch to pnpm@8").
- Playwright: caché local con chromium-1217 → playwright@1.59.0 (instalado en `.ds-sync/`).
- Known render warns: ninguno pendiente.

## Re-sync risks

- Las imágenes remotas de los previews de LegionCard dependen de que el sitio de GitHub Pages siga desplegado y con las mismas rutas; si cambian, los previews renderizan rotos sin que el diff lo detecte.
- El CSS compilado depende de los content globs: clases usadas solo en el sitio Astro pueden desaparecer del bundle si se borran del código del sitio aunque el DS no cambie.
- `conventions.md` enumera las paletas de legión y los colores semánticos de `tailwind.config.mjs` — si se renombran tokens allí, revalidar el header (grep contra el CSS compilado).
