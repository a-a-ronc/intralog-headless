
// app/solutions/robotics/page.tsx
import SolutionPage from "@/components/SolutionPage";

export const metadata = { title: "Robotics (Picking, Palletizing) | Intralog" };

const benefits = [
  { title: "Consistent picking accuracy", body: "Vision-guided robots achieve 99.9%+ accuracy with advanced grip technology and AI recognition." },
  { title: "24/7 operation capability", body: "Robots work continuously without fatigue, breaks, or safety concerns in challenging environments." },
  { title: "Handle diverse SKUs", body: "Adaptive grippers and machine learning enable robots to pick various shapes, sizes, and materials." },
  { title: "Reduce ergonomic injuries", body: "Eliminate repetitive lifting and awkward reaches that cause worker strain and compensation claims." },
  { title: "Scalable deployment", body: "Add robot cells as volume grows without major facility modifications or infrastructure changes." },
  { title: "Perfect pallet patterns", body: "Palletizing robots create optimized load patterns for stability and space utilization." },
  { title: "Integration flexibility", body: "Robots work with existing conveyors, WMS, and material handling equipment seamlessly." },
  { title: "Quality consistency", body: "Precise placement and handling reduce product damage and improve customer satisfaction." },
];

const steps = [
  { step: 1, title: "Item identification", body: "Vision systems scan and identify products, determining optimal grip points and handling method." },
  { step: 2, title: "Path planning", body: "Robot calculates collision-free path from pick location to destination with optimal speed and accuracy." },
  { step: 3, title: "Precise manipulation", body: "Advanced grippers adapt to product shape and weight for secure handling and placement." },
  { step: 4, title: "Quality verification", body: "Final vision check confirms proper placement and product condition before cycle completion." },
];

const options = [
  {
    name: "Robot Types",
    items: [
      { title: "6-Axis Articulated" },
      { title: "SCARA Robots" },
      { title: "Delta Pick Robots" },
      { title: "Collaborative Robots" },
    ],
  },
  {
    name: "Gripper Technology",
    items: [
      { title: "Vacuum Grippers" },
      { title: "Mechanical Fingers" },
      { title: "Soft Robotics" },
      { title: "Magnetic Grippers" },
    ],
  },
  {
    name: "Vision Systems",
    items: [
      { title: "2D Vision Guidance" },
      { title: "3D Depth Cameras" },
      { title: "Barcode Reading" },
      { title: "Quality Inspection" },
    ],
  },
  {
    name: "Applications",
    items: [
      { title: "Case Picking" },
      { title: "Layer Palletizing" },
      { title: "Piece Picking" },
      { title: "Depalletizing" },
    ],
  },
];

const gallery = [
  { title: "Case picking robot", src: "/images/solutions/robotics/case-picking.jpg" },
  { title: "Palletizing cell", src: "/images/solutions/robotics/palletizing.jpg" },
  { title: "Vision-guided picking", src: "/images/solutions/robotics/vision-picking.jpg" },
  { title: "Collaborative workspace", src: "/images/solutions/robotics/collaborative.jpg" },
];

const useCases = [
  "E-commerce fulfillment: high-speed piece picking and mixed-case palletizing",
  "Food & beverage: case handling in cold storage and production environments",
  "Manufacturing: finished goods packaging and shipping preparation",
  "3PL operations: flexible handling of diverse client products and packaging",
  "Retail distribution: store-ready palletizing and cross-docking operations",
];

export default function Page() {
  return (
    <SolutionPage
      title="Robotics (Picking, Palletizing)"
      description="Advanced robotic systems that handle picking and palletizing tasks with precision and reliability—reducing labor dependency while improving accuracy and throughput in demanding warehouse environments."
      videos={[
        { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Robotic Picking System" },
        { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Palletizing Robot Cell" },
      ]}
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Interested in robotic automation specifications and ROI analysis? Get our comprehensive robotics guide.",
        buttonText: "Request brochure",
        href: "/contact",
      }}
      cta={{
        title: "Ready to deploy robotic picking or palletizing?",
        body: "We'll analyze your SKU profile, throughput requirements, and facility constraints to design the optimal robotic solution for your operation.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
