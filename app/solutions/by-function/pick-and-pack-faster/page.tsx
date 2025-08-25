
import SolutionPage from "@/components/SolutionPage";

export const metadata = { title: "Pick & Pack Faster | Intralog" };

const benefits = [
  { title: "Eliminate travel time", body: "Goods‑to‑person systems bring inventory to stationary pickers, boosting pick rates 3‑5×." },
  { title: "Guided picking accuracy", body: "Laser pointers, LED displays, and pick‑to‑light reduce errors and training time." },
  { title: "Batch & wave optimization", body: "Smart batching and zone picking minimize touches and maximize throughput." },
  { title: "Ergonomic improvements", body: "Present items at optimal height and angle to reduce fatigue and increase speed." },
  { title: "Real‑time visibility", body: "Track pick rates, accuracy, and bottlenecks with integrated WMS reporting." },
  { title: "Scalable automation", body: "Add robotics and conveyor integration as volumes grow." },
];

const steps = [
  { step: 1, title: "Order optimization", body: "WMS creates optimized pick paths and batches to minimize travel and touches." },
  { step: 2, title: "Goods‑to‑person delivery", body: "VLMs, AMRs, or conveyors bring items directly to pick stations." },
  { step: 3, title: "Guided picking", body: "Visual aids and technology guide pickers to exact locations and quantities." },
  { step: 4, title: "Pack & ship", body: "Streamlined packing processes with right‑sized packaging and automated labeling." },
];

const useCases = [
  "E‑commerce fulfillment: high‑velocity order picking with same‑day requirements",
  "Retail distribution: store replenishment and direct‑to‑consumer orders",
  "Third‑party logistics: multi‑client picking with accuracy requirements",
  "Healthcare distribution: time‑critical pharmaceutical and medical supply orders",
  "Manufacturing kitting: assembly line feeding and production support",
];

export default function Page() {
  return (
    <SolutionPage
      title="Pick & Pack Faster"
      description="Accelerate fulfillment with goods‑to‑person automation, guided picking technology, and optimized workflows that boost productivity and accuracy."
      benefits={benefits}
      steps={steps}
      useCases={useCases}
      cta={{
        title: "Ready to accelerate your fulfillment?",
        body: "We'll analyze your current pick rates and design automation solutions to dramatically improve speed and accuracy.",
        buttonText: "Get productivity analysis",
        href: "/contact",
      }}
    />
  );
}
