import type { Profile } from "./types";

export const profile: Profile = {
  name: "Oussema Bouchahwa",
  monogram: "ob",
  location: "Sfax, Tunisia",
  availabilityChip: "Open to alternance, CIVP and junior roles",
  email: "oussema.bouchahwa@ipsas.tn",
  linkedin: "https://www.linkedin.com/in/bouchahwa-oussema-0216b3264/",
  github: "https://github.com/OussEmabouchahwa",
  cvPath: "assets/cv/Oussema-Bouchahwa-CV.pdf",
  hero: {
    kickerBadge: "Open to alternance, CIVP and junior roles",
    kickerLocation: "Sfax, Tunisia",
    h1Main: "I build software & cut",
    h1Italic: "films.",
    lede: "Full-stack developer and software engineering student. I ship web and mobile apps, connect APIs and automate workflows with AI. Then I pick up a camera and edit the story.",
    workCta: "See selected work",
    mediaCta: "Watch the showreel",
    codeSnippet: 'const me = { stack: "MERN", craft: ["code", "film"] };',
  },
  stats: [
    { value: "1.5 yrs", label: "In-company development" },
    { value: "3", label: "Companies worked with" },
    { value: "124", label: "Public GitHub repositories (update from GitHub when it changes)" },
    { value: "2", label: "Crafts: code and film" },
  ],
  about: {
    p1: "I'm Oussema, a software engineering student at IPSAS in Sfax. I write code that has to work in real companies: booking systems, internal tools, mobile apps and the automations that tie them together.",
    p2: "I also edit video and design visuals, so I care about how a product looks and feels as much as how it runs. Right now I'm going deep on AI agents and automation, and I'm looking for a team where I can build tools people use every day.",
    education: [
      {
        degree: "Engineering cycle, Computer Science",
        institution: "IPSAS, Sfax",
        detail: "2nd year",
      },
      {
        degree: "Bachelor's in Computer Science (MDW)",
        institution: "ISET Jerba",
        detail: "2025",
      },
    ],
    languages: [
      { name: "Arabic", level: "Native" },
      { name: "English", level: "B2" },
      { name: "French", level: "B1" },
    ],
  },
  footer: {
    copyright: "© 2026 Oussema Bouchahwa · Sfax, Tunisia",
    edition: "Final cut v1.0 · 25 fps",
  },
};
