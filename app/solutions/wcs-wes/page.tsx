
import SolutionPage from "@/components/SolutionPage";

export const metadata = { title: "WCS/WES | Intralog" };

const benefits = [
  { title: "Unified system control", body: "Single platform manages conveyors, sorters, robotics, and storage systems with seamless coordination." },
  { title: "Real‑time optimization", body: "Dynamic routing and resource allocation based on current conditions and priorities." },
  { title: "WMS integration", body: "Seamless data exchange with warehouse management systems for complete visibility." },
  { title: "Performance monitoring", body: "Real‑time dashboards track throughput, utilization, and bottlenecks across all equipment." },
  { title: "Exception management", body: "Automated handling of jams, diversions, and maintenance needs with minimal disruption." },
  { title: "Scalable architecture", body: "Add new equipment and zones without major system overhauls or downtime." },
];

const steps = [
  { step: 1, title: "Task orchestration", body: "WES receives orders from WMS and creates optimized execution plans across all systems." },
  { step: 2, title: "Equipment coordination", body: "WCS manages individual equipment (conveyors, sorters, robots) to execute the plan." },
  { step: 3, title: "Real‑time monitoring", body: "Continuous tracking of performance, bottlenecks, and exception conditions." },
  { step: 4, title: "Data feedback", body: "Performance data and completion status fed back to WMS for inventory updates." },
];

const useCases = [
  "Distribution centers: coordinate complex material flow between multiple automation systems",
  "E‑commerce fulfillment: manage peak season volumes with dynamic resource allocation",
  "Manufacturing: synchronize production lines with material handling automation",
  "Third‑party logistics: manage multiple client requirements with flexible system control",
  "Parcel hubs: coordinate high‑speed sortation with downstream processes",
];

export default function Page() {
  return (
    <SolutionPage
      title="WCS/WES"
      description="Warehouse Control Systems and Execution Systems orchestrate automated equipment for optimal performance, real‑time visibility, and seamless integration."
      benefits={benefits}
      steps={steps}
      useCases={useCases}
      cta={{
        title: "Ready to optimize your automation control?",
        body: "We'll design control systems that maximize equipment utilization and provide the visibility you need to optimize operations.",
        buttonText: "Discuss control strategy",
        href: "/contact",
      }}
    />
  );
}
