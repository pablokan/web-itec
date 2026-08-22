# AGENTS.md

Landings estáticas de iTec Río Cuarto y del Colegio Secundario Tecnológico Ada Byron.

**Leer primero:** [`web-itec-handoff.md`](web-itec-handoff.md) — estado completo del proyecto, decisiones no negociables, gotchas técnicos y cómo correr todo.

## Estructura

| Carpeta | Qué es |
|---|---|
| `ada/` | Landing Ada Byron (vigente) — burdeos `#642725`, crema `#fff8e2`, Satoshi self-hosted |
| `site-v5-imp/` | Landing iTec vigente (Zen Dots, editorial-tech) |
| `v5-2/` | Copia idéntica de `site-v5-imp/` — no editar por separado |
| `site-v3/`, `site-v4/` | Intentos anteriores congelados — **no tocar** |
| `site/` + `src/` + `build.mjs` | Overhaul multipágina Tailwind v4 — único con build (`npm run build:css`) |
| `content/*.md` | Contenido extraído del Google Site original (fuente de verdad) |

## Servidor y túnel

```bash
setsid uv run --no-project python -m http.server 8080 --directory site-v5-imp </dev/null >/tmp/server.log 2>&1 & disown
setsid cloudflared tunnel --url http://localhost:8080 --no-autoupdate </dev/null >/tmp/cloudflared.log 2>&1 & disown
```

Apagar: `pkill -f cloudflared` y `pkill -f "http.server 8080"`.

## Reglas clave (detalle en handoff §4–§5)

- Assets 100% locales — **no hotlink** al CDN de Google (URLs firmadas expiran).
- Ninguna imagen cortada: respetar aspect-ratio exacto. Grillas simétricas y uniformes.
- No modificar versiones viejas; cada intento vive en su carpeta.
- Nunca pedir ni aceptar passwords.
