import type { Project, ShippedSite } from "./types";

export const projects: Project[] = [
  {
    id: "antigravity-kit-builder",
    index: "P/01",
    title: "Antigravity Kit Builder",
    meta: ["Developer tooling", "Python", "Playwright", "Mermaid"],
    text: "A reusable AI-agent skill that turns a project brief into a complete, verified kit for an AI coding IDE: master prompt, README, design system, architecture with decision records, security model, rules and workflows.",
    facts: [
      {
        value: "20",
        label: "templates for documents, rules, skills and workflows",
      },
      {
        value: "5",
        label: "Python scripts: WCAG contrast, kit validation, responsive screenshots, scaffolding, packaging",
      },
      {
        value: "2 bugs",
        label: "real layout defects caught by the checks that a visual review missed",
      },
    ],
    tags: ["Python", "Playwright", "System design", "Security", "Design systems"],
    link: {
      label: "Read the code ↗",
      href: "https://github.com/OussEmabouchahwa/Antigravity-Kit-Builder",
    },
    screenBar: {
      file: "antigravity-kit-builder / README.md",
      status: "0 errors · 0 warnings",
    },
    featured: true,
    media: {
      kind: "image",
      file: "assets/projects/antigravity-kit-builder.jpg",
      hint: "Drop antigravity-kit-builder.jpg · 1600×1000",
      ratio: "16/10",
      alt: "Antigravity Kit Builder interface and documentation preview",
    },
  },
  {
    id: "student-management-system",
    index: "P/02",
    title: "Student Management System",
    meta: ["Web app"],
    text: "Full-stack CRUD app with a REST API, SQLite and server-side validation. Search, filters, responsive UI, 8 automated API tests and a browser flow checked with Playwright.",
    tags: ["Node.js", "Express", "SQLite", "REST"],
    link: {
      label: "TODO repository URL (until then: GitHub repositories tab)",
      href: "https://github.com/OussEmabouchahwa?tab=repositories",
      isTodo: true,
    },
    media: {
      kind: "image",
      file: "assets/projects/student-management.jpg",
      hint: "Drop student-management.jpg · 1600×1000",
      ratio: "16/10",
      alt: "Student Management System dashboard",
    },
  },
  {
    id: "automated-weather-bot",
    index: "P/03",
    title: "Automated weather bot",
    meta: ["Automation"],
    text: "An n8n workflow connected to a weather API that fetches and sends forecasts on its own. Built in two weeks and shared on LinkedIn.",
    tags: ["n8n", "APIs", "Automation"],
    link: {
      label: "TODO LinkedIn post URL (until then: LinkedIn profile)",
      href: "https://www.linkedin.com/in/bouchahwa-oussema-0216b3264/",
      isTodo: true,
    },
    media: {
      kind: "image",
      file: "assets/projects/n8n-weather-bot.jpg",
      hint: "Drop n8n-weather-bot.jpg · 1600×1000",
      ratio: "16/10",
      alt: "n8n workflow node configuration for weather bot",
    },
  },
  {
    id: "lms-expense-tracker-specs",
    index: "P/04",
    title: "LMS & Expense Tracker specs",
    meta: ["System design"],
    text: "Engineering specifications for two apps: architecture diagrams, data model, API catalog, auth and security model mapped to OWASP Top 10, and accessible design systems.",
    tags: ["Architecture", "Auth", "OWASP", "WCAG"],
    link: {
      label: "Read the method ↗",
      href: "https://github.com/OussEmabouchahwa/Antigravity-Kit-Builder",
    },
    media: {
      kind: "image",
      file: "assets/projects/lms-expense-design.jpg",
      hint: "Drop lms-expense-design.jpg · 1600×1000",
      ratio: "16/10",
      alt: "LMS and Expense Tracker architecture blueprints",
    },
  },
];

export const shippedSites: ShippedSite[] = [
  {
    id: "site-01",
    name: "TODO site name",
    domain: "TODO domain",
    isTodo: true,
    media: {
      kind: "image",
      file: "assets/sites/site-01.jpg",
      hint: "Drop site-01.jpg · 1600×1000",
      ratio: "16/10",
      alt: "Screenshot of shipped client website 1",
    },
  },
  {
    id: "site-02",
    name: "TODO site name",
    domain: "TODO domain",
    isTodo: true,
    media: {
      kind: "image",
      file: "assets/sites/site-02.jpg",
      hint: "Drop site-02.jpg · 1600×1000",
      ratio: "16/10",
      alt: "Screenshot of shipped client website 2",
    },
  },
  {
    id: "site-03",
    name: "TODO site name",
    domain: "TODO domain",
    isTodo: true,
    media: {
      kind: "image",
      file: "assets/sites/site-03.jpg",
      hint: "Drop site-03.jpg · 1600×1000",
      ratio: "16/10",
      alt: "Screenshot of shipped client website 3",
    },
  },
  {
    id: "site-04",
    name: "TODO site name",
    domain: "TODO domain",
    isTodo: true,
    media: {
      kind: "image",
      file: "assets/sites/site-04.jpg",
      hint: "Drop site-04.jpg · 1600×1000",
      ratio: "16/10",
      alt: "Screenshot of shipped client website 4",
    },
  },
];
