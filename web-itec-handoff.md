# Handoff — Overhaul sitio web iTec Río Cuarto

**Fecha:** 2026-07-24 · **Proyecto:** `web-itec` (`/mnt/work/development/projects/web-itec`)
**Sesión origen:** `web-itec-overhaul-2026-07-24`

---

## 1. Qué se está haciendo

Rediseño completo (overhaul) del sitio institucional de iTec Río Cuarto, actualmente en Google Sites (público: `https://sites.google.com/itecriocuarto.org.ar/www/inicio`). Brief original y reglas de ejecución: **`TODO.md`** (3 fases: extraer contenido / anti-slop / estética tech SaaS; output HTML5 semántico + Tailwind compilado, multipágina, assets locales).

## 2. Estado actual — dónde se quedó todo

**Completado:**
- **Fase 0 — Extracción:** 18/18 páginas crawleadas e inventariadas en `content/*.md` (fuente de verdad). Todos los assets descargados localmente: 49 imágenes, 6 videos, 7 PDFs → `site/assets/`. Inventario y mapa de assets: **`content/_assets-manifest.md`** (incluye issues conocidos del sitio original). IDs de embebidos Drive/Forms/YouTube: **`content/_embed-ids.md`**.
- **Fase 1 — Setup:** Node + Tailwind v4 compilado (`@tailwindcss/cli`), fuentes Geist/Geist Mono self-hosted, mini-generador estático `build.mjs` (partials + íconos Phosphor inline + rutas `{{root}}`). Scripts npm: `build:css`, `watch:css`.
- **Fase 2 — Design system:** `src/input.css` — dark `oklch`, un solo acento (**rojo iTec #D72F32, APROBADO por el usuario**), cards `rounded-2xl`, botones pill, `.card-hover` con hover rojo grueso (aprobado).
- **Fase 3 (parcial) — Landing v2:** `src/pages/index.html` → `site/index.html`. El usuario la revisó y pidió 6 cambios que **ya fueron aplicados** (hero con imagen "40 años" recoloreada `site/assets/img/logo-40-anios-dark.png`, carreras en grilla 2×2 uniforme sin recortes, videos distribuidos, hover rojo).

**Bloqueo actual / siguiente paso inmediato:**
El usuario está esperando el **feedback de un colega** sobre la landing publicada temporalmente vía túnel de Cloudflare:
- URL pública (efímera): `https://inter-recruiting-acquisitions-containing.trycloudflare.com`
- Cuando llegue el feedback: aplicar ajustes a la landing O, si aprueba, **construir las 15 páginas internas restantes** con el mismo sistema (índices + internas de Carreras ×5, Ada Byron ×5, Estudiantes ×4, Trayectos, Portal de Trabajo, iTec Labs). El contenido verbatim de cada una ya está en `content/`.
- Después: **Fase 4 — QA** (checklist contenido-vs-inventario, responsive, links, a11y, build minificado).

## 3. Cómo correr todo

```bash
cd /mnt/work/development/projects/web-itec
node build.mjs                 # genera site/**/*.html desde src/pages + partials
npm run build:css              # Tailwind → site/assets/css/main.css (minificado)
```

Server local (usar **uv, NO python directo** — pedido explícito del usuario) y túnel:
```bash
setsid uv run --no-project python -m http.server 8080 --directory site </dev/null >/tmp/itec-server.log 2>&1 & disown
setsid /tmp/opencode/cloudflared tunnel --url http://localhost:8080 --no-autoupdate </dev/null >/tmp/cloudflared.log 2>&1 & disown
```
Apagar: `pkill -f cloudflared` y `pkill -f "http.server 8080"`.

Verificación visual: Chrome headless (`google-chrome-stable --headless=new --screenshot=... --window-size=1440,N file://...` o contra localhost) + leer el PNG con la tool Read. Playwright 1.61 también disponible vía npx.

## 4. Decisiones y preferencias del usuario (no negociables)

- Acento único: **rojo iTec** (`--color-brand-500` en `src/input.css`).
- Hover en cajas-enlace: borde gris `white/20` en reposo → **rojo iTec con grosor doble** al hover (borde + anillo inset).
- **Ninguna imagen puede estar cortada**: usar aspect-ratio exacto de cada imagen (ej. `aspect-[1280/873]`).
- Distribuciones **ordenadas y uniformes** (grillas simétricas; el bento asimétrico fue rechazado).
- Videos **distribuidos** por la landing, no agrupados en una sección.
- **Nunca pedir ni aceptar passwords** (el usuario ofreció la suya para el Google Site; fue rechazada — acceso solo por URL pública).
- Assets 100% locales: **no hotlink** al CDN de Google (sus URLs firmadas expiran — ver memoria Engram #40).
- Server con `uv` (Astral), procesos en background con `setsid ... & disown` + fds redirigidos (si no, el shell tool cuelga y mata el proceso).

## 5. Gotchas técnicas (ahorrate re-descubrirlas)

- **Tailwind v4**: `@apply` de una clase custom dentro de otra falla ("Cannot apply unknown utility class") — componer en HTML (`class="btn btn-primary"`).
- **Drive downloads**: archivos grandes disparan "virus scan warning" → POST a `drive.usercontent.google.com/download` con `id + export=download + confirm=t + uuid` (uuid de un solo uso, se extrae del HTML del warning).
- **video-campus-virtual**: el original era MPEG-2 de 124MB → ya transcodeado a H.264 14MB con ffmpeg (el archivo actual es el bueno).
- **YouTube embed (PCC, `pO55hU8AXj4`)**: en Chrome headless muestra "player configuration error" — es solo el headless, en navegador real funciona.
- **Calendario Académico** es una imagen estática (`calendario-academico-2026.png`), no un iframe. **Horarios DS 1-3 año** llegaron vacíos (embebidos restringidos) — estructura preparada, falta que el cliente provea esos horarios.
- **Conflicto de contenido**: "Quiénes somos" dice verbatim "más de treinta años", pero el rebrand actual es "40 años". Se preservó el texto original; pendiente decisión del usuario.

## 6. Suggested skills

- **`web-design-engineer`** — modo OVERHAUL; es el skill rector de esta tarea (checkpoints v0, design system, critique antes de entregar). Invocarlo al retomar el diseño de las páginas internas.
- **`design-taste-frontend`** — reglas anti-slop ya aplicadas (un acento, sin gradientes púrpuras, Geist en vez de Inter, disciplina de eyebrows); seguir aplicándolo en las 15 páginas restantes.
- **`code-review`** — al finalizar la Fase 3, para revisar el diff completo antes del QA final.
- **`diagnosing-bugs`** — si aparecen problemas de rendering/assets en QA.
- **`context7-mcp`** — para documentación actualizada de Tailwind CSS v4 si surgen dudas de sintaxis (`@theme`, `@utility`).

## 7. Memoria persistente (Engram)

- Sesión: `web-itec-overhaul-2026-07-24`. Observación #40: pipeline same-session para URLs firmadas de Google Sites.
- Ejecutar `mem_context` / `mem_search` (proyecto `web-itec`) al retomar.

## 8. Redacciones

- URL de edición del Google Site con `resourcekey`: omitida a propósito (está en `TODO.md` si se necesita).
- Sin credenciales de ningún tipo en esta sesión (política: nunca aceptarlas).
