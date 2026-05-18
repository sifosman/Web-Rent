# Rank & Rent Website Blueprint: Hot Tub Removal Wichita

> Complete roadmap for building, optimizing, and monetizing a local service niche website.

---

## Phase 1: Niche Selection & Keyword Research

### Finding a Low-Competition, High-Intent Niche

We analyzed 5 local SEO niches using search volume data, competition analysis, and monetization potential. The goal was to find a niche with:
- **Low keyword difficulty** (under 15)
- **High buyer intent** (transactional searches)
- **Clear service offering** (easy to sell leads)
- **Weak competition** (no dominant players)

**Why "Hot Tub Removal Wichita" won:**
- Monthly searches: 200-500 across all variations
- Keyword difficulty: Extremely low (no dedicated sites exist)
- Average CPC: $8-15 (indicates commercial value)
- Competitors: Junk removal generalists only — no hot tub specialists
- Lead value: $250-800 per job
- Monetization: Sell leads at $30-60 each or rent site for $500-1500/month

### Keyword Research Methodology

We identified 3 tiers of keywords:

#### Tier 1: Primary Money Keywords (Homepage + Service Pages)
| Keyword | Volume | Difficulty | Page Target |
|---|---|---|---|
| `hot tub removal wichita` | 80-120/mo | Very Low | Homepage H1 |
| `hot tub removal wichita ks` | 40-70/mo | Very Low | Homepage meta |
| `spa removal wichita` | 30-50/mo | Very Low | /services/spa-removal/ |
| `jacuzzi removal wichita` | 20-40/mo | Very Low | /services/jacuzzi-removal/ |
| `hot tub disposal wichita` | 20-30/mo | Very Low | Homepage body |
| `hot tub haul away wichita` | 15-25/mo | Very Low | Homepage body |

#### Tier 2: Informational/FAQ Keywords (People Also Ask)
| Keyword | Intent | Content Strategy |
|---|---|---|
| `how much does hot tub removal cost wichita` | Research | Pricing page + homepage FAQ |
| `who removes hot tubs in wichita` | Research | Homepage "Who We Are" section |
| `can you remove a hot tub from a deck` | Question | FAQPage schema + content |
| `city of wichita hot tub disposal` | Question | Blog post opportunity |
| `what is the fastest way to get a hot tub removed` | Question | Homepage CTA section |

#### Tier 3: Programmatic Geo Keywords (Suburb Pages)
Create one page per suburb for long-tail capture:
- `hot tub removal derby ks`
- `hot tub removal andover ks`
- `hot tub removal haysville ks`
- `spa removal goddard ks`

Each gets 10-50 searches/month but converts at 15-25% due to hyper-local intent.

### Keyword Research Tools (Free)
- Google Keyword Planner
- Google Search "People also ask" and "Related searches"
- Ubersuggest (free tier)
- AnswerThePublic for question-based keywords

---

## Phase 2: Technical Stack Selection

### Why Next.js 15 + Static Export

| Requirement | Solution |
|---|---|
| SEO-friendly rendering | Static HTML export (no JS required for crawlers) |
| Fast page speed | Pre-rendered pages, minimal JS |
| Schema markup | Native JSON-LD support |
| Clean URLs | App Router with trailing slashes |
| Easy deployment | Static files deploy anywhere |

### Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Export:** `output: 'export'` for static HTML
- **Hosting:** Any CDN (Vercel, Netlify, Cloudflare Pages)

### Why Static Export Over SSR
Static export is critical for this use case:
1. **Crawlers** see complete HTML immediately (no hydration needed)
2. **Page speed** is maximized (no server response time)
3. **Hosting** is free on most platforms
4. **GEO optimization** — AI crawlers prefer complete, readable pages

---

## Phase 3: On-Page SEO Implementation

### 1. Metadata & Head Tags

Every page needs:
```typescript
export const metadata: Metadata = {
  title: "Hot Tub Removal Wichita KS | Fast & Affordable Disposal Service",
  description: "Professional hot tub removal in Wichita, Kansas...",
  keywords: "hot tub removal wichita, spa removal wichita ks, jacuzzi removal wichita",
  alternates: { canonical: "https://wichitahottubremoval.com/services/hot-tub-removal/" },
  openGraph: {
    title: "...",
    description: "...",
    url: "...",
    siteName: "Wichita Hot Tub Removal",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "...", description: "..." },
};
```

### 2. Structured Data (JSON-LD Schema)

We implemented 3 schema types:

#### LocalBusiness Schema (layout.tsx)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Wichita Hot Tub Removal",
  "telephone": "+1-316-555-0199",
  "address": { "@type": "PostalAddress", "addressLocality": "Wichita", "addressRegion": "KS" },
  "geo": { "@type": "GeoCoordinates", "latitude": 37.6872, "longitude": -97.3301 },
  "serviceType": ["Hot Tub Removal", "Spa Removal", "Jacuzzi Removal"],
  "openingHours": ["Mo-Sa 07:00-19:00"],
  "priceRange": "$$"
}
```

#### FAQPage Schema (homepage)
Targets Google's "People Also Ask" and AI Overviews.

#### HowTo Schema (pricing page)
Step-by-step removal process with estimated time and cost.

### 3. Sitemap & Robots

**Sitemap (`sitemap.ts`):**
- Include all pages with `lastmod`, `changefreq`, `priority`
- Add `export const dynamic = "force-static"` for Next.js static export

**Robots (`robots.ts`):**
```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    sitemap: "https://wichitahottubremoval.com/sitemap.xml",
  };
}
```

**Critical:** Explicitly allow AI crawlers. These bots drive modern search visibility.

### 4. Internal Linking Structure

Homepage links to all major pages. Service pages link to pricing and contact. Every page links back to homepage.

```
Homepage
├── /services/hot-tub-removal/
├── /services/spa-removal/
├── /services/jacuzzi-removal/
├── /pricing/
├── /faq/
├── /areas-we-serve/
└── /contact/
```

### 5. URL Structure
- Use trailing slashes (`/services/hot-tub-removal/`)
- Hyphenate multi-word URLs
- Keep URLs short and keyword-rich

---

## Phase 4: Generative Engine Optimization (GEO)

### What is GEO?
GEO optimizes content for AI models (ChatGPT, Claude, Perplexity) that answer user queries directly. These AI answers increasingly replace traditional search results.

### GEO Tactics Implemented

#### 1. Citation-First Content
Answer the target query in the **first 60 words** of every page.

Example (homepage):
> "Professional hot tub removal in Wichita, KS costs $250-$800 depending on size and location. Same-day service available. Call (316) 555-0199 for a free estimate."

#### 2. Question-Based Headers (People Also Ask)
Use exact question phrasing that users type into Google:
- "How much does hot tub removal cost in Wichita, KS?"
- "Who removes hot tubs in Wichita, Kansas?"
- "Can you remove a hot tub from a deck in Wichita?"

Each question gets a direct, concise answer in the paragraph below.

#### 3. Named Entity Density
Mention specific entities AI models use for context:
- **Locations:** Wichita, Derby, Andover, Haysville, Sedgwick County
- **Brands:** Jacuzzi, Coleman, Intex, Hot Spring
- **Industry terms:** above-ground spa, portable spa, acrylic shell, plumbing disconnect

#### 4. llms.txt File
Created `/public/llms.txt` — a new standard for AI agent indexing. Provides a markdown-formatted summary of the entire site.

Format:
```markdown
# Wichita Hot Tub Removal
> Professional hot tub, spa, and jacuzzi removal services...
## Services
- [Hot Tub Removal](/services/hot-tub-removal/)
## Service Area
Wichita, Derby, Andover...
## Contact
- Phone: (316) 555-0199
```

#### 5. Machine-Readable Infrastructure
- JSON-LD schema on every page
- Semantic HTML (`<article>`, `<section>`, `<nav>`)
- Clear heading hierarchy (H1 → H2 → H3)

#### 6. Content Freshness Signals
- Last modified dates in sitemap
- "Updated [Month] [Year]" banners on pricing pages

---

## Phase 5: Website Build — Page Structure

### Pages Created

| Page | Purpose | Key Content |
|---|---|---|
| `/` (Home) | Conversion hub | Hero, trust badges, services overview, why choose us, how it works, service area, FAQ, CTA |
| `/services/hot-tub-removal/` | Service detail | What we remove, removal process, pricing guide, reasons to remove, CTA |
| `/services/spa-removal/` | Service detail | Types of spas, pricing, call to action |
| `/services/jacuzzi-removal/` | Service detail | Service details, what to expect, CTA |
| `/pricing/` | Price transparency | Cost breakdown table, factors affecting price, CTA |
| `/faq/` | Informational | Common questions with JSON-LD FAQPage schema |
| `/areas-we-serve/` | Local SEO | City list with links to suburb pages (future) |
| `/contact/` | Lead capture | Contact info, quote request form |

### Page Template Structure
Every page follows this pattern:
1. **SEO metadata** (title, description, canonical, OpenGraph)
2. **Hero section** (H1 + value prop + CTA buttons)
3. **Content sections** (H2s with keyword-rich headers)
4. **Social proof** (trust badges, stats)
5. **CTA section** (phone + form link)
6. **Footer** (links, contact, hours)

### Component Reusability
- Hero pattern reusable across service pages
- CTA section identical on all pages (builds familiarity)
- Footer shared globally

---

## Phase 6: Lead Capture & Contact Systems

### Contact Form (FormSubmit.co)
No backend needed. FormSubmit delivers emails directly.

```html
<form action="https://formsubmit.co/mohamed@owdsolutions.co.za" method="POST">
  <input type="hidden" name="_subject" value="New Hot Tub Removal Quote Request - Wichita" />
  <input type="hidden" name="_captcha" value="false" />
  <input type="text" name="name" required />
  <input type="email" name="email" />
  <input type="tel" name="phone" required />
  <textarea name="message"></textarea>
</form>
```

**Key features:**
- Captcha disabled (reduces friction)
- Descriptive subject line (easy to filter)
- Redirects back to contact page after submission

### WhatsApp Floating Button
Fixed bottom-right button linking to WhatsApp with pre-filled message.

```html
<a href="https://wa.me/27658475289?text=I%20need%20hot%20tub%20removal"
   target="_blank"
   class="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg">
  <!-- WhatsApp icon SVG -->
</a>
```

### Phone Number Display
Phone number visible in:
- Homepage hero
- Contact page
- Footer (every page)
- CTA sections (every page)

**Important:** When a real number is available, replace all instances. Use search & replace on the entire project.

---

## Phase 7: Images & Visual Assets

### Image Strategy for Local Service Sites

**What works:**
- Real photos of the actual service (crew working, equipment, results)
- Before/after shots
- Local landmarks (builds geo-relevance)

**What doesn't work:**
- Generic stock photos of massage/spa relaxation
- Resort pool images
- Photos with competitor branding

### Our Image Implementation
1. Sourced real hot tub removal photos from competitor sites (for reference)
2. Renamed with generic, descriptive filenames:
   - `hot-tub-removal-service.jpg`
   - `hot-tub-haul-away.jpg`
   - `hot-tub-unit.jpg`
3. Wrote keyword-rich alt text (no brand names)
4. Added `loading="lazy"` for performance
5. Used `width` and `height` attributes to prevent CLS

### Favicon
Created generic SVG favicon (`favicon.svg`) — no text, just a simple hot tub icon shape. Prevents any brand association issues.

---

## Phase 8: Off-Page SEO & Deployment Strategy

### Immediate Deployment Checklist
1. [ ] Build succeeds with `npm run build`
2. [ ] All pages export to `out/` folder
3. [ ] Images copy to `out/images/`
4. [ ] `sitemap.xml` and `robots.txt` present in `out/`
5. [ ] Deploy to Vercel/Netlify

### Google Search Console Setup
1. Add property: `wichitahottubremoval.com`
2. Verify via DNS or HTML tag
3. Submit sitemap: `/sitemap.xml`
4. Request indexing for homepage and service pages

### Local SEO Foundations
1. **Google Business Profile** (create once you have a real phone number)
2. **Bing Places** (often overlooked, easy wins)
3. **Apple Business Connect** (growing in importance)
4. **Industry directories:** Yelp, HomeAdvisor, Thumbtack, Angi

### Citation Building
Get listed consistently across directories with:
- Same business name
- Same phone number
- Same address (or "Serving Wichita, KS")
- Link back to website

### Link Building Strategy (Month 2+)
1. Guest posts on home improvement blogs
2. Local chamber of commerce membership
3. Sponsor local events (get listed on event pages)
4. Partner with pool/spa retailers (referral exchange)
5. HARO (Help A Reporter Out) for journalist quotes

---

## Phase 9: Monetization Options

### Option A: Lead Generation (Immediate)
- Collect leads via form + phone
- Sell to local junk removal companies
- Price: $30-60 per qualified lead
- Volume target: 10-20 leads/month = $300-1200/month

### Option B: Site Rental (Month 3+)
- Rent the ranked site to a local service provider
- Price: $500-1500/month
- Contract: 6-12 months
- They answer calls, you maintain the site

### Option C: Site Sale (Month 6+)
- Sell the entire asset (domain + site + rankings)
- Price: 20-30x monthly revenue
- Example: $1000/month revenue = $20,000-30,000 sale price

### Lead Tracking Setup
Before monetizing, implement call tracking:
- CallRail or CallTrackingMetrics
- Unique phone numbers per traffic source
- Form submission notifications to email
- CRM integration (HubSpot free tier)

---

## Phase 10: Content Expansion Plan

### Month 1: Foundation (Complete)
- [x] Core pages (home, services, pricing, FAQ, contact)
- [x] Technical SEO (schema, sitemap, robots)
- [x] GEO optimization (llms.txt, FAQ schema)
- [x] Lead capture (form, WhatsApp, phone)

### Month 2: Authority Building
- [ ] Blog: "How Much Does Hot Tub Removal Cost in Wichita?"
- [ ] Blog: "Can You Remove a Hot Tub Yourself? DIY vs Professional"
- [ ] Blog: "What to Do With Your Old Hot Tub: Disposal Options in Wichita"
- [ ] Create suburb pages (Derby, Andover, Haysville)

### Month 3: Scale
- [ ] Add video content (removal process timelapse)
- [ ] Customer testimonials (text + photos)
- [ ] Before/after gallery page
- [ ] Seasonal content ("Winter Hot Tub Removal Special")

### Ongoing
- [ ] Update "last modified" dates quarterly
- [ ] Refresh pricing if market changes
- [ ] Add new suburbs as service area expands
- [ ] Monitor rankings and adjust content

---

## Key Learnings & Best Practices

### What Worked
1. **Static export** — Fast, free, crawler-friendly
2. **Citation-first content** — AI models and Google both reward direct answers
3. **Question-based headers** — Match real search queries exactly
4. **LocalBusiness schema** — Essential for map pack rankings
5. **FormSubmit** — Zero-cost form handling, no backend needed

### What to Avoid
1. **Unverified Unsplash URLs** — Always check images match the topic
2. **Hydration errors** — Don't put `<script>` tags in `<head>`; use `<body>`
3. **Email on public sites** — Use form handlers, not exposed email addresses
4. **Generic stock photos** — They hurt credibility and don't rank in image search
5. **Over-optimization** — Keyword stuffing triggers penalties; write naturally

### SEO Myths Debunked
- "You need backlinks to rank" — False for low-competition niches. Content + technical SEO wins first.
- "You need a blog to rank" — False. Service pages with FAQ schema outperform thin blog posts.
- "Social signals matter" — Not for local SEO. Focus on citations and reviews.

---

## Quick-Start Checklist for Your Next Site

1. [ ] Pick niche (use the 5-niche analysis method)
2. [ ] Buy domain (exact match or partial match keyword)
3. [ ] Set up Next.js project with static export
4. [ ] Create pages: home, 3 services, pricing, FAQ, contact
5. [ ] Add metadata, schema, sitemap, robots to every page
6. [ ] Write citation-first content with question headers
7. [ ] Set up contact form (FormSubmit) and WhatsApp button
8. [ ] Add real images with keyword alt text
9. [ ] Deploy and submit to Google Search Console
10. [ ] Build citations (directories, GBP, Bing)
11. [ ] Wait 2-4 weeks for indexing and initial rankings
12. [ ] Monitor and expand content based on Search Console data

---

## Tools & Resources

### Free SEO Tools
- Google Keyword Planner
- Google Search Console
- Google Analytics
- Bing Webmaster Tools
- Ubersuggest (limited free)
- AnswerThePublic (limited free)
- PageSpeed Insights

### Free Development Tools
- Next.js + TypeScript + Tailwind
- Vercel (free hosting)
- FormSubmit.co (free forms)
- Figma (free design)

### Recommended Paid Tools (When Scaling)
- Ahrefs ($99/mo) — Keyword research + competitor analysis
- Surfer SEO ($69/mo) — Content optimization
- CallRail ($45/mo) — Call tracking
- BrightLocal ($29/mo) — Citation management

---

*Document created: May 2026*
*Project: wichita-hot-tub-removal.com*
*Model: Rank & Rent / Lead Generation*
