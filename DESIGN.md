---
name: iTec Río Cuarto
description: Education to transform — institutional gateway for Instituto Tecnológico Río Cuarto
colors:
  ink-950: oklch(0.145 0.008 260)
  ink-900: oklch(0.175 0.010 260)
  ink-850: oklch(0.205 0.011 260)
  ink-800: oklch(0.235 0.012 260)
  ink-700: oklch(0.30 0.014 260)
  paper-50: oklch(0.97 0.004 100)
  paper-300: oklch(0.85 0.006 100)
  paper-500: oklch(0.66 0.008 100)
  paper-600: oklch(0.55 0.009 100)
  brand-300: oklch(0.72 0.17 25.7)
  brand-400: oklch(0.645 0.21 25.7)
  brand-500: oklch(0.5754 0.2036 25.71)
  brand-600: oklch(0.49 0.18 25.7)
  brand-700: oklch(0.41 0.15 25.7)
typography:
  display:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontWeight: 600
    letterSpacing: -0.02em
  body:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Geist Mono Variable, ui-monospace, SFMono-Regular, Menlo, monospace"
    textTransform: uppercase
    letterSpacing: 0.18em
rounded:
  button: 9999px
  card: 1rem
  chip: 9999px
  video: 1rem
spacing:
  container: max-w-7xl
  container-x: 1.25rem
components:
  button-primary:
    backgroundColor: "{colors.brand-500}"
    textColor: "{colors.paper-50}"
    rounded: "{rounded.button}"
    padding: 16px 48px
  button-primary-hover:
    backgroundColor: "{colors.brand-400}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.paper-300}"
    rounded: "{rounded.button}"
    border: 1px solid rgba(255, 255, 255, 0.1)
  button-ghost-hover:
    textColor: "{colors.paper-50}"
    border: 1px solid rgba(255, 255, 255, 0.25)
  card:
    backgroundColor: "{colors.ink-900}"
    textColor: "{colors.paper-500}"
    rounded: "{rounded.card}"
    border: 1px solid rgba(255, 255, 255, 0.1)
  card-hover:
    border: 1px solid rgba(255, 255, 255, 0.2)
  card-hover-hover:
    border: 2px solid "{colors.brand-500}"
    backgroundColor: "{colors.ink-850}"
  chip:
    backgroundColor: rgba(255, 255, 255, 0.05)
    textColor: "{colors.paper-500}"
    rounded: "{rounded.chip}"
    border: 1px solid rgba(255, 255, 255, 0.1)
  chip-accent:
    backgroundColor: rgba(213, 47, 50, 0.1)
    textColor: "{colors.brand-300}"
    border: 1px solid rgba(213, 47, 50, 0.3)
---

# Design System: iTec Río Cuarto

## Overview

**Creative North Star: "The Lab Notebook"**

Sleek, minimal, authoritative. This is a dark-tech surface that treats information with the precision of a laboratory instrument. Every element earns its place: the deep ink background (oklch 0.145 0.008 260) is never absolute black — it breathes. The single red accent (iTec brand #D72F32) is used with discipline, never overwhelming. Cards sit on a slightly lighter ink surface with thin white borders, like specimen slides on a dark lab bench. Type is exclusively Geist Variable — clean, geometric, contemporary — with Geist Mono reserved for metadata, labels, and technical signals.

**Mode: Persuade.** The landing page earns trust and drives action (admissions inquiries, career exploration). It presents the institution as technologically advanced without being cold — authoritative but approachable.

**Key Characteristics:**

- Dark background with tonal layering (never absolute black), light text body (paper-300 / oklch 0.85)
- Single accent: iTec red (brand-500), used sparingly on CTAs, kicker labels, and hover states
- Geist Variable sans for all reading text; Geist Mono Variable for technical labels, kickers, uppercase metadata
- Cards are rounded-2xl (1rem) with thin white/10 borders; no shadows, depth via tonal layering
- Buttons are pill-shaped (rounded-full) with inset shadow for a tactile quality
- Motion is motivated: reveal animations use ease-out-expo for hierarchy, translateY fades on scroll
- Canvases are generous: max-w-7xl containers with comfortable padding (px-5 sm:px-8)
- The red accent is reserved — no gratuitous decoration, no underlines, no decorative flourishes

## Colors

A dark-tech palette with one committed accent. Three material families: **Ink** (surfaces), **Paper** (text), **Brand** (accent).

### Ink — Surfaces (cool-neutral, never absolute black)
- **Ink 950** (oklch 0.145 0.008 260): Page background. Deep but not black — a hint of blue keeps it technical.
- **Ink 900** (oklch 0.175 0.010 260): Card surfaces. One step lighter than the page, creates the tonal layer.
- **Ink 850** (oklch 0.205 0.011 260): Elevated / hover state for cards.
- **Ink 800** (oklch 0.235 0.012 260): Generic hover state for interactive surfaces.
- **Ink 700** (oklch 0.30 0.014 260): Strong borders and dividers.

### Paper — Text (warm-neutral, high readability)
- **Paper 50** (oklch 0.97 0.004 100): Primary text — headings, nav titles, prominent copy. Near-white.
- **Paper 300** (oklch 0.85 0.006 100): Body text. Comfortable reading contrast on ink backgrounds.
- **Paper 500** (oklch 0.66 0.008 100): Muted / secondary text. Captions, card body copy, footer.
- **Paper 600** (oklch 0.55 0.009 100): Lowest-priority text. Label headings, small metadata.

### Brand — Accent (iTec red, one voice)
- **Brand 300** (oklch 0.72 0.17 25.7): Accent hover / chip active text. Lightest red used.
- **Brand 400** (oklch 0.645 0.21 25.7): Interactive accent — hover state for buttons, focus rings.
- **Brand 500** (oklch 0.5754 0.2036 25.71): Canonical logo red (#D72F32). Primary CTAs, strong accent indicators.
- **Brand 600** (oklch 0.49 0.18 25.7): Pressed / active state for brand elements.
- **Brand 700** (oklch 0.41 0.15 25.7): Deepest red, used sparingly for extreme states.

### Named Rules

**The One Voice Rule.** The brand accent appears on at most one interactive element per viewport and a few non-interactive labels (kickers, accent chips). Its rarity is the point. Two brand-500 elements on the same screen compete.

**The No-Gratuitous-Color Rule.** No decorative borders, underlines, icons, or dividers use the accent. Red means "act here" or "this is a signal."

## Typography

**Display + Body Font:** Geist Variable (ui-sans-serif, system-ui, -apple-system, sans-serif)
**Label / Mono Font:** Geist Mono Variable (ui-monospace, SFMono-Regular, Menlo, monospace)

**Character:** Clean, geometric, contemporary. Geist carries a technical precision without feeling cold — the variable weight axis gives it warmth at book weight and authority at semibold. The mono pairing is strict: no script, no serif, no decorative type. Information is the decoration.

### Hierarchy

- **Display** (semibold 600, clamp(2.25rem, 6vw, 4rem), leading-tight, tracking-tight): Hero headings and major section titles. text-wrap: balance.
- **Headline** (semibold 600, clamp(1.5rem, 4vw, 3rem), leading-tight, tracking-tight): Section headings (h2).
- **Title** (bold 700, 1.25rem): Card titles. Smaller section headings.
- **Body** (normal 400, 1rem / 1.125rem on large screens, leading-relaxed 1.625, max-width 65ch): All reading copy. text-wrap: pretty.
- **Label / Mono** (normal 400, 0.75rem–0.8125rem, uppercase, letter-spacing 0.18em–0.22em, font-mono): Kickers, metadata tags, stats numbers, small print.

### Named Rules

**The Mono-For-Metadata Rule.** Any text that labels, categorizes, or identifies (kickers, chips, stat labels, small print) is set in Geist Mono uppercase. If it's a sentence, it's Geist Variable sentence-case.

## Layout

The page is arranged as a single-column vertical scroll with full-width sections. Each section uses a `.container-x` (max-w-7xl, auto-horizontal margins, responsive horizontal padding px-5 / sm:px-8) for its content.

The hero is a two-column grid (12-column: 7 + 5) on large screens, stacking on mobile. Career cards are a 2-column grid; contact cards are a 3-column grid. Stats are a 4-column grid collapsing to 2 on mobile.

Sections alternate between plain dark (ink-950) and a subtly tinted background (ink-900/50) to create visual rhythm without borders. Section vertical rhythm: py-16 sm:py-20 lg:py-24/28.

**Density:** Comfortable. Generous whitespace around headings, breathing room inside cards (p-5 sm:p-6 to p-8), but not so much that the page feels sparse.

**Responsive behavior:** The layout is mobile-first. Grids collapse to single or double column. Navigation hides behind a future mobile menu. All font sizes are fluid via clamp() or responsive utility classes.

## Elevation & Depth

**Hybrid — tonal layering for structure, inset shadow for tactility, no ambient shadows.**

Depth is communicated primarily by surface lightness: the page background (ink-950) recedes, card surfaces (ink-900) sit one step forward, and hover states (ink-850) bring interactive elements closer. No box-shadows on cards.

The sole shadow is an **inset shadow** on `.btn-primary`: `box-shadow: inset 0 0 0 1px brand-300/20`. This creates a subtle inner highlight, giving the button a slightly recessed, tactile quality.

Card hover uses a **border treatment** (brand-500 border + same-color inset shadow) instead of a shadow lift. This keeps the flat aesthetic while signaling interactivity.

### Shadow Vocabulary

- **Button inset glow** (`inset 0 0 0 1px brand-300/20`): Only on `.btn-primary`. Subtle inner rim at rest; the glow recedes on hover (brand-400 background overpowers it).

## Shapes

A restrained form vocabulary with two radii:

- **Buttons:** Pill shape (rounded-full, 9999px). Tall enough (py-2.5) to feel substantial.
- **Cards:** rounded-2xl (1rem / 16px). Noticeably curved but not soft — a precise, intentional radius.
- **Chips / tags:** rounded-full (9999px). Small pill tags for metadata and categories.
- **Video containers:** rounded-2xl, matching card radius.
- **Images inside cards:** overflow-hidden with parent's radius — no standalone image radius.
- **Focus rings:** 2px solid brand-400 with 2px offset and 2px border-radius. Precise and visible.

Borders are thin (1px) and translucent (white/5 to white/20). Only card-hover uses a 2px brand-500 border on hover. There is no use of dotted or dashed borders.

## Components

### Buttons

- **Shape:** Pill (rounded-full), medium weight (px-5 py-2.5), text-sm font-medium.
- **Primary (`.btn-primary`):** Solid brand-500 fill, paper-50 text. Inset shadow rim at rest. Hover shifts to brand-400 (slightly lighter). Active translates down 1px. Transition: all 0.2s ease-out.
- **Ghost (`.btn-ghost`):** Transparent background, white/10 border, paper-300 text. Hover: white/25 border, paper-50 text. Same active translate.
- **Usage:** Primary for main CTAs (Explorar carreras, Ver la carrera). Ghost for secondary actions (Ver todas, Quiero + Info secondary). Never use two primary buttons in the same section.

### Cards (`.card`)

- **Style:** ink-900 background, 1px white/10 border, rounded-2xl. Padding: p-5 sm:p-6. Body text: paper-500 text-sm.
- **Hover variant (`.card-hover`):** white/20 border at rest. On hover: brand-500 border + inset shadow, ink-850 background. Optional image scale-up (group-hover:scale-105, 500ms ease-out).
- **Internal spacing:** flex gap-2 for chip row, mt-3 for title, mt-1.5 for description.

### Chips (`.chip`)

- **Style:** rounded-full, border white/10, bg white/5, font-mono text-xs text-paper-500. Inline-flex with 1.5 gap for icons/dots. Padding: px-3 py-1.
- **Accent variant (`.chip-accent`):** border brand-500/30, bg brand-500/10, text brand-300. For new/signal tags (e.g. "Nueva 2026").

### Kickers (`.kicker`)

- **Style:** font-mono, text-xs, uppercase, tracking-0.22em, color brand-400. Used sparingly above section headings. Not a link or button.
- **Placement:** One per section, directly above h2. Never more than one kicker per section.

### Navigation (`.nav-link`)

- **Style:** text-sm, text-paper-500, hover paper-50. Transition: color 0.2s. No underline. No background. Ghost-style at all times.
- **Header layout:** Horizontal row hidden below lg breakpoint. Sticky header with backdrop-blur-md and ink-950/85 background.

### Video Frame (`.video-frame`)

- **Style:** aspect-video, w-full, rounded-2xl, border white/10, overflow-hidden, ink-900 background. <video> or <iframe> fills height + width with object-cover.

## Do's and Don'ts

### Do:
- **Do** use the full ink-950 page background as the dominant surface. Never use white or light gray as the page background.
- **Do** reserve brand-500 for one primary CTA per section.
- **Do** use ink-900 for cards and section backgrounds that need to differentiate from the page.
- **Do** use Geist Mono uppercase for all labels, kickers, chips, and metadata text.
- **Do** use the reveal animation (opacity + translateY, 0.7s ease-out-expo) for scroll-triggered entries.
- **Do** use the 4/3 aspect ratio for card images.

### Don't:
- **Don't** use shadows to lift cards. Depth is tonal, not simulated.
- **Don't** use the brand accent for decorative purposes — not for borders at rest, not for underlines, not for icons.
- **Don't** mix font families. Geist Variable and Geist Mono Variable are the only typefaces.
- **Don't** use sentence case for kickers or chips; always uppercase mono.
- **Don't** stack primary buttons. At most one `.btn-primary` per section, paired with a `.btn-ghost`.
- **Don't** use rounded corners smaller than 1rem on cards or larger than pill (9999px) on buttons.
- **Don't** underline links. Use color change (paper-500 → paper-50) for hover.
- **Don't** add decorative flourishes (gradients on surfaces, illustrations, icons outside of content).
