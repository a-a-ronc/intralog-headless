// app/software/warehousr/page.tsx
import SolutionPage from "@/components/SolutionPage";

export const metadata = { title: "Warehousr | Intralog" };

const benefits = [
  { title: "Right-size every slot", body: "Map SKUs to the smallest safe bin that fits orientation and weight rules—freeing capacity without buying more rack." },
  { title: "Design shelves in minutes", body: "Auto-calc level spacing and count within your vertical envelope, with ergonomic and safety clearances baked in." },
  { title: "Season-ready plans", body: "Peak vs. average assignments and clean deltas so re-slotting before Q4 or promo season is painless." },
  { title: "Objective-driven", body: "Choose capacity balance, throughput, or travel reduction. Swap objectives and compare exports." },
  { title: "CSV in, CSV out", body: "Works with your SKU master and bin catalogs. Clean exports for WMS imports and field teams." },
];

const steps = [
  { step: 1, title: "Import data", body: "Load SKU master (L×W×H, weight, demand) and bin catalog or current map." },
  { step: 2, title: "Pick objectives & rules", body: "Select optimization objective, orientation rules, safety clearances, and season (peak/avg)." },
  { step: 3, title: "Run assignment & shelf design", body: "Warehousr computes bin fits, shelf levels, and generates the slotting plan." },
  { step: 4, title: "Export & implement", body: "Download assignments and deltas for WMS and field execution, plus a simple review report." },
];

const options = [
  {
    name: "Optimization Modes",
    items: [
      { title: "Capacity balance" },
      { title: "Throughput focus" },
      { title: "Travel reduction" },
    ],
  },
  {
    name: "Constraints & Rules",
    items: [
      { title: "SKU orientation (lay-flat, on-edge, on-end)" },
      { title: "Weight & deflection limits" },
      { title: "Ergonomic & safety clearances" },
    ],
  },
  {
    name: "Seasonality",
    items: [
      { title: "Peak vs. average plans" },
      { title: "Delta exports for re-slotting" },
    ],
  },
];

const useCases = [
  "Re-slotting before peak season or promos",
  "Greenfield bay design—size levels and select bin SKUs",
  "Recover capacity in constrained pick modules",
  "Travel reduction in high-velocity zones",
];

export default function Page() {
  return (
    <SolutionPage
      title="Warehousr — Slotting & Space Planning"
      description="Engineer-grade bin assignment and shelf design—season-aware, rules-driven, and ready for WMS import."
      videos={[]}
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={[]}
      useCases={useCases}
      brochureCta={{
        blurb: "Want a sample slotting study and export format? Share your email and we’ll send a sanitized example.",
        buttonText: "Request sample export",
        href: "/contact",
      }}
      cta={{
        title: "Want us to run a quick slotting study?",
        body: "Send your SKU master and a bin catalog. We’ll return assignments, shelf plans, and season deltas.",
        buttonText: "Request a demo",
        href: "/contact",
      }}
    />
  );
}