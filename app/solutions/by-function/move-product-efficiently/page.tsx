// app/solutions/by-function/move-product-efficiently/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Move Product Efficiently | Intralog" };

const benefits = [
  { title: "Predictable flow", body: "Metering, gapping, and ZPA accumulation keep downstream fed without blocking." },
  { title: "Less travel, fewer touches", body: "Conveyors, AMRs, and lifts connect work areas and docks with minimal walking." },
  { title: "Right-sized sortation", body: "From steerable wheel to sliding-shoe or cross-belt, matched to your rate and destinations." },
  { title: "Maintainability", body: "Standard components, safe access, and clear diagnostics reduce downtime." },
];

const steps = [
  { step: 1, title: "Model flows & rates", body: "Order mix, induction points, merges, and destination counts define the design." },
  { step: 2, title: "Convey & buffer", body: "MDR/BDLR/belted lines with ZPA zones and smart merges/gappers." },
  { step: 3, title: "Divert & sort", body: "Choose the sorter/diverts appropriate to your CPM and chute/door count." },
  { step: 4, title: "Measure & improve", body: "Track dwell, release rules, and exceptions to tune throughput." },
];

const options = [
  {
    name: "Conveyance & Elevation",
    items: [
      { title: "MDR ZPA, belted & belt-over-roller" },
      { title: "BDLR/CDLR, modular plastic belt" },
      { title: "Curves, merges, right-angle transfers" },
      { title: "VRCs, spirals, and dock telescopics" },
    ],
  },
  {
    name: "Sortation & Diverts",
    items: [
      { title: "Steerable wheel / angled roller" },
      { title: "Narrow-belt with pop-up wheels" },
      { title: "Sliding-shoe sorter" },
      { title: "Cross-belt / tilt-tray sorters" },
    ],
  },
  {
    name: "Mobile & Control",
    items: [
      { title: "AMR assists for totes/pods and work-cell moves" },
      { title: "Merge controllers, dynamic gappers, singulators" },
      { title: "WMS/WCS integration, PLC/HMI, exception handling" },
    ],
  },
];

const gallery =
  demoSolutionImages.moveEfficiently ?? [
    { src: "/images/solutions/by-function/move/accumulation.jpg", alt: "ZPA accumulation conveyors" },
    { src: "/images/solutions/by-function/move/sorter.jpg", alt: "High-rate sortation" },
    { src: "/images/solutions/by-function/move/vrc.jpg", alt: "Vertical reciprocating conveyor" },
  ];

const useCases = [
  "E-com: merge/gap to shoe sorter feeding pack lanes",
  "3PL: mid-rate steerable-wheel diverts to zones",
  "Manufacturing: belted lines feeding work cells and palletizer",
];

export default function Page() {
  return (
    <SolutionPage
      title="Move Product Efficiently"
      description="Conveyors, AMRs, lifts, and the right sorter to move cartons, totes, and pallets with predictable flow, minimal touches, and easy maintenance."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Get the Flow & Sortation Guide—rate bands, merge logic, and divert selection.",
        buttonText: "Get the guide",
        href: "/contact",
      }}
      cta={{
        title: "Engineer your material flow",
        body: "We’ll model your rates and destinations, then specify conveyors, buffers, and the sorter that fits.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
