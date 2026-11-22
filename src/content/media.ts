import type { ReelItem, PosterItem } from "./types";

export const showreelData = {
  label: "SHOWREEL 2026 · 01:30",
  sideTitle: "Ninety seconds of the edits I'm proudest of.",
  text: "Travel promos, social reels and motion pieces. I handle the whole chain: shooting, cutting, color and motion graphics.",
  roles: [
    { craft: "Edit", tool: "Premiere Pro" },
    { craft: "Motion", tool: "After Effects" },
    { craft: "Stills", tool: "Photoshop" },
  ],
  media: {
    kind: "video" as const,
    file: "assets/video/showreel.mp4",
    poster: "assets/video/showreel.jpg",
    hint: "Drop showreel.mp4 · 1920×1080",
    ratio: "16/9" as const,
    label: "SHOWREEL 2026 · 01:30",
  },
};

export const reels: ReelItem[] = [
  {
    id: "reel-01",
    title: "TODO reel title",
    duration: "00:53",
    isTodo: true,
    media: {
      kind: "video",
      file: "assets/reels/reel-01.mp4",
      poster: "assets/reels/reel-01.jpg",
      hint: "Drop reel-01.mp4 · 1080×1920",
      ratio: "9/16",
      label: "REEL 01",
    },
  },
  {
    id: "reel-02",
    title: "TODO reel title",
    duration: "01:26",
    isTodo: true,
    media: {
      kind: "video",
      file: "assets/reels/reel-02.mp4",
      poster: "assets/reels/reel-02.jpg",
      hint: "Drop reel-02.mp4 · 1080×1920",
      ratio: "9/16",
      label: "REEL 02",
    },
  },
  {
    id: "reel-03",
    title: "TODO reel title",
    duration: "00:14",
    isTodo: true,
    media: {
      kind: "video",
      file: "assets/reels/reel-03.mp4",
      poster: "assets/reels/reel-03.jpg",
      hint: "Drop reel-03.mp4 · 1080×1920",
      ratio: "9/16",
      label: "REEL 03",
    },
  },
  {
    id: "reel-04",
    title: "TODO reel title",
    duration: "00:17",
    isTodo: true,
    media: {
      kind: "video",
      file: "assets/reels/reel-04.mp4",
      poster: "assets/reels/reel-04.jpg",
      hint: "Drop reel-04.mp4 · 1080×1920",
      ratio: "9/16",
      label: "REEL 04",
    },
  },
];

export const campaignData = {
  title: "Route Insolite travel campaign",
  locationNote: "Locations: TODO",
  promo: {
    kind: "video" as const,
    file: "assets/video/route-insolite-promo.mp4",
    poster: "assets/video/route-insolite-promo.jpg",
    hint: "Drop route-insolite-promo.mp4 · 16:9",
    ratio: "16/9" as const,
    label: "ROUTE INSOLITE PROMO",
  },
  photos: [
    {
      kind: "image" as const,
      file: "assets/photos/photo-01.jpg",
      hint: "Drop photo-01.jpg · 1080×1350",
      ratio: "4/5" as const,
      alt: "Route Insolite travel photograph 1",
    },
    {
      kind: "image" as const,
      file: "assets/photos/photo-02.jpg",
      hint: "Drop photo-02.jpg · 1080×1350",
      ratio: "4/5" as const,
      alt: "Route Insolite travel photograph 2",
    },
  ],
};

export const posters: PosterItem[] = Array.from({ length: 8 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    id: `poster-${num}`,
    title: `Poster ${num}`,
    media: {
      kind: "image",
      file: `assets/posters/poster-${num}.jpg`,
      hint: `Drop poster-${num}.jpg · 1080×1350`,
      ratio: "4/5",
      alt: `Poster visual series ${num}`,
    },
  };
});
