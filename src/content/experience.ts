import type { Job } from "./types";

export const experienceNote = "Clip length = time spent in each role.";

export const jobs: Job[] = [
  {
    track: "V1",
    company: "Route Insolite, travel agency",
    place: "Sfax / Tunisia",
    role: "Full-stack developer & visual creator",
    months: 12,
    color: "tape",
    points: [
      "Built a complete multi-destination reservation management system (React, SQL).",
      "Shot client photography and edited promotional travel videos.",
      "Directed visual assets for digital campaigns.",
    ],
  },
  {
    track: "V2",
    company: "LeadRTech, Sfax",
    place: "Sfax",
    role: "Software engineering intern",
    months: 6,
    color: "steel",
    points: [
      "Developed full-stack web applications.",
      "Optimised SQL queries on PostgreSQL.",
      "Worked inside the team's development workflow.",
    ],
  },
  {
    track: "V3",
    company: "Viss Tunisie, Sfax",
    place: "Sfax",
    role: "Mobile & software intern",
    months: 1,
    color: "sage",
    points: [
      "Built a mobile application with Flutter.",
      "Implemented client UIs in an agile team.",
      "Integrated REST APIs.",
    ],
  },
];
