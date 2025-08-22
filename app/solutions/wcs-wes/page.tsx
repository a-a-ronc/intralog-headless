
// app/solutions/wcs-wes/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Warehouse Control & Execution Software | Intralog" };

const benefits = [
  { title: "Orchestrate all automation", body: "Single platform controls conveyors, sorters, robots, and storage systems in real-time." },
  { title: "Optimize task allocation", body: "AI-driven algorithms assign work to maximize throughput and resource utilization." },
  { title: "Real-time visibility", body: "Monitor equipment status, inventory levels, and performance metrics across all systems." },
  { title: "Seamless WMS integration", body: "Bi-directional data flow between warehouse management and control systems ensures synchronized operations." },
  { title: "Predictive maintenance", body: "Equipment monitoring and analytics predict failures before they impact operations." },
  { title: "Scalable architecture", body: "Modular design allows adding new equipment and zones without system-wide disruption." },
  { title: "Exception handling", body: "Automated error recovery and alert systems minimize downtime and manual intervention." },
  { title: "Performance analytics", body: "Detailed reporting and KPI dashboards drive continuous operational improvement." },
];

const steps = [
  { step: 1, title: "Task coordination", body: "WCS receives orders from WMS and coordinates equipment to execute picking, packing, and shipping tasks." },
  { step: 2, title: "Equipment control", body: "Real-time control signals direct conveyors, sorters, robots, and automated storage systems." },
  { step: 3, title: "Status monitoring", body: "Continuous monitoring of equipment health, inventory levels, and task completion status." },
  { step: 4, title: "Data synchronization", body: "Completed transactions and inventory updates flow back to WMS for accurate system state." },
];

const options = [
  {
    name: "Control Modules",
    items: [
      { title: "Conveyor Control Systems" },
      { title: "Robotic Fleet Management" },
      { title: "Storage System Control" },
      { title: "Sortation Management" },
    ],
  },
  {
    name: "Integration Capabilities",
    items: [
      { title: "WMS Integration" },
      { title: "ERP Connectivity" },
      { title: "Third-party Equipment APIs" },
      { title: "Custom Protocol Support" },
    ],
  },
  {
    name: "Analytics & Reporting",
    items: [
      { title: "Real-time Dashboards" },
      { title: "Performance KPIs" },
      { title: "Predictive Analytics" },
      { title: "Custom Report Builder" },
    ],
  },
  {
    name: "Advanced Features",
    items: [
      { title: "Machine Learning Optimization" },
      { title: "Digital Twin Simulation" },
      { title: "Energy Management" },
      { title: "Cybersecurity Framework" },
    ],
  },
];

const gallery = [
  { title: "Control Dashboard", src: "/images/solutions/conveyor/automation-induction.png" },
  { title: "System Integration", src: "/images/solutions/amr/acr.jpg" },
  { title: "Analytics Interface", src: "/images/solutions/vlm/robot-interface.jpg" },
];

const useCases = [
  "Multi-zone fulfillment centers: coordinating complex workflows across picking, packing, and shipping",
  "Automated warehouses: managing robotic systems, conveyors, and storage equipment as integrated operations",
  "3PL facilities: supporting multiple client requirements with flexible, configurable control logic",
  "Manufacturing distribution: coordinating finished goods flow from production through shipping",
  "Omnichannel operations: managing store fulfillment, e-commerce, and B2B distribution from single platform",
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
