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
  { href: "/services/implementation/code-compliance-and-permits", label: "Code Compliance & Permits", blurb: "Regulatory approval and safety" },
  { href: "/services/implementation/installation", label: "Installation", blurb: "Professional system deployment" },
  { href: "/services/implementation/commissioning-and-training", label: "Commissioning & Training", blurb: "System startup and operator training" },
];

const lifecycleItems = [
  { href: "/services/support-and-maintenance", label: "Support & Maintenance", blurb: "Ongoing system care and optimization" },
  { href: "/services/performance-optimization", label: "Performance Optimization", blurb: "Throughput tuning and efficiency gains" },
  { href: "/services/training-and-documentation", label: "Training & Documentation", blurb: "Knowledge transfer and best practices" },
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
            Full-service design, engineering, and implementation for material handling systems. From concept to commissioning.
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
          <div className="grid gap-8 lg:grid-cols-3">
            <IndexList title="Engineering & Design" items={consultingDesignItems} />
            <IndexList title="Implementation" items={implementationItems} />
            <IndexList title="Lifecycle & Optimization" items={lifecycleItems} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--brand-blue)', color: '#fff' }}>
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold">Ready to optimize your operations?</h2>
            <p className="mt-2 opacity-90">
              Our engineering team designs systems that deliver measurable ROI and long-term value.
            </p>
            <div className="mt-6">
              <Link 
                className="btn" 
                href="/contact" 
                style={{ 
                  background: '#fff', 
                  color: 'var(--brand-blue)',
                  fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                  padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 1.5rem)'
                }}
              >
                Let's discuss your project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}