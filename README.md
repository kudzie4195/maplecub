# MapleCub Landing Page

A Canadian daycare-search waitlist landing page, built with Next.js 14 (App Router) + Tailwind, deploying to Vercel with Supabase as the signup backend.

Domains owned: `maplecub.ca` (primary) and `maplecub.com`.

---

## 1. Local setup

```bash
cd maplecub
npm install
cp .env.local.example .env.local
# fill in your Supabase URL + anon key
npm run dev
```

Open http://localhost:3000.

---

## 2. Supabase setup

1. Create a new project at https://supabase.com (any region close to Canada — `ca-central-1` if available, otherwise `us-east-1`).
2. Project Settings → API → copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. SQL Editor → paste the contents of `supabase/schema.sql` → Run.
   - Creates a `signups` table with RLS enabled.
   - Anon key can **insert only**. It cannot read the list — you view signups from the Supabase Table Editor.

To export your list later:
- Supabase Dashboard → Table Editor → `signups` → Export as CSV.

---

## 3. Vercel deploy

1. Push this folder to a GitHub repo (e.g. `kudzi/maplecub`).
2. Vercel → New Project → Import the repo.
3. **Environment Variables** (set for Production, Preview, Development):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_SITE_URL` = `https://maplecub.ca`
4. Click **Deploy**.

---

## 4. Connect the domains

In Vercel → Project → Settings → Domains:

1. Add `maplecub.ca` as the **primary** domain.
2. Add `www.maplecub.ca` and configure it to **redirect** to `maplecub.ca` (or vice versa — pick one canonical host).
3. Add `maplecub.com` and `www.maplecub.com` and configure both to redirect to `https://maplecub.ca`.

DNS records (set these at your registrar):

| Host | Type | Value |
|------|------|-------|
| `@` (maplecub.ca) | `A` | `76.76.21.21` |
| `www` (maplecub.ca) | `CNAME` | `cname.vercel-dns.com` |
| `@` (maplecub.com) | `A` | `76.76.21.21` |
| `www` (maplecub.com) | `CNAME` | `cname.vercel-dns.com` |

Vercel will provision SSL automatically once DNS resolves.

> Why one canonical: pick `maplecub.ca` as canonical and 301-redirect `.com`. Splitting SEO across two TLDs hurts ranking.

---

## 5. Get Google indexing fast

Once the site is live at `https://maplecub.ca`:

1. **Google Search Console** → Add property → choose **Domain** property → verify via DNS TXT record.
2. Submit your sitemap: `https://maplecub.ca/sitemap.xml`.
3. URL Inspection tool → enter `https://maplecub.ca` → **Request indexing**.
4. (Optional) Same for **Bing Webmaster Tools** — you can import directly from Search Console.

The site already includes:
- `robots.ts` → serves `/robots.txt`
- `sitemap.ts` → serves `/sitemap.xml`
- Open Graph + Twitter meta tags
- `Organization` JSON-LD structured data
- `en-CA` lang attribute and Canadian-targeted keywords

---

## 6. File map

```
maplecub/
├─ app/
│  ├─ layout.tsx          # SEO metadata, fonts, JSON-LD
│  ├─ page.tsx            # Hero + form + value props
│  ├─ robots.ts           # /robots.txt
│  ├─ sitemap.ts          # /sitemap.xml
│  └─ globals.css         # Tailwind + maple-bg pattern
├─ components/
│  ├─ MapleLeaf.tsx       # Canadian flag-style leaf SVG
│  └─ SignupForm.tsx      # Name / email / province → Supabase
├─ lib/
│  └─ supabase.ts         # Client-side Supabase client
├─ public/
│  └─ favicon.svg
├─ supabase/
│  └─ schema.sql          # signups table + RLS policy
├─ .env.local.example
├─ next.config.js
├─ package.json
├─ postcss.config.js
├─ tailwind.config.ts
└─ tsconfig.json
```

---

## 7. Things to do after launch

- Add a `/privacy` page (Canadian PIPEDA compliance — you're collecting PII).
- Hook a transactional email (Resend or Supabase Auth emails) to send a welcome email on signup.
- Add Plausible or Vercel Analytics to track signup conversion.
- Add hCaptcha or Turnstile if you start seeing bot signups.
- Create a `/launching/[province]` page once you're ready to roll out province-by-province — great for SEO long-tail.
