// app/software/lully/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Lully (Partner Software) | Intralog" };

const benefits = [
  {
    title: "Efficiency without new hardware",
    body: "Boost throughput and lower cost by orchestrating smarter picks, releases, and flows on top of your existing WMS."
  },
  {
    title: "Supercharge the WMS you already have",
    body: "Lully is system-agnostic and connects via API—no end-user UI change or retraining required."
  },
  {
    title: "Fast time to value",
    body: "Deploy quickly, keep operations running, and start capturing gains in days—not months."
  },
  {
    title: "Proof in real operations",
    body: "Documented results include measurable reductions in travel, fewer stops per cart, and higher lines per hour."
  },
];

const steps = [
  {
    step: 1,
    title: "Connect",
    body: "Non-disruptive API connection to your WMS; define scope and guardrails."
  },
  {
    step: 2,
    title: "Configure",
    body: "Tune orchestration rules for order release, batching, route minimization, and pack station load balancing."
  },
  {
    step: 3,
    title: "Orchestrate",
    body: "Generate smarter waves/flows that cut travel, reduce touches, and keep pack fed."
  },
  {
    step: 4,
    title: "Measure & improve",
    body: "Monitor KPIs (UPH, pick seconds, distance, stops/cart) and iterate rules for continuous gains."
  },
];

const options = [
  {
    name: "What Lully Optimizes",
    items: [
      { title: "Order grouping & release timing" },
      { title: "Pick path & stops-per-cart reduction" },
      { title: "Batch/cluster logic for manual ops" },
      { title: "Pack station load balancing" },
      { title: "Direct pick-to-shipper workflows" },
    ],
  },
  {
    name: "Where It Fits",
    items: [
      { title: "Manual & low-automation DCs (fast ROI)" },
      { title: "3PL multi-client operations" },
      { title: "E-commerce & retail peaks" },
      { title: "WMS-agnostic deployments via API" },
    ],
  },
  {
    name: "Engagement & Support",
    items: [
      { title: "Rapid pilot → scale plan" },
      { title: "KPI baselines & weekly impact reviews" },
      { title: "Change-safe rollout in live facilities" },
    ],
  },
];

const gallery =
  demoSolutionImages.softwareLully ?? [
    { src: "/images/software/lully/overview.jpg", alt: "Lully warehouse orchestration overview" },
    { src: "/images/software/lully/grouping.jpg", alt: "Smart order grouping and release" },
    { src: "/images/software/lully/metrics.jpg", alt: "Operational metrics and improvement" },
  ];

const useCases = [
  "Manual picking DC: cut travel and stops while raising UPH—no hardware changes.",
  "3PL: improve client SLAs with smarter waves and pack-balanced flow.",
  "Retail/eCom: protect cutoffs by smoothing volume across the day.",
  "Brownfield retrofits: add orchestration above an existing WMS without retraining the floor.",
];

export default function Page() {
  return (
    <SolutionPage
      title="Lully (Partner Software)"
      description="AI warehouse orchestration that sits on top of your WMS to cut travel, reduce stops, and raise throughput—without adding hardware or retraining your team."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Want results like documented case studies without a rip-and-replace? Ask for a pilot outline.",
        buttonText: "Request pilot outline",
        href: "/contact",
      }}
      cta={{
        title: "See Lully working on your data",
        body: "We’ll baseline your KPIs, connect via API, and prove impact quickly—then scale with guardrails that fit your operation.",
        buttonText: "Book a demo",
        href: "/contact",
      }}
    />
  );
}
