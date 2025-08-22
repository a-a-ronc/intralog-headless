// app/solutions/amr-agv/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "AMRs & AGVs | Intralog" };

const benefits = [
  {
    title: "Goods‑to‑Person efficiency (ACR systems)",
    body:
      "Autonomous case‑handling robots (ACR) bring totes directly to workstations for fast, ergonomic picking with dense vertical storage.",
  },
  {
    title: "Flexible robotic sortation",
    body:
      "Track‑free AMR sortation scales up/down quickly and reconfigures without major mechanical work—great for peaks and changing SKUs.",
  },
  {
    title: "Autonomous pallet movement",
    body:
      "Forklift and pallet‑truck AMRs automate horizontal moves, dock runs, and buffer feeds with high repeatability and multi‑navigation options.",
  },
  {
    title: "Modular, scalable footprint",
    body:
      "Add robots, workstations, or lanes as volume grows—software orchestrates fleet activity for balanced throughput.",
  },
  {
    title: "High storage density",
    body:
      "ACR shelving leverages vertical space and narrow aisles while software optimizes bin locations for fewer touches.",
  },
  {
    title: "Accuracy & traceability",
    body:
      "Integrated WMS/WCS, scanning, and workstation UIs provide guided picks, confirmations, and real‑time inventory visibility.",
  },
  {
    title: "Cold‑storage & extended environments",
    body:
      "Solutions and options exist for controlled environments, supporting food, pharma, and other temperature‑sensitive operations.",
  },
  {
    title: "Safe, ergonomic operations",
    body:
      "Robots handle repetitive travel and lifts; people handle exceptions and value‑add—reducing fatigue, strain, and travel time.",
  },
];

const steps = [
  { step: 1, title: "Induct / request", body: "Orders or transport tasks are released by WMS/WCS; robots receive missions and optimal routes." },
  { step: 2, title: "Autonomous travel", body: "AMRs/AGVs navigate with SLAM or reflector guidance, coordinating traffic and zones." },
  { step: 3, title: "Pick / move / sort", body: "ACR bots present totes to GTP stations; pallet AMRs stage loads; AMR sorters route to destinations." },
  { step: 4, title: "Confirm & handoff", body: "Scanners and UIs confirm actions; items move to pack, palletize, shuttle/conveyor, or shipping." },
];

const options = [
  {
    name: "Robot Types",
    items: [
      { title: "ACR (Autonomous Case‑handling Robots)" },
      { title: "AMR Sortation (track‑free robotic sorters)" },
      { title: "Forklift & Pallet‑Truck AMRs" },
      { title: "Underride / Jacking AMRs & Tugger AMRs" },
    ],
  },
  {
    name: "Navigation & Safety",
    items: [
      { title: "Laser SLAM / Natural Feature (NF)" },
      { title: "Reflector‑based / Hybrid" },
      { title: "Fleet Management & Traffic Control" },
      { title: "On‑robot Safety (LiDAR, 3D cams, e‑stops)" },
    ],
  },
  {
    name: "Workstations & Interfaces",
    items: [
      { title: "Goods‑to‑Person Stations (ACR)" },
      { title: "Put‑to‑Light / Pick‑to‑Light" },
      { title: "Pack / Value‑Add Stations" },
      { title: "Conveyor, Shuttle & Palletizer Handoffs" },
    ],
  },
  {
    name: "Use‑case Add‑ons",
    items: [
      { title: "Cold‑storage adaptations" },
      { title: "High‑bay racking for ACR" },
      { title: "Pallet stackers / destackers" },
      { title: "Label / Print‑and‑Apply, DWS" },
    ],
  },
];

const gallery = demoSolutionImages.amr;

const useCases = [
  "E‑commerce & Retail: piece picking, order consolidation, and returns",
  "3PL: fast onboarding of new clients with scalable fleets",
  "Manufacturing: lineside delivery, WIP moves, finished goods to dock",
  "Grocery & Pharma: dense storage with controlled environments",
  "Parcel & Post: AMR sortation for destinations and service levels",
];

export default function Page() {
  return (
    <SolutionPage
      title="AMRs & AGVs"
      description="Autonomous mobile fleets for goods‑to‑person, pallet transport, and robotic sortation—modular systems that scale with demand and integrate cleanly with conveyors, pallet shuttles, and your WMS/WCS."
      videos={[
        // Swap these as you prefer—placeholders from vendor overviews:
        { url: "https://www.youtube.com/embed/zlMDJpZYtmY", title: "SEER — Laser‑SLAM Forklift/AMR overview" },
        { url: "https://www.youtube.com/embed/eNwy0yAt1mA", title: "Tompkins Robotics — tSort AMR sortation" },
        { url: "https://www.youtube.com/embed/MtT4gNDq6GA", title: "HAI Robotics — HaiPick ACR system" },
      ]}
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb:
          "Curious whether ACR, AMR sortation, or pallet AMRs fit your mix? Share your email and we’ll send a tailored brief comparing options from our dealer network.",
        buttonText: "Request brief",
        href: "/contact",
      }}
      cta={{
        title: "Ready to scope an AMR/AGV pilot?",
        body: "We’ll analyze your SKUs, travel paths, and temperature bands, then size robots, stations, and software for a fast, low‑risk start.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
