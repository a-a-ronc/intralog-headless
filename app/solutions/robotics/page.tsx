
// app/solutions/robotics/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Robotics & Automation | Intralog" };

const benefits = [
  { title: "Consistent accuracy", body: "Vision-guided robots achieve 99.5%+ pick accuracy with barcode scanning and weight verification." },
  { title: "Labor cost reduction", body: "Automated picking and palletizing reduces direct labor costs by 30-50% while improving safety." },
  { title: "24/7 operation", body: "Robotic cells run continuously without breaks, supporting multi-shift operations and peak demands." },
  { title: "Ergonomic improvements", body: "Robots handle heavy lifting and repetitive motions, reducing worker strain and injury risk." },
  { title: "Scalable throughput", body: "Add robotic cells incrementally to match volume growth without major facility changes." },
  { title: "Quality consistency", body: "Automated palletizing ensures consistent load patterns and reduces product damage." },
  { title: "Real-time adaptability", body: "Vision systems adapt to varying SKU sizes, orientations, and packaging types dynamically." },
  { title: "Integration flexibility", body: "Robots integrate with conveyors, AMRs, and WMS systems for seamless material flow." },
];

const steps = [
  { step: 1, title: "Product identification", body: "Vision systems scan barcodes, measure dimensions, and identify optimal grip points." },
  { step: 2, title: "Path planning", body: "Robot calculates optimal pick trajectory and approach angle based on product characteristics." },
  { step: 3, title: "Precision handling", body: "End-effector grips product using vacuum, mechanical fingers, or adaptive grippers." },
  { step: 4, title: "Placement execution", body: "Robot places item precisely on conveyor, pallet, or in tote with verification scanning." },
];

const options = [
  {
    name: "Robot Types",
    items: [
      { title: "Articulated Arm Robots" },
      { title: "SCARA Robots" },
      { title: "Delta Robots" },
      { title: "Collaborative Robots (Cobots)" },
    ],
  },
  {
    name: "End Effectors",
    items: [
      { title: "Vacuum Grippers" },
      { title: "Mechanical Fingers" },
      { title: "Adaptive Grippers" },
      { title: "Magnetic Grippers" },
    ],
  },
  {
    name: "Vision Systems",
    items: [
      { title: "2D Vision Guidance" },
      { title: "3D Vision Systems" },
      { title: "Barcode Scanning" },
      { title: "Dimension Measurement" },
    ],
  },
  {
    name: "Applications",
    items: [
      { title: "Case Picking" },
      { title: "Palletizing/Depalletizing" },
      { title: "Piece Picking" },
      { title: "Quality Inspection" },
    ],
  },
];

const gallery = demoSolutionImages.robotics;

const useCases = [
  "E-commerce: automated piece picking for order fulfillment and returns processing",
  "Manufacturing: palletizing finished goods and feeding production lines",
  "Food & Beverage: case picking with sanitary design for food safety compliance",
  "Automotive: parts handling with precise placement for assembly operations",
  "Pharmaceuticals: sterile picking and packaging with validation tracking",
];

export default function Page() {
  return (
    <SolutionPage
      title="Robotics & Automation"
      description="Vision-guided picking and palletizing robots that deliver consistent accuracy, reduce labor costs, and operate continuously—integrating seamlessly with conveyors, AMRs, and warehouse management systems."
      videos={[
        { url: "https://www.youtube.com/embed/3RBHEtJigVo", title: "Robotic Case Picking System" },
        { url: "https://www.youtube.com/embed/gWB4h4QyzVo", title: "Automated Palletizing Cell" },
      ]}
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Exploring robotic automation for your facility? Download our robotics implementation guide with ROI calculations and case studies.",
        buttonText: "Request guide",
        href: "/contact",
      }}
      cta={{
        title: "Ready to automate your picking and palletizing?",
        body: "We'll analyze your SKU mix, throughput requirements, and layout constraints to design robotic solutions that deliver measurable ROI.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
