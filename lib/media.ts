// lib/media.ts
export type MediaItem = { src: string; alt: string; };
export type MediaGroup = { hero?: string; gallery: MediaItem[]; };

export const media = {
  solutions: {
    // --- Conveyor (stub; fill actual filenames) ---
    conveyor: {
      hero: "/images/solutions/conveyor/conveyor-hero.jpg",
      gallery: [
        { title: "Shoe sorter", src: "/images/solutions/conveyor/shoe-sorter.jpg", alt: "Shoe sorter" },
        { title: "Multi tier conveyor", src: "/images/solutions/conveyor/polytier.JPG", alt: "Multi tier conveyor" },
        { title: "Automation induction", src: "/images/solutions/conveyor/automation-induction.png", alt: "Automation induction" },
        { title: "Pack station integration", src: "/images/solutions/conveyor/pack-station-integration.JPG", alt: "Pack station integration" },
      ],
    } as MediaGroup,
    // --- VLM (stub; fill actual filenames) ---
    vlm: {
      hero: "/images/solutions/vlm/vlm-hero.jpg",
      gallery: [ 
      { title: "Flexibox fast movers", src: "/images/solutions/vlm/flexibox.jpg", alt: "FlexiBox: fast movers" }, 
      { title: "VLM in cold storage", src: "/images/solutions/vlm/modula-lift.jpg", alt: "VLM in cold storage" }, 
      { title: "Put to light", src: "/images/solutions/vlm/put-to-light.jpg", alt: "Put to light" }, 
      { title: "Robot interface", src: "/images/solutions/vlm/robot-interface.jpg", alt: "Robot interface" }, 
      ],
    } as MediaGroup,
    // --- Pallet Shuttle (stub; fill actual filenames) ---

    palletShuttle: {
      hero: "/images/solutions/pallet-shuttles/aisle-shuttle.jpg",
      gallery: [
        { title: "Operator staging shuttle", src: "/images/solutions/pallet-shuttles/operator-staging-shuttle.avif", alt: "Operator staging shuttle" },
        { title: "Shuttle in operation", src: "/images/solutions/pallet-shuttles/shuttle-in-operation.avif",  alt: "Shuttle in operation" },
        { title: "Position pallets", src: "/images/solutions/pallet-shuttles/position-pallets.avif",  alt: "Position pallets" },
        { title: "Auto position", src: "/images/solutions/pallet-shuttles/auto-position.avif",  alt: "Auto position" }
        // ↑ update to your real filenames in /public/images/solutions/pallet-shuttle
      ],
    } as MediaGroup,
  },
} as const;
