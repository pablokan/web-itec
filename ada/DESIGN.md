---
name: Secundario Tecnológico Ada Byron
description: Warm traditional — independent digital gateway for Ada Byron secondary school
mode: Persuade
colors:
  primary: "#642725"
  cream: "#fff8e2"
  ink: "#101113"
  text: "#4a4a4a"
  muted: "#8a8a8a"
typography:
  display:
    fontFamily: "Satoshi, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontWeight: 900
    letterSpacing: -0.03em
  body:
    fontFamily: "Satoshi, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Satoshi, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontWeight: 500
    textTransform: uppercase
    letterSpacing: 0.14em
rounded:
  card: 10px
  button: 9999px
spacing:
  container: min(100% - 40px, 1380px)
  section-y: 100px
components:
  button-primary:
    backgroundColor: "#642725"
    textColor: "#fff"
    rounded: 9999px
  button-ghost:
    backgroundColor: transparent
    textColor: "#fff"
    rounded: 9999px
    border: 1px solid rgba(255,255,255,0.45)
  highlight-box:
    backgroundColor: "#fff"
    border: "1px solid #642725"
    rounded: 10px
  card:
    backgroundColor: "#fff"
    border: "1px solid #642725"
    rounded: 10px
---

# Design System: Secundario Ada Byron

## Overview

**Creative Direction: "The Heritage Notebook"**

Ada Byron is technical education with a human face — a secondary school where programming and robotics coexist with arts, literature, and human sciences. The visual system is rooted in warmth and tradition with a modern edge: a deep burgundy primary (#642725) anchors the brand, while a cream background (#fff8e2) wraps every section in approachability. Every card and highlight box carries a deliberate 1px border of the primary color, echoing the structure and neatness of a well-kept notebook.

**Mode: Persuade.** The landing must earn trust from parents (rigor, tradition, clear info) and excitement from teenagers (clean design, real photos, modern feel).

## Palette

- **Primary (#642725):** Deep burgundy. Used for CTAs, borders, headings, accents. Conveys stability, tradition, and warmth.
- **Cream (#fff8e2):** Page and section background. Warm, inviting, institutional without being cold.
- **Ink (#101113):** Footer and deep contrast elements.
- **Text (#4a4a4a):** Body copy on cream background. Soft enough for comfortable reading, dark enough for contrast.
- **Muted (#8a8a8a):** Secondary text, metadata.

## Typography

**Font: Satoshi** by Indian Type Foundry (via Fontshare). A neo-grotesque sans-serif that balances geometric precision with humanist warmth. Self-hosted in 5 weights (300–900).

### Hierarchy
- **Display** (weight 900, clamp(2.8rem, 7vw, 5.5rem), leading-tight, -0.03em): Hero heading
- **Headline** (weight 700, clamp(1.8rem, 4vw, 3.5rem), leading-tight, -0.025em): Section headings
- **Title** (weight 700, 1.05–1.2rem): Card titles
- **Body** (weight 400, 0.9–1rem, leading 1.6): Reading copy
- **Label** (weight 500, 0.7rem, uppercase, 0.14em): Eyebrow labels

## Layout

Single-column vertical scroll with full-width sections. All sections sit on cream background. Hero provides the single dark moment (photo overlay with primary-tinted gradient). White cards with primary border float on cream.

- Container: centered max-width with responsive padding
- Hero: full-width background image with primary overlay gradient
- Propuesta: 3-column card grid
- Admisión: 2-column step cards
- Galería: 4-column responsive photo grid
- Contacto: full primary background, two-column layout

## Components

### Buttons
- **Primary:** Solid #642725, white text, pill shape
- **Ghost:** Transparent with white border (on hero/primary) or primary border (on cream)
- **Primary-light:** White background, #642725 text (on primary sections)

### Cards
- White background, 1px solid #642725 border, 10px radius
- Hover: slight lift (translateY -4px) with primary-tinted shadow

### Highlight boxes
- White background, 1px solid #642725 border, 10px radius. Used in section-head pairs.

### Gallery
- Grid of tightly cropped student photos
- 10px radius on all images
- Hover: subtle scale-up (1.04) with increased saturation

## Motion
- Reveal animations: opacity + translateY on scroll
- Ease: cubic-bezier(.16,1,.3,1)
- Button hover: translateY(-2px)
- Card hover: translateY(-4px) + shadow

## Do's
- Do use the 1px #642725 border consistently on cards and boxes
- Do keep the cream background as the dominant surface
- Do use real student photography
- Do reserve the hero overlay for the primary dark moment

## Don'ts
- Don't use multiple background colors — cream is the surface, primary is for CTAs and contact
- Don't use shadows on the hero overlay
- Don't use text overlays on gallery photos
- Don't introduce a third accent color

