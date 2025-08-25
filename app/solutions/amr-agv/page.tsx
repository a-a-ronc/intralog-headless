
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "AMRs & AGVs | Intralog" };

const benefits = [
  { title: "Flexible goods‑to‑person", body: "Mobile robots bring inventory to pick stations, eliminating operator travel time and boosting throughput." },
  { title: "Scalable automation", body: "Add or redeploy robots as demand changes without fixed infrastructure modifications." },
  { title: "Robotic sortation", body: "Autonomous mobile sorters handle package routing and consolidation with higher accuracy than manual methods." },
  { title: "Pallet transportation", body: "Forklift AMRs automate pallet moves, reducing labor costs and improving safety in high‑traffic areas." },
  { title: "Dynamic routing", body: "AI‑driven path optimization adapts to real‑time conditions, obstacles, and priority changes." },
  { title: "Integration ready", body: "Seamless WMS connectivity for real‑time task assignment and inventory synchronization." },
  { title: "Multi‑shift operation", body: "24/7 operation capability with automated charging and fleet management." },
  { title: "Safety certified", body: "Advanced sensors and collision avoidance systems ensure safe operation alongside human workers." },
];

const steps = [
  { step: 1, title: "Task assignment", body: "WMS sends pick lists or transport tasks to the robot fleet management system." },
  { step: 2, title: "Robot dispatch", body: "Available robots are assigned tasks based on location, battery level, and priority." },
  { step: 3, title: "Autonomous navigation", body: "Robots navigate using sensors and mapping to collect inventory or execute transport tasks." },
  { step: 4, title: "Delivery & handoff", body: "Robots deliver items to pick stations, sort destinations, or staging areas for human completion." },
];

const options = [
  {
    name: "Goods‑to‑Person Robots",
    items: [
      { title: "Shelf‑Moving Robots (Kiva‑style)" },
      { title: "ACR Storage & Retrieval" },
      { title: "Tote‑Handling AMRs" },
      { title: "Case‑Picking Collaborative Robots" },
    ],
  },
  {
    name: "Sortation Robots",
    items: [
      { title: "Parcel Sorting AMRs" },
      { title: "Tilt‑Tray Mobile Sorters" },
      { title: "Cross‑Belt Sorting Robots" },
      { title: "Put‑Wall Support Robots" },
    ],
  },
  {
    name: "Transport & Forklift AMRs",
    items: [
      { title: "Pallet‑Moving AMRs" },
      { title: "Tugger Train Systems" },
      { title: "Autonomous Forklifts" },
      { title: "Heavy‑Payload Transport" },
    ],
  },
  {
    name: "Fleet Management",
    items: [
      { title: "Central Traffic Control" },
      { title: "Battery Management & Auto‑Charging" },
      { title: "Performance Analytics" },
      { title: "Predictive Maintenance" },
    ],
  },
];

const gallery = demoSolutionImages.amr;

const useCases = [
  "E‑commerce fulfillment: high‑velocity picking with goods‑to‑person efficiency",
  "Manufacturing: material transport between production lines and staging areas",
  "Distribution centers: automated sortation and consolidation for shipping",
  "Third‑party logistics: flexible automation that adapts to client requirements",
  "Retail backroom: inventory replenishment and store‑level fulfillment",
];

export default function Page() {
  return (
    <SolutionPage
      title="AMRs & AGVs"
      description="Autonomous mobile robots and guided vehicles automate material transport, goods‑to‑person picking, and robotic sortation to boost productivity and flexibility."
      videos={[
        { url: "https://www.youtube.com/embed/6KaKTETx1gE", title: "HAI Robotics ACR System" },
        { url: "https://www.youtube.com/embed/cUB5fBu3Z5I", title: "Tompkins t‑Sort Robotic Sortation" },
        { url: "https://www.youtube.com/embed/2ow4O4X0xpE", title: "SEER Forklift AMR" },
      ]}
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Curious about AMR ROI for your operation? Get our automation readiness guide and cost‑benefit calculator.",
        buttonText: "Request guide",
        href: "/contact",
      }}
      cta={{
        title: "Ready to explore autonomous mobile robotics?",
        body: "We'll assess your workflows, space constraints, and automation goals to recommend the right AMR solution.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
