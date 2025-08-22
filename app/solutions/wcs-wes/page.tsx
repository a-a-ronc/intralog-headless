
// app/solutions/wcs-wes/page.tsx
import SolutionPage from "@/components/SolutionPage";

export const metadata = { title: "Warehouse Control & Execution Software | Intralog" };

const benefits = [
  { title: "Orchestrate all automation", body: "Single platform controls conveyors, sorters, robots, and storage systems in real-time." },
  { title: "Optimize task allocation", body: "AI-driven algorithms assign work to maximize throughput and resource utilization." },
  { title: "Real-time visibility", body: "Monitor equipment status, inventory levels, and performance metrics across all systems." },
  { title: "Seamless WMS integration", body: "Bi-directional communication with warehouse management systems for unified operations." },
  { title: "Reduce manual intervention", body: "Automated exception handling and self-healing capabilities minimize operator involvement." },
  { title: "Scalable architecture", body: "Cloud-native platform grows with your operation and integrates new technologies easily." },
  { title: "Predictive maintenance", body: "Machine learning identifies potential equipment issues before they cause downtime." },
  { title: "Performance analytics", body: "Comprehensive reporting and KPI tracking for continuous improvement initiatives." },
];

const steps = [
  { step: 1, title: "Receive order data", body: "WCS receives pick lists and shipping requirements from WMS or ERP systems." },
  { step: 2, title: "Plan & optimize", body: "System allocates tasks across equipment and resources for maximum efficiency." },
  { step: 3, title: "Execute & monitor", body: "Real-time control of automated equipment with continuous status monitoring." },
  { step: 4, title: "Report & analyze", body: "Performance data flows back to WMS with analytics for operational insights." },
];

const options = [
  {
    name: "Core Modules",
    items: [
      { title: "Task Management" },
      { title: "Equipment Control" },
      { title: "Inventory Tracking" },
      { title: "Performance Analytics" },
    ],
  },
  {
    name: "Integration APIs",
    items: [
      { title: "WMS Connector" },
      { title: "ERP Integration" },
      { title: "TMS Interface" },
      { title: "Custom APIs" },
    ],
  },
  {
    name: "Equipment Drivers",
    items: [
      { title: "Conveyor Controls" },
      { title: "Robot Fleet Management" },
      { title: "AS/RS Integration" },
      { title: "Sortation Systems" },
    ],
  },
  {
    name: "Advanced Features",
    items: [
      { title: "Machine Learning" },
      { title: "Digital Twin" },
      { title: "Predictive Analytics" },
      { title: "Exception Handling" },
    ],
  },
];

const gallery = [
  { title: "Control dashboard", src: "/images/solutions/wcs/dashboard.jpg" },
  { title: "Real-time monitoring", src: "/images/solutions/wcs/monitoring.jpg" },
  { title: "Analytics reporting", src: "/images/solutions/wcs/analytics.jpg" },
  { title: "System architecture", src: "/images/solutions/wcs/architecture.jpg" },
];

const useCases = [
  "Multi-vendor automation: unified control of equipment from different suppliers",
  "Complex fulfillment operations: orchestrating picks, packs, and shipping processes",
  "Omnichannel distribution: managing store, e-commerce, and B2B fulfillment",
  "High-volume operations: optimizing throughput in large-scale facilities",
  "Legacy system modernization: adding intelligence to existing automation",
];

export default function Page() {
  return (
    <SolutionPage
      title="Warehouse Control & Execution Software"
      description="Intelligent software that orchestrates your entire automated operation—connecting systems, optimizing workflows, and providing real-time visibility across all warehouse processes."
      videos={[
        { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "WCS/WES Platform Overview" },
      ]}
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Want to see WCS/WES capabilities in detail? Download our software platform overview and integration guide.",
        buttonText: "Request brochure",
        href: "/contact",
      }}
      cta={{
        title: "Ready to unify your warehouse automation?",
        body: "We'll assess your current systems, design the integration architecture, and implement a control platform that maximizes your automation investment.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
