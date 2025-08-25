
// app/solutions/conventional-storage-systems/page.tsx
import SolutionPage from "@/components/SolutionPage";

export const metadata = { title: "Conventional Storage Systems | Intralog" };

const benefits = [
  { title: "Cost-effective storage", body: "Selective rack provides direct access to every pallet position at the lowest cost per position." },
  { title: "Maximum SKU accessibility", body: "Every pallet location is directly accessible without moving other pallets for high pick frequency operations." },
  { title: "Flexible configuration", body: "Easily adjust beam levels and bay spacing to accommodate changing SKU profiles and storage requirements." },
  { title: "Simple operation", body: "Standard forklift equipment and operator training with minimal learning curve and maintenance requirements." },
  { title: "Scalable expansion", body: "Add rack sections and levels incrementally as storage needs grow without major system changes." },
  { title: "Fire code compliance", body: "Meet NFPA requirements with proper flue spaces and sprinkler system integration for safe operations." },
  { title: "Quick installation", body: "Faster implementation than automated systems with immediate operational capability upon completion." },
  { title: "Equipment compatibility", body: "Works with existing forklift fleet and standard material handling equipment for seamless integration." },
];

const howItWorks = [
  { step: 1, title: "System design", body: "Engineer rack layout based on building dimensions, load requirements, and operational flow." },
  { step: 2, title: "Installation", body: "Install uprights, beams, and safety accessories following seismic and structural requirements." },
  { step: 3, title: "Put-away process", body: "Forklifts transport and position pallets directly into assigned rack locations." },
  { step: 4, title: "Retrieval operations", body: "Direct access allows immediate pallet retrieval without moving other inventory." },
];

const useCases = [
  "Warehouses with high SKU variety requiring individual pallet access",
  "Distribution centers with moderate throughput requirements",
  "Facilities needing flexible storage for seasonal inventory changes",
  "Operations with existing forklift equipment and trained operators",
];

export default function ConventionalStorageSystemsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container mx-auto text-center max-w-[880px]">
          <h1 className="font-semibold mb-3" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Conventional Storage Systems
          </h1>
          <p className="text-white/90 text-lg">
            Selective pallet rack systems providing direct access to every storage position with
            flexible configuration options and cost-effective expansion capabilities.
          </p>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="section border-y border-slate-100 bg-slate-50">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-4 underline underline-offset-4 decoration-2">
            Why conventional storage
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
            Need a storage solution that grows with your business?
          </h3>
          <p className="text-slate-500 mb-4">
            We'll design a conventional storage system optimized for your specific operational requirements.
          </p>
          <a href="/contact" className="btn">Talk with an engineer</a>
        </div>
      </section>
    </main>
  )
}
