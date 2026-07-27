# Escaneo de IDs de embebidos — todo el sitio

Método: `curl -sL <URL> | grep -oE '<patrón>' | sort -u` sobre el HTML servido (sin ejecutar JS).
Patrones buscados: Drive (`drive.google.com/file/d/`), Forms (`docs.google.com/forms/d/e/`, `forms.gle/`), Calendar (`calendar.google.com`), Sheets (`docs.google.com/spreadsheets/d/`), YouTube (`youtube.com/embed/`, `youtu.be/`).
Fecha del escaneo: 2026-07-24.

NOTA: el Form global `1FAIpQLScjhSUcMVsUobJ4uUEUr3kAA7-VBLYUTbhhV01EtWf8Lcz3xw` (botón "Quiero + Info" de la barra superior "Ingreso Agosto") aparece en TODAS las páginas — es chrome global, no contenido de página. Documentado en `_global.md`.

---

## https://sites.google.com/itecriocuarto.org.ar/www/inicio
- docs.google.com/forms/d/e/1FAIpQLScjhSUcMVsUobJ4uUEUr3kAA7-VBLYUTbhhV01EtWf8Lcz3xw  ← (global: "Quiero + Info")
- drive.google.com/file/d/12lysb8TkrEdus8HEyCb07YTw2xsv7HGV  ← (inferido: video "SPOT.mp4")
- drive.google.com/file/d/1iMCvKl7mO4HpfH8rqcM9kwtgtSyrRn1n  ← (inferido: video "I Tec- AI redes 2.mp4")
- drive.google.com/file/d/1kzqE3_wK22Df4lni73KoXcLRZPAFJrmS  ← (inferido: video "I Tec - Campus Vrtual.mpeg")
- forms.gle/x2TwoqM415tbsTdt8  ← (Formulario de Admisión Ada Byron)
- youtube.com/embed/pO55hU8AXj4  ← ⚠️ YouTube embebido NO visible en el markdown fetcheado de inicio (revisar)

## https://sites.google.com/itecriocuarto.org.ar/www/alumnos
- docs.google.com/forms/d/e/1FAIpQLScjhSUcMVsUobJ4uUEUr3kAA7-VBLYUTbhhV01EtWf8Lcz3xw  ← (global)
- (sin embebidos propios de la página)

## https://sites.google.com/itecriocuarto.org.ar/www/alumnos/ingresantes
- docs.google.com/forms/d/e/1FAIpQLScjhSUcMVsUobJ4uUEUr3kAA7-VBLYUTbhhV01EtWf8Lcz3xw  ← (global)
- drive.google.com/file/d/12lysb8TkrEdus8HEyCb07YTw2xsv7HGV  ← (inferido: video "SPOT.mp4" embebido)
- drive.google.com/file/d/1h6mXHwVZ-nfQlVyFy2waOhRcftfEsguS  ← (PDF "Certificado de Salud Psico Física")
- drive.google.com/file/d/0Bzj-DEUAlG8IQUNaSkR3WC03cDA  ← (PDF "Fotocopia Autenticada del Certificado Analítico…")
- forms.gle/6yrMTJKexCz9Rc7Q7  ← (Form "Me interesa Info de las Carreras")

## https://sites.google.com/itecriocuarto.org.ar/www/alumnos/horarios-de-cursado
- docs.google.com/forms/d/e/1FAIpQLScjhSUcMVsUobJ4uUEUr3kAA7-VBLYUTbhhV01EtWf8Lcz3xw  ← (global)
- drive.google.com/file/d/1pNPiqZNgDp8WhAtkersVs0CzHpvyDHek  ← (PDF "Ver Horarios" Turismo y Hotelería)

## https://sites.google.com/itecriocuarto.org.ar/www/alumnos/calendario
- docs.google.com/forms/d/e/1FAIpQLScjhSUcMVsUobJ4uUEUr3kAA7-VBLYUTbhhV01EtWf8Lcz3xw  ← (global)
- (sin embebidos propios de la página — el calendario es una imagen estática; NO hay iframe de Google Calendar)

## https://sites.google.com/itecriocuarto.org.ar/www/carreras
- docs.google.com/forms/d/e/1FAIpQLScjhSUcMVsUobJ4uUEUr3kAA7-VBLYUTbhhV01EtWf8Lcz3xw  ← (global)
- drive.google.com/file/d/1kzqE3_wK22Df4lni73KoXcLRZPAFJrmS  ← (inferido: video "I Tec - Campus Vrtual.mpeg" embebido)

## https://sites.google.com/itecriocuarto.org.ar/www/carreras/software
- docs.google.com/forms/d/e/1FAIpQLScjhSUcMVsUobJ4uUEUr3kAA7-VBLYUTbhhV01EtWf8Lcz3xw  ← (global)
- drive.google.com/file/d/0Bzj-DEUAlG8IQUNaSkR3WC03cDA
- drive.google.com/file/d/13OtsHA35vioEWrGYVRbf6LdsuZd4C5Kn
- drive.google.com/file/d/1h6mXHwVZ-nfQlVyFy2waOhRcftfEsguS
- drive.google.com/file/d/1kzqE3_wK22Df4lni73KoXcLRZPAFJrmS
- drive.google.com/file/d/1xCzqWXnoI8fQE4P49Z2WIBSitjVsaveM

## https://sites.google.com/itecriocuarto.org.ar/www/carreras/inteligencia-artificial
- docs.google.com/forms/d/e/1FAIpQLScjhSUcMVsUobJ4uUEUr3kAA7-VBLYUTbhhV01EtWf8Lcz3xw  ← (global)
- drive.google.com/file/d/0Bzj-DEUAlG8IQUNaSkR3WC03cDA
- drive.google.com/file/d/1eLiNKYEMcFKfGe_kEifaM70QHHDKybHj
- drive.google.com/file/d/1h6mXHwVZ-nfQlVyFy2waOhRcftfEsguS

## https://sites.google.com/itecriocuarto.org.ar/www/carreras/turismo
- docs.google.com/forms/d/e/1FAIpQLScjhSUcMVsUobJ4uUEUr3kAA7-VBLYUTbhhV01EtWf8Lcz3xw  ← (global)
- drive.google.com/file/d/0Bzj-DEUAlG8IQUNaSkR3WC03cDA
- drive.google.com/file/d/1h6mXHwVZ-nfQlVyFy2waOhRcftfEsguS
- drive.google.com/file/d/1Jlk37F3SiszAQOg8tzXa04a4EN4G_GoB
- drive.google.com/file/d/1xyU9LBqIT9rp0B1KC5wIecFYifkHTeYL

## https://sites.google.com/itecriocuarto.org.ar/www/carreras/mecatronica
- docs.google.com/forms/d/e/1FAIpQLScjhSUcMVsUobJ4uUEUr3kAA7-VBLYUTbhhV01EtWf8Lcz3xw  ← (global)
- drive.google.com/file/d/0Bzj-DEUAlG8IQUNaSkR3WC03cDA
- drive.google.com/file/d/1h6mXHwVZ-nfQlVyFy2waOhRcftfEsguS
- drive.google.com/file/d/1lbmeIsQR9TZ-US8iDSslQ_kUZi9y0Oa0
- drive.google.com/file/d/1oLisqcipvrfq5xg4FIgFq_GlofbB1dqa

## https://sites.google.com/itecriocuarto.org.ar/www/trayectos/Operario_electromecanico
- docs.google.com/forms/d/e/1FAIpQLScjhSUcMVsUobJ4uUEUr3kAA7-VBLYUTbhhV01EtWf8Lcz3xw  ← (global)
- (sin embebidos propios de la página)

## https://sites.google.com/itecriocuarto.org.ar/www/adabyron
- docs.google.com/forms/d/e/1FAIpQLScjhSUcMVsUobJ4uUEUr3kAA7-VBLYUTbhhV01EtWf8Lcz3xw  ← (global)
- forms.gle/x2TwoqM415tbsTdt8  ← (Formulario de Admisión Ada Byron)

## https://sites.google.com/itecriocuarto.org.ar/www/adabyron/propuesta
- docs.google.com/forms/d/e/1FAIpQLScjhSUcMVsUobJ4uUEUr3kAA7-VBLYUTbhhV01EtWf8Lcz3xw  ← (global)
- forms.gle/x2TwoqM415tbsTdt8  ← (Formulario de Admisión Ada Byron)

## https://sites.google.com/itecriocuarto.org.ar/www/adabyron/admisi%C3%B3n
- docs.google.com/forms/d/e/1FAIpQLScjhSUcMVsUobJ4uUEUr3kAA7-VBLYUTbhhV01EtWf8Lcz3xw  ← (global)
- forms.gle/x2TwoqM415tbsTdt8  ← (Formulario de Admisión Ada Byron)

## https://sites.google.com/itecriocuarto.org.ar/www/adabyron/qui%C3%A9n-fue-ada-byron
- docs.google.com/forms/d/e/1FAIpQLScjhSUcMVsUobJ4uUEUr3kAA7-VBLYUTbhhV01EtWf8Lcz3xw  ← (global)
- (sin embebidos propios de la página)

## https://sites.google.com/itecriocuarto.org.ar/www/adabyron/galer%C3%ADa-de-fotos
- docs.google.com/forms/d/e/1FAIpQLScjhSUcMVsUobJ4uUEUr3kAA7-VBLYUTbhhV01EtWf8Lcz3xw  ← (global)
- (sin embebidos propios de la página)

## https://sites.google.com/itecriocuarto.org.ar/www/bolsadetrabajo
- docs.google.com/forms/d/e/1FAIpQLScjhSUcMVsUobJ4uUEUr3kAA7-VBLYUTbhhV01EtWf8Lcz3xw  ← (global)
- forms.gle/E4YPNjqx6F2GfPyA9
- forms.gle/SfFnG67hNqUuSZtPA

## https://sites.google.com/itecriocuarto.org.ar/www/itec-labs
- docs.google.com/forms/d/e/1FAIpQLScjhSUcMVsUobJ4uUEUr3kAA7-VBLYUTbhhV01EtWf8Lcz3xw  ← (global)
- (sin embebidos propios de la página)

---

## Resumen de IDs únicos (excluyendo el Form global)

### Drive (drive.google.com/file/d/…)
| ID | Páginas donde aparece | Contenido (conocido/inferido) |
|---|---|---|
| 12lysb8TkrEdus8HEyCb07YTw2xsv7HGV | inicio, ingresantes | Video "SPOT.mp4" (inferido) |
| 1iMCvKl7mO4HpfH8rqcM9kwtgtSyrRn1n | inicio | Video "I Tec- AI redes 2.mp4" (inferido) |
| 1kzqE3_wK22Df4lni73KoXcLRZPAFJrmS | inicio, carreras, carreras/software | Video "I Tec - Campus Vrtual.mpeg" (inferido) |
| 0Bzj-DEUAlG8IQUNaSkR3WC03cDA | ingresantes, software, IA, turismo, mecatronica | PDF "Fotocopia Autenticada del Certificado Analítico…" |
| 1h6mXHwVZ-nfQlVyFy2waOhRcftfEsguS | ingresantes, software, IA, turismo, mecatronica | PDF "Certificado de Salud Psico Física" |
| 1pNPiqZNgDp8WhAtkersVs0CzHpvyDHek | horarios-de-cursado | PDF "Ver Horarios" Turismo y Hotelería |
| 13OtsHA35vioEWrGYVRbf6LdsuZd4C5Kn | carreras/software | (sin identificar) |
| 1xCzqWXnoI8fQE4P49Z2WIBSitjVsaveM | carreras/software | (sin identificar) |
| 1eLiNKYEMcFKfGe_kEifaM70QHHDKybHj | carreras/inteligencia-artificial | (sin identificar) |
| 1Jlk37F3SiszAQOg8tzXa04a4EN4G_GoB | carreras/turismo | (sin identificar) |
| 1xyU9LBqIT9rp0B1KC5wIecFYifkHTeYL | carreras/turismo | (sin identificar) |
| 1lbmeIsQR9TZ-US8iDSslQ_kUZi9y0Oa0 | carreras/mecatronica | (sin identificar) |
| 1oLisqcipvrfq5xg4FIgFq_GlofbB1dqa | carreras/mecatronica | (sin identificar) |

### Forms
| ID/shortlink | Páginas | Contenido |
|---|---|---|
| docs.google.com/forms/d/e/1FAIpQLScjhSUcMVsUobJ4uUEUr3kAA7-VBLYUTbhhV01EtWf8Lcz3xw | TODAS (18) | Global: "Quiero + Info" (barra "Ingreso Agosto") |
| forms.gle/x2TwoqM415tbsTdt8 | inicio, adabyron, adabyron/propuesta, adabyron/admisión | Formulario de Admisión Ada Byron |
| forms.gle/6yrMTJKexCz9Rc7Q7 | ingresantes | "Me interesa Info de las Carreras" |
| forms.gle/E4YPNjqx6F2GfPyA9 | bolsadetrabajo | (sin identificar — probablemente carga de CV / empresa) |
| forms.gle/SfFnG67hNqUuSZtPA | bolsadetrabajo | (sin identificar — probablemente carga de CV / empresa) |

### YouTube
| ID | Páginas | Contenido |
|---|---|---|
| youtube.com/embed/pO55hU8AXj4 | inicio | (sin identificar — no visible en el markdown fetcheado) |

### Google Calendar / Sheets
- (ninguno detectado en ninguna de las 18 páginas)
