# Subdomain Architecture — Sobojinski Solutions

## Overview

Sobojinski Solutions uses a subdomain strategy where the main hub site lives at the root domain and each product lives on its own subdomain. Each product is its own independent project/repository but shares a common brand foundation.

---

## Domain Structure

| Domain | Purpose | Product |
|--------|---------|---------|
| `sobojinskisolutions.com` | Main hub/marketing site | Company brand |
| `emros.sobojinskisolutions.com` | EMR OS product site | Electronic Medical Records |
| `golfos.sobojinskisolutions.com` | Golf OS product site | Golf Course Management |
| `workos.sobojinskisolutions.com` | Work OS product site | Workforce/Project Management |
| `seoos.sobojinskisolutions.com` | SEO OS product site | SEO Management Platform |

### Subdomain Naming Rationale

The current naming convention uses descriptive, recognizable prefixes:

- **emros** — Clear abbreviation for "EMR OS"
- **golfos** — Clear abbreviation for "Golf OS", consistent with the naming pattern
- **workos** — Clear abbreviation for "Work OS"
- **seoos** — Clear abbreviation for "SEO OS"

**Alternative naming suggestion:** If you want more uniform naming, consider:
- `emr.sobojinskisolutions.com`
- `golfos.sobojinskisolutions.com`
- `work.sobojinskisolutions.com`
- `seo.sobojinskisolutions.com`

This shorter format is cleaner but may conflict with other uses (e.g., `work` could be confused with a general workspace). The current `{product}os` pattern is recommended as it's distinct and brand-consistent.

---

## DNS Setup

### For Vercel Hosting

1. **Root domain:** Add an A record pointing to Vercel's IP (76.76.21.21) and a CNAME for `www` pointing to `cname.vercel-dns.com`
2. **Each subdomain:** Add a CNAME record for each subdomain pointing to `cname.vercel-dns.com`

```
# DNS Records
sobojinskisolutions.com        A       76.76.21.21
www.sobojinskisolutions.com    CNAME   cname.vercel-dns.com
emros.sobojinskisolutions.com  CNAME   cname.vercel-dns.com
golfos.sobojinskisolutions.com   CNAME   cname.vercel-dns.com
workos.sobojinskisolutions.com CNAME   cname.vercel-dns.com
seoos.sobojinskisolutions.com  CNAME   cname.vercel-dns.com
```

### For Netlify Hosting

1. **Root domain:** Add an A record pointing to Netlify's load balancer (75.2.60.5) or use ALIAS record
2. **Each subdomain:** Add a CNAME pointing to `[site-name].netlify.app`

### For Cloudflare + Any Host

Use Cloudflare as DNS proxy with origin rules pointing each subdomain to the correct hosting origin.

---

## Hosting Strategy

### Recommended: Separate Vercel Projects

Each product should be its own Vercel project (or equivalent) deployed independently:

```
sobojinskisolutions/          → Vercel Project: "ss-hub"
  └── domain: sobojinskisolutions.com

emros-product/                → Vercel Project: "ss-emros"
  └── domain: emros.sobojinskisolutions.com

golf-product/                 → Vercel Project: "ss-golf"
  └── domain: golfos.sobojinskisolutions.com

workos-product/               → Vercel Project: "ss-workos"
  └── domain: workos.sobojinskisolutions.com

seoos-product/                → Vercel Project: "ss-seoos"
  └── domain: seoos.sobojinskisolutions.com
```

**Benefits:**
- Independent deployment cycles (ship one product without affecting others)
- Separate build pipelines
- Individual performance monitoring
- Isolated error boundaries
- Different tech stacks per product if needed

---

## Shared Brand System

### How Subdomain Projects Should Reference the Brand

Each subdomain project should include the shared brand foundation. There are two approaches:

#### Option A: NPM Package (Recommended for Production)

Publish the `/brand` directory as a private npm package:

```bash
npm install @sobojinski/brand
```

```css
/* In the subdomain project's global CSS */
@import '@sobojinski/brand/design-tokens.css';

/* Override product accent */
:root {
  --product-accent: var(--product-emr);
  --product-accent-dark: var(--product-emr-dark);
}
```

#### Option B: Git Submodule

Add the brand directory as a git submodule in each subdomain repo:

```bash
git submodule add <brand-repo-url> brand
```

```css
@import '../brand/design-tokens.css';
```

#### Option C: Copy & Reference (Simplest)

Copy `design-tokens.css` into each subdomain project and import it. Manually sync updates.

### What Each Subdomain Gets from the Brand System

1. **CSS Custom Properties** — Full design token set (colors, typography, spacing, shadows, etc.)
2. **Product Accent Variables** — Pre-defined colors for each product that subdomains can activate
3. **Logo SVG** — Brand logo file at `/brand/logo.svg`
4. **Brand Guide** — Documentation at `/brand/brand-guide.md`

### Customizing per Subdomain

Each subdomain project should:

1. Import the shared design tokens
2. Set its product accent color:
   ```css
   :root {
     --product-accent: var(--product-golf);
     --product-accent-dark: var(--product-golf-dark);
   }
   ```
3. Use `--product-accent` for primary actions, buttons, and highlights
4. Keep the same typography (Inter), spacing scale, and shadow system
5. Include the Sobojinski Solutions logo in the footer with a "Powered by" or "A Sobojinski Solutions product" link back to the main hub

---

## Cross-Domain Considerations

### Authentication
If products share user accounts in the future, consider:
- A shared auth service at `auth.sobojinskisolutions.com`
- JWT tokens with the domain set to `.sobojinskisolutions.com` for cross-subdomain cookies
- OAuth2/OIDC for service-to-service auth

### Analytics
- Use a single Google Analytics / Plausible / PostHog property across all subdomains
- Configure cross-domain tracking to link user sessions across the hub and products
- Tag each subdomain with a `product` dimension for filtering

### Shared Components
If products need shared UI components (nav bar, footer, auth modals):
- Publish a `@sobojinski/ui` package with React components
- Or use Module Federation / micro-frontend architecture for runtime sharing

---

## SSL/TLS

All subdomains should use HTTPS. If using Vercel or Netlify, SSL certificates are automatically provisioned for each configured domain and subdomain. If self-hosting, use Let's Encrypt with wildcard certificates:

```
*.sobojinskisolutions.com
sobojinskisolutions.com
```

---

## Directory Structure Summary

```
/                                   (GitHub Org: Sobojinski-Solutions)
├── Sobojinski-Solutions/           Main hub site (this repo)
│   ├── brand/                      Shared brand assets
│   │   ├── design-tokens.css       CSS custom properties
│   │   ├── brand-guide.md          Brand documentation
│   │   └── logo.svg                Logo placeholder
│   ├── src/                        Next.js source code
│   └── subdomain-architecture.md   This file
│
├── emros/                          EMR OS product (separate repo)
│   ├── brand/ (submodule or copy)
│   └── src/
│
├── golf-os/                        Golf OS product (separate repo)
│   ├── brand/ (submodule or copy)
│   └── src/
│
├── work-os/                        Work OS product (separate repo)
│   ├── brand/ (submodule or copy)
│   └── src/
│
└── seo-os/                         SEO OS product (separate repo)
    ├── brand/ (submodule or copy)
    └── src/
```
