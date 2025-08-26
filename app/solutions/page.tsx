
import type { Metadata } from "next";
import IndexList from "@/components/nav/IndexList";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions | Material Handling & Automation",
  description:
    "Browse our solutions by function, industry, or technology. Conveyor systems, robotics, VLMs, pallet shuttles, and more.",
};

const byFunctionItems = [
  { href: "/solutions/by-function/store-more-in-less-space", label: "Store More in Less Space", blurb: "High-density storage solutions" },
  { href: "/solutions/by-function/move-product-efficiently", label: "Move Product Efficiently", blurb: "Conveyor and transport systems" },
  { href: "/solutions/by-function/pick-and-pack-faster", label: "Pick & Pack Faster", blurb: "Goods-to-person and automation" },
  { href: "/solutions/by-function/fulfill-orders-accurately", label: "Fulfill Orders Accurately", blurb: "Sortation and verification systems" },
];

const byIndustryItems = [
  { href: "/solutions/by-industry/aerospace-and-defense", label: "Aerospace & Defense", blurb: "Compliance and traceability focus" },
  { href: "/solutions/by-industry/cold-storage-warehousing", label: "Cold Storage & Warehousing", blurb: "Temperature-controlled environments" },
  { href: "/solutions/by-industry/food-and-beverage", label: "Food & Beverage", blurb: "Sanitary design and FIFO compliance" },
  { href: "/solutions/by-industry/industrial-distribution", label: "Industrial Distribution", blurb: "High-mix, variable sizing" },
  { href: "/solutions/by-industry/manufacturing", label: "Manufacturing", blurb: "Production line integration" },
  { href: "/solutions/by-industry/retail-and-ecommerce", label: "Retail & E-commerce", blurb: "Omnichannel fulfillment" },
  { href: "/solutions/by-industry/third-party-logistics", label: "Third Party Logistics (3PL)", blurb: "Multi-client operations" },
];

const byTechnologyItems = [
  { href: "/solutions/by-technology/conveyor-and-sortation", label: "Conveyor & Sortation", blurb: "Belt, roller, and sorter systems" },
  { href: "/solutions/by-technology/goods-to-person-vlms", label: "Goods-to-Person / VLMs", blurb: "Vertical lift modules and automation" },
  { href: "/solutions/by-technology/pallet-shuttle-systems", label: "Pallet Shuttle Systems", blurb: "High-density pallet storage" },
  { href: "/solutions/by-technology/print-and-apply", label: "Print & Apply", blurb: "Automated labeling systems" },
  { href: "/solutions/by-technology/palletizing-and-de-palletizing", label: "Palletizing / De-Palletizing", blurb: "Robotic case handling" },
  { href: "/solutions/by-technology/conventional-storage-systems", label: "Conventional Storage Systems", blurb: "Racking and shelving solutions" },
];

export default function SolutionsPage() {
  return (
    <main className="bg-[rgb(var(--bg))]">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: '1.2', textAlign: 'center' }}>
            Solutions
          </h1>
          <p style={{ 
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
            maxWidth: '800px', 
            margin: '1rem auto', 
            textAlign: 'center',
            lineHeight: '1.6'
          }}>
            Material handling and automation solutions designed for your industry, function, and technology needs.
          </p>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link className="btn" href="/contact" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
              Find Your Solution
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <IndexList title="By Function" items={byFunctionItems} />
            <IndexList title="By Industry" items={byIndustryItems} />
            <IndexList title="By Technology" items={byTechnologyItems} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--brand-blue)', color: '#fff' }}>
        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: '2rem', 
          flexWrap: 'wrap',
          textAlign: 'center'
        }}>
          <div style={{ flex: '1', minWidth: '280px' }}>
            <h2 style={{ 
              margin: '0 0 .5rem', 
              fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
              lineHeight: '1.3'
            }}>
              Not sure which solution fits?
            </h2>
            <div className="small" style={{ 
              opacity: 0.9, 
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              lineHeight: '1.5'
            }}>
              Let's analyze your operation and recommend the right mix of technology.
            </div>
          </div>
          <Link 
            className="btn" 
            href="/contact" 
            style={{ 
              background: '#fff', 
              color: 'var(--brand-blue)',
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 1.5rem)',
              flexShrink: 0
            }}
          >
            Get expert advice
          </Link>
        </div>
      </section>
    </main>
  );
}
