import type { StackCategory } from "./types";

export const stackCategories: StackCategory[] = [
  {
    group: "Frontend",
    sub: "web interfaces",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    group: "Backend",
    sub: "APIs and services",
    items: [
      "Node.js",
      "Express",
      "Python",
      "Symfony (PHP)",
      "Spring Boot (Java)",
      "REST APIs",
    ],
  },
  {
    group: "Data",
    sub: "databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQLite",
      "MariaDB",
      "SQL Server",
    ],
  },
  {
    group: "Mobile",
    sub: "apps",
    items: ["Flutter", "Ionic"],
  },
  {
    group: "Automation & AI",
    sub: "workflows and agents",
    items: [
      "n8n",
      "AI-assisted development",
      "Prompt engineering",
      "Postman",
    ],
  },
  {
    group: "Quality",
    sub: "tests and security",
    items: [
      "Playwright",
      "Automated API tests",
      "OWASP Top 10",
      "WCAG",
      "Git",
      "GitHub Actions",
    ],
  },
  {
    group: "Film & design",
    sub: "the other craft",
    items: ["Premiere Pro", "After Effects", "Photoshop", "Photography"],
  },
];
