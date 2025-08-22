# Intralog Headless Website

This repository contains the source code for **Intralog’s headless company website**.  
The site is designed to showcase our **material handling expertise**—including warehouse automation technologies, turnkey engineering services, and real-world project showcases—while maintaining a clean, modern design.

---

## 🚀 Project Overview

Intralog is a **Tier 3 system integrator** (per STIQ 2025 standards), delivering automation and semi-automation projects in the ~$10M annual revenue range.  
Our team specializes in **mid-market distribution centers (300k–500k sq ft)**, supporting 3PLs and brand operators with scalable automation solutions.

This website serves to:

- Present **solutions by category** (e.g., Pallet Shuttles, VLMs, Conveyor & Sortation, AMRs/AGVs, Robotics).
- Highlight **services** (consulting, design/engineering, implementation, support).
- Showcase **industries we serve** (retail/e-commerce, food & beverage, manufacturing, 3PL, etc.).
- Feature **customer projects** (Showcase gallery with photos, videos, drawings).
- Provide **resources** (blog, videos, events).
- Offer **company insights** (About, Partners, Careers).
- Convert visitors via **contact forms and CTAs**.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 13+ (App Router)](https://nextjs.org/)  
- **CMS**: WordPress (Headless, via GraphQL + `wpFetch` queries)  
- **Styling**: TailwindCSS + custom utility classes  
- **Deployment**: Vercel / Replit + GitHub workflow  
- **Assets**: Optimized SVG/PNG logos, hero images, and conceptual graphics  
- **Videos**: YouTube embeds for solution overviews, vendor demos, and customer highlight reels  

---

## 📂 Project Structure
app/
├─ layout.tsx # Global layout
├─ page.tsx # Homepage
├─ solutions/ # Solution categories
│ ├─ pallet-shuttles/ # Stow Pallet Shuttle highlight
│ ├─ vlm/ # Modula VLMs + Flexibox
│ ├─ conveyor/ # Conveyor & Sortation systems
│ ├─ amr-agv/ # AMRs & AGVs (HAI, SEER, Tompkins)
│ ├─ robotics/ # Picking & Palletizing robots
├─ case-studies/ # Showcase gallery
├─ services/ # Consulting, Design, Implementation
├─ industries/ # Industry verticals
├─ resources/ # Blog, videos, events
├─ about/ # Company info
├─ partners/ # Client & vendor partners
public/
├─ clients/ # Logos (SVG/PNG)
├─ images/solutions/ # Solution galleries


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
