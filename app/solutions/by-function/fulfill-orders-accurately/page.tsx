// app/solutions/by-function/fulfill-orders-accurately/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Fulfill Orders Accurately | Intralog" };

const benefits = [
  { title: "Chargeback-safe shipping", body: "Inline verification, barcode grading, and proper docs to meet routing guides." },
  { title: "Traceability & audit", body: "DWS evidence, serial/lot capture, and exception trails simplify claims." },
  { title: "Consistent labeling", body: "Encoder-tracked print/apply places the right label in the right spot every time." },
  { title: "Exception resilience", body: "Reject/rework lanes and auto-void/reprint keep flow moving." },
];

const steps = [
  { step: 1, title: "Identify & request", body: "Scan/order context requests label data from WMS/WES; verify item/qty prior to pack." },
  { step: 2, title: "Weigh/measure & print", body: "DWS captures dims/weight; print engine renders label (ZPL/PDF)." },
  { step: 3, title: "Apply & verify", body: "Tamp/blow-on/Corner-wrap applies; grading/vision verifies presence and quality." },
  { step: 4, title: "Document & ship", body: "Attach docs as needed; post ASN/EDI updates; route to carrier lanes or docks." },
];

const options = [
  {
    name: "Verification & QA",
    items: [
      { title: "Barcode grading (ISO/ANSI) & presence/position" },
      { title: "Weight/verify & exception capture with images" },
      { title: "Vision OCV/OCR and document checks (as needed)" },
    ],
  },
  {
    name: "Labeling & Documents",
    items: [
      { title: "Print & Apply (ship/LPN/SSCC)" },
      { title: "Corner-wrap / dual-panel / pallet 3-panel" },
      { title: "Retail/commercial routing guides and docs" },
    ],
  },
  {
    name: "Systems & Controls",
    items: [
      { title: "WMS/WES/WCS + PLC/HMI integration" },
      { title: "Encoder tracking, sensors, reject/rework logic" },
      { title: "Audit trails, ASN/EDI posting, claims evidence" },
    ],
  },
];

const gallery =
  demoSolutionImages.fulfillAccurate ?? [
    { src: "/images/solutions/by-function/fulfill-accurate/dws.jpg", alt: "DWS at pack" },
    { src: "/images/solutions/by-function/fulfill-accurate/pna.jpg", alt: "Inline print & apply with verify" },
    { src: "/images/solutions/by-function/fulfill-accurate/sorter.jpg", alt: "Sort to carrier lanes" },
  ];

const useCases = [
  "Retail compliance: label grading + docs for chargeback safety",
  "Pallet SSCC: 1- to 3-panel with verify at wrapper discharge",
  "E-com pack: DWS + P&A + exception handling at scale",
];

export default function Page() {
  return (
    <SolutionPage
      title="Fulfill Orders Accurately"
      description="Verification, labeling, and documentation built into the line—DWS, print/apply, barcode grading, and exception handling tied into your WMS/WES."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Get the Compliance & QA Kit—label specs, grading thresholds, and exception flows.",
        buttonText: "Get the kit",
        href: "/contact",
      }}
      cta={{
        title: "Harden your fulfillment accuracy",
        body: "We’ll integrate DWS, P&A, and QA steps that meet your routing guides and protect margins.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
