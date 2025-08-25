// app/solutions/by-industry/aerospace-and-defense/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Aerospace & Defense | Intralog" };

/** Benefits aligned to A&D programs */
const benefits = [
  { title: "Traceability & compliance", body: "Full chain-of-custody with serialization, scan points, and audit-ready reporting (AS9100/ITAR/CMMC-aligned workflows)." },
  { title: "FOD & quality control", body: "Material controls, tool accountability, and clean work zones reduce rework and risk." },
  { title: "Kitting accuracy", body: "Guided G2P, PTL/put walls, and weigh/verify deliver right parts, right revision, every time." },
  { title: "Secure storage", body: "Access-controlled VLMs/ASRS and cage areas for sensitive or high-value items." },
  { title: "Mixed-model flexibility", body: "Cells that scale from prototyping to LRIP and sustainment without replatforming." },
  { title: "Cold/ESD/clean options", body: "ESD-safe stations, cleanroom-friendly media, and low-temp materials as required." },
];

/** High-level delivery flow */
const steps = [
  { step: 1, title: "Assess & classify", body: "Define controlled items, traceability levels, and environmental needs; align with program and site policies." },
  { step: 2, title: "Design secure flow", body: "Zone material flows (receiving → storage → kitting → line feed) with gated access and scan points." },
  { step: 3, title: "Implement storage & G2P", body: "VLMs/mini-load/ACR, kitting cells, and workstations with PTL/HMI guidance and exception handling." },
  { step: 4, title: "Integrate & verify", body: "WMS/WES/ERP integrations, label/verify (P&A), DWS, and end-to-end serialization." },
  { step: 5, title: "Validate & train", body: "IQ/OQ-like runbooks, FOD checks, KPI dashboards, and operator training." },
];

/** Capabilities offered to A&D */
const options = [
  {
    name: "Programs, Security & Compliance",
    items: [
      { title: "AS9100-aligned processes & documentation" },
      { title: "ITAR-aware workflows & controlled access zones" },
      { title: "CMMC-friendly data flows (least-privilege, audit logs)" },
      { title: "FOD control: tool accountability, kit seal, visual checks" },
    ],
  },
  {
    name: "Kitting, Line-Feed & Workstations",
    items: [
      { title: "Pick-to-Light / Put-to-Light and HMI prompts" },
      { title: "Batch kitting with weigh/verify & photo evidence capture" },
      { title: "ESD-safe benches, ergonomic fixtures, torque/asset tracking hooks" },
      { title: "Point-of-use delivery and replenishment (kanban / e-kanban)" },
    ],
  },
  {
    name: "Storage & Retrieval (Secure)",
    items: [
      { title: "VLMs (secure trays, permissions, audit trails)" },
      { title: "Mini-load & Tote Shuttle AS/RS (serialized totes)" },
      { title: "ACR G2P for flexible tote/case delivery" },
      { title: "Cage storage, cabinets, and controlled small-parts media" },
    ],
  },
  {
    name: "Conveyance & Handling",
    items: [
      { title: "MDR/BDLR/CDLR conveyors with zero-pressure accumulation" },
      { title: "Vertical lifts (VRCs), spirals, cleanroom-friendly options" },
      { title: "Pallet handling: dispensers, transfers, turntables" },
      { title: "AMR/AGV interfaces for tugger or tote movement" },
    ],
  },
  {
    name: "Labeling, ID & Documentation",
    items: [
      { title: "Print & Apply (case/pallet) with verify/void" },
      { title: "Inline DWS (dimensioning/weighing/scanning) for auditability" },
      { title: "Serial/lot capture, CoC attachment, image capture at QC" },
      { title: "MIL-STD packaging steps and label content templates" },
    ],
  },
  {
    name: "Software & Integration",
    items: [
      { title: "WMS/WES/ERP integration (APIs/PLC), work orders & revisions" },
      { title: "Traveler updates, deviation handling, e-sign checkpoints" },
      { title: "Dashboards: kit accuracy, UPH, dwell time, shortages" },
    ],
  },
];

/** Gallery (place assets under /public) */
const gallery =
  demoSolutionImages.aeroDefense ?? [
    { src: "/images/solutions/aero-defense/secure-vlm.jpg", alt: "Access-controlled VLM storage" },
    { src: "/images/solutions/aero-defense/kitting-station.jpg", alt: "Guided kitting station with PTL" },
    { src: "/images/solutions/aero-defense/traceability.jpg", alt: "Serialization and documentation stations" },
  ];

/** Representative use cases */
const useCases = [
  "Engine/MRO parts room: secure VLMs with permissions and audit trails",
  "Pre-assembly kitting: PTL/put wall with weigh/verify and photo capture",
  "Final assembly line feed: sequenced kits with point-of-use replenishment",
  "Defense spares distribution: serialized tote handling and compliance labels",
];

export default function Page() {
  return (
    <SolutionPage
      title="Aerospace & Defense"
      description="Secure, traceable intralogistics for A&D programs—VLMs/ASRS, guided kitting, compliant labeling, and gated flows that align with AS9100, ITAR-aware, and CMMC-friendly practices."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      videos={[
        { url: "https://www.youtube.com/embed/vcI5c8AIPqA", title: "Secure VLM & Kitting Overview" },
        { url: "https://www.youtube.com/embed/7t1YqC6FQ7M", title: "Mini-load / Shuttle ASRS for A&D" },
      ]}
      brochureCta={{
        blurb: "Request the A&D Logistics Guide—FOD checklists, secure storage patterns, and kitting QA templates.",
        buttonText: "Request guide",
        href: "/contact",
      }}
      cta={{
        title: "Design an A&D-compliant flow",
        body: "We’ll map controlled items, define scan/verify points, and integrate secure storage and kitting cells with your ERP/WMS.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
