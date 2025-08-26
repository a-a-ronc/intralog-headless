
const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 text-center shadow-sm">
    <div className="text-3xl font-semibold tracking-tight text-[rgb(var(--fg))]">{value}</div>
    <div className="mt-1 text-sm text-[rgb(var(--muted-fg))]">{label}</div>
  </div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full bg-[rgb(var(--surface))] px-3 py-1 text-sm text-[rgb(var(--fg))]">{children}</span>
);

export default function WhySection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-10">
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-[rgb(var(--fg))]">Why Design–Build</h2>
        <p className="mt-3 text-[rgb(var(--muted-fg))]">
          Every operation is different—industry, order mix, growth rate, seasonality, labor market. The fastest way to the right answer
          is a single accountable team using the scientific method: hypotheses → models → experiments → results. That's Design–Build.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[rgb(var(--fg))]">Unified accountability</h3>
          <p className="mt-2 text-[rgb(var(--muted-fg))]">
            One partner from analysis to commissioning. No hand-offs, no "that's the other vendor's problem." Clear scope, clear outcomes.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Pill>Analysis</Pill><Pill>Design</Pill><Pill>Permits</Pill><Pill>Procurement</Pill><Pill>Install</Pill><Pill>Commissioning</Pill>
          </div>
        </div>

        <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[rgb(var(--fg))]">Scientific, data-first decisions</h3>
          <p className="mt-2 text-[rgb(var(--muted-fg))]">
            We don't guess. We model demand, simulate flows, and validate designs with math—algorithms, equations, and modern tooling.
            Our slotting and right-sizing methods are backed by PhD-level whitepapers.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Pill>Python/R</Pill><Pill>Simulation</Pill><Pill>Optimization</Pill><Pill>Sensitivity</Pill>
          </div>
        </div>

        <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[rgb(var(--fg))]">Schedule compression</h3>
          <p className="mt-2 text-[rgb(var(--muted-fg))]">
            Painless Permit automates submittals and reviewer responses, speeding code compliance for NFPA, FM Global, IBC, and OSHA considerations built into the design.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Pill>NFPA</Pill><Pill>FM Global</Pill><Pill>IBC</Pill><Pill>OSHA</Pill>
          </div>
        </div>

        <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[rgb(var(--fg))]">Cost certainty, less risk</h3>
          <p className="mt-2 text-[rgb(var(--muted-fg))]">
            Early vendor engagement and equalized RFQs mean fewer surprises and fewer change orders. You approve the business case before we break ground.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Pill>Equalized RFQs</Pill><Pill>Open Book</Pill><Pill>Firm Schedules</Pill>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <Stat value="15–25%" label="Picker throughput lift with DensityPro sequencing" />
        <Stat value="Weeks faster" label="Permitting vs. legacy processes" />
        <Stat value="Right-sized" label="Facility footprints driven by math, not guesswork" />
      </div>

      <div className="mt-12 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-[rgb(var(--fg))]">Traditional vs. Design–Build</h3>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <div className="text-sm font-semibold text-[rgb(var(--muted-fg))]">Traditional (Design–Bid–Build)</div>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-[rgb(var(--muted-fg))]">
              <li>Multiple hand-offs; diluted accountability</li>
              <li>Longer schedules; parallelization is hard</li>
              <li>Change orders from gaps between design & field reality</li>
              <li>Decisions by rule of thumb, not validated models</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-[rgb(var(--muted-fg))]">Design–Build with us</div>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-[rgb(var(--muted-fg))]">
              <li>One team from analysis to go-live</li>
              <li>Data-driven designs (simulation, slotting, ROI)</li>
              <li>Faster permits with Painless Permit</li>
              <li>Lean overhead—Fortune-500 outcomes without Fortune-500 cost</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[rgb(var(--fg))]">Our automation-powered toolkit</h3>
          <ul className="mt-3 space-y-2 text-[rgb(var(--muted-fg))]">
            <li><span className="font-medium text-[rgb(var(--fg))]">Warehousr:</span> bin right-sizing, shelf design, seasonal re-slotting.</li>
            <li><span className="font-medium text-[rgb(var(--fg))]">DensityPro:</span> headless middleware that sequences optimal pick paths across your existing systems.</li>
            <li><span className="font-medium text-[rgb(var(--fg))]">Painless Permit:</span> automated code compliance workflows and response management.</li>
            <li><span className="font-medium text-[rgb(var(--fg))]">Python/R stack:</span> demand shaping, labor modeling, transport & flow simulation.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[rgb(var(--fg))]">Who we're perfect for</h3>
          <ul className="mt-3 space-y-2 text-[rgb(var(--muted-fg))]">
            <li>High-mix ecommerce & retail DCs scaling fast</li>
            <li>Manufacturers modernizing intralogistics</li>
            <li>3PLs seeking throughput without headcount bloat</li>
            <li>Cold storage and regulated facilities with tight codes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
