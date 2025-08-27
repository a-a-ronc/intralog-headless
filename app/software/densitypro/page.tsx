import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "DensityPro | Intralog" };

const benefits = [
  {
    title: "Eliminate wasted moves",
    body: "Stop forcing operators into inactivity or wasted travel with intelligent pick sequencing."
  },
  {
    title: "Maximize throughput",
    body: "Coordinated sequencing keeps product flowing out of deep-lane storage at peak efficiency. See productivity gains of up to 20% from baseline pallet shuttle pick activity."
  },
  {
    title: "Headless by design",
    body: "DensityPro integrates invisibly into your existing WMS and operator workflows - no need to replace your core systems and change management is a breeze."
  },
  {
    title: "Orchestrated deep-lane picking",
    body: "Multiple simultaneous pallet shuttles work in harmony rather than in conflict, maximizing productivity from high-density storage."
  },
];

const steps = [
  {
    step: 1,
    title: "Import & analyze",
    body: "Upload SKU master, order history, and current slotting. DensityPro profiles velocity, cube movement, and pick density.",
    image: { src: "/images/software/densitypro/step1.png", alt: "DensityPro data import and analysis interface" }
  },
  {
    step: 2,
    title: "Generate sequences",
    body: "AI determines optimal pick paths, batching rules, and zone transitions to minimize travel and maximize throughput.",
    image: { src: "/images/software/densitypro/step2.png", alt: "DensityPro sequence generation and optimization" }
  },
  {
    step: 3,
    title: "Deploy & optimize",
    body: "Export pick lists, WMS integration files, and real-time operator guidance. Continuous learning improves performance.",
    image: { src: "/images/software/densitypro/step3.png", alt: "DensityPro deployment and optimization dashboard" }
  },
];

const options = [
  {
    name: "Key Features",
    items: [
      { title: "WMS integration via API" },
      { title: "Multi-shuttle coordination" },
      { title: "Lane depth optimization" },
      { title: "Real-time sequencing engine" },
      { title: "Operator interface integration" },
    ],
  },
  {
    name: "Optimization Logic",
    items: [
      { title: "Lane prioritization algorithms" },
      { title: "Shuttle availability tracking" },
      { title: "Travel distance minimization" },
      { title: "Throughput maximization" },
    ],
  },
  {
    name: "Integration Points",
    items: [
      { title: "Existing WMS systems" },
      { title: "Forklift operator terminals" },
      { title: "Pallet shuttle controllers" },
      { title: "Warehouse control systems (WCS)" },
    ],
  },
];

const gallery = [];

const useCases = [
  "Deep-lane pallet shuttle systems with multiple simultaneous operations",
  "High-volume distribution centers with dense storage requirements",
  "Operations seeking 15-20% productivity gains from existing shuttle infrastructure",
];

export default function DensityProPage() {
  return (
    <SolutionPage
      title="DensityPro"
      description="Orchestrated deep-lane picking for maximum productivity. High-density storage offers incredible space savings - but with the right orchestration, multiple simultaneous pallet shuttles in operation can quickly become a source of increased productivity. DensityPro solves this problem."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Learn how DensityPro can boost your pallet shuttle productivity by up to 20%.",
        buttonText: "Get the details",
        href: "/contact",
      }}
      cta={{
        title: "More pallets moved, faster cycle times",
        body: "Higher productivity from the same workforce and equipment. Talk to us about implementing DensityPro in your operation.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}