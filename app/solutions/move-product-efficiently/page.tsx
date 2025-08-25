
// app/solutions/move-product-efficiently/page.tsx
import Image from "next/image";

export const metadata = { title: "Move Product Efficiently | Intralog" }

const YOUTUBE = "https://www.youtube.com/embed/dQw4w9WgXcQ"

const benefits = [
  { title: "Automated material flow", body: "Conveyors, AMRs, and automated systems eliminate manual transport and reduce labor costs." },
  { title: "Optimized routing", body: "Intelligent systems select the most efficient paths and minimize travel time and distance." },
  { title: "Consistent throughput", body: "Automated systems maintain steady flow rates regardless of shift patterns or operator variability." },
  { title: "Real-time tracking", body: "RFID, barcodes, and sensors provide visibility into product location and movement status." },
  { title: "Reduced handling damage", body: "Controlled acceleration and gentle handling mechanisms minimize product damage during transport." },
  { title: "Scalable capacity", body: "Modular systems allow adding capacity and routes as volumes and operational needs grow." },
]

const howItWorks = [
  { step: 1, title: "Flow analysis", body: "Map current material flows and identify bottlenecks and inefficiencies." },
  { step: 2, title: "System design", body: "Design automated transport solutions optimized for your product mix and volumes." },
  { step: 3, title: "Integration", body: "Implement and integrate transport systems with existing warehouse operations." },
  { step: 4, title: "Optimization", body: "Monitor performance and continuously optimize routing and flow patterns." },
]

const useCases = [
  "High-volume distribution centers needing consistent throughput",
  "Multi-level facilities requiring vertical transport solutions",
  "Operations with repetitive transport routes and predictable flows",
  "Facilities looking to reduce labor costs and improve safety",
]

export default function MoveProductEfficientlyPage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container mx-auto text-center max-w-[880px]">
          <h1 className="font-semibold mb-3" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Move Product Efficiently
          </h1>
          <p className="text-white/90 text-lg">
            Automate material transport and optimize flow patterns with conveyors, AMRs, and intelligent routing systems that boost throughput while reducing labor.
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
                title="Efficient Material Movement Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
            <p className="small text-slate-500 mt-3 text-center">
              Watch: Automated material movement concepts and benefits.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="section border-y border-slate-100 bg-slate-50">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-4 underline underline-offset-4 decoration-2">
            Why automated material movement
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
            Sources: industry references on automated material handling and transport optimization.
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
            Implementation process overview.
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
            Ready to optimize your material flow?
          </h3>
          <p className="text-slate-500 mb-4">
            We'll analyze your current flows and design automated systems to boost efficiency and reduce costs.
          </p>
          <a href="/contact" className="btn">Talk with an engineer</a>
        </div>
      </section>
    </main>
  )
}
