
export const metadata = { title: "Services | Intralog" };

export default function Page() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="text-3xl font-semibold mb-2">Services</h1>
        <div className="card">
          <p className="text-slate-700">Content coming soon. We'll publish examples, photos, and workflows here.</p>
        </div>
      </div>
    </main>
  );
}
import type { Metadata } from "next";
import IndexList from "@/components/nav/IndexList";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Engineering & Implementation",
  description:
    "Full-service design, engineering, and implementation for material handling systems. From concept to commissioning.",
};

const consultingDesignItems = [
  { href: "/services/engineering-and-design/industrial-real-estate-evaluation", label: "Industrial Real Estate Evaluation", blurb: "Site assessment and facility planning" },
  { href: "/services/engineering-and-design/data-analysis-and-system-design", label: "Data Analysis & System Design", blurb: "Flow modeling and optimization" },
  { href: "/services/engineering-and-design/simulation-and-emulation", label: "Simulation & Emulation", blurb: "Virtual testing and validation" },
];

const implementationItems = [
  { href: "/services/implementation/project-management", label: "Project Management", blurb: "End-to-end project coordination" },
  { href: "/services/implementation/code-compliance-and-permits", label: "Code Compliance & Permits", blurb: "NFPA, IBC, and OSHA compliance" },
  { href: "/services/implementation/installation", label: "Installation", blurb: "Professional equipment installation" },
  { href: "/services/implementation/commissioning-and-training", label: "Commissioning & Training", blurb: "System startup and operator training" },
];

const optimizationItems = [
  { href: "/services/support-and-maintenance", label: "Support & Maintenance", blurb: "Ongoing system support" },
  { href: "/services/performance-optimization", label: "Performance Optimization", blurb: "Continuous improvement programs" },
  { href: "/services/training-and-documentation", label: "Training & Documentation", blurb: "Operator training and SOPs" },
];

export default function ServicesPage() {
  return (
    <main className="bg-[rgb(var(--bg))]">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: '1.2', textAlign: 'center' }}>
            Services
          </h1>
          <p style={{ 
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
            maxWidth: '800px', 
            margin: '1rem auto', 
            textAlign: 'center',
            lineHeight: '1.6'
          }}>
            Full-service engineering and implementation for material handling systems. From initial analysis to ongoing optimization.
          </p>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link className="btn" href="/contact" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <IndexList title="Engineering & Design" items={consultingDesignItems} />
            <IndexList title="Implementation" items={implementationItems} />
            <IndexList title="Lifecycle & Optimization" items={optimizationItems} />
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section" style={{ background: 'rgb(var(--surface))' }}>
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-semibold text-[rgb(var(--fg))]">
            Our Service Process
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                1
              </div>
              <h3 className="font-semibold text-[rgb(var(--fg))]">Discovery</h3>
              <p className="mt-1 text-sm text-[rgb(var(--muted-fg))]">
                Understand your operation, constraints, and goals
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                2
              </div>
              <h3 className="font-semibold text-[rgb(var(--fg))]">Design</h3>
              <p className="mt-1 text-sm text-[rgb(var(--muted-fg))]">
                Data-driven system design and simulation
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                3
              </div>
              <h3 className="font-semibold text-[rgb(var(--fg))]">Implement</h3>
              <p className="mt-1 text-sm text-[rgb(var(--muted-fg))]">
                Professional installation and commissioning
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                4
              </div>
              <h3 className="font-semibold text-[rgb(var(--fg))]">Optimize</h3>
              <p className="mt-1 text-sm text-[rgb(var(--muted-fg))]">
                Ongoing support and performance tuning
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
              Ready to streamline your operation?
            </h2>
            <div className="small" style={{ 
              opacity: 0.9, 
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              lineHeight: '1.5'
            }}>
              Let's discuss your material handling challenges and develop a solution.
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
            Get started
          </Link>
        </div>
      </section>
    </main>
  );
}
