
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Robotics | Intralog" };

const benefits = [
  { title: "Labor cost reduction", body: "Automate repetitive picking, packing, and palletizing tasks to reduce dependency on manual labor." },
  { title: "Consistent accuracy", body: "Eliminate human error in picking, placement, and quality control with vision‑guided precision." },
  { title: "Ergonomic improvements", body: "Reduce worker injury risk by automating heavy lifting, repetitive motions, and awkward positions." },
  { title: "24/7 operation", body: "Continuous operation capability increases throughput without shift premiums or overtime costs." },
  { title: "Scalable automation", body: "Deploy robots incrementally as volumes grow or seasonal demands increase." },
  { title: "Quality assurance", body: "Built‑in vision systems and sensors ensure consistent product handling and damage prevention." },
  { title: "Data & analytics", body: "Real‑time performance monitoring and predictive maintenance optimize uptime and efficiency." },
  { title: "Collaborative safety", body: "Advanced safety systems allow robots to work safely alongside human operators." },
];

const steps = [
  { step: 1, title: "Task identification", body: "WMS or control system identifies items to pick, pack, or palletize with location and specifications." },
  { step: 2, title: "Vision & planning", body: "Robot cameras and AI identify objects, plan optimal approach, and calculate grip strategies." },
  { step: 3, title: "Precise manipulation", body: "Robot executes pick, place, or assembly task with consistent speed and accuracy." },
  { step: 4, title: "Quality verification", body: "Vision systems confirm task completion and flag any issues for human intervention." },
];

const options = [
  {
    name: "Picking & Case Handling",
    items: [
      { title: "Vision‑Guided Case Picking" },
      { title: "Piece‑Picking Collaborative Robots" },
      { title: "Mixed‑Case Depalletizing" },
      { title: "Tote & Bin Handling" },
    ],
  },
  {
    name: "Palletizing & Packaging",
    items: [
      { title: "Robotic Palletizing Cells" },
      { title: "Case Erecting & Sealing" },
      { title: "Stretch Wrapping Integration" },
      { title: "Mixed‑Load Palletizing" },
    ],
  },
  {
    name: "Vision & AI Systems",
    items: [
      { title: "3D Vision Recognition" },
      { title: "AI‑Driven Grip Selection" },
      { title: "Quality Inspection Cameras" },
      { title: "Barcode & OCR Reading" },
    ],
  },
  {
    name: "Safety & Collaboration",
    items: [
      { title: "Collaborative Robot (Cobot) Design" },
      { title: "Safety Light Curtains" },
      { title: "Emergency Stop Systems" },
      { title: "Human‑Machine Interface" },
    ],
  },
];

const gallery = demoSolutionImages.robotics;

const useCases = [
  "E‑commerce fulfillment: automated case picking and order consolidation",
  "Food & beverage: palletizing finished goods with consistent layer patterns",
  "Manufacturing: material handling between production lines and quality control",
  "Retail distribution: mixed‑case palletizing for store‑specific deliveries",
  "Third‑party logistics: flexible automation for multiple client requirements",
];

export default function Page() {
  return (
    <SolutionPage
      title="Robotics"
      description="Vision‑guided industrial robots automate picking, palletizing, and material handling tasks with precision, consistency, and safety."
      videos={[
        { url: "https://www.youtube.com/embed/8m0jNYGXJzY", title: "Robotic Case Picking" },
        { url: "https://www.youtube.com/embed/FK9S5WhUGJE", title: "Palletizing Robot Cell" },
        { url: "https://www.youtube.com/embed/vxbOgHE62iE", title: "Vision‑Guided Depalletizing" },
      ]}
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Want to see robotics ROI calculations for your specific application? Get our automation feasibility guide.",
        buttonText: "Request analysis",
        href: "/contact",
      }}
      cta={{
        title: "Ready to explore robotic automation?",
        body: "We'll analyze your current processes and design a robotic solution that delivers measurable productivity gains.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
