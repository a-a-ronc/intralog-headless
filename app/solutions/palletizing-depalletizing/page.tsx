
// app/solutions/palletizing-depalletizing/page.tsx
import SolutionPage from "@/components/SolutionPage";

export const metadata = { title: "Palletizing / De-Palletizing | Intralog" };

const benefits = [
  { title: "Consistent pallet quality", body: "Robotic systems create perfectly aligned, stable loads that reduce damage during transport and storage." },
  { title: "Optimize cube utilization", body: "Advanced algorithms maximize trailer space usage and minimize shipping costs per unit shipped." },
  { title: "Eliminate ergonomic risks", body: "Remove heavy lifting and repetitive motions that cause workplace injuries and workers' compensation claims." },
  { title: "24/7 operation capability", body: "Robotic palletizers work continuously without breaks, maintaining consistent production flow around the clock." },
  { title: "Flexible pattern generation", body: "Handle multiple SKUs and package sizes with automatic pattern optimization and quick changeover." },
  { title: "Increase throughput", body: "Achieve 1000+ cases per hour with multi-robot cells and optimized pick-and-place cycles." },
  { title: "Reduce labor dependency", body: "Minimize staffing requirements while maintaining consistent palletizing quality and speed." },
  { title: "Quality documentation", body: "Integrated vision systems verify load quality and generate shipping documentation automatically." },
];

const howItWorks = [
  { step: 1, title: "Product infeed", body: "Cases arrive via conveyor and are positioned for robotic pickup with vision guidance." },
  { step: 2, title: "Pattern calculation", body: "System calculates optimal pallet pattern based on case dimensions and weight distribution." },
  { step: 3, title: "Robotic placement", body: "Robot places cases in precise patterns with gentle handling and proper load compression." },
  { step: 4, title: "Quality verification", body: "Vision systems verify pallet stability and load quality before releasing to outbound." },
];

const useCases = [
  "Food & beverage manufacturing with high case throughput",
  "Consumer goods distribution requiring mixed pallets",
  "Cold storage operations needing consistent pallet quality",
  "Manufacturing facilities with repetitive palletizing tasks",
];

export default function PalletizingDepalletizingPage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container mx-auto text-center max-w-[880px]">
          <h1 className="font-semibold mb-3" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Palletizing / De-Palletizing
          </h1>
          <p className="text-white/90 text-lg">
            Robotic palletizing and de-palletizing systems that automate case handling with
            precision pattern generation and consistent load quality for shipping and storage.
          </p>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="section border-y border-slate-100 bg-slate-50">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-4 underline underline-offset-4 decoration-2">
            Why palletizing automation
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
            Ready to automate your palletizing operation?
          </h3>
          <p className="text-slate-500 mb-4">
            We'll design a robotic solution that fits your throughput requirements and space constraints.
          </p>
          <a href="/contact" className="btn">Talk with an engineer</a>
        </div>
      </section>
    </main>
  )
}
