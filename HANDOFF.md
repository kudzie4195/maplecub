# MapleCub — Build Handoff

This document hands off everything needed to ship the MapleCub landing page. The previous conversation scaffolded the project, picked a design direction (v5 — magazine-style), and prepared deployment steps. The remaining work is wiring the approved design into code and deploying.

---

## 1. What MapleCub is

**MapleCub is the Canadian version of CloverMap.** It is a family-life app for Canadian parents covering two things:

- **Licensed daycare search** — every licensed centre / dayhome / Montessori across Canada, with real availability, waitlist tracking, and `$10-a-day` subsidy participation.
- **Family events & activities** — storytimes, classes, weekend events, camps, PA-day drop-ins.

Tagline: *"Daycare. Story time. Saturdays. Sorted."*

Positioning copy: *"One Canadian app for licensed daycare, weekend events, and the parts of family life that don't fit in a calendar."*

The owner already operates CloverMap (US version) on Vercel + Supabase. MapleCub uses the same stack.

**Domains owned:** `maplecub.ca` (primary) and `maplecub.com` (will 308 → .ca).

---

## 2. Tech stack

- **Framework:** Next.js 14.2.5 (App Router, TypeScript)
- **Styling:** Tailwind CSS 3.4 (custom palette: maple red, cream, sage, amber)
- **Backend:** Supabase (Postgres + RLS, anon key for client-side inserts)
- **Hosting:** Vercel
- **Repo:** to be created at `github.com/kudzi/maplecub`

---

## 3. Current state of the code

Project lives at `/Users/kudzi/Documents/Claude/Projects/Daycare Search app (1)/maplecub`.

**Already built and committed-ready:**
- Full Next.js scaffold (`package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.js`, `postcss.config.js`)
- App Router pages: `app/layout.tsx` (with SEO metadata, JSON-LD, Tabler icon CDN link), `app/page.tsx` (landing page), `app/robots.ts`, `app/sitemap.ts`, `app/globals.css`
- Components: `components/MapleLeaf.tsx`, `components/SignupForm.tsx`
- Supabase client: `lib/supabase.ts`
- SQL schema: `supabase/schema.sql` (creates `signups` table, unique email index, insert-only RLS policy)
- Public assets: `public/favicon.svg`
- Config files: `.gitignore`, `.env.local.example`, `README.md`

**TypeScript compiles cleanly.** First build was verified end-to-end (`npx next build` succeeded, generated 6 static pages).

**Current visual state:** code is at "v2" design level — cream `#FBF8F4` background, maple red `#B11226` accents, two-column hero with form on right, three-step "how it works", FAQ, footer. It's professional but the approved final design is **v5** (see next section).

---

## 4. Approved design — v5 magazine-style

After several preview iterations, the owner approved **v5**. To bring the code from v2 to v5, the next agent should update `app/page.tsx`, `app/globals.css`, and `tailwind.config.ts` to add:

### Hero section (biggest change)
- **Magazine-style framing:** small badge reading *"Issue 01 · Spring 2026"* (use current year/season dynamically).
- **Headline:** four short staccato lines using serif italic for the last word.
  ```
  Daycare.
  Story time.
  Saturdays.
  Sorted.    ← maple red, italic
  ```
- **Inline mini-form CTA** below the hero text: a single rounded-pill input mockup with maple red "Join →" button. Real form moves to the dedicated dark module further down.
- **Layered photo composition on the right:** TWO polaroid-style cards (rotated -2° and -9°), one large hero photo at ~240×300px and one secondary at ~110×130px, both with white paper borders, drop shadows, and handwritten serif italic captions ("Saturday morning, Riverdale" etc.).
- **A floating product UI card** overlapping the main polaroid showing a daycare result (name, distance, $10/day badge, "2 spots" indicator, mini "Join waitlist" button).
- **A floating event card** with date chip ("SAT 17") tucked at the top-right of the composition.
- Two animated falling maple leaves (CSS keyframe rotation + translateY).

### Real photos
The polaroid blocks need real photos. **Use `next/image` with Unsplash hotlinked URLs** for v1. Owner can replace later with their own photography. Recommended search terms on Unsplash: `canadian family`, `daycare children`, `toddler reading`, `kids playing outdoors`, `parent child autumn`. Keep mood consistent — warm/golden-hour lighting across all three images. Example URL format: `https://images.unsplash.com/photo-XXXX?w=800&q=80&fit=crop`. Configure `next.config.js` to whitelist `images.unsplash.com`.

### Province ticker
A dark `bg-cream-900` strip immediately under the hero, full-width, with all 13 provinces and territories scrolling horizontally on a 36-second CSS keyframe loop. Each entry gets a colored dot from the rotating palette: maple red, sage, amber, dusty blue, terracotta, blush. Gradient mask on both edges for the fade effect.

### "This weekend in Toronto" curated cards row
Three event cards in a 3-column grid. Each has an 80px tall colored gradient header (sage, peach, dusty blue) with subtle abstract SVG decoration suggesting photo content, then a body with date pill, price/free pill, event name, venue. Section heading uses the editorial pattern: small uppercase maple-red eyebrow + serif h2.

### Testimonial / social proof
An avatar stack (5 overlapping 32px circles, last one is `+412` count badge), centered, with caption *"Joining families across Canada"*. Below it, a single testimonial card with cream-50 background, italic quote icon, serif quote text, and attribution to "Priya M. · Toronto · mum of two". Avatar circles use radial gradients suggesting photos (replace with real photos when available).

### Dedicated form module
Dark `bg-cream-900` section with a large ghost maple-leaf watermark in the corner (5% opacity), centered content, gold amber eyebrow text "SAVE YOUR SPOT", serif headline *"Be the first family in."*, then a white rounded form card containing name/email/province inputs and a maple-gradient submit button.

### Color palette (in `tailwind.config.ts`)
```
maple.600   #B11226   (primary brand red)
maple.700   #8B0E1F   (darker hover)
cream.100   #FBF5EB   (page background)
cream.900   #2A2620   (dark sections, primary text)
sage        #6F8A65   (secondary accent)
sage-light  #A8C29C   (sage gradients)
amber       #D48F28   (tertiary accent / gold)
blush       #FBD9CC → #C97E66  (gradient for daycare card)
dusty-blue  #A4B4C2   (event accent)
terracotta  #D88F7C   (illustration warmth)
```

### Animations needed (Tailwind keyframes)
- `mcMarq` — horizontal marquee for ticker
- `mcSpin` — slow rotation for maple-leaf sun (if illustration used)
- `mcBob` — gentle leaf bobbing
- `mcFloat` — vertical float for product UI cards
- `mcTwinkle` — opacity pulse for accent dots

### Typography
- **Headings:** Iowan Old Style / Georgia / Times New Roman (serif fallback chain). Add to `tailwind.config.ts` font family.
- **Body:** system sans (existing setup is fine).
- **Editorial captions:** serif italic.

---

## 5. Files needing updates

| File | Status | Action |
|---|---|---|
| `app/page.tsx` | v2 layout | **Rewrite to v5 magazine structure** |
| `app/globals.css` | basic | Add keyframes (mcMarq, mcSpin, mcBob, mcFloat, mcTwinkle), polaroid shadow utility |
| `tailwind.config.ts` | partial | Add sage/amber/blush/dusty-blue/terracotta to palette, add serif font family, add animation keyframes |
| `next.config.js` | minimal | Add `images.remotePatterns` for `images.unsplash.com` |
| `components/SignupForm.tsx` | v2 styled | Restyle for the dedicated dark form module (white card on dark bg, maple gradient button) |
| `components/MapleLeaf.tsx` | done | No changes |
| `app/layout.tsx` | done | Verify Tabler icons CDN link is present (it is) |
| `lib/supabase.ts` | done | No changes |
| `supabase/schema.sql` | done | No changes — run as-is in Supabase |

---

## 6. Supabase setup

1. Dashboard → New Project. Name: `maplecub`. DB password: generate, store safely. Region: `ca-central-1` if available, otherwise `us-east-1`.
2. SQL Editor → New query → paste contents of `supabase/schema.sql` → Run. Creates the `signups` table with insert-only RLS policy.
3. Settings → API → copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Verify: insert a test row via SQL editor, confirm visible in Table Editor, delete it.

---

## 7. Vercel setup

1. GitHub: create `kudzi/maplecub` (private). Push the local repo:
   ```bash
   cd "/Users/kudzi/Documents/Claude/Projects/Daycare Search app (1)/maplecub"
   git init && git add . && git commit -m "Initial MapleCub"
   git branch -M main
   git remote add origin git@github.com:kudzi/maplecub.git
   git push -u origin main
   ```
2. Vercel → Add New → Project → import `maplecub`. Auto-detects Next.js.
3. Environment Variables (all three environments):
   - `NEXT_PUBLIC_SUPABASE_URL` = (from Supabase)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (from Supabase)
   - `NEXT_PUBLIC_SITE_URL` = `https://maplecub.ca`
4. Deploy. Test the *.vercel.app URL — submit the form, verify the row lands in Supabase.

---

## 8. Domain setup

In **Vercel → Project → Settings → Domains**:

1. Add `maplecub.ca` → mark as **primary**.
2. Add `www.maplecub.ca` → **Redirect to** `maplecub.ca`.
3. Add `maplecub.com` → **Redirect to** `https://maplecub.ca` (308 permanent).
4. Add `www.maplecub.com` → **Redirect to** `https://maplecub.ca`.

DNS records at registrar:

| Domain | Host | Type | Value |
|---|---|---|---|
| maplecub.ca | `@` | A | `76.76.21.21` |
| maplecub.ca | `www` | CNAME | `cname.vercel-dns.com` |
| maplecub.com | `@` | A | `76.76.21.21` |
| maplecub.com | `www` | CNAME | `cname.vercel-dns.com` |

SSL is automatic once DNS resolves (5–60 min). `.ca` is canonical because splitting SEO across TLDs hurts ranking.

---

## 9. Google indexing

Once `https://maplecub.ca` resolves:

1. Google Search Console → Add Property → Domain. Verify via DNS TXT.
2. Submit sitemap: `https://maplecub.ca/sitemap.xml` (already auto-generated by Next.js).
3. URL Inspection → enter `https://maplecub.ca` → **Request indexing**. Usually crawled within hours.
4. Optional: same in Bing Webmaster Tools (can import from GSC).

The site already includes: `robots.ts`, `sitemap.ts`, full OpenGraph + Twitter meta tags, `Organization` JSON-LD structured data, `en-CA` language attribute, Canadian-targeted keywords in metadata.

---

## 10. Post-launch checklist

- Add `/privacy` page (Canadian PIPEDA compliance is required since you're collecting PII).
- Add `/terms` page.
- Hook a transactional email provider (Resend recommended) for welcome emails on signup.
- Add Vercel Analytics or Plausible for conversion tracking.
- Add hCaptcha or Cloudflare Turnstile if bot signups appear.
- Eventually replace Unsplash photos with real photography of Canadian families.
- Build `/launching/[province]` pages for SEO long-tail (one per province as you go live).

---

## 11. What the next agent should do, in order

1. **Read this file first.** Then read `app/page.tsx`, `tailwind.config.ts`, and `app/globals.css` to see current state.
2. **Confirm scope** with the user: "Should I wire the v5 design now, or ship v2 first and iterate?"
3. **If wiring v5:**
   - Update `tailwind.config.ts` with full palette and animations
   - Update `app/globals.css` with keyframes and polaroid utilities
   - Update `next.config.js` to allow `images.unsplash.com`
   - Rewrite `app/page.tsx` with all v5 sections (hero composition, ticker, weekend cards, testimonial, form module)
   - Restyle `components/SignupForm.tsx` for the dark module
   - Pick 3 Unsplash photo URLs and slot them into the polaroids using `next/image`
   - Run `npm install && npx tsc --noEmit` to verify
4. **Walk user through Supabase setup** (Section 6).
5. **Walk user through GitHub + Vercel deploy** (Section 7).
6. **Walk user through domain DNS** (Section 8) — owner has both `.ca` and `.com`.
7. **Walk user through Google Search Console** (Section 9) for indexing.
8. **Provide post-launch checklist** (Section 10).

---

## 12. Conversation context / preferences learned

- Owner is non-developer but technically literate.
- Owner already uses Vercel + Supabase for CloverMap, so console walkthrough can be terse.
- Owner cares about visual polish — went through 5 design iterations to land on v5.
- Owner wanted real photos (not just illustrations) and was told yes via `next/image` + Unsplash.
- Preferred palette is Canadian-red anchor with warm secondary colors (sage, amber, blush, terracotta).
- Preferred typography pairing is serif headlines (Iowan Old Style / Georgia) with sans body.
- Site is primarily for **Google indexing + waitlist building** before product launch.

---

## File locations

- **Project root:** `/Users/kudzi/Documents/Claude/Projects/Daycare Search app (1)/maplecub`
- **This handoff:** `/Users/kudzi/Documents/Claude/Projects/Daycare Search app (1)/maplecub/HANDOFF.md`
- **Schema for Supabase:** `/Users/kudzi/Documents/Claude/Projects/Daycare Search app (1)/maplecub/supabase/schema.sql`
- **Env template:** `/Users/kudzi/Documents/Claude/Projects/Daycare Search app (1)/maplecub/.env.local.example`
- **Existing README:** `/Users/kudzi/Documents/Claude/Projects/Daycare Search app (1)/maplecub/README.md`
