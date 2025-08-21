
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      title: 'Solutions',
      href: '/solutions',
      columns: [
        {
          heading: 'By Technology',
          links: [
            { href: '/solutions/pallet-shuttles', label: 'Pallet Shuttles' },
            { href: '/solutions/vlm', label: 'Vertical Lift Modules (VLM)' },
            { href: '/solutions/conveyor', label: 'Conveyor & Sortation Systems' },
            { href: '/solutions/amr-agv', label: 'AMRs/AGVs' },
            { href: '/solutions/wcs-wes', label: 'Warehouse Control & Execution Software' },
            { href: '/solutions/robotics', label: 'Robotics (Picking, Palletizing)' },
          ],
        },
        {
          heading: 'By Function',
          links: [
            { href: '/solutions/storage-retrieval', label: 'Storage & Retrieval' },
            { href: '/solutions/picking-packing', label: 'Picking & Packing' },
            { href: '/solutions/buffering', label: 'Buffering/Sequencing' },
            { href: '/solutions/palletizing', label: 'Palletizing' },
            { href: '/solutions/sortation', label: 'Sortation' },
          ],
        },
        {
          heading: 'By Industry',
          links: [
            { href: '/industries/retail-ecommerce', label: 'Retail & E-Commerce' },
            { href: '/industries/food-beverage', label: 'Food & Beverage' },
            { href: '/industries/manufacturing', label: 'Manufacturing' },
            { href: '/industries/healthcare-pharma', label: 'Healthcare/Pharma' },
            { href: '/industries/3pl', label: 'Third-Party Logistics (3PL)' },
            { href: '/industries/sporting-goods', label: 'Sporting Goods/Outdoors' },
          ],
        },
      ],
    },
    {
      title: 'Services',
      href: '/services',
      columns: [
        {
          heading: 'Consulting & Planning',
          links: [
            { href: '/services/supply-chain-analysis', label: 'Supply-chain & Network Analysis' },
            { href: '/services/sku-profiling', label: 'SKU Profiling/ABC Analysis' },
            { href: '/services/concept-selection', label: 'Concept Selection' },
            { href: '/services/vendor-comparison', label: 'Vendor Comparison' },
          ],
        },
        {
          heading: 'Design & Engineering',
          links: [
            { href: '/services/facility-sizing', label: 'Facility Sizing & Throughput Modeling' },
            { href: '/services/simulation', label: 'Simulation & Digital Twins' },
            { href: '/services/layout-slotting', label: 'Layout & Slotting' },
            { href: '/services/specification', label: 'Specification Drafting' },
          ],
        },
        {
          heading: 'Implementation & Support',
          links: [
            { href: '/services/value-engineering', label: 'Value Engineering & Procurement' },
            { href: '/services/installation', label: 'Installation & Commissioning' },
            { href: '/services/controls-integration', label: 'Controls Integration' },
            { href: '/services/training-support', label: 'Training & Support' },
          ],
        },
      ],
    },
    {
      title: 'Industries',
      href: '/industries',
      columns: [
        {
          heading: 'Market Focus',
          links: [
            { href: '/industries/mid-market-warehouses', label: 'Mid-market Warehouses' },
            { href: '/industries/sporting-goods', label: 'Sporting Goods' },
            { href: '/industries/outdoor-adventure', label: 'Outdoor & Adventure' },
            { href: '/industries/apparel', label: 'Apparel' },
            { href: '/industries/food-beverage', label: 'Food & Beverage' },
            { href: '/industries/energy-consumer', label: 'Energy/Consumer Brands' },
          ],
        },
      ],
    },
    {
      title: 'Showcase',
      href: '/case-studies',
      columns: [
        {
          heading: 'Project Gallery',
          links: [
            { href: '/case-studies', label: 'All Projects' },
            { href: '/case-studies?client=new-balance', label: 'New Balance' },
            { href: '/case-studies?client=sportsmans', label: 'Sportsman\'s Warehouse' },
            { href: '/case-studies?client=little-giant', label: 'Little Giant' },
            { href: '/case-studies?client=lion-energy', label: 'Lion Energy' },
            { href: '/case-studies?client=built-brands', label: 'Built Brands' },
          ],
        },
      ],
    },
    {
      title: 'Resources',
      href: '/resources',
      columns: [
        {
          heading: 'Content Library',
          links: [
            { href: '/resources/blog', label: 'Blog' },
            { href: '/resources/videos', label: 'Videos' },
            { href: '/resources/project-highlights', label: 'Project Highlights' },
            { href: '/resources/events', label: 'News & Events' },
          ],
        },
        {
          heading: 'Topics',
          links: [
            { href: '/resources?topic=consulting', label: 'Consulting' },
            { href: '/resources?topic=automation', label: 'Automation' },
            { href: '/resources?topic=software', label: 'Software' },
          ],
        },
      ],
    },
    {
      title: 'Company',
      href: '/about',
      columns: [
        {
          heading: 'About Intralog',
          links: [
            { href: '/about', label: 'About Us' },
            { href: '/about/why-choose-us', label: 'Why Choose Us' },
            { href: '/partners', label: 'Partners' },
            { href: '/careers', label: 'Careers' },
          ],
        },
      ],
    },
  ];

  return (
    <header className="border-b border-slate-100 bg-white relative z-50">
      <nav className="page-wrap h-16 md:h-20 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="logo-box relative flex items-center">
            <Image
              src="/logo.svg"
              alt="Intralog"
              width={180}
              height={40}
              priority
              className="h-full w-auto"
              sizes="(max-width: 768px) 140px, 180px"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <div key={item.title} className="relative group">
              <Link 
                href={item.href} 
                className="text-slate-700 hover:text-slate-900 py-2 transition-colors duration-200"
              >
                {item.title}
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
                <div className="bg-white shadow-lg border border-slate-100 rounded-lg py-6 px-8 min-w-max">
                  <div className="flex gap-8">
                    {item.columns.map((col) => (
                      <div key={col.heading} className="min-w-[200px]">
                        <h4 className="font-semibold mb-3 text-slate-900 text-xs uppercase tracking-wide">
                          {col.heading}
                        </h4>
                        <ul className="space-y-2">
                          {col.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                className="text-slate-600 hover:text-slate-900 transition-colors duration-150 block py-1 text-sm"
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
            </div>
          ))}
          
          {/* Contact Button */}
          <Link
            href="/contact"
            className="rounded-full bg-slate-900 px-4 py-2 text-white hover:opacity-90 transition-opacity duration-200 ml-4"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center rounded-md border border-slate-200 px-3 py-2 text-slate-700"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </nav>

      {/* Mobile drawer - simplified without dropdowns */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="page-wrap py-3 flex flex-col gap-2 text-sm">
            {navItems.map((item) => (
              <Link 
                key={item.title}
                href={item.href} 
                onClick={() => setOpen(false)}
                className="py-2 text-slate-700 hover:text-slate-900"
              >
                {item.title}
              </Link>
            ))}
            <Link 
              href="/contact" 
              onClick={() => setOpen(false)} 
              className="rounded-lg bg-slate-900 px-4 py-2 text-white w-max mt-2"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
