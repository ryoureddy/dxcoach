# DxCoach Design System (Sahara) — Frontend Implementation

This document provides the technical specifications for the "Sahara" design system to be incorporated into your Next.js and Tailwind CSS frontend.

## 1. Tailwind Theme (via `globals.css` `@theme inline`)

Since this project uses Tailwind CSS v4, all custom tokens are defined in `globals.css` using CSS custom properties and the `@theme inline` directive — there is no `tailwind.config.js`.

### Color Tokens

```css
@theme inline {
  /* Surface & Background */
  --color-surface: #faf5ee;
  --color-surface-bright: #faf5ee;
  --color-surface-dim: #dcd6cc;
  --color-surface-container: #f2ece4;
  --color-surface-container-low: #f6f0e8;
  --color-surface-container-high: #ece6dc;
  --color-surface-container-highest: #e6e0d6;
  --color-surface-container-lowest: #ffffff;
  --color-surface-variant: #ece6dc;
  --color-background: #faf5ee;

  /* Primary */
  --color-primary: #c2652a;
  --color-primary-container: #e08850;
  --color-primary-fixed: #fbe8d8;
  --color-primary-fixed-dim: #f0a878;
  --color-on-primary: #ffffff;
  --color-on-primary-container: #fbe8d8;
  --color-on-primary-fixed: #401a08;
  --color-on-primary-fixed-variant: #8a4518;
  --color-surface-tint: #c2652a;
  --color-inverse-primary: #f0a878;

  /* Secondary */
  --color-secondary: #78706a;
  --color-secondary-container: #eae2da;
  --color-secondary-fixed: #eae2da;
  --color-secondary-fixed-dim: #cec6be;
  --color-on-secondary: #ffffff;
  --color-on-secondary-container: #605850;
  --color-on-secondary-fixed: #2a2420;
  --color-on-secondary-fixed-variant: #504840;

  /* Tertiary */
  --color-tertiary: #8c3c3c;
  --color-tertiary-container: #d47070;
  --color-tertiary-fixed: #fce0e0;
  --color-tertiary-fixed-dim: #e8a0a0;
  --color-on-tertiary: #ffffff;
  --color-on-tertiary-container: #3a2020;
  --color-on-tertiary-fixed: #2e1515;
  --color-on-tertiary-fixed-variant: #6e3030;

  /* Error */
  --color-error: #c0392b;
  --color-error-container: #fce4e0;
  --color-on-error: #ffffff;
  --color-on-error-container: #7a1a10;

  /* On-surface & Outline */
  --color-on-surface: #3a302a;
  --color-on-surface-variant: #605850;
  --color-on-background: #3a302a;
  --color-outline: #9a9088;
  --color-outline-variant: #d8d0c8;
  --color-inverse-surface: #3a302a;
  --color-inverse-on-surface: #faf5ee;

  /* Typography */
  --font-headline: "EB Garamond", serif;
  --font-body: "Manrope", sans-serif;
  --font-label: "Manrope", sans-serif;
  --font-sans: var(--font-body);
  --font-serif: var(--font-headline);
}
```

### Font Setup (Next.js `layout.tsx`)

```tsx
import { EB_Garamond, Manrope } from "next/font/google";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});
```

## 2. Global CSS Variables (`globals.css`)

```css
:root {
  --color-primary: #c2652a;
  --color-primary-hover: #a8561f;
  --color-tertiary: #8c3c3c;
  --color-bg: #faf5ee;
  --color-surface: #ffffff;
  --color-surface-container-low: #f6f0e8;
  --color-text-primary: #3a302a;
  --color-text-secondary: #605850;
  --color-text-muted: #9a9088;
  --color-border: rgba(216, 208, 200, 0.6);
  --shadow-soft: 0 2px 16px rgba(58, 48, 42, 0.04);
  --font-heading: var(--font-eb-garamond), "Georgia", serif;
  --font-body: var(--font-manrope), "Arial", sans-serif;
}

body {
  background: var(--color-bg);
  color: var(--color-text-primary);
  font-family: var(--font-body);
}

h1, h2, h3, h4 {
  font-family: var(--font-heading);
}
```

## 3. Component Style Guide

### Primary Button
```html
<button class="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-all">
  Begin Simulation
</button>
```

### Pill Button (CTA)
```html
<div class="bg-primary text-on-primary px-8 py-4 rounded-full font-bold tracking-tight hover:bg-primary/90 transition-all">
  Start Rounds
</div>
```

### Content Card
```html
<div class="bg-surface-container-low rounded-xl p-8 md:p-10 border border-outline-variant/30 shadow-[0_2px_16px_rgba(58,48,42,0.04)]">
  <!-- Card Content -->
</div>
```

### Navigation Links
```html
<a href="#" class="text-stone-500 font-medium font-sans tracking-tight hover:text-primary transition-colors duration-200">
  Case Library
</a>
```

## 4. Visual Philosophy: "Sun-Baked Simplicity"
- **Whitespace:** Be generous. Let the components breathe. When in doubt, add more.
- **Typography:** EB Garamond (italic) for headers creates an editorial, professional feel. Manrope for body provides clean contrast.
- **Elevation:** Ultra-soft, diffused shadows (`0 2px 16px rgba(58, 48, 42, 0.04)`). Barely visible. Prefer warm background tinting for hierarchy.
- **Borders:** Low-opacity warm borders (`border-outline-variant/30`) for soft transitions between sections.
- **Content:** Should feel curated, not cluttered. Limit items per section.
- **Photography:** Warm-toned only. Avoid cool/blue stock imagery.

## 5. Icons

The design uses [Material Symbols Outlined](https://fonts.google.com/icons) loaded via Google Fonts link in the layout head:

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
```

Usage:
```html
<span class="material-symbols-outlined text-primary text-4xl">history_edu</span>
```
