# AGENTS.md

Landing estática de iTec Río Cuarto.

**Leer primero:** [`docs/handoff.md`](docs/handoff.md) — estado completo del proyecto, decisiones no negociables, gotchas técnicos y cómo correr todo.

## Estructura

| Carpeta | Qué es |
|---|---|
| `landing/` | Landing iTec vigente (editorial-tech, Zen Dots, assets locales, border-radius 10px). Único contenido del repo |
| `docs/content/*.md` | Contenido extraído del Google Site original (fuente de verdad) |
| `docs/` | Handoff, TODO y config de skills (`docs/agents/`) |

**Proyecto hermano:** Secundario Tecnológico Ada Byron vive en `../web-ada-byron` (repo `pablokan/web-ada-byron`) — identidad propia burdeos `#642725` / crema `#fff8e2` / Satoshi self-hosted. Extraído el 2026-08-22.

## Servidor y túnel

```bash
python -m http.server 8080 --directory landing
cloudflared tunnel --url http://localhost:8080 --no-autoupdate
```

Apagar: `pkill -f cloudflared` y `pkill -f "http.server 8080"`.

## Reglas clave (detalle en handoff §4–§5)

- Assets 100% locales — **no hotlink** al CDN de Google (URLs firmadas expiran).
- Ninguna imagen cortada: respetar aspect-ratio exacto. Grillas simétricas y uniformes.
- Nunca pedir ni aceptar passwords.

## Agent skills

### Issue tracker

GitHub Issues in `pablokan/web-itec` (via `gh` CLI). See `docs/agents/issue-tracker.md`.

### Triage labels

Five canonical roles with default label strings (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout (`CONTEXT.md` + `docs/adr/` at repo root). See `docs/agents/domain.md`.
