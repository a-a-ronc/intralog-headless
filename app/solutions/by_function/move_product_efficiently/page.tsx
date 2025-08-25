
// app/solutions/store-more-in-less-space/page.tsx
import Image from "next/image";

export const metadata = { title: "Store More in Less Space | Intralog" }

const YOUTUBE = "https://www.youtube.com/embed/dQw4w9WgXcQ"

const benefits = [
  { title: "Maximize vertical space", body: "Utilize ceiling height with high-bay storage systems, mezzanines, and vertical lift modules." },
  { title: "Dense storage configurations", body: "Channel storage, drive-in racks, and push-back systems increase pallet density per square foot." },
  { title: "Reduce aisle requirements", body: "Narrow aisle systems and automated storage reduce travel space needed for material handling equipment." },
  { title: "Flexible space utilization", body: "Modular racking and mobile storage systems adapt to changing inventory profiles and seasonal demands." },
  { title: "Optimize cube utilization", body: "Right-size storage locations to SKU dimensions, minimizing wasted cubic space." },
  { title: "Multi-level operations", body: "Mezzanine platforms and pick modules create additional operational space within existing footprint." },
]

const howItWorks = [
  { step: 1, title: "Space assessment", body: "Analyze current storage density and identify optimization opportunities." },
  { step: 2, title: "Design optimization", body: "Configure storage systems to maximize cube utilization and operational efficiency." },
  { step: 3, title: "Implementation", body: "Install high-density storage solutions with minimal operational disruption." },
  { step: 4, title: "Optimization", body: "Fine-tune configurations based on actual inventory flow and storage patterns." },
]

const useCases = [
  "Facilities with high real estate costs needing maximum storage density",
  "Operations with diverse SKU profiles requiring flexible storage solutions",
  "Warehouses approaching capacity limits without expansion options",
  "Cold storage facilities where cubic conditioning costs are critical",
]

export default function StoreMoreInLessSpacePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container mx-auto text-center max-w-[880px]">
          <h1 className="font-semibold mb-3" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Store More in Less Space
          </h1>
          <p className="text-white/90 text-lg">
            Maximize storage density and cube utilization with high-bay systems, vertical solutions, and optimized layouts that boost capacity without expanding your footprint.
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
                title="High Density Storage Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
            <p className="small text-slate-500 mt-3 text-center">
              Watch: High-density storage concepts and implementation.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="section border-y border-slate-100 bg-slate-50">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-4 underline underline-offset-4 decoration-2">
            Why high-density storage
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
            Sources: industry references on high-density storage design and space optimization.
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
            Ready to maximize your storage density?
          </h3>
          <p className="text-slate-500 mb-4">
            We'll analyze your space and design solutions to boost capacity within your existing footprint.
          </p>
          <a href="/contact" className="btn">Talk with an engineer</a>
        </div>
      </section>
    </main>
  )
}
