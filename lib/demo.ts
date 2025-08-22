
// lib/demo.ts
export const demoClients = [
  { name: "New Balance", src: "/clients/newbalance.svg" },
  { name: "Sportsman's Warehouse", src: "/clients/sportsmans.svg" },
  { name: "Little Giant", src: "/clients/little-giant.svg" },
  { name: "Lion Energy", src: "/clients/lionenergy.svg" },
  { name: "Built Brands", src: "/clients/builtbrands.png" },
];

export const demoShowcase = [
  {
    id: "demo-1",
    slug: "dense-storage-upfit",
    title: "Dense Storage Upfit",
    featuredImage: { node: { sourceUrl: "/images/showcase/demo-1.jpg", altText: "Dense storage solution" } },
    excerpt: "Consolidated SKUs and increased pick density with a compact layout.",
    uri: "/case-studies/dense-storage-upfit",
  },
  {
    id: "demo-2",
    slug: "amr-sortation-pilot",
    title: "AMR Sortation Pilot",
    featuredImage: { node: { sourceUrl: "/images/showcase/demo-2.jpg", altText: "AMR sortation system" } },
    excerpt: "Flexible, track‑free sortation to support seasonal peaks.",
    uri: "/case-studies/amr-sortation-pilot",
  },
  {
    id: "demo-3",
    slug: "cold-storage-reflow",
    title: "Cold Storage Reflow",
    featuredImage: { node: { sourceUrl: "/images/showcase/demo-3.jpg", altText: "Cold storage facility" } },
    excerpt: "Temperature‑controlled picking flow with ergonomic stations.",
    uri: "/case-studies/cold-storage-reflow",
  },
];

export const demoPartners = [
  {
    id: "partner-1",
    title: "Daifuku",
    slug: "daifuku",
    uri: "/partners/daifuku",
    featuredImage: { node: { sourceUrl: "/images/daifuku.svg", altText: "Daifuku logo" } },
  },
  {
    id: "partner-2",
    title: "Modula",
    slug: "modula", 
    uri: "/partners/modula",
    featuredImage: { node: { sourceUrl: "/images/modula.svg", altText: "Modula logo" } },
  },
  {
    id: "partner-3",
    title: "Stow Group",
    slug: "stow-group",
    uri: "/partners/stow-group",
    featuredImage: { node: { sourceUrl: "/images/stowgroup.svg", altText: "Stow Group logo" } },
  },
];

export const demoSolutionImages = {
  palletShuttles: [
    { title: "Operator staging shuttle", src: "/images/solutions/pallet-shuttles/operator-staging-shuttle.avif" },
    { title: "Position pallets", src: "/images/solutions/pallet-shuttles/position-pallets.avif" },
    { title: "Auto position", src: "/images/solutions/pallet-shuttles/auto-position.avif" },
    { title: "Shuttle in operation", src: "/images/solutions/pallet-shuttles/shuttle-in-operation.avif" },
  ],
  vlm: [
    { title: "FlexiBox: fast movers", src: "/images/solutions/vlm/auto-case-pick.jpg" },
    { title: "VLM in cold storage", src: "/images/solutions/vlm/climate-control.png" },
    { title: "Ergonomic access", src: "/images/solutions/vlm/bin-handling.jpg" },
    { title: "Robot interface", src: "/images/solutions/vlm/robot-interface.jpg" },
  ],
  conveyor: [
    { title: "High‑speed sortation", src: "/images/solutions/conveyor/shoe-sorter.jpg" },
    { title: "Multi‑level conveyor", src: "/images/solutions/conveyor/polytier.JPG" },
    { title: "Automated induction", src: "/images/solutions/conveyor/automation-induction.png" },
    { title: "Pack station integration", src: "/images/solutions/conveyor/pack-station-integration.JPG" },
  ],
  amr: [
    { title: "ACR Goods‑to‑Person", src: "/images/solutions/amr/acr.jpg" },
    { title: "AMR Robotic Sortation", src: "/images/solutions/amr/t-sort.jpg" },
    { title: "Forklift AMR—Pallet Moves", src: "/images/solutions/amr/forklift-amr.webp" },
  ],
  robotics: [
    { title: "Case picking robot", src: "/images/solutions/robotics/case-picking.jpg" },
    { title: "Palletizing cell", src: "/images/solutions/robotics/palletizing.jpg" },
    { title: "Vision‑guided picking", src: "/images/solutions/robotics/vision-picking.jpg" },
    { title: "Collaborative workspace", src: "/images/solutions/robotics/collaborative.jpg" },
  ],
};

// Utility: return src if file exists, else a colored placeholder.
export function placeholder(src: string, altText: string) {
  // If you want, later we can expand to fs.existsSync logic with dynamic import.
  // For now always return src; fallback is handled by actual placeholder files we create in /public below.
  return { src, alt: altText };
}
