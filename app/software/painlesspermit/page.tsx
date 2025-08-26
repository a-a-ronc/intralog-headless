// app/software/painlesspermit/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Painless Permit | Intralog" };

const benefits = [
  { title: "Submit clean, complete packages", body: "Checklists, forms, narratives, and evidence compiled for the exact jurisdiction—first time." },
  { title: "Slash review cycles", body: "Normalize requirements, prevent omissions, and track comments/resubmittals with clarity." },
  { title: "Make compliance repeatable", body: "Codify local reviewer rules, so every project looks like your best project." },
  { title: "Close out with confidence", body: "Load plaques, labels, and as-builts organized for inspection and turnover." },
];

const steps = [
  { step: 1, title: "Intake", body: "A guided wizard captures project context (site, hazards, storage/automation scope)." },
  { step: 2, title: "Jurisdiction profile", body: "Local rules and reviewer quirks auto-select the right checklist and docs." },
  { step: 3, title: "Pack generator", body: "Build a labeled, review-ready submittal with narratives, forms, and attachments." },
  { step: 4, title: "Review tracking", body: "Log comments, manage resubmittals, and generate closeout artifacts." },
];

const options = [
  {
    name: "Current Capabilities (Alpha)",
    items: [
      { title: "Project intake & normalization" },
      { title: "Jurisdiction checklists (draft library)" },
      { title: "Document pack builder (MVP)" },
      { title: "Review/RFI log with status" },
    ],
  },
  {
    name: "On the Roadmap",
    items: [
      { title: "Ruleset versioning & import/export" },
      { title: "Reviewer share links & history" },
      { title: "Label/placard data outputs & templates" },
      { title: "Analytics: time-to-permit, FPY, rework causes" },
    ],
  },
  {
    name: "Integrations",
    items: [
      { title: "Data hooks to WMS/ERP (project metadata)" },
      { title: "Cloud file storage for evidence" },
      { title: "SSO/OIDC for enterprise rollouts" },
    ],
  },
];

const gallery =
  demoSolutionImages?.softwarePainless ?? [
    { src: "/images/software/painless-permit/wizard.jpg", alt: "Permit intake wizard" },
    { src: "/images/software/painless-permit/checklist.jpg", alt: "Auto-built checklist" },
    { src: "/images/software/painless-permit/pack.jpg", alt: "Submittal pack generator" },
  ];

const useCases = [
  "Pallet rack/conveyor/mezzanine permits across multiple jurisdictions",
  "Cold storage retrofits with ESFR/flue spacing nuances",
  "Fast-track tenant improvements needing consistent documentation",
];

export default function Page() {
  return (
    <SolutionPage
      title="Painless Permit"
      description="Turn inconsistent permit requirements into consistent, review-ready submittals—so you can submit faster, get fewer comments, and close out cleanly."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Want early access? Join the private alpha and help shape the rules library.",
        buttonText: "Request access",
        href: "/contact",
      }}
      cta={{
        title: "Bring order to permits",
        body: "We’ll demo the current alpha and map it to your jurisdictions and project types.",
        buttonText: "Book a demo",
        href: "/contact",
      }}
    />
  );
}
