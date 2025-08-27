
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
    title: "Data In",
    body: "Your WMS pushes pick tasks into DensityPro for processing and optimization."
  },
  {
    step: 2,
    title: "Optimization Engine",
    body: "DensityPro sequences and orchestrates the picks—prioritizing by lane, depth, and shuttle availability to minimize travel and maximize throughput."
  },
  {
    step: 3,
    title: "Data Out",
    body: "Optimized instructions are sent directly to the forklift operator's interface, enabling precise, efficient execution."
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

const gallery =
  demoSolutionImages.softwareDensityPro ?? [
    { src: "/images/software/densitypro/optimization-dashboard.jpg", alt: "DensityPro optimization dashboard" },
    { src: "/images/software/densitypro/shuttle-coordination.jpg", alt: "Multi-shuttle coordination interface" },
    { src: "/images/software/densitypro/operator-interface.jpg", alt: "Forklift operator interface integration" }
  ];

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
