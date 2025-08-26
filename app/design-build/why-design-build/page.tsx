// app/design-build/why-design-build/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Design–Build | World Class Integration",
  description:
    "One accountable team. Faster schedules. Lower risk. A scientific, data-first approach that delivers Fortune-500 outcomes without Fortune-500 overhead.",
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
    <div className="text-3xl font-semibold tracking-tight">{value}</div>
    <div className="mt-1 text-sm text-zinc-600">{label}</div>
  </div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800">{children}</span>
);

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-10">
        <p className="text-sm uppercase tracking-wider text-zinc-500">Design–Build</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Why Design–Build</h1>
        <p className="mt-3 text-zinc-600">
          Every operation is different—industry, order mix, growth rate, seasonality, labor market. The fastest way to the right answer
          is a single accountable team using the scientific method: hypotheses → models → experiments → results. That’s Design–Build.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Unified accountability</h3>
          <p className="mt-2 text-zinc-600">
            One partner from analysis to commissioning. No hand-offs, no “that’s the other vendor’s problem.” Clear scope, clear outcomes.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Pill>Analysis</Pill><Pill>Design</Pill><Pill>Permits</Pill><Pill>Procurement</Pill><Pill>Install</Pill><Pill>Commissioning</Pill>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Scientific, data-first decisions</h3>
          <p className="mt-2 text-zinc-600">
            We don’t guess. We model demand, simulate flows, and validate designs with math—algorithms, equations, and modern tooling.
            Our slotting and right-sizing methods are backed by PhD-level whitepapers.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Pill>Python/R</Pill><Pill>Simulation</Pill><Pill>Optimization</Pill><Pill>Sensitivity</Pill>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Schedule compression</h3>
          <p className="mt-2 text-zinc-600">
            Painless Permit automates submittals and reviewer responses, speeding code compliance for NFPA, FM Global, IBC, and OSHA considerations built into the design.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Pill>NFPA</Pill><Pill>FM Global</Pill><Pill>IBC</Pill><Pill>OSHA</Pill>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Cost certainty, less risk</h3>
          <p className="mt-2 text-zinc-600">
            Early vendor engagement and equalized RFQs mean fewer surprises and fewer change orders. You approve the business case before we break ground.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Pill>Equalized RFQs</Pill><Pill>Open Book</Pill><Pill>Firm Schedules</Pill>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-3">
        <Stat value="15–25%" label="Picker throughput lift with DensityPro sequencing" />
        <Stat value="Weeks faster" label="Permitting vs. legacy processes" />
        <Stat value="Right-sized" label="Facility footprints driven by math, not guesswork" />
      </section>

      <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold">Traditional vs. Design–Build</h3>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <div className="text-sm font-semibold text-zinc-700">Traditional (Design–Bid–Build)</div>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-zinc-600">
              <li>Multiple hand-offs; diluted accountability</li>
              <li>Longer schedules; parallelization is hard</li>
              <li>Change orders from gaps between design & field reality</li>
              <li>Decisions by rule of thumb, not validated models</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-700">Design–Build with us</div>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-zinc-600">
              <li>One team from analysis to go-live</li>
              <li>Data-driven designs (simulation, slotting, ROI)</li>
              <li>Faster permits with Painless Permit</li>
              <li>Lean overhead—Fortune-500 outcomes without Fortune-500 cost</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Our automation-powered toolkit</h3>
          <ul className="mt-3 space-y-2 text-zinc-600">
            <li><span className="font-medium text-zinc-800">Warehousr:</span> bin right-sizing, shelf design, seasonal re-slotting.</li>
            <li><span className="font-medium text-zinc-800">DensityPro:</span> headless middleware that sequences optimal pick paths across your existing systems.</li>
            <li><span className="font-medium text-zinc-800">Painless Permit:</span> automated code compliance workflows and response management.</li>
            <li><span className="font-medium text-zinc-800">Python/R stack:</span> demand shaping, labor modeling, transport & flow simulation.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Who we’re perfect for</h3>
          <ul className="mt-3 space-y-2 text-zinc-600">
            <li>High-mix ecommerce & retail DCs scaling fast</li>
            <li>Manufacturers modernizing intralogistics</li>
            <li>3PLs seeking throughput without headcount bloat</li>
            <li>Cold storage and regulated facilities with tight codes</li>
          </ul>
        </div>
      </section>

      <footer className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold">Let’s build the business case—then the system.</h3>
          <p className="text-zinc-600">
            Send a sample data extract and growth assumptions. We’ll return a right-sized footprint, concept options, and a clear path to permits and go-live.
          </p>
        </div>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-white font-medium hover:bg-zinc-800"
        >
          Start your Design–Build
        </a>
      </footer>
    </main>
  );
}
