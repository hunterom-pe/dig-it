# Dig It Gardens — Homepage Redesign Concept

An unsolicited homepage redesign concept for [Dig It Gardens](https://www.digphx.com/), an independent plant nursery at 3015 N 16th Street, Phoenix, Arizona. Designed and built by [Hunter Made](https://huntermade.studio).

> **This is not the official Dig It Gardens website.** It is an independent design exploration, not affiliated with or endorsed by the business. The page says so in a bar at the top and again in the footer, and it asks search engines not to index it.

Design direction: **Modern × Urban Botanical**. Warm ivory and deep forest green, terracotta as the personality accent, teal and lavender used once each. Oversized condensed display type (Bricolage Grotesque) with a serif italic (Fraunces) for single words, and Hanken Grotesk for reading.

## Run it locally

Requires Node 20.19+ (Node 22 recommended).

```bash
npm install
npm run dev
```

Then open the URL Vite prints (http://localhost:5173 by default).

| Command           | What it does                                        |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Local dev server with hot reload                    |
| `npm run build`   | Type-check, then build the production site to `dist` |
| `npm run preview` | Serve the built `dist` folder locally               |
| `npm run lint`    | Lint with oxlint                                    |

No API keys, accounts or environment variables are needed. Photos load from Unsplash's CDN, so an internet connection is needed to see them.

## Where things live

```
src/
  data/
    site.ts        Business details, hours, every outgoing link, nav items
    workshops.ts   Workshop listings (edit this to update the homepage)
    images.ts      Every photo on the page, with alt text and source
  components/      One file per section: Header, Hero, Experience, Explore,
                   Workshops, DesignStudio, Events, Visit, Footer
  index.css        Design tokens (colours, fonts), type system, buttons, motion
netlify.toml       Build settings, headers, SPA fallback
```

### Updating workshops

Edit `src/data/workshops.ts`. Each entry has a title, date (`YYYY-MM-DD`), time, optional price, short blurb, an image key and a `registerUrl` pointing at the real booking page. The homepage shows the next three by date. Entries whose date has passed are hidden automatically, and if none are left the section switches to a preview that links to the official workshops page. There is no checkout on this site; "Register" always goes to digphx.com.

### Swapping photography

Edit `src/data/images.ts`. Replace an `id` with a local path (for example `/photos/entrance.jpg`, with the file in `public/photos/`) and update the `alt`.

## Content status

**Verified against digphx.com on 2026-11-09**

- Address, phone, email
- Hours: 8:30 AM – 5 PM, 7 days a week (from the Contact page)
- Instagram and Facebook links
- Two upcoming workshops (Nov 21 and Dec 5, 2026) with their times, prices and event pages
- Dig It Design description, and the "replies within 24 hours" note on the consultation form
- Private events offering (weddings, private/corporate events, private plant workshops)
- Gift cards are offered

**Needs owner confirmation before any real launch**

- Holiday or seasonal hours (the site lists only one set of hours)
- Workshop seat availability (the listings can sell out)
- All marketing copy on this page is concept copy written by Hunter Made
- Whether "Dig It Design" consultations should link to the existing form or a new one

**Placeholder**

- Every photograph. All are free-licence Unsplash images served from Unsplash's CDN. None show Dig It Gardens, and none show Dig It Design projects. The Design section labels its image as concept imagery on the page.
- The wordmark is set in type. The real Dig It logo is not used.

## GitHub

Repository: https://github.com/hunterom-pe/dig-it (branch: `main`)

The repository is currently **public**, which means the source code is visible to anyone regardless of how the Netlify site is protected. Make it private in GitHub under Settings → General → Danger Zone → Change visibility if the concept should stay under wraps. Netlify works the same with a private repository.

Never commit `node_modules`, `dist`, `.env` files or credentials. `.gitignore` already excludes them.

## Netlify

Build settings come from `netlify.toml`, so the dashboard needs no manual build configuration.

| Setting           | Value           |
| ----------------- | --------------- |
| Build command     | `npm run build` |
| Publish directory | `dist`          |
| Production branch | `main`          |
| Node version      | 22              |

`netlify.toml` also sets:

- `X-Robots-Tag: noindex, nofollow` on every response, on every deploy
- Basic security headers
- Long-lived caching for the fingerprinted files in `/assets`
- A single-page-app fallback so any path serves the app instead of a 404

### One-time setup in the Netlify dashboard

1. Sign in at https://app.netlify.com and choose **Add new project → Import an existing project**.
2. Pick **GitHub**, authorize Netlify if asked, and select `hunterom-pe/dig-it`.
3. Leave the build settings as detected (they are read from `netlify.toml`) and confirm the branch to deploy is `main`.
4. Click **Deploy**.
5. Turn on access protection before sharing the link (see below).

### How automatic deploys work

Once the repository is linked, every push to `main` triggers a new production build and deploy, usually live within a minute or two. Pull requests and other branches get their own preview URLs. If a build fails, the previous deploy stays live.

### Updating the site

```bash
git add -A
git commit -m "Describe the change"
git push
```

Netlify picks up the push and redeploys. Run `npm run build` first if you want to catch errors before pushing.

## Keeping it private

A `noindex` tag, an `X-Robots-Tag` header and an unlisted URL do **not** make a site private. They only ask search engines to stay away. Anyone who has or guesses the URL can open it.

For actual access control, use Netlify's password protection:

1. In the Netlify project, go to **Project configuration → Access & security → Visitor access**.
2. Under **Password protection**, choose to protect all deploys (or only non-production deploys) and set a shared password.
3. Share the URL and the password with the people who should see it.

Site-wide password protection is a paid-plan feature on Netlify. On the free plan the options are to keep the URL to yourself, show the concept from `npm run dev` or `npm run preview` on your own machine, or upgrade for the duration of the review. Check the Visitor access page in your own account to see what your plan includes, since Netlify changes plan features over time.

Before the site goes anywhere public: get the owners' approval, replace the placeholder photography with authorised images, and remove the `noindex` rules in `index.html` and `netlify.toml`.

## If the business approves

1. Photograph the nursery, the pottery, a workshop in progress and real Dig It Design projects, then swap them in via `src/data/images.ts`.
2. Have the owners confirm hours, copy and service descriptions.
3. Replace the typeset wordmark with the real logo.
4. Decide how workshops are maintained: keep the data file, or read listings from the existing booking system.
5. Build the inner pages (workshops, design, private events, contact).
6. Remove the concept disclaimers and `noindex` rules, then point the real domain at Netlify.
