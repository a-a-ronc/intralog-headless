// app/services/engineering-and-design/data-analysis-and-system-design/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Data Analysis & System Design | Intralog" };

const benefits = [
  { title: "Right-sized systems", body: "Throughput, storage, and station counts sized from your real data—not rules of thumb." },
  { title: "Future-proof concepting", body: "Phase plans that add zones/robots/sort points without replatforming." },
  { title: "Cost vs. performance clarity", body: "Options and trade-offs visualized with KPIs and budget rollups." },
  { title: "Clean integration", body: "WMS/WES/WCS and PLC/HMI responsibilities mapped early to avoid gaps." },
];

const steps = [
  { step: 1, title: "Data ingest & cleanse", body: "Orders, SKUs, dims/weights, seasonality, cutoffs; outlier handling." },
  { step: 2, title: "Profile & sizing", body: "Rates per area, accumulation, buffer sizes, and picker walk models." },
  { step: 3, title: "Concept & iterate", body: "Multiple concepts with KPIs, staffing, and capex per option." },
  { step: 4, title: "Spec & handoff", body: "Layout, equipment list, IO maps, and software requirements." },
];

const options = [
  {
    name: "Sizing & Modeling",
    items: [
      { title: "Throughput & accumulation calcs" },
      { title: "Storage mix & slotting by velocity" },
      { title: "Labor & station models (UPH, dwell)" },
      { title: "Buffering/sequencing for pack/sort" },
    ],
  },
  {
    name: "Deliverables",
    items: [
      { title: "Concept layouts (PDF/CAD) with KPIs" },
      { title: "Equipment BOM & phased capex" },
      { title: "Integration RACI (WMS/WES/WCS/PLC)" },
      { title: "Risk register & assumptions log" },
    ],
  },
];

const gallery = demoSolutionImages.servicesDesign ?? [
  { src: "/images/services/design/concepts.jpg", alt: "Concept options" },
  { src: "/images/services/design/kpis.jpg", alt: "Design KPIs" },
  { src: "/images/services/design/specs.jpg", alt: "Spec package" },
];

const useCases = [
  "Greenfield DC concept with 3 sorter options",
  "E-com retrofit: add put-walls & AMR assists",
  "Manufacturing kitting + line feed redesign",
];

export default function Page() {
  return (
    <SolutionPage
      title="Data Analysis & System Design"
      description="Data-driven sizing and concepting—throughput, storage, labor, and integration mapped into a phased, budget-safe design."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{ blurb: "Get our input data template (CSV) to kickstart analysis.", buttonText: "Get template", href: "/contact" }}
      cta={{ title: "Start with your data", body: "Send us a data slice and targets—we’ll turn it into right-sized concepts with KPIs and budgets.", buttonText: "Talk with an engineer", href: "/contact" }}
    />
  );
}
