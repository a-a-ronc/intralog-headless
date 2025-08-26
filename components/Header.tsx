"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Which top-level item is open (desktop). null = none
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  // timer for delayed close
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // tweak this to make the menu linger longer/shorter
  const CLOSE_DELAY_MS = 250; // try 250–400 for a forgiving feel

  const openNow = (i: number) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenIdx(i);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenIdx(null), CLOSE_DELAY_MS);
  };

  // ---- NAV DATA  ----
  const navItems = [
    {
      title: "Design-Build",
      href: "/design-build",
      columns: [
        {
          heading: "Our Approach",
          links: [
            { href: "/design-build/our-process", label: "Our Process" },
            { href: "/design-build/why-design-build", label: "Why Design-Build" },
          ],
        },
      ],
    },
    {
      title: "Solutions",
      href: "/solutions",
      columns: [
        {
          heading: "By Function",
          links: [
            { href: "/solutions/by-function/store-more-in-less-space", label: "Store More in Less Space" },
            { href: "/solutions/by-function/move-product-efficiently", label: "Move Product Efficiently" },
            { href: "/solutions/by-function/pick-and-pack-faster", label: "Pick & Pack Faster" },
            { href: "/solutions/by-function/fulfill-orders-accurately", label: "Fulfill Orders Accurately" },
          ],
        },
        {
          heading: "By Technology",
          links: [
            { href: "/solutions/by-technology/conveyor-and-sortation", label: "Conveyor & Sortation" },
            { href: "/solutions/by-technology/goods-to-person-vlms", label: "Goods-to-Person / VLMs" },
            { href: "/solutions/by-technology/pallet-shuttle-systems", label: "Pallet Shuttle Systems" },
            { href: "/solutions/by-technology/print-and-apply", label: "Print & Apply" },
            { href: "/solutions/by-technology/palletizing-and-de-palletizing", label: "Palletizing / De-Palletizing" },
            { href: "/solutions/by-technology/conventional-storage-systems", label: "Conventional Storage Systems" },
          ],
        },
        {
          heading: "By Industry",
          links: [
            { href: "/solutions/by-industry/aerospace-and-defense", label: "Aerospace & Defense" },
            { href: "/solutions/by-industry/cold-storage-warehousing", label: "Cold Storage Warehousing" },
            { href: "/solutions/by-industry/food-and-beverage", label: "Food & Beverage" },
            { href: "/solutions/by-industry/industrial-distribution", label: "Industrial Distribution" },
            { href: "/solutions/by-industry/manufacturing", label: "Manufacturing" },
            { href: "/solutions/by-industry/retail-and-ecommerce", label: "Retail & E-commerce" },
            { href: "/solutions/by-industry/third-party-logistics", label: "Third Party Logistics (3PL)" },
          ],
        },
      ],
    },
    {
      title: "Software",
      href: "/software",
      columns: [
        {
          heading: "Our Software Solutions",
          links: [
            { href: "/software/warehousr", label: "Warehousr (Open Source)" },
            { href: "/software/densitypro", label: "DensityPro" },
            { href: "/software/lully", label: "Lully (Partner Software)" },
            { href: "/software/painlesspermit", label: "PainlessPermit (Beta)" },
          ],
        },
      ],
    },
    {
      title: "Services",
      href: "/services",
      columns: [
        {
          heading: "Engineering & Design",
          links: [
            { href: "/services/engineering-and-design/industrial-real-estate-evaluation", label: "Industrial Real Estate Evaluation" },
            { href: "/services/engineering-and-design/data-analysis-and-system-design", label: "Data Analysis & System Design" },
            { href: "/services/engineering-and-design/simulation-and-emulation", label: "Simulation & Emulation" },
          ],
        },
        {
          heading: "Implementation",
          links: [
            { href: "/services/implementation/project-management", label: "Project Management" },
            { href: "/services/implementation/code-compliance-and-permits", label: "Code Compliance & Permits" },
            { href: "/services/implementation/installation", label: "Installation" },
            { href: "/services/implementation/commissioning-and-training", label: "Commissioning & Training" },
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
            { href: "/resources/project-spotlights", label: "Project Spotlights" },
            { href: "/resources/blog", label: "Blog" },
            { href: "/resources/videos", label: "Videos" },
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
            src="/images/logo.png"
            alt="Intralog"
            width={140}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => openNow(i)}
                onMouseLeave={scheduleClose}
                onFocus={() => openNow(i)}
                onBlur={scheduleClose}
              >
                <Link
                  href={item.href}
                  className="py-2 text-slate-700 hover:text-slate-900 font-medium"
                  onClick={(e) => {
                    // Allow navigation to index page
                    e.stopPropagation();
                  }}
                >
                  {item.title}
                </Link>

                {/* Dropdown (mega menu) */}
                {item.columns && (
                  <div
                    className={[
                      "absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[720px] max-w-[90vw]",
                      "rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-lg shadow-xl",
                      "transition-all duration-150",
                      isOpen
                        ? "opacity-100 translate-y-0 visible pointer-events-auto"
                        : "opacity-0 translate-y-2 invisible pointer-events-none",
                    ].join(" ")}
                    // keep open when hovering inside the panel
                    onMouseEnter={() => openNow(i)}
                    onMouseLeave={scheduleClose}
                  >
                    {/* optional: tiny hover bridge to prevent flicker while crossing the gap */}
                    <div className="absolute -top-2 left-0 right-0 h-2" />

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
                      {item.columns.map((col) => (
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
                )}
              </div>
            );
          })}

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
