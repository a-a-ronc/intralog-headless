// app/services/implementation/project-management/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Project Management | Intralog" };

const benefits = [
  { title: "Schedule & budget control", body: "Critical path ownership, proactive risk management, and vendor coordination." },
  { title: "Single point of accountability", body: "Design, procurement, install, and startup stay aligned to scope." },
  { title: "Live facilities friendly", body: "Phasing and cutovers that protect operations and safety." },
  { title: "Transparent reporting", body: "Weekly status, action logs, RFI/submittal tracking, and acceptance criteria." },
];

const steps = [
  { step: 1, title: "Kickoff & plan", body: "Scope, RACI, detailed schedule, and communication cadence." },
  { step: 2, title: "Procure & prep", body: "Submittals, approvals, and site readiness (power, anchors, IT)." },
  { step: 3, title: "Install & coordinate", body: "Trades, vendors, and safety; manage changes and interface points." },
  { step: 4, title: "Startup & handoff", body: "SAT, punchlist, training, and documentation for turnover." },
];

const options = [
  {
    name: "Controls & Reporting",
    items: [
      { title: "Risk register & mitigation plans" },
      { title: "Change control & cost tracking" },
      { title: "Daily safety & quality checklists" },
      { title: "KPI dashboards for schedule/cost" },
    ],
  },
];

const gallery = demoSolutionImages.servicesPm ?? [
  { src: "/images/services/pm/schedule.jpg", alt: "Project schedule" },
  { src: "/images/services/pm/coordination.jpg", alt: "Vendor coordination" },
  { src: "/images/services/pm/startup.jpg", alt: "Startup and handoff" },
];

const useCases = [
  "Greenfield DC build with phased go-live",
  "Brownfield retrofit with weekend cutovers",
  "Multi-vendor automation program",
];

export default function Page() {
  return (
    <SolutionPage
      title="Project Management"
      description="Full-scope integration management—schedule, budget, risk, and vendor coordination—with reporting that keeps stakeholders aligned."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{ blurb: "Ask for our sample project plan & reporting pack.", buttonText: "See the pack", href: "/contact" }}
      cta={{ title: "Put your program on rails", body: "We’ll own the critical path and coordinate vendors so install and startup stay on target.", buttonText: "Talk with a PM", href: "/contact" }}
    />
  );
}
