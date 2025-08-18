# Intralog Headless (Next.js + WordPress)

A minimal headless starter for intralog.io. Edit content in WordPress (via WPGraphQL), render with Next.js, deploy on Replit.

## 1) WordPress setup
- Install/activate **WPGraphQL** plugin.
- (Optional) Create CPTs for `Solutions`, `Case Studies`, `Partners` or just use Pages/Posts to start.
- Make sure your GraphQL endpoint is reachable at `/graphql`.
- Note your **media host** (domain that serves images) for `WP_MEDIA_HOST` env var.

## 2) Local/Replit env
- Copy `.env.example` to `.env` and fill values.
- On Replit, add the same secrets in the Secrets tab (Environment Variables).

## 3) Scripts
- `npm run dev` — start in dev
- `npm run build && npm start` — production

## 4) Pages overview
- `/` — Home: pulls a small list of "partners" and "case studies" (fallbacks included).
- `/partners` — grid of partners.
- `/case-studies` — list; click into `/case-studies/[slug]`.
- `/contact` — simple contact form posts to `/api/contact` (nodemailer/Gmail).

## 5) Deploy on Replit
- Create a Deployment (Autoscale or Reserved VM).
- Set build: `npm run build`
- Set run: `npm start`
- Add custom domain **www.intralog.io** in Deployment → Custom Domains; then create the CNAME in your DNS.
- Forward root apex `intralog.io` to `https://www.intralog.io` at your DNS provider.

## 6) Notes
- This starter uses **fetch** to call WPGraphQL. You can swap in a client later.
- Image components rely on Next/Image and `WP_MEDIA_HOST` so remote images are optimized.
- The GraphQL queries are intentionally conservative (title, excerpt, featured image) to work without ACF. Expand as you add fields.
