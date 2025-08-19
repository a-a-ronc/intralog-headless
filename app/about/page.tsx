// app/about/page.tsx
import Image from "next/image";

export const metadata = { title: "About | Intralog" };

const partners = [
  { name: "Daifuku", src: "/images/daifuku.svg" },
  { name: "Modula", src: "/images/modula.svg" },
  // add more logos here when you localize them
];

const valueProps = [
  {
    title: "ROI-First Engineering",
    body:
      "Automation isn’t always the highest ROI. We quantify manual, semi-auto, and automated options before we recommend a path.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18" /><path d="M7 13l3-3 3 3 4-4" /><path d="M17 9h4v4" />
      </svg>
    ),
  },
  {
    title: "Middle-Market Specialists",
    body:
      "We design for 300k–500k ft² operations and 3PLs—practical, scalable systems that respect budgets and lead times.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 7h18M3 12h18M3 17h18" /><path d="M7 7v10M12 7v10M17 7v10" />
      </svg>
    ),
  },
  {
    title: "Turnkey Delivery",
    body:
      "From right-sizing and data studies to simulation, layout, procurement, installation, and go-live—one accountable partner.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
      </svg>
    ),
  },
];

const process = [
  { name: "Right-Size the Facility", img: "/images/rightsize.svg" },
  { name: "Data Study & Throughput", img: "/images/data-study.svg" },
  { name: "Concept & Simulation", img: "/images/simulation.svg" },
  { name: "Floorplans & Travel", img: "/images/floorplan.svg" },
  { name: "Value & Procurement", img: "/images/procurement.svg" },
  { name: "Install & Commission", img: "/images/installation.svg" },
];

const team = [
  // Replace with real people/images (put headshots in /public/images/team/)
  { name: "Lead Systems Engineer", role: "Conveyors · AMRs · AS/RS · Sortation", img: "/images/team-1.jpg" },
  { name: "Controls Lead", role: "PLC · WCS/WES · Integration", img: "/images/team-2.jpg" },
  { name: "Design & Simulation", role: "Layouts · Digital Twins", img: "/images/team-3.jpg" },
  { name: "Procurement & Delivery", role: "Vendor Management · TCO", img: "/images/team-4.jpg" },
];

export default function AboutPage() {
  return (
    <main className="text-slate-900">
      {/* HERO */}
      <section className="section border-b border-slate-100">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
              Intralog · Warehouse Optimization
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Engineering clarity for complex operations
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              We design, simulate, and deliver material-handling systems that pay back. Vendor-agnostic. Data-driven.
              Accountable end-to-end.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href="/solutions"
                className="rounded-full bg-slate-900 px-5 py-3 text-white hover:opacity-90"
              >
                Explore our process
              </a>
              <a
                href="/contact"
                className="rounded-full border border-slate-300 bg-white px-5 py-3 text-slate-900 hover:bg-slate-50"
              >
                Start a conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-slate-100 bg-slate-50/60">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <p className="mb-4 text-center text-xs uppercase tracking-wide text-slate-500">Trusted technology partners</p>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
            {partners.map((p) => (
              <div key={p.name} className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4">
                <Image src={p.src} alt={`${p.name} logo`} width={160} height={56} className="h-10 w-auto object-contain opacity-90" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight">What we do</h2>
            <p className="mt-3 text-slate-600">
              Intralog designs automated material-handling systems for distribution centers and 3PLs—conveyors, AMRs,
              AS/RS, racking, pick modules, and high-throughput sortation—always aligned to ROI.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valueProps.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                  {v.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-slate-600">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS PREVIEW */}
      <section className="border-t border-slate-100 bg-slate-50/60">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold">How we work</h2>
            <a href="/solutions" className="text-sm font-medium text-slate-900 underline-offset-4 hover:underline">See full process</a>
          </div>
          <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((step, idx) => (
              <li key={step.name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <div className="text-xs uppercase tracking-wide text-slate-500">{String(idx + 1).padStart(2, "0")}</div>
                <h3 className="mt-1 text-lg font-semibold">{step.name}</h3>
                <div className="mt-3 overflow-hidden rounded-xl border border-slate-100 bg-white">
                  {/* Replace the src with your preferred image if you don't want the line art */}
                  <div className="relative h-40 w-full">
                    <Image src={step.img} alt={step.name} fill className="object-contain p-3" />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* RESULTS / METRICS (placeholders you can update) */}
      <section className="section">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Results you can measure</h2>
            <p className="mt-3 text-slate-600">
              We anchor designs to measurable outcomes—throughput, labor, space utilization, and safety.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Replace the numbers with actual case studies when ready */}
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
              <div className="text-4xl font-semibold">30%</div>
              <div className="mt-1 text-slate-600">Throughput lift</div>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
              <div className="text-4xl font-semibold">-18%</div>
              <div className="mt-1 text-slate-600">Travel time</div>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
              <div className="text-4xl font-semibold">12 mo</div>
              <div className="mt-1 text-slate-600">Typical payback</div>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
              <div className="text-4xl font-semibold">99.5%</div>
              <div className="mt-1 text-slate-600">Label read rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM INTRO (recommended) */}
      <section className="border-t border-slate-100 bg-slate-50/60">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold">Meet the team</h2>
            {/* Optional: link to a dedicated /team page later */}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t) => (
              <div key={t.name} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <div className="relative h-48 w-full overflow-hidden rounded-xl bg-slate-100">
                  {/* Drop real headshots into /public/images/team/… */}
                  <Image src={t.img} alt={t.name} fill className="object-cover" />
                </div>
                <div className="mt-3">
                  <div className="text-sm uppercase tracking-wide text-slate-500">{t.role}</div>
                  <div className="text-lg font-semibold">{t.name}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional: short founder blurb */}
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-slate-700">
              Our team blends systems engineering, controls, and on-floor operations. We’re conveyor people, data people,
              and commissioning people—focused on practical solutions that work on Day 1 and scale on Day 1000.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-100 bg-slate-900 text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20 text-center">
          <h3 className="text-2xl font-semibold">Have data? We’ll turn it into a plan.</h3>
          <p className="mt-2 text-slate-300">
            Share a few order and SKU details and we’ll return right-sizing + throughput scenarios within days.
          </p>
          <div className="mt-6 inline-flex items-center gap-3">
            <a href="/contact" className="rounded-full bg-white px-5 py-3 text-slate-900 shadow-sm hover:opacity-90">
              Book a consult
            </a>
            <a href="/solutions" className="rounded-full border border-slate-600 px-5 py-3 text-white hover:bg-white/10">
              See how we deliver
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
