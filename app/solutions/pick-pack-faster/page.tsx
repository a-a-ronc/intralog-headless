
// app/solutions/pick-pack-faster/page.tsx
import Image from "next/image";

export const metadata = { title: "Pick & Pack Faster | Intralog" }

const YOUTUBE = "https://www.youtube.com/embed/dQw4w9WgXcQ"

const benefits = [
  { title: "Higher pick rates", body: "Goods-to-person systems and optimized workstations achieve 300+ lines per hour per operator." },
  { title: "Reduced travel time", body: "Bring inventory to pickers instead of sending pickers to inventory locations." },
  { title: "Improved accuracy", body: "Pick-to-light, voice systems, and vision guidance reduce error rates to less than 0.1%." },
  { title: "Ergonomic design", body: "Height-adjustable workstations and automated material presentation reduce worker fatigue." },
  { title: "Flexible order handling", body: "Process single-item orders, batches, and complex kitting with the same system." },
  { title: "Real-time optimization", body: "Dynamic slotting and intelligent batching maximize picking efficiency and throughput." },
]

const howItWorks = [
  { step: 1, title: "Order optimization", body: "System analyzes orders and creates optimal pick sequences and batches." },
  { step: 2, title: "Inventory presentation", body: "Automated systems deliver products to ergonomic picking workstations." },
  { step: 3, title: "Guided picking", body: "Light, voice, or display systems guide operators to correct items and quantities." },
  { step: 4, title: "Quality validation", body: "Built-in checks verify accuracy before items move to packing stations." },
]

const useCases = [
  "E-commerce operations with high order volumes and tight delivery windows",
  "Distribution centers processing diverse SKU mixes and order profiles",
  "Operations struggling with picking accuracy and labor efficiency",
  "Facilities needing to scale picking capacity without expanding workforce",
]

export default function PickPackFasterPage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container mx-auto text-center max-w-[880px]">
          <h1 className="font-semibold mb-3" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Pick & Pack Faster
          </h1>
          <p className="text-white/90 text-lg">
            Accelerate order fulfillment with goods-to-person systems, guided picking technologies, and optimized workstations that boost productivity and accuracy.
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
                title="High Speed Picking Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
            <p className="small text-slate-500 mt-3 text-center">
              Watch: High-speed picking and packing concepts.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="section border-y border-slate-100 bg-slate-50">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-4 underline underline-offset-4 decoration-2">
            Why automated picking systems
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
            Sources: industry references on picking automation and productivity optimization.
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
            Picking process optimization overview.
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
            Ready to accelerate your picking operations?
          </h3>
          <p className="text-slate-500 mb-4">
            We'll analyze your order profiles and design systems to maximize picking speed and accuracy.
          </p>
          <a href="/contact" className="btn">Talk with an engineer</a>
        </div>
      </section>
    </main>
  )
}
