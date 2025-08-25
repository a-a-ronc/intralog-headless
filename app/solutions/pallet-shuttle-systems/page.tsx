
// app/solutions/pallet-shuttle-systems/page.tsx
import Image from "next/image";
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Pallet Shuttles | Intralog" }

const YOUTUBE = "https://www.youtube.com/embed/BF7HCTcsN2s"

const benefits = [
  { title: "High‑density storage", body: "Channel storage maximizes cube and groups SKUs by channel for compact, scalable capacity." },
  { title: "Less forklift travel", body: "Forklifts no longer drive inside deep lanes—shuttles handle the in‑lane moves, improving safety and cycle time." },
  { title: "FIFO or LIFO compatible", body: "Configure channels and dock strategy to run first‑in/first‑out or last‑in/first‑out as needed." },
  { title: "Repeatable throughput", body: "Powered shuttles execute moves consistently; operators trigger cycles via tablet or remote." },
  { title: "Cold storage fit", body: "High density reduces cubic footage to condition and supports fast pallet turns in low temps." },
  { title: "Accurate, gentle handling", body: "Automated in‑lane travel reduces product damage and helps sustain inventory accuracy." },
  { title: "Comply with NFPA flue requirements", body: "Automated shuttle systems can maintain consistent 6-inch transverse flue spaces—often allowing ceiling-only sprinklers and avoiding costly in-rack sprinkler solutions for deep/high racking.",
    cite: "NFPA 13 updates via Apex",
  },
]

const howItWorks = [
  { step: 1, title: "Stage & place shuttle", body: "Operator places a charged shuttle at a selected channel." },
  { step: 2, title: "Load entry pallet", body: "Forklift sets pallet at the channel face; shuttle takes over." },
  { step: 3, title: "Auto position", body: "Shuttle transports the pallet to the next available slot." },
  { step: 4, title: "Retrieve on command", body: "Outbound retrievals reverse the process to the channel face." },
]

const useCases = [
  "Food & Beverage and CPG with many pallets per SKU",
  "Cold storage where space and energy efficiency matter",
  "Retail & e‑commerce DCs with batch pallet moves",
  "3PL operations needing scalable dense storage",
]

export default function PalletShuttlesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container mx-auto text-center max-w-[880px]">
          <h1 className="font-semibold mb-3" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Pallet Shuttles
          </h1>
          <p className="text-white/90 text-lg">
            Semi‑automated, high‑density pallet storage using powered shuttles that move pallets
            inside racking channels—boosting capacity and minimizing in‑lane forklift travel.
          </p>
        </div>
      </section>

      {/* VIDEO (optional) */}
      <section className="section">
        <div className="container">
          <div className="max-w-[960px] mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-xl" style={{ paddingTop: "56.25%" }}>
              <iframe
                src={YOUTUBE}
                title="Pallet Shuttle Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
            <p className="small text-slate-500 mt-3 text-center">
              Watch: Pallet shuttle concept and operation.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="section border-y border-slate-100 bg-slate-50">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-4 underline underline-offset-4 decoration-2">
            Why pallet shuttles
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
            Sources: industry references on pallet shuttle design and applications (Mecalux, Interlake, SSI Schaefer, BITO, KPI Solutions, NFPA/FM Global).
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-4 underline underline-offset-4 decoration-2">
            How it works
          </h2>

          {/* force 4 columns on wide screens, fall back to your .grid defaults on small */}
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
            Operation overview & terminology.
          </div>
        </div>
      </section>

      {/* IMAGES with centered "Step X" headings */}
      <section className="section pt-0">
        <div className="container">
          <div className="grid">
            <div className="card text-center">
              <h2 className="text-2xl font-semibold mb-4 underline underline-offset-4 decoration-2">
                Step 1:
              </h2>
              <Image
                src="/images/solutions/pallet-shuttles/operator-staging-shuttle.avif"
                alt="Operator Staging Shuttle"
                width={1200}
                height={800}
                className="rounded-xl"
              />
            </div>

            <div className="card text-center">
              <h2 className="text-2xl font-semibold mb-4 underline underline-offset-4 decoration-2">
                Step 2:
              </h2>
              <Image
                src="/images/solutions/pallet-shuttles/position-pallets.avif"
                alt="Operator Positioning Pallets"
                width={1200}
                height={800}
                className="rounded-xl"
              />
            </div>

            <div className="card text-center">
              <h2 className="text-2xl font-semibold mb-4 underline underline-offset-4 decoration-2">
                Step 3:
              </h2>
              <Image
                src="/images/solutions/pallet-shuttles/auto-position.avif"
                alt="Shuttle in operation"
                width={1200}
                height={800}
                className="rounded-xl"
              />
            </div>

            <div className="card text-center">
              <h2 className="text-2xl font-semibold mb-4 underline underline-offset-4 decoration-2">
                Step 4:
              </h2>
              <Image
                src="/images/solutions/pallet-shuttles/shuttle-in-operation.avif"
                alt="Shuttle in operation"
                width={1200}
                height={800}
                className="rounded-xl"
              />
            </div>
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
            Is a shuttle the right move for your SKU mix?
          </h3>
          <p className="text-slate-500 mb-4">
            We'll run a quick density/throughput study and size a solution for your pallet profiles.
          </p>
          <a href="/contact" className="btn">Talk with an engineer</a>
        </div>
      </section>
    </main>
  )
}
