# Handoff — Proyecto web-itec (actualizado)

**Fecha:** 2026-08-22 · **Proyecto:** `web-itec` (`/mnt/work/development/projects/web-itec`)
**Reemplaza al handoff del 2026-07-24** (overhaul iTec). Este cubre todo lo posterior: versiones v3/v4/v5, landing Ada Byron y publicación en GitHub.

---

## 1. Estado del proyecto

El repo contiene **varias iteraciones de landing coexistiendo** (ninguna versión vieja fue borrada, por pedido explícito del usuario):

| Carpeta | Qué es | Estado |
|---|---|---|
| `site/` + `src/` + `build.mjs` | Overhaul original multipágina con Tailwind v4 compilado (sesión 07-24) | Pausado: faltan las 15 páginas internas y Fase 4 QA |
| `site-v3/` | Intento editorial minimalista; se le aplicó una sesión Impeccable live (colorize del hero-box → variante 2 barra lateral acento, luego carbonize) | Congelada |
| `site-v4/` | Intento dark-tech; el usuario la calificó de "espantosa", se limpió de AI slop (gradientes decorativos) según estándares Impeccable | Congelada |
| `site-v5-imp/` | Rebuild desde cero inspirado en Minerva.edu / 42 Network: sistema editorial-tech, assets locales, Zen Dots self-hosted, border-radius 10px en imágenes y contenedores | La más avanzada para iTec; revisada por colegas vía túnel Cloudflare (:8085) |
| `v5-2/` | Copia idéntica de `site-v5-imp/` (mismo style.css y title) — copia de trabajo sin cambios propios | Copia |
| `ada/` | **Landing independiente del Colegio Secundario Tecnológico Ada Byron** | Completada y publicada en GitHub |

## 2. Landing Ada Byron (`ada/`) — lo más reciente

Identidad visual cálida tradicional, deliberadamente distinta a la de iTec:

- **Colores:** primario burdeos `#642725`, fondo crema `#fff8e2`.
- **Fuente:** Satoshi (Fontshare), self-hosted WOFF2 en 5 pesos (300–900) → `ada/fonts/`.
- **Hero:** foto full-width con overlay degradado teñido del primario.
- **Sección Instagram (#instagram)** entre galería y contacto, con embed oficial de Instagram (blockquote + `embed.js`) de 4 Reels: `DbD0BzNEjsn`, `Da3CvosgGkp`, `DaSeU-ihLFR`, `DXrkKiokWUn`. Ícono ▶ para reels. Se eliminaron `.insta-card` / `.insta-card-icon` (reemplazados por los embeds).
- **Textos** de propuesta, admisión, galería e Instagram: color negro, bold, `text-align: justify`.
- **Admisión:** texto actualizado ("contamos con 1°, 2° y 3° año. A partir del ciclo lectivo 2027 abrimos 4° año. Agendá tu entrevista…") y su highlight-box sin borde ni fondo (`.highlight-box--clean`, transparente).
- Propuesta: cards sin numeración `01/02/03`.

## 3. Git / GitHub

- Repo creado y pusheado: **https://github.com/pablokan/web-itec** (público), rama `master` tracking `origin/master`. Un solo commit inicial (`f7d24a9`).
- `.gitignore`: `node_modules/` y `package-lock.json`.
- ⚠️ Warning de GitHub: `site-v3/assets/video/video-testi-software.mp4` pesa 53MB (>50 recomendado). Si molesta → git-lfs o quitarlo del repo.
- Servidor local en `:8086` con túnel Cloudflare para preview.

## 4. Decisiones y preferencias del usuario (no negociables)

- iTec v5: hover de careers suave — rojo pálido `#f3b8b9` (no el rojo fuerte).
- Ninguna imagen cortada: respetar aspect-ratio exacto.
- Grillas ordenadas y uniformes (el bento asimétrico fue rechazado).
- Assets 100% locales: **no hotlink** al CDN de Google (URLs firmadas expiran — Engram #40).
- Server con `uv`, procesos background con `setsid ... & disown` + fds redirigidos (si no, el shell tool cuelga y mata el proceso).
- Nunca pedir ni aceptar passwords.
- Versiones viejas: no tocar, cada intento vive en su carpeta.

## 5. Gotchas técnicos (del handoff anterior, siguen vigentes)

- **Tailwind v4**: `@apply` de clase custom dentro de otra falla — componer en HTML.
- **Drive downloads**: POST a `drive.usercontent.google.com/download` con `id + export=download + confirm=t + uuid` (uuid de un solo uso).
- **video-campus-virtual**: MPEG-2 124MB ya transcodeado a H.264 14MB (el actual es el bueno).
- **YouTube embed headless**: "player configuration error" en Chrome headless es solo del headless; en navegador real funciona.
- **Calendario Académico** es imagen estática; horarios DS 1-3 año siguen pendientes (embebidos restringidos).
- **Conflicto de contenido sin resolver**: "más de treinta años" vs rebrand "40 años".
- Instagram: los embeds oficiales requieren el script `embed.js`; los shortcodes de reel van como blockquote con `/embed/captioned/`.

## 6. Cómo correr

```bash
cd /mnt/work/development/projects/web-itec
# iTec v5 (la vigente):
python -m http.server <puerto> --directory site-v5-imp
# Ada Byron:
python -m http.server <puerto> --directory ada
```

Túnel público: `cloudflared tunnel --url http://localhost:<puerto> --no-autoupdate` (log a archivo, con setsid/disown).

Verificación visual: Chrome headless (`--headless=new --screenshot=... --window-size=1440,N`) + Read del PNG. Playwright 1.61 vía npx.

## 7. Siguientes pasos posibles

1. Definir qué landing "gana" para iTec (v5-imp es la favorita) y decidir si se continúa el plan multipágina de `site/` o se descarta.
2. Resolver el conflicto "treinta vs cuarenta años".
3. Horarios DS pendientes del cliente.
4. Si el repo crece: evaluar git-lfs para el video de 53MB.

## 8. Skills sugeridas

- **`impeccable` / `web-design-engineer`** — para seguir puliendo cualquiera de las landings.
- **`code-review`** — revisar diff antes de commits grandes.
- **`context7-mcp`** — docs de Tailwind v4 si se retoma `site/`.

## 9. Memoria persistente (Engram)

- Sesión origen overhaul: `web-itec-overhaul-2026-07-24` (obs #40: pipeline URLs firmadas Google Sites).
- Ejecutar `mem_context` / `mem_search` (proyecto `web-itec`) al retomar.

## 10. Checklist de migración a otra instalación/distro

El nuevo entorno accede a **esta misma carpeta** (`/mnt/work/development/projects/web-itec`) — no requiere clonar el repo. Este checklist se completó el 2026-08-22 antes de abandonar la distro anterior.

1. **Commit + push del estado final** para dejar `origin` sincronizado (higiene, no bloqueante — la carpeta local es compartida). ✅ hecho 2026-08-22.
2. **Instalar skills** en el nuevo opencode: `impeccable`, y las de Matt Pocock: `grill-with-docs`, `wayfinder`, `ponytail`, `code-review`, `implement`. Después correr **`setup-matt-pocock-skills` una vez** (configura issue tracker, labels de triage y layout de docs de dominio — sin eso wayfinder/grill-with-docs/to-tickets no tienen dónde escribir).
3. **Reconfigurar MCP context7** en la nueva instalación.
4. **Recrear server local + túnel Cloudflare** — son efímeros, no sobreviven el cambio (comandos en sección 6).
5. **Build Tailwind solo si se retoma `site/`:** es la única versión con paso de build (`build.mjs` + `npm run build:css` compilan `src/input.css` → `site/assets/css/main.css`). Las demás (v3, v4, v5-imp, ada) son HTML/CSS estático puro, cero build. `node_modules/` ya está en la carpeta compartida; si el build falla por versión distinta de Node, correr `npm install`.
