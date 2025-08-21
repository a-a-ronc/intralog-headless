"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // ---- NAV DATA (unchanged from your version) ----
  const navItems = [
    {
      title: "Solutions",
      href: "/solutions",
      columns: [
        {
          heading: "By Technology",
          links: [
            { href: "/solutions/pallet-shuttles", label: "Pallet Shuttles" },
            { href: "/solutions/vlm", label: "Vertical Lift Modules (VLM)" },
            { href: "/solutions/conveyor", label: "Conveyor & Sortation Systems" },
            { href: "/solutions/amr-agv", label: "AMRs/AGVs" },
            { href: "/solutions/wcs-wes", label: "Warehouse Control & Execution Software" },
            { href: "/solutions/robotics", label: "Robotics (Picking, Palletizing)" },
          ],
        },
        {
          heading: "By Function",
          links: [
            { href: "/solutions/storage-retrieval", label: "Storage & Retrieval" },
            { href: "/solutions/picking-packing", label: "Picking & Packing" },
            { href: "/solutions/buffering", label: "Buffering/Sequencing" },
            { href: "/solutions/palletizing", label: "Palletizing" },
            { href: "/solutions/sortation", label: "Sortation" },
          ],
        },
        {
          heading: "By Industry",
          links: [
            { href: "/industries/retail-ecommerce", label: "Retail & E-Commerce" },
            { href: "/industries/food-beverage", label: "Food & Beverage" },
            { href: "/industries/manufacturing", label: "Manufacturing" },
            { href: "/industries/healthcare-pharma", label: "Healthcare/Pharma" },
            { href: "/industries/3pl", label: "Third-Party Logistics (3PL)" },
            { href: "/industries/sporting-goods", label: "Sporting Goods/Outdoors" },
          ],
        },
      ],
    },
    {
      title: "Services",
      href: "/services",
      columns: [
        {
          heading: "Consulting & Planning",
          links: [
            { href: "/services/supply-chain-analysis", label: "Supply-chain & Network Analysis" },
            { href: "/services/sku-profiling", label: "SKU Profiling/ABC Analysis" },
            { href: "/services/concept-selection", label: "Concept Selection" },
            { href: "/services/vendor-comparison", label: "Vendor Comparison" },
          ],
        },
        {
          heading: "Design & Engineering",
          links: [
            { href: "/services/facility-sizing", label: "Facility Sizing & Throughput Modeling" },
            { href: "/services/simulation", label: "Simulation & Digital Twins" },
            { href: "/services/layout-slotting", label: "Layout & Slotting" },
            { href: "/services/specification", label: "Specification Drafting" },
          ],
        },
        {
          heading: "Implementation & Support",
          links: [
            { href: "/services/value-engineering", label: "Value Engineering & Procurement" },
            { href: "/services/installation", label: "Installation & Commissioning" },
            { href: "/services/controls-integration", label: "Controls Integration" },
            { href: "/services/training-support", label: "Training & Support" },
          ],
        },
      ],
    },
    {
      title: "Industries",
      href: "/industries",
      columns: [
        {
          heading: "Market Focus",
          links: [
            { href: "/industries/mid-market-warehouses", label: "Mid-market Warehouses" },
            { href: "/industries/sporting-goods", label: "Sporting Goods" },
            { href: "/industries/outdoor-adventure", label: "Outdoor & Adventure" },
            { href: "/industries/apparel", label: "Apparel" },
            { href: "/industries/food-beverage", label: "Food & Beverage" },
            { href: "/industries/energy-consumer", label: "Energy/Consumer Brands" },
          ],
        },
      ],
    },
    {
      title: "Showcase",
      href: "/case-studies",
      columns: [
        {
          heading: "Project Gallery",
          links: [
            { href: "/case-studies", label: "All Projects" },
            { href: "/case-studies?client=new-balance", label: "New Balance" },
            { href: "/case-studies?client=sportsmans", label: "Sportsman's Warehouse" },
            { href: "/case-studies?client=little-giant", label: "Little Giant" },
            { href: "/case-studies?client=lion-energy", label: "Lion Energy" },
            { href: "/case-studies?client=built-brands", label: "Built Brands" },
          ],
        },
      ],
    },
    {
      title: "Resources",
      href: "/resources",
      columns: [
        {
          heading: "Content Library",
          links: [
            { href: "/resources/blog", label: "Blog" },
            { href: "/resources/videos", label: "Videos" },
            { href: "/resources/project-highlights", label: "Project Highlights" },
            { href: "/resources/events", label: "News & Events" },
          ],
        },
        {
          heading: "Topics",
          links: [
            { href: "/resources?topic=consulting", label: "Consulting" },
            { href: "/resources?topic=automation", label: "Automation" },
            { href: "/resources?topic=software", label: "Software" },
          ],
        },
      ],
    },
    {
      title: "Company",
      href: "/about",
      columns: [
        {
          heading: "About Intralog",
          links: [
            { href: "/about", label: "About Us" },
            { href: "/about/why-choose-us", label: "Why Choose Us" },
            { href: "/partners", label: "Partners" },
            { href: "/careers", label: "Careers" },
          ],
        },
      ],
    },
  ];
  // ------------------------------------------------

  return (
    <header className="header">
      <div className="container inner">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Intralog"
            width={140}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <div key={item.title} className="relative group">
              <Link
                href={item.href}
                className="py-2 text-slate-700 hover:text-slate-900 font-medium"
              >
                {item.title}
              </Link>

              {/* Dropdown (mega menu) */}
              <div
                className="
                  invisible opacity-0 translate-y-2 pointer-events-none
                  group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                  focus-within:visible focus-within:opacity-100 focus-within:translate-y-0
                  absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[720px] max-w-[90vw]
                  rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-lg shadow-xl
                  transition-all duration-200
                "
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
                  {item.columns?.map((col) => (
                    <div key={col.heading}>
                      <h4 className="mb-2 text-sm font-semibold text-slate-900">
                        {col.heading}
                      </h4>
                      <ul className="space-y-1.5">
                        {col.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="block rounded-md px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Contact Button */}
          <Link
            href="/contact"
            className="rounded-lg bg-slate-900 px-4 py-2 text-white hover:opacity-90"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-slate-700"
        >
          <span>Menu</span>
          <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
            <path d="M2 6h16M2 10h16M2 14h16" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer (simple, no dropdowns) */}
      {open && (
        <div className="md:hidden border-t border-slate-200">
          <div className="container py-3">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-slate-900 px-4 py-2 text-white w-max mt-3 inline-block"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
