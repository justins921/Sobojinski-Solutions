# Sobojinski Solutions — Brand Guide

## Brand Identity

**Company Name:** Sobojinski Solutions
**Tagline:** Business Solutions, Engineered
**Mission:** Creating solutions for your business needs
**Positioning:** A business solutions company that builds purpose-built software platforms for specific industries

---

## Logo

The Sobojinski Solutions logo is a rounded square containing a 2x2 grid of colored squares. Each square represents one of the four product platforms:

- **Top-left (Blue #2563EB):** Sobojinski Solutions core brand
- **Top-right (Emerald #10B981):** EMR OS
- **Bottom-left (Violet #8B5CF6):** Work OS
- **Bottom-right (Orange #F97316):** SEO OS

### Logo Usage
- Minimum clear space: 1x the width of one inner square on all sides
- Minimum size: 32px height for digital, 12mm for print
- Always use the logo on contrasting backgrounds
- Do not stretch, rotate, or alter the logo colors
- The logo file is located at `/brand/logo.svg`

---

## Color Palette

### Brand Core
| Name | Hex | Usage |
|------|-----|-------|
| Navy | `#0F172A` | Dark backgrounds, primary text |
| Navy Light | `#1E293B` | Secondary dark surfaces |
| Brand Blue | `#2563EB` | Primary actions, links, brand accent |
| Brand Dark | `#1D4ED8` | Hover states for primary actions |
| Brand Light | `#3B82F6` | Lighter accent, gradients |
| Brand Subtle | `#DBEAFE` | Light backgrounds, badges |

### Neutral Scale
| Name | Hex | Usage |
|------|-----|-------|
| White | `#FFFFFF` | Page backgrounds, cards |
| Gray 50 | `#F8FAFC` | Alternate section backgrounds |
| Gray 100 | `#F1F5F9` | Muted backgrounds |
| Gray 200 | `#E2E8F0` | Borders, dividers |
| Gray 300 | `#CBD5E1` | Input borders, disabled states |
| Gray 400 | `#94A3B8` | Placeholder text, light text |
| Gray 500 | `#64748B` | Muted text, descriptions |
| Gray 600 | `#475569` | Secondary text |
| Gray 700 | `#334155` | Dark text alternative |
| Gray 800 | `#1E293B` | Footer backgrounds |
| Gray 900 | `#0F172A` | Primary text, dark sections |

### Product Accent Colors
Each product has its own accent color. Subdomain projects should use their product color as `--product-accent`.

| Product | Primary | Dark | Usage |
|---------|---------|------|-------|
| EMR OS | `#10B981` | `#059669` | Healthcare/medical contexts |
| Golf OS | `#22C55E` | `#16A34A` | Golf/hospitality contexts |
| Work OS | `#8B5CF6` | `#7C3AED` | Productivity/workspace contexts |
| SEO OS | `#F97316` | `#EA580C` | Marketing/analytics contexts |

### Semantic Colors
| Name | Hex | Usage |
|------|-----|-------|
| Success | `#10B981` | Positive states, confirmations |
| Warning | `#F59E0B` | Caution states, stars/ratings |
| Error | `#EF4444` | Error states, destructive actions |
| Info | `#06B6D4` | Informational notices |

---

## Typography

### Font Family
**Primary:** Inter (Google Fonts)
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

**Monospace (code/technical):** JetBrains Mono
```css
font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace;
```

### Type Scale
| Token | Size | Usage |
|-------|------|-------|
| `--text-xs` | 0.75rem (12px) | Labels, badges, fine print |
| `--text-sm` | 0.875rem (14px) | Navigation, form labels, captions |
| `--text-base` | 1rem (16px) | Body text |
| `--text-lg` | 1.125rem (18px) | Lead paragraphs, subtitles |
| `--text-xl` | 1.25rem (20px) | H4, card titles |
| `--text-2xl` | 1.5rem (24px) | H3 |
| `--text-3xl` | 1.875rem (30px) | H2 (small screens) |
| `--text-4xl` | 2.25rem (36px) | H2 |
| `--text-5xl` | 3rem (48px) | H1 (medium screens) |
| `--text-6xl` | 3.75rem (60px) | H1 (large screens) |

### Font Weights
| Weight | Token | Usage |
|--------|-------|-------|
| 400 | Regular | Body text |
| 500 | Medium | Navigation links, form inputs |
| 600 | Semibold | Section labels, buttons, card titles |
| 700 | Bold | Headings (H2-H4) |
| 800 | Extra Bold | H1 headings |

### Line Height
| Token | Value | Usage |
|-------|-------|-------|
| `--leading-tight` | 1.2 | Headings |
| `--leading-normal` | 1.6 | Body text |
| `--leading-relaxed` | 1.75 | Paragraphs, descriptions |

---

## Spacing Scale

Based on a 4px base unit:

| Token | Value | Pixels |
|-------|-------|--------|
| `--space-1` | 0.25rem | 4px |
| `--space-2` | 0.5rem | 8px |
| `--space-3` | 0.75rem | 12px |
| `--space-4` | 1rem | 16px |
| `--space-5` | 1.25rem | 20px |
| `--space-6` | 1.5rem | 24px |
| `--space-8` | 2rem | 32px |
| `--space-10` | 2.5rem | 40px |
| `--space-12` | 3rem | 48px |
| `--space-16` | 4rem | 64px |
| `--space-20` | 5rem | 80px |
| `--space-24` | 6rem | 96px |
| `--space-32` | 8rem | 128px |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 6px | Small elements (badges) |
| `--radius-md` | 8px | Inputs, buttons |
| `--radius-lg` | 12px | Cards, modals |
| `--radius-xl` | 16px | Large cards, sections |
| `--radius-2xl` | 24px | Hero sections, featured blocks |
| `--radius-full` | 9999px | Circles, pills |

---

## Shadows

| Token | Usage |
|-------|-------|
| `--shadow-xs` | Subtle depth (input focus rings) |
| `--shadow-sm` | Cards at rest, navigation |
| `--shadow-md` | Buttons on hover, dropdowns |
| `--shadow-lg` | Cards on hover, modals |
| `--shadow-xl` | Feature cards on hover |
| `--shadow-2xl` | Overlays, popovers |

---

## Component Patterns

### Buttons
- **Primary:** Blue background, white text — for main CTAs
- **Secondary:** Dark navy background, white text — for secondary actions
- **Outline:** Transparent with gray border — for tertiary actions
- **White:** White background — for use on dark backgrounds

### Cards
- White background with 1px gray-200 border
- 16px border radius
- Subtle shadow on hover with upward translate
- 4px colored top border for product-specific cards

### Section Headers
- Uppercase label with leading dash decoration
- H2 heading below
- Muted description paragraph
- Centered with max-width constraint

---

## Design Tokens File

The shared design tokens are located at `/brand/design-tokens.css`. Import this file into any subdomain project:

```css
@import 'path/to/brand/design-tokens.css';
```

Subdomain projects should override the product accent variable:

```css
/* Example for EMR OS subdomain */
:root {
  --product-accent: var(--product-emr);
  --product-accent-dark: var(--product-emr-dark);
}
```

---

## Brand Bar

A thin (4px) horizontal bar with 4 equal segments showing the product colors is used as a visual brand element:

1. Brand Blue (`#2563EB`)
2. EMR Emerald (`#10B981`)
3. Work Violet (`#8B5CF6`)
4. SEO Orange (`#F97316`)

Use this at the top of footers or as section dividers.
