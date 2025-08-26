
import type { Metadata } from "next";
import ProcessSection from "@/components/design-build/ProcessSection";
import WhySection from "@/components/design-build/WhySection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Design-Build | Automated Material Handling for ROI",
  description:
    "Single accountable team. Data-driven designs. Faster permits. Fortune-500 outcomes without Fortune-500 overhead. From analysis to go-live.",
};

export default function DesignBuildPage() {
  return (
    <main className="bg-[rgb(var(--bg))]">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: '1.2', textAlign: 'center' }}>
            Design-Build
          </h1>
          <p style={{ 
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
            maxWidth: '800px', 
            margin: '1rem auto', 
            textAlign: 'center',
            lineHeight: '1.6'
          }}>
            One accountable team. Data-driven designs. Faster permits. Fortune-500 outcomes without Fortune-500 overhead.
          </p>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link className="btn" href="/contact" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <ProcessSection />

      {/* Why Design-Build Section */}
      <WhySection />

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
              Ready to build the business case—then the system?
            </h2>
            <div className="small" style={{ 
              opacity: 0.9, 
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              lineHeight: '1.5'
            }}>
              Send a sample data extract and growth assumptions. We'll return a right-sized footprint, concept options, and a clear path to permits and go-live.
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
            Start your Design-Build
          </Link>
        </div>
      </section>
    </main>
  );
}
