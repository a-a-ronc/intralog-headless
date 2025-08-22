
// app/solutions/palletizing/page.tsx
import SolutionPage from "@/components/SolutionPage";

export const metadata = { title: "Palletizing | Intralog" };

const benefits = [
  { title: "Consistent pallet quality", body: "Automated systems create perfectly aligned, stable loads that reduce damage during transport." },
  { title: "Optimize cube utilization", body: "Advanced algorithms maximize trailer space usage and minimize shipping costs per unit." },
  { title: "Eliminate ergonomic risks", body: "Remove heavy lifting and repetitive motions that cause workplace injuries and compensation claims." },
  { title: "24/7 operation capability", body: "Robotic palletizers work continuously without breaks, maintaining consistent production flow." },
  { title: "Flexible pattern generation", body: "Handle multiple SKUs and package sizes with automatic pattern optimization and changeover." },
  { title: "Increase throughput", body: "Achieve 1000+ cases per hour with multi-robot cells and optimized pick-and-place cycles." },
  { title: "Reduce labor dependency", body: "Minimize staffing requirements while maintaining consistent palletizing quality and speed." },
  { title: "Quality documentation", body: "Integrated vision systems verify load quality and generate shipping documentation automatically." },
];

const steps = [
  { step: 1, title: "Case identification", body: "Vision systems scan incoming cases to determine size, weight, and optimal pallet placement pattern." },
  { step: 2, title: "Pattern calculation", body: "Software generates optimal pallet pattern considering stability, cube utilization, and weight distribution." },
  { step: 3, title: "Robotic placement", body: "High-speed robots pick and place cases with precision positioning and gentle handling." },
  { step: 4, title: "Load completion", body: "System applies stretch wrap, labels, and generates shipping documentation for finished pallets." },
];

const options = [
  {
    name: "Palletizer Types",
    items: [
      { title: "Robotic Palletizers" },
      { title: "Layer Palletizers" },
      { title: "Bag Palletizers" },
      { title: "Mixed-case Systems" },
    ],
  },
  {
    name: "End-of-line Features",
    items: [
      { title: "Stretch Wrapping" },
      { title: "Pallet Labeling" },
      { title: "Load Scanning" },
      { title: "Quality Inspection" },
    ],
  },
  {
    name: "Handling Options",
    items: [
      { title: "Vacuum Grippers" },
      { title: "Clamp Grippers" },
      { title: "Layer Picks" },
      { title: "Bag Grippers" },
    ],
  },
  {
    name: "Integration Features",
    items: [
      { title: "Conveyor Interface" },
      { title: "WMS Integration" },
      { title: "Pattern Software" },
      { title: "Performance Monitoring" },
    ],
  },
];

const gallery = [
  { title: "Robotic palletizer cell", src: "/images/solutions/palletizing/robotic-cell.jpg" },
  { title: "Layer palletizer", src: "/images/solutions/palletizing/layer-palletizer.jpg" },
  { title: "Mixed-case palletizing", src: "/images/solutions/palletizing/mixed-case.jpg" },
  { title: "End-of-line wrapping", src: "/images/solutions/palletizing/stretch-wrapping.jpg" },
];

const useCases = [
  "Food & beverage: case palletizing with mixed SKUs and retail-ready displays",
  "Consumer products: high-speed palletizing for distribution center operations",
  "Manufacturing: finished goods palletizing with custom packaging configurations",
  "Chemical & building materials: heavy-duty palletizing for industrial products",
  "E-commerce: automated palletizing for LTL and parcel hub operations",
];

export default function Page() {
  return (
    <SolutionPage
      title="Palletizing"
      description="Automated palletizing systems that create perfect loads every time—from robotic cells to layer palletizers, maximizing cube utilization while reducing labor costs and workplace injuries."
      videos={[
        { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Robotic Palletizing Cell" },
      ]}
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Looking for palletizing system specifications and ROI analysis? Download our comprehensive palletizing guide.",
        buttonText: "Request brochure",
        href: "/contact",
      }}
      cta={{
        title: "Ready to automate your palletizing operations?",
        body: "We'll analyze your case mix, throughput requirements, and space constraints to design the optimal palletizing solution for your operation.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
