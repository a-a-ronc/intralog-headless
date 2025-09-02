# Intralog Headless Website

This repository contains the source code for **Intralog’s headless company website**.  
The site is designed to showcase our **material handling expertise**—including warehouse automation technologies, turnkey engineering services, and real-world project showcases—while maintaining a clean, modern design.

---

## 🚀 Project Overview

Intralog is a **Tier 3 system integrator** (per STIQ 2025 standards), delivering automation and semi-automation projects in the ~$10M annual revenue range.  
Our team specializes in **mid-market distribution centers (300k–500k sq ft)**, supporting 3PLs and brand operators with scalable automation solutions.

This website serves to:

- Describe **design-build** process (why it is important and how we are unique in our approach)
- Present **solutions by category** (e.g., Function, Industry, Technology along with respective sub categories).
- Showcase our in house developed **software solutions** (Warehousr, DensityPro, Painless Permit)
- Highlight **services** (engineering and design and implementation along with respective sub categories).
- Provide **resources** (blog, videos, project spotlights).
- Offer **company insights** (About, Partners, Careers).
- Convert visitors via **contact forms and CTAs**.

---

## 🛠 Tech Stack

- **Framework:** [Next.js (App Router)](https://nextjs.org/), React, TypeScript   
- **Styling:** TailwindCSS
- **Images:** Next/Image + static assets under public/ (.jpg, .png, .svg, .avif)
- **Content:** Local pages + lib/media.ts registry (demo data in lib/demo.ts while transitioning) 

---

## Live Links
- **Production:** add link
- **Staging/Preview:** add link

---

## Getting Started
```bash
# Install
npm i

# Run dev server
npm run dev

# Build & start
npm run build
npm run start

# Lint / Type-check (add scripts if missing)
npm run lint
npm run typecheck

```
**Requirements:** Node 18+ (Next.js 14+ recommended)
---

## 📂 Project Structure
```bash
app/
  about/
  api/
  careers/
  case-studies/
  contact/
  design-build/
  partners/
  resources/
  services/
  software/
  solutions/
  globals.css
  layout.tsx
  page.tsx                 # Homepage

attached_assets/           # (temporary holding; thin out over time)

components/
  design-build/
  nav/
  CaseStudyCard.tsx
  ClientLogo.tsx
  Footer.tsx
  Header.tsx
  HoverMedia.tsx           # image/video hover behavior
  PartnerLogoRail.tsx
  SolutionPage.tsx         # core layout for solution verticals

lib/
  demo.ts                  # legacy/demo media (keeping while we migrate)
  media.ts                 # ✅ single source of truth for hero/gallery assets
  queries.ts               # (keep if used; remove if not)
  wp.ts                    # (keep if used; remove if not)

public/
  animations/
  clients/
  icons/
  images/                  # all site images live here

# Config
.next/                     # build output (ignored)
.env.example
.gitignore
next-env.d.ts
next.config.mjs
postcss.config.js
tailwind.config.js
tsconfig.json
vite.config.js             # only keep if actively used
package.json
package-lock.json
README.md

```


---

## ✨ Key Features

- **Hero & CTA sections** on every solution page
- **Video embeds** (e.g., Stow Pallet Shuttle, Modula Flexibox, Tompkins tSort, SEER forklift AMRs)
- **Benefits grid** + **How-it-works steps**
- **Gallery cards** for visual storytelling
- **Use case lists** for each technology
- **Dropdown mega-menu navbar** (Solutions, Services, Industries, Showcase, Resources, Company)
- **Responsive grid layouts** with cards and imagery
- **Modern typography & styling** with consistent underline headers

---

## 📈 Content Highlights

- **Pallet Shuttles**: High-density storage, FIFO/LIFO, cold-storage fit, NFPA flue compliance benefit.  
- **VLMs (Modula Lift + Flexibox)**: Goods-to-person picking, cold storage utility, tray accessories, visual aids, authentication.  
- **Conveyor & Sortation**: Belt, roller, chain, and pallet conveyors; high-speed sorters; integration with shuttles/palletizers.  
- **AMRs/AGVs**: Goods-to-Person ACR (HAI Robotics), robotic sortation (Tompkins), pallet AMRs/forklifts (SEER).  
- **Robotics (Picking/Palletizing)**: Vision-guided robots, collaborative robots, palletizing cells, ergonomic labor reduction.  

---

## 📸 Assets

- Partner/client logos (e.g., New Balance, Sportsman’s Warehouse, Little Giant, Lion Energy, Built Brands).  
- Custom generated/conceptual images for:
  - High-speed sortation
  - Multi-level conveyor (poly tier)
  - Automated induction
  - Pack station integration  

---

## 🔗 Live Links

- GitHub Repo: [intralog-headless](https://github.com/a-a-ronc/intralog-headless)  
- Demo: (Add Vercel/Replit link here once deployed)  

---

## 📬 Contributing / Feedback

For content updates (new projects, industries, or solution pages):  
1. Add images/logos to `public/clients` or `public/images/solutions/...`.  
2. Update the corresponding `page.tsx`.  
3. Push to GitHub → triggers redeploy.  

---

## 📢 Contact

Interested in automation or want to collaborate?  
📩 [Contact Us](https://intralog.io/contact)

---
