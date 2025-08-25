// app/solutions/by-function/pick-and-pack-faster/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Pick & Pack Faster | Intralog" };

const benefits = [
  { title: "Higher lines per hour", body: "Batch/cluster picking, PTL/PTL, and goods-to-person reduce walk time." },
  { title: "Accuracy first", body: "Scan prompts, weigh/verify, and exception lanes protect quality and chargebacks." },
  { title: "Scales with peak", body: "Add stations or AMRs seasonally without replatforming the core flow." },
  { title: "Ergonomics", body: "Right pick media and station design reduce strain and improve speed." },
];

const steps = [
  { step: 1, title: "Slot & stage work", body: "Velocity-based slotting and batch building ready orders for efficient routes." },
  { step: 2, title: "Pick & consolidate", body: "Cluster pick to carts/AMRs; put-walls or consolidation tables with PTL." },
  { step: 3, title: "Pack & label", body: "Weigh/verify and print/apply at pack; route to sorter or docks." },
  { step: 4, title: "Audit & improve", body: "KPI dashboards (UPH, accuracy, dwell) drive continuous improvement." },
];

const options = [
  {
    name: "Picking Methods",
    items: [
      { title: "Batch / Cluster / Zone Picking" },
      { title: "Pick-to-Light & HMI prompts" },
      { title: "Goods-to-Person (VLMs, shuttle/miniload, ACR robots)" },
      { title: "Cart-based and AMR-assisted routes" },
    ],
  },
  {
    name: "Pack & QA",
    items: [
      { title: "Weigh/verify with scales and vision as needed" },
      { title: "DWS + Print & Apply with grading" },
      { title: "Exception lanes and rework flows" },
    ],
  },
  {
    name: "Media & Stations",
    items: [
      { title: "Carton flow faces, shelving, modular bins" },
      { title: "Ergonomic benches, put-walls, and lighting" },
      { title: "Label printers, scanners, PTL/Pick displays" },
    ],
  },
];

const gallery =
  demoSolutionImages.pickPack ?? [
    { src: "/images/solutions/by-function/pick-pack/put-wall.jpg", alt: "Put-wall consolidation" },
    { src: "/images/solutions/by-function/pick-pack/g2p.jpg", alt: "Goods-to-person station" },
    { src: "/images/solutions/by-function/pick-pack/pack.jpg", alt: "Pack with weigh/verify" },
  ];

const useCases = [
  "E-com smalls: batch pick + put-wall + label verify",
  "Retail: zone pick to route cartons with QA at pack",
  "MRO: slow movers via VLMs/G2P with secure access",
];

export default function Page() {
  return (
    <SolutionPage
      title="Pick & Pack Faster"
      description="Slotting, pick media, PTL/put-walls, and goods-to-person—plus pack QA and labeling—to increase lines per hour while protecting accuracy."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Request the Picking Playbook—method selection, station design, and staffing calculators.",
        buttonText: "Request playbook",
        href: "/contact",
      }}
      cta={{
        title: "Accelerate pick & pack",
        body: "We’ll choose the right picking method, size stations, and integrate QA/labeling to meet your SLAs.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
