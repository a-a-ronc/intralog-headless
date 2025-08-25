// app/services/implementation/installation/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Installation | Intralog" };

const benefits = [
  { title: "Safe & predictable", body: "Daily safety meetings, permits to work, and QC checklists keep installs on track." },
  { title: "Live-site friendly", body: "Phasing, protection, and off-hour work to minimize operational impact." },
  { title: "Quality built in", body: "Torque, alignment, and IO checks documented as we go." },
  { title: "Clean handoff", body: "Punchlist tracking, redlines/as-builts, and spares inventory." },
];

const steps = [
  { step: 1, title: "Mobilize & stage", body: "Receiving/staging plan, material flow, and site rules." },
  { step: 2, title: "Build & cable", body: "Racking, conveyors, lifts, devices, and controls pulled and dressed." },
  { step: 3, title: "Power & IO checks", body: "Point-to-point verification, device addressing, and safety circuits." },
  { step: 4, title: "Dry runs & turnover", body: "Mechanical run-in and readiness for commissioning." },
];

const options = [
  {
    name: "Scope",
    items: [
      { title: "Rack/mezzanine, conveyor/sortation, VRCs/spirals" },
      { title: "Robots/EOAT, palletizers, cells" },
      { title: "Controls panels, devices, and networks" },
      { title: "Labels, signage, guarding, and safety" },
    ],
  },
];

const gallery = demoSolutionImages.servicesInstall ?? [
  { src: "/images/services/install/staging.jpg", alt: "Material staging" },
  { src: "/images/services/install/conveyor.jpg", alt: "Conveyor install" },
  { src: "/images/services/install/wiring.jpg", alt: "Controls wiring & IO checks" },
];

const useCases = [
  "Conveyor & sorter retrofit in active DC",
  "Pick module & carton flow buildout",
  "Robotic palletizer cell with safety fencing",
];

export default function Page() {
  return (
    <SolutionPage
      title="Installation"
      description="Turnkey installation for rack, conveyors, lifts, and robotics—safe, phased, and quality-controlled with as-built documentation."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{ blurb: "Request our installation QA checklist.", buttonText: "Get the QA checklist", href: "/contact" }}
      cta={{ title: "Plan your install window", body: "We’ll build a phased schedule, coordinate trades, and protect operations while we work.", buttonText: "Talk with a PM", href: "/contact" }}
    />
  );
}
