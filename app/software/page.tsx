
export const metadata = { title: "Software | Intralog" };

export default function SoftwarePage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="text-3xl font-semibold mb-2">Software</h1>
        <div className="card">
          <p className="text-slate-700">
            Our software solutions complement our material handling systems to optimize 
            warehouse operations and data management.
          </p>
        </div>
      </div>
    </main>
  );
}
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Software | Warehouse Optimization Tools",
  description:
    "Open-source and proprietary software for warehouse slotting, pick optimization, and automated permitting.",
};

const softwareProducts = [
  {
    name: "Warehousr",
    href: "/software/warehousr",
    description: "Open-source warehouse slotting and space planning tool. Bin right-sizing, shelf design, and seasonal re-slotting made simple.",
    tags: ["Open Source", "Slotting", "Space Planning"]
  },
  {
    name: "DensityPro",
    href: "/software/densitypro",
    description: "Headless middleware that sequences optimal pick paths across your existing systems. Boost picker throughput 15-25%.",
    tags: ["Pick Optimization", "Middleware", "ROI"]
  },
  {
    name: "Painless Permit",
    href: "/software/painlesspermit",
    description: "Automated code compliance workflows and response management for NFPA, FM Global, IBC, and OSHA. (Beta)",
    tags: ["Beta", "Compliance", "Automation"]
  },
  {
    name: "Lully",
    href: "/software/lully",
    description: "Partner software for advanced warehouse management and optimization workflows.",
    tags: ["Partner Software", "WMS Integration"]
  }
];

export default function SoftwarePage() {
  return (
    <main className="bg-[rgb(var(--bg))]">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: '1.2', textAlign: 'center' }}>
            Our Software
          </h1>
          <p style={{ 
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
            maxWidth: '800px', 
            margin: '1rem auto', 
            textAlign: 'center',
            lineHeight: '1.6'
          }}>
            Open-source and proprietary tools that power our Design-Build process and optimize warehouse operations.
          </p>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link className="btn" href="/contact" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Software Products */}
      <section className="section">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {softwareProducts.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="block rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 shadow-sm transition-all hover:shadow-md hover:ring-2 hover:ring-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[rgb(var(--fg))]">{product.name}</h3>
                    <p className="mt-2 text-[rgb(var(--muted-fg))]">{product.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[rgb(var(--surface))] px-3 py-1 text-xs font-medium text-[rgb(var(--fg))]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <svg className="ml-4 h-5 w-5 text-[rgb(var(--muted-fg))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ background: 'rgb(var(--surface))' }}>
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-semibold text-[rgb(var(--fg))]">
            Built for Integration
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 text-center shadow-sm">
              <h3 className="text-lg font-semibold text-[rgb(var(--fg))]">API-First</h3>
              <p className="mt-2 text-[rgb(var(--muted-fg))]">
                All our tools are designed with APIs that integrate seamlessly with your existing WMS, ERP, and warehouse systems.
              </p>
            </div>
            <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 text-center shadow-sm">
              <h3 className="text-lg font-semibold text-[rgb(var(--fg))]">Data-Driven</h3>
              <p className="mt-2 text-[rgb(var(--muted-fg))]">
                Every recommendation is backed by mathematical models, simulation results, and real operational data.
              </p>
            </div>
            <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 text-center shadow-sm">
              <h3 className="text-lg font-semibold text-[rgb(var(--fg))]">Open Source</h3>
              <p className="mt-2 text-[rgb(var(--muted-fg))]">
                Key tools like Warehousr are open source, giving you full transparency and the ability to customize.
              </p>
            </div>
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
              Ready to optimize your warehouse?
            </h2>
            <div className="small" style={{ 
              opacity: 0.9, 
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              lineHeight: '1.5'
            }}>
              Let's show you how our software tools can boost your operational efficiency.
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
            Schedule a demo
          </Link>
        </div>
      </section>
    </main>
  );
}
