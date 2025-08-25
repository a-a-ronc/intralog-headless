// app/services/engineering-and-design/industrial-real-estate-evaluation/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Industrial Real Estate Evaluation | Intralog" };

const benefits = [
  { title: "Choose the right building", body: "Ceiling height, column grid, slab, docks, power, and codes aligned to your process—not just square feet." },
  { title: "Speed to permit", body: "Early read on AHJ requirements, flues/ESFR, egress, and seismic to avoid redesign later." },
  { title: "Throughput-ready shell", body: "Sizing for lanes, pick modules, and automation interfaces baked into site selection." },
  { title: "Cost & risk clarity", body: "Capex/opex rollups with retrofit allowances, utilities, and tenant improvements." },
];

const steps = [
  { step: 1, title: "Profile demand & process", body: "Order mix, pallets/SKU, turns, cutoffs, line rates, and growth plan." },
  { step: 2, title: "Shortlist buildings", body: "Ceiling/columns/slab/docks/utilities; fire sprinkler density and water supply." },
  { step: 3, title: "Test fits & code review", body: "Block layouts, flue spacing, egress, and permit strategy with the AHJ." },
  { step: 4, title: "Budget & schedule", body: "TI scope, equipment allowances, soft costs, and a realistic critical path." },
];

const options = [
  {
    name: "Due Diligence Checklist",
    items: [
      { title: "Slab capacity, flatness/levelness (F/L)" },
      { title: "Sprinklers (ESFR/CMDA), water supply, hydrants" },
      { title: "Power (service size), compressed air, IT" },
      { title: "Dock count, positions, yard & traffic flow" },
      { title: "Seismic zone, wind/snow loads, geotech when needed" },
    ],
  },
  {
    name: "Deliverables",
    items: [
      { title: "Block layouts & test fits (PDF/CAD)" },
      { title: "Permit & code memo (AHJ assumptions)" },
      { title: "Capex/opex model with TI allowances" },
      { title: "Schedule with critical path & risks" },
    ],
  },
];

const gallery = demoSolutionImages.servicesIre ?? [
  { src: "/images/services/ire/test-fit.jpg", alt: "Test fit layout" },
  { src: "/images/services/ire/dock-flow.jpg", alt: "Dock & yard flow" },
  { src: "/images/services/ire/code-review.jpg", alt: "Code & permit review" },
];

const useCases = [
  "New DC site selection with automation in phase 2",
  "Retrofit candidate comparison for a fast expansion",
  "Cold storage conversion feasibility with ESFR",
];

export default function Page() {
  return (
    <SolutionPage
      title="Industrial Real Estate Evaluation"
      description="Fast, practical site due diligence—layouts, code/permit feasibility, and cost/schedule clarity—so your building choice supports throughput and future automation."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{ blurb: "Request our Due Diligence Checklist template.", buttonText: "Get the checklist", href: "/contact" }}
      cta={{ title: "Evaluate your shortlist", body: "We’ll stress-test candidates against throughput, code, and cost—before you sign.", buttonText: "Talk with an engineer", href: "/contact" }}
    />
  );
}
