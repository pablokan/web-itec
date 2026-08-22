# Handoff — Proyecto web-itec (actualizado)

**Fecha:** 2026-08-22 · **Proyecto:** `web-itec` (`/mnt/work/development/projects/web-itec`)
**Reemplaza al handoff del 2026-07-24 y 2026-08-22 (versiones múltiples).** El 2026-08-22 se hizo limpieza mayor y extracción de Ada Byron.

---

## 1. Estado del proyecto

Repo reducido a **una sola landing canónica**:

| Carpeta | Qué es | Estado |
|---|---|---|
| `landing/` | Landing iTec vigente (ex `v5-2`, copia de `site-v5-imp`). Editorial-tech inspirada en Minerva.edu / 42 Network: assets locales, Zen Dots self-hosted, border-radius 10px | **Vigente** — revisiones vía túnel Cloudflare |
| `docs/content/` | Markdowns fuente del Google Site original (fuente de verdad textual: inicio, carreras, estudiantes, etc.) | Referencia |
| `docs/agents/` | Config de skills (issue-tracker, triage, domain) | Tooling |
| `docs/handoff.md`, `docs/TODO.md` | Documentación del proyecto | — |

Eliminado el 2026-08-22: `site/` + `src/` + `build.mjs` (overhaul multipágina Tailwind v4 sin terminar), `site-v3/`, `site-v4/`, `site-v5-imp/` (copia original de `v5-2`). Motivo: ruido en primer nivel, pipeline muerto sin output.

**Proyecto hermano:** `../web-ada-byron` (repo `pablokan/web-ada-byron`) — landing independiente del Colegio Secundario Tecnológico Ada Byron. Extraída el 2026-08-22 con `content/adabyron-*.md`. Identidad burdeos `#642725`/crema `#fff8e2`/Satoshi (ver `web-ada-byron/DESIGN.md`). Publicación pendiente (`gh auth` no disponible en sesión; push manual).

## 2. Landing Ada Byron — nota de extracción

Ya no vive en este repo. Referencia histórica (lo que se movió):

- 5 markdowns `adabyron-*.md` → `web-ada-byron/content/`
- Identidad cálida tradicional deliberadamente distinta a iTec (burdeos/crema/Satoshi 300–900, hero overlay burdeos, Instagram embeds oficiales `embed.js` con 4 Reels, textos justificados, admisión 1°–3° + 4° en 2027).

Ver README y DESIGN/PRODUCT en `web-ada-byron/` para detalle.

## 3. Git / GitHub

- Repo: **https://github.com/pablokan/web-itec** (público), rama `master` tracking `origin/master`.
- `.gitignore`: solo bloque `impeccable-live` (repo 100% estático, sin `node_modules`).
- Stack 100% estático: `landing/` es HTML/CSS/JS puro, cero build.

## 4. Decisiones y preferencias del usuario (no negociables)

- iTec landing (`landing/`): hover de careers suave — rojo pálido `#f3b8b9` (no rojo fuerte).
- Ninguna imagen cortada: respetar aspect-ratio exacto.
- Grillas ordenadas y uniformes (bento asimétrico rechazado).
- Assets 100% locales: **no hotlink** al CDN de Google (URLs firmadas expiran — Engram #40).
- Server con procesos background `setsid ... & disown` + fds redirigidos (si no, el shell tool cuelga).
- Nunca pedir ni aceptar passwords.

## 5. Gotchas técnicos

- **Drive downloads**: POST a `drive.usercontent.google.com/download` con `id + export=download + confirm=t + uuid` (uuid de un solo uso).
- **video-campus-virtual**: MPEG-2 124MB ya transcodeado a H.264 14MB (el actual es el bueno, en `landing/video/`).
- **YouTube embed headless**: "player configuration error" en Chrome headless es solo del headless; en navegador real funciona.
- **Calendario Académico** es imagen estática; horarios DS 1-3 año siguen pendientes.
- **Conflicto de contenido sin resolver**: "más de treinta años" vs rebrand "40 años".
- Instagram Ada Byron: embeds oficiales requieren `embed.js`; shortcodes `/embed/captioned/` (ya no en este repo).

## 6. Cómo correr

```bash
cd /mnt/work/development/projects/web-itec
python -m http.server 8080 --directory landing

# Ada Byron (proyecto hermano)
python -m http.server 8080 --directory ../web-ada-byron
```

Túnel público: `cloudflared tunnel --url http://localhost:8080 --no-autoupdate` (log a archivo, con setsid/disown).

Verificación visual: Chrome headless (`--headless=new --screenshot=... --window-size=1440,N`) + Read del PNG.

## 7. Siguientes pasos posibles

1. Pulir `landing/` con `impeccable` (quedó pendiente un polish de 2026-08-22 sobre `src/` que murió; portar lo valioso a `landing/` si hace falta).
2. Resolver "treinta vs cuarenta años".
3. Horarios DS pendientes del cliente.

## 8. Skills sugeridas

- **`impeccable`** — para seguir puliendo la landing.
- **`code-review`** — revisar diff antes de commits grandes.

## 9. Memoria persistente (Engram)

- Sesión origen overhaul: `web-itec-overhaul-2026-07-24` (obs #40: pipeline URLs firmadas Google Sites).
- Ejecutar `mem_context` / `mem_search` (proyecto `web-itec`) al retomar.

## 10. Checklist de migración a otra instalación/distro

El nuevo entorno accede a **esta misma carpeta** (`/mnt/work/development/projects/web-itec`) — no requiere clonar el repo. Este checklist se completó el 2026-08-22 antes de abandonar la distro anterior.

1. **Commit + push del estado final** ✅ 2026-08-22 (ver commits de reestructuración).
2. **Instalar skills** en el nuevo opencode: `impeccable`, y las de Matt Pocock: `grill-with-docs`, `wayfinder`, `ponytail`, `code-review`, `implement`. Correr **`setup-matt-pocock-skills` una vez**.
3. **Reconfigurar MCP context7**.
4. **Recrear server local + túnel Cloudflare** — efímeros, comandos en sección 6.
5. **Sin build:** `landing/` es estático puro, sin `npm run build:css`.
