
// app/solutions/print-apply/page.tsx
import SolutionPage from "@/components/SolutionPage";

export const metadata = { title: "Print & Apply | Intralog" };

const benefits = [
  { title: "Automated label application", body: "Eliminate manual labeling errors and increase throughput with precision print-and-apply systems." },
  { title: "Real-time data capture", body: "Integrate with WMS/ERP systems for dynamic label content and shipping documentation." },
  { title: "Multi-format compatibility", body: "Handle various label sizes, formats, and carrier types with quick changeover capabilities." },
  { title: "Quality verification", body: "Built-in vision systems verify label placement, readability, and barcode quality before shipping." },
  { title: "High-speed operation", body: "Process up to 60+ packages per minute with synchronized conveyor integration." },
  { title: "Flexible positioning", body: "Apply labels to multiple surfaces - top, side, bottom, or corner applications as needed." },
  { title: "Compliance ready", body: "Meet shipping carrier requirements and regulatory labeling standards automatically." },
  { title: "Reduced labor costs", body: "Minimize manual labeling stations while improving accuracy and consistency." },
];

const howItWorks = [
  { step: 1, title: "Product detection", body: "Sensors detect incoming packages and trigger the labeling sequence." },
  { step: 2, title: "Dynamic printing", body: "Labels are printed with real-time data from WMS including addresses and tracking codes." },
  { step: 3, title: "Precise application", body: "Pneumatic applicators place labels accurately on moving packages." },
  { step: 4, title: "Quality verification", body: "Vision systems verify label placement and barcode readability before release." },
];

const useCases = [
  "E-commerce fulfillment centers with high shipping volumes",
  "Manufacturing facilities requiring product identification labels",
  "Distribution centers with multiple carrier requirements",
  "Food & beverage operations needing compliance labeling",
];

export default function PrintApplyPage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container mx-auto text-center max-w-[880px]">
          <h1 className="font-semibold mb-3" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Print & Apply Systems
          </h1>
          <p className="text-white/90 text-lg">
            Automated print-and-apply solutions that dynamically generate and accurately place labels
            on packages and products at high speed with full quality verification.
          </p>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="section border-y border-slate-100 bg-slate-50">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-4 underline underline-offset-4 decoration-2">
            Why print & apply systems
          </h2>

          <div className="grid">
            {benefits.map((b) => (
              <div key={b.title} className="card flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="text-slate-700">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-4 underline underline-offset-4 decoration-2">
            How it works
          </h2>

          <div className="grid" style={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
            {howItWorks.map((s) => (
              <div key={s.step} className="card text-left">
                <div className="small text-slate-500 font-semibold">Step {s.step}</div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-slate-700">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section border-t border-slate-100 bg-slate-50">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-4 underline underline-offset-4 decoration-2">
            Great fit for
          </h2>
          <ul className="grid list-disc pl-5">
            {useCases.map((u) => (
              <li key={u} className="text-slate-700">{u}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <h3 className="text-2xl font-semibold mb-2">
            Ready to automate your labeling process?
          </h3>
          <p className="text-slate-500 mb-4">
            We'll design a print-and-apply solution that integrates seamlessly with your existing systems.
          </p>
          <a href="/contact" className="btn">Talk with an engineer</a>
        </div>
      </section>
    </main>
  )
}
