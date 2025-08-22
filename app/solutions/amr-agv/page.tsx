
// app/solutions/amr-agv/page.tsx
import SolutionPage from "@/components/SolutionPage";

export const metadata = { title: "AMRs/AGVs | Intralog" };

const benefits = [
  { title: "Flexible material transport", body: "Autonomous mobile robots adapt to changing layouts and workflows without fixed infrastructure." },
  { title: "Reduce labor dependency", body: "Automate repetitive transport tasks, freeing workers for higher-value activities." },
  { title: "24/7 operation capability", body: "Robots work continuously with automated charging and minimal downtime." },
  { title: "Scalable fleet management", body: "Add or remove robots based on seasonal demand and operational needs." },
  { title: "Safe human collaboration", body: "Advanced sensors and AI enable safe operation alongside workers." },
  { title: "Real-time optimization", body: "Fleet management software optimizes routes and task allocation dynamically." },
  { title: "Quick ROI", body: "Lower implementation costs compared to fixed automation with faster payback periods." },
  { title: "Data-driven insights", body: "Track utilization, efficiency, and bottlenecks with comprehensive analytics." },
];

const steps = [
  { step: 1, title: "Task assignment", body: "Fleet management system assigns transport tasks based on priorities and robot availability." },
  { step: 2, title: "Autonomous navigation", body: "Robot navigates using SLAM technology, avoiding obstacles and optimizing routes." },
  { step: 3, title: "Material handling", body: "Robot picks up or delivers materials using appropriate handling mechanism." },
  { step: 4, title: "Mission completion", body: "Robot confirms task completion and returns to charging station or next assignment." },
];

const options = [
  {
    name: "Robot Types",
    items: [
      { title: "Shelf-moving AMRs" },
      { title: "Cart-pulling AGVs" },
      { title: "Bin-transport Robots" },
      { title: "Pallet-handling AMRs" },
    ],
  },
  {
    name: "Navigation Methods",
    items: [
      { title: "LiDAR SLAM" },
      { title: "Vision-based Navigation" },
      { title: "Magnetic Tape Guidance" },
      { title: "QR Code Waypoints" },
    ],
  },
  {
    name: "Handling Mechanisms",
    items: [
      { title: "Lifting Platforms" },
      { title: "Telescopic Forks" },
      { title: "Conveyor Top" },
      { title: "Magnetic Couplers" },
    ],
  },
  {
    name: "Fleet Management",
    items: [
      { title: "Task Orchestration" },
      { title: "Route Optimization" },
      { title: "Battery Management" },
      { title: "Performance Analytics" },
    ],
  },
];

const gallery = [
  { title: "Shelf-moving AMR", src: "/images/solutions/amr/shelf-moving.jpg" },
  { title: "Pallet transport", src: "/images/solutions/amr/pallet-transport.jpg" },
  { title: "Fleet management dashboard", src: "/images/solutions/amr/fleet-dashboard.jpg" },
  { title: "Charging station", src: "/images/solutions/amr/charging-station.jpg" },
];

const useCases = [
  "E-commerce fulfillment: goods-to-person picking and inventory transport",
  "Manufacturing: work-in-process movement and line feeding",
  "Healthcare: medication and supply delivery throughout facilities",
  "3PL operations: flexible material handling for multiple clients",
  "Retail: backroom inventory management and store replenishment",
];

export default function Page() {
  return (
    <SolutionPage
      title="AMRs/AGVs"
      description="Autonomous mobile robots and automated guided vehicles that transform material handling—providing flexible, scalable transport solutions that adapt to your changing operational needs."
      videos={[
        { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "AMR Fleet in Action" },
      ]}
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Interested in AMR fleet specifications and ROI analysis? Get our comprehensive robotics guide.",
        buttonText: "Request brochure",
        href: "/contact",
      }}
      cta={{
        title: "Ready to deploy autonomous robots in your facility?",
        body: "We'll assess your material flow, recommend the right robot types, and design a fleet management strategy for optimal efficiency.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
