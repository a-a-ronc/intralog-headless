
// app/solutions/robotics/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Robotics | Intralog" };

const benefits = [
  { title: "Consistent throughput rates", body: "Robots maintain steady picking and palletizing speeds regardless of shift patterns or fatigue." },
  { title: "Improved picking accuracy", body: "Vision-guided systems and precise positioning reduce damage and mis-picks in case and pallet handling." },
  { title: "Enhanced worker safety", body: "Robots handle repetitive lifting, reaching, and heavy loads while workers focus on higher-value tasks." },
  { title: "24/7 operational capability", body: "Automated cells can run continuously with minimal supervision during off-hours and peak periods." },
  { title: "Flexible deployment options", body: "From collaborative robots working alongside staff to fully automated cells for lights-out operation." },
  { title: "Scalable automation", body: "Start with single-cell deployments and expand to multi-robot systems as volume and ROI justify growth." },
  { title: "Reduced labor dependency", body: "Minimize staffing challenges and overtime costs while maintaining consistent output levels." },
  { title: "Quick changeover capability", body: "Advanced systems adapt to different SKUs, pack patterns, and pallet configurations with minimal programming." },
];

const steps = [
  { step: 1, title: "Product presentation", body: "Conveyors or operators present cases/items to the robot work envelope for automated handling." },
  { step: 2, title: "Vision & positioning", body: "3D cameras and sensors identify products, calculate optimal grip points, and plan movement paths." },
  { step: 3, title: "Automated handling", body: "Robots pick, place, stack, or palletize according to programmed patterns and weight distribution rules." },
  { step: 4, title: "Quality & handoff", body: "Systems verify placement accuracy, apply labels if needed, and transfer completed pallets downstream." },
];

const options = [
  {
    name: "Robot Types",
    items: [
      { title: "Articulated Arm Robots (6-axis)" },
      { title: "Collaborative Robots (Cobots)" },
      { title: "Gantry/Cartesian Systems" },
      { title: "SCARA Robots (4-axis)" },
    ],
  },
  {
    name: "End Effectors",
    items: [
      { title: "Vacuum Grippers" },
      { title: "Mechanical Grippers" },
      { title: "Magnetic Grippers" },
      { title: "Custom Tool-Change Systems" },
    ],
  },
  {
    name: "Vision & Sensing",
    items: [
      { title: "3D Vision Systems" },
      { title: "Barcode/Label Reading" },
      { title: "Force/Torque Sensing" },
      { title: "Collision Detection" },
    ],
  },
  {
    name: "Integration Features",
    items: [
      { title: "Conveyor Interface" },
      { title: "Pallet Dispensers/Stackers" },
      { title: "Label Print-and-Apply" },
      { title: "WMS/WCS Integration" },
    ],
  },
];

const gallery = demoSolutionImages.robotics || [
  { title: "Vision-guided picking", src: "/images/solutions/robotics/vision-picking.jpg" },
  { title: "Palletizing cell", src: "/images/solutions/robotics/palletizing.jpg" },
  { title: "Collaborative robot", src: "/images/solutions/robotics/collaborative.jpg" },
  { title: "Case picking system", src: "/images/solutions/robotics/case-picking.jpg" },
];

const useCases = [
  "Case picking: automated selection from flow racks or shelving",
  "Palletizing: mixed-case and single-SKU pallet building",
  "Depalletizing: breaking down inbound pallets for processing",
  "Pack-out: placing products into shipping boxes or totes",
  "Machine tending: loading/unloading packaging or processing equipment",
  "Quality inspection: automated checking and sorting of products",
  "Kitting/assembly: combining components for manufacturing or fulfillment",
  "Bag handling: flexible packaging operations for varying product sizes",
];

export default function Page() {
  return (
    <SolutionPage
      title="Robotics"
      description="Intelligent robotic systems for picking, palletizing, and material handling—combining precision, flexibility, and safety to optimize labor-intensive operations while maintaining consistent throughput."
      videos={[
        { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Robotic Palletizing Overview" },
        { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Vision-Guided Picking" },
      ]}
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Interested in robotic automation for your operation? Download our robotics application guide.",
        buttonText: "Request brochure",
        href: "/contact",
      }}
      cta={{
        title: "Ready to explore robotic automation for your facility?",
        body: "We'll analyze your product mix, throughput requirements, and labor challenges to design the optimal robotic solution.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
