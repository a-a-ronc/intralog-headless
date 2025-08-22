
// app/solutions/buffering/page.tsx
import SolutionPage from "@/components/SolutionPage";

export const metadata = { title: "Buffering/Sequencing | Intralog" };

const benefits = [
  { title: "Smooth production flow", body: "Buffer systems absorb rate variations between processes, maintaining consistent downstream operations." },
  { title: "Maximize equipment utilization", body: "Decouple processes to prevent bottlenecks and maintain optimal throughput across all systems." },
  { title: "Reduce downtime impact", body: "Buffer inventory allows continued operation during planned maintenance or unexpected stoppages." },
  { title: "Perfect sequencing", body: "Reorder items to match downstream requirements, assembly schedules, or shipping manifests." },
  { title: "Flexible capacity", body: "Dynamically adjust buffer depth based on seasonal demands and operational conditions." },
  { title: "Quality sorting", body: "Hold and redirect items for quality control, rework, or exception handling processes." },
  { title: "Load balancing", body: "Distribute work evenly across multiple downstream processes or shipping lanes." },
  { title: "First-in-first-out control", body: "Maintain proper inventory rotation for time-sensitive or perishable products." },
];

const steps = [
  { step: 1, title: "Item accumulation", body: "Products enter buffer system from upstream processes with rate and timing variations." },
  { step: 2, title: "Queue management", body: "System manages buffer levels and item sequencing based on downstream demand signals." },
  { step: 3, title: "Sequencing logic", body: "Intelligent algorithms reorder items to match production schedules or shipping requirements." },
  { step: 4, title: "Controlled release", body: "Items are released at optimal timing and sequence for downstream processes." },
];

const options = [
  {
    name: "Buffer Types",
    items: [
      { title: "Accumulation Conveyor" },
      { title: "FIFO Lanes" },
      { title: "Spiral Conveyors" },
      { title: "Loop Sorters" },
    ],
  },
  {
    name: "Sequencing Methods",
    items: [
      { title: "Time-based Release" },
      { title: "Demand-driven Pull" },
      { title: "Priority Sequencing" },
      { title: "Batch Formation" },
    ],
  },
  {
    name: "Control Features",
    items: [
      { title: "Level Monitoring" },
      { title: "Flow Control" },
      { title: "Exception Handling" },
      { title: "Performance Analytics" },
    ],
  },
  {
    name: "Integration Options",
    items: [
      { title: "MES Connectivity" },
      { title: "WCS Integration" },
      { title: "ERP Communication" },
      { title: "Production Scheduling" },
    ],
  },
];

const gallery = [
  { title: "Accumulation conveyor", src: "/images/solutions/buffering/accumulation.jpg" },
  { title: "FIFO lane system", src: "/images/solutions/buffering/fifo-lanes.jpg" },
  { title: "Spiral buffer", src: "/images/solutions/buffering/spiral-buffer.jpg" },
  { title: "Sequencing sorter", src: "/images/solutions/buffering/sequencing-sorter.jpg" },
];

const useCases = [
  "Manufacturing: work-in-process buffering between production lines and assembly",
  "Food processing: accumulation before packaging with temperature and timing control",
  "Automotive: sequenced parts delivery to match production schedules",
  "E-commerce: order consolidation and wave release for efficient picking",
  "Distribution: cross-dock buffering to optimize outbound trailer loading",
];

export default function Page() {
  return (
    <SolutionPage
      title="Buffering/Sequencing"
      description="Intelligent material flow control that manages timing, capacity, and order—ensuring smooth operations by decoupling processes and delivering items in the perfect sequence for downstream operations."
      videos={[
        { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Buffer System Overview" },
      ]}
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Need help optimizing material flow and sequencing? Download our buffering systems design guide.",
        buttonText: "Request brochure",
        href: "/contact",
      }}
      cta={{
        title: "Ready to optimize your material flow and sequencing?",
        body: "We'll analyze your process variations, capacity requirements, and sequencing needs to design buffer systems that maximize efficiency and throughput.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
export const metadata = { title: "Buffering/Sequencing | Intralog" };

export default function Page() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="text-3xl font-semibold mb-2">Buffering/Sequencing</h1>
        <div className="card">
          <p className="text-slate-700">Content coming soon. We'll publish examples, photos, and workflows here.</p>
        </div>
      </div>
    </main>
  );
}
