// app/services/engineering-and-design/simulation-and-emulation/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Simulation & Emulation | Intralog" };

const benefits = [
  { title: "De-risk before build", body: "Validate throughput, queues, and staffing across peaks and exceptions." },
  { title: "Find bottlenecks fast", body: "Scenario tests reveal where to add accumulation or tune logic." },
  { title: "Controls-ready", body: "Emulation for PLC/WCS IO and sequence testing shortens on-site debug." },
  { title: "Evidence for stakeholders", body: "KPIs, heatmaps, and videos communicate design choices clearly." },
];

const steps = [
  { step: 1, title: "Model build & calibration", body: "Geometry, rates, profiles, and control rules matched to concept." },
  { step: 2, title: "Scenarios & sensitivity", body: "Peaks, mix shifts, outages; what-ifs around staffing and pitch." },
  { step: 3, title: "Controls emulation", body: "Digital IO, sensors, encoders, and timing to test sequences and faults." },
  { step: 4, title: "Report & iterate", body: "Throughput charts, queue plots, and recommendations for changes." },
];

const options = [
  {
    name: "What We Simulate",
    items: [
      { title: "Conveyors, merges/gapping, and sorters" },
      { title: "G2P/VLMs, shuttles/miniload, AMRs" },
      { title: "Pack, P&A, DWS, and palletizing" },
      { title: "Dock operations & staging" },
    ],
  },
  {
    name: "Outputs",
    items: [
      { title: "Throughput, dwell, queue lengths" },
      { title: "Resource utilization & staffing curves" },
      { title: "Scenario videos & heatmaps" },
      { title: "Change recommendations" },
    ],
  },
];

const gallery = demoSolutionImages.servicesSim ?? [
  { src: "/images/services/sim/queues.jpg", alt: "Queue visualization" },
  { src: "/images/services/sim/heatmap.jpg", alt: "Heatmap of congestion" },
  { src: "/images/services/sim/emulation.jpg", alt: "Controls emulation" },
];

const useCases = [
  "Sorter selection & chute count validation",
  "G2P station count and batching logic",
  "Palletizer throughput & infeed accumulation",
];

export default function Page() {
  return (
    <SolutionPage
      title="Simulation & Emulation"
      description="Validate and tune your design before install—discrete-event simulation for flow decisions and controls emulation for faster startup."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{ blurb: "Request a sample sim report and KPI pack.", buttonText: "See a sample", href: "/contact" }}
      cta={{ title: "Test it before you build it", body: "We’ll simulate your concept, run scenarios, and deliver changes that protect throughput and schedule.", buttonText: "Talk with an engineer", href: "/contact" }}
    />
  );
}
