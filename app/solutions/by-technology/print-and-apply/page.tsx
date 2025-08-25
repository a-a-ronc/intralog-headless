// app/solutions/by-technology/print-and-apply/page.tsx
import SolutionPage from "@/components/SolutionPage";
import { demoSolutionImages } from "@/lib/demo";

export const metadata = { title: "Print & Apply | Intralog" };

/** Benefits aligned to P&A */
const benefits = [
  { title: "Compliance & accuracy", body: "Inline verification and barcode grading keep GS1/Amazon/Walmart labels compliant." },
  { title: "Hands-off labeling", body: "Automate case, tote, and pallet labels without stopping flow or adding labor." },
  { title: "Right label, right place", body: "Encoder tracking and sensors ensure consistent, repeatable placement." },
  { title: "Throughput that matches your line", body: "Tamp for robustness or blow-on for higher CPM—sized to your pitch and gap." },
  { title: "Easy integration", body: "WMS/WCS triggers, ZPL print streams, PLC/HMI, and DWS data all tied together." },
  { title: "Fast changeovers", body: "Swap print engines, ribbons, and label rolls quickly with service-friendly frames." },
];

/** Typical inline flow */
const steps = [
  { step: 1, title: "Identify & request label", body: "Scan/ID or order context triggers the label request from WMS/WCS (ZPL or API)." },
  { step: 2, title: "Format & print", body: "Print engine renders the label at 203/300/600 dpi, queued to the applicator." },
  { step: 3, title: "Present & apply", body: "Tamp, blow-on, or wipe-on places the label at the correct face and offset." },
  { step: 4, title: "Verify & handle exceptions", body: "Grade/verify; pass on success or auto-void/reprint and divert to a reject lane." },
];

/** Catalog of what we offer */
const options = [
  {
    name: "Applicators",
    items: [
      { title: "Tamp & Tamp-Blow (robust, versatile)" },
      { title: "Blow-On (high-rate, non-contact)" },
      { title: "Wipe-On (continuous contact apply)" },
      { title: "Corner-Wrap (adjacent faces in one pass)" },
      { title: "Dual/Three-Panel Pallet Labelers" },
      { title: "Top / Side / Front / Back Apply Configurations" },
    ],
  },
  {
    name: "Print Engines & Media",
    items: [
      { title: "203/300/600 dpi Thermal Transfer / Direct Thermal" },
      { title: "Engines: Zebra, SATO, Honeywell/Datamax (others on request)" },
      { title: "Labels: 4×6 ship, 4×2 LPN, SSCC pallet (GS1-128)" },
      { title: "Media: freezer-grade, synthetic, linerless (where supported)" },
    ],
  },
  {
    name: "Verification & Exception Handling",
    items: [
      { title: "Inline Barcode Grading (ISO/ANSI), Presence/Position" },
      { title: "Vision OCV/OCR as needed" },
      { title: "Reject Arms/Lanes, Auto-Void, Reprint & Re-apply Logic" },
    ],
  },
  {
    name: "Controls & Integration",
    items: [
      { title: "WMS/WCS Integration (APIs, ZPL/DPL/EPL/IPL)" },
      { title: "PLC/HMI, Encoder Tracking & Sensors" },
      { title: "DWS (Dimensioning/Weighing/Scanning) Coupled Control" },
    ],
  },
  {
    name: "Throughput & Mechanics",
    items: [
      { title: "Case/Tote: ~15–30 CPM tamp; ~40–80+ CPM blow-on (pitch-dependent)" },
      { title: "Pallet: ~2–6 pallets/min for 1–3 sides with verify" },
      { title: "Changeover & Maintenance: quick engine swaps, easy media reloads" },
    ],
  },
];

/** Gallery (ensure files exist under /public) */
const gallery = demoSolutionImages.printApply ?? [
  { src: "/images/solutions/print-apply/applicator.jpg", alt: "Print & apply applicator" },
  { src: "/images/solutions/print-apply/corner-wrap.jpg", alt: "Corner-wrap application" },
  { src: "/images/solutions/print-apply/pallet-labeler.jpg", alt: "Pallet SSCC labeler at stretch wrapper" },
];

/** Representative use cases */
const useCases = [
  "Pack-out ship labels for e-commerce and wholesale",
  "Sorter induction labels (LPN or routing) with verify/reject",
  "Receiving LPN labels for totes/cases",
  "Pallet SSCC labels at stretch wrapper discharge (1–3 sides)",
  "Compliance labeling for GS1/Amazon/Walmart",
];

export default function Page() {
  return (
    <SolutionPage
      title="Print & Apply (P&A) Labeling"
      description="Inline case, tote, and pallet labeling with verification and exception handling. We integrate WMS/WCS label data, print engines, applicators, and DWS for accurate, hands-off labeling."
      benefits={benefits}
      steps={steps}
      options={options}
      gallery={gallery}
      useCases={useCases}
      brochureCta={{
        blurb: "Request our P&A Spec Pack—applicator selection, label sizes, and integration checklist.",
        buttonText: "Request spec pack",
        href: "/contact",
      }}
      cta={{
        title: "Design your print & apply cell",
        body: "We’ll match applicator type to your pitch and faces, size the print engine, and tie in WMS/WCS, DWS, and exception handling.",
        buttonText: "Talk with an engineer",
        href: "/contact",
      }}
    />
  );
}
