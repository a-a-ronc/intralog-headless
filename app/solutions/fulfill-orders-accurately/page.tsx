
// app/solutions/fulfill-orders-accurately/page.tsx
import Image from "next/image";

export const metadata = { title: "Fulfill Orders Accurately | Intralog" }

const YOUTUBE = "https://www.youtube.com/embed/dQw4w9WgXcQ"

const benefits = [
  { title: "Error reduction", body: "Barcode scanning, pick-to-light, and vision systems reduce picking errors to less than 0.1%." },
  { title: "Quality checkpoints", body: "Multiple validation points catch errors before orders ship to customers." },
  { title: "Real-time verification", body: "Weight checks, photo capture, and dimensional scanning validate order accuracy." },
  { title: "Automated documentation", body: "Systems automatically generate shipping labels, packing slips, and tracking information." },
  { title: "Return reduction", body: "Accurate fulfillment reduces returns, chargebacks, and customer service issues." },
  { title: "Compliance tracking", body: "Built-in audit trails and documentation ensure regulatory and customer compliance." },
]

const howItWorks = [
  { step: 1, title: "Order validation", body: "System validates order data and inventory availability before processing begins." },
  { step: 2, title: "Guided fulfillment", body: "Operators follow system guidance with visual and audio confirmation at each step." },
  { step: 3, title: "Quality checks", body: "Automated weight, dimension, and photo verification confirm order accuracy." },
  { step: 4, title: "Documentation", body: "System generates all required shipping documents and tracking information." },
]

const useCases = [
  "E-commerce operations with high return rates due to fulfillment errors",
  "Companies with strict accuracy requirements and compliance standards",
  "Operations handling high-value or regulated products requiring documentation",
  "Distribution centers needing to improve customer satisfaction scores",
]

export default function FulfillOrdersAccuratelyPage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container mx-auto text-center max-w-[880px]">
          <h1 className="font-semibold mb-3" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Fulfill Orders Accurately
          </h1>
          <p className="text-white/90 text-lg">
            Eliminate fulfillment errors with automated verification, quality checkpoints, and guided processes that ensure perfect orders every time.
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="section">
        <div className="container">
          <div className="max-w-[960px] mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-xl" style={{ paddingTop: "56.25%" }}>
              <iframe
                src={YOUTUBE}
                title="Accurate Order Fulfillment Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
            <p className="small text-slate-500 mt-3 text-center">
              Watch: Order accuracy systems and quality control processes.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="section border-y border-slate-100 bg-slate-50">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-4 underline underline-offset-4 decoration-2">
            Why order accuracy systems
          </h2>

          <div className="grid">
            {benefits.map((b) => (
              <div key={b.title} className="card flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="text-slate-700">{b.body}</p>
              </div>
            ))}
          </div>

          <div className="small text-slate-400 mt-3">
            Sources: industry references on order accuracy and quality control systems.
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

          <div className="small text-slate-400 mt-3">
            Order accuracy process overview.
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
          <div className="small text-slate-400 mt-3">
            Typical applications and industries.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <h3 className="text-2xl font-semibold mb-2">
            Ready to achieve perfect order accuracy?
          </h3>
          <p className="text-slate-500 mb-4">
            We'll design quality control systems and processes to eliminate fulfillment errors and boost customer satisfaction.
          </p>
          <a href="/contact" className="btn">Talk with an engineer</a>
        </div>
      </section>
    </main>
  )
}
