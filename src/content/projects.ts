import type { Project, ShippedSite } from "./types";

const GITHUB = "https://github.com/OussEmabouchahwa";

export const projects: Project[] = [
  {
    id: "gmail-ai-assistant",
    index: "P/01",
    title: "Gmail AI Assistant",
    meta: ["Automation", "Google Apps Script", "Gemini", "Telegram"],
    text: "A serverless AI agent that reads Gmail, uses Gemini to pick out the emails that matter and sends a digest on Telegram in Tunisian Derja. Email content is treated as untrusted data, and it falls back to a plain list if Gemini fails.",
    facts: [
      {
        value: "3",
        label: "urgency levels: urgent, high, normal. Newsletters and promotions are ignored",
      },
      {
        value: "6",
        label: "Telegram commands for on-demand reports and search",
      },
      {
        value: "7 AM",
        label: "daily digest, Tunisia time, with no server and no hosting cost",
      },
    ],
    tags: ["Apps Script", "Gemini API", "Telegram Bot API", "Prompt-injection defence"],
    link: {
      label: "Read the code ↗",
      href: `${GITHUB}/Gmail-AI-Assistant`,
    },
    screenBar: {
      file: "Gmail-AI-Assistant / Code.gs",
      status: "polling Telegram every minute",
    },
    featured: true,
    media: {
      kind: "image",
      file: "assets/projects/gmail-ai-assistant.jpg",
      hint: "Drop gmail-ai-assistant.jpg · 1600×1000",
      ratio: "16/10",
      alt: "Google Apps Script editor showing the Gmail AI Assistant digest function",
    },
  },
  {
    id: "automated-weather-bot",
    index: "P/02",
    title: "Automated weather bot",
    meta: ["Automation"],
    text: "An n8n workflow connected to a weather API that fetches and sends forecasts on its own. Built in two weeks and shared on LinkedIn.",
    tags: ["n8n", "Cloudflare Workers", "Telegram Bot API", "Automation"],
    link: {
      label: "Read the code ↗",
      href: `${GITHUB}/weather_bot.py`,
    },
    media: {
      kind: "image",
      file: "assets/projects/weather-bot.jpg",
      hint: "Drop weather-bot.jpg · 1600×1000",
      ratio: "16/10",
      alt: "Weather bot worker code in the Cloudflare editor, with its live preview",
    },
  },
  {
    id: "lampeonline",
    index: "P/03",
    title: "LampeOnline",
    meta: ["E-commerce", "3D"],
    text: "A lighting e-commerce store for Tunisia (prices in TND) with an interactive 3D showroom, a product viewer with live colour-temperature control, wishlist, slide-over cart and a checkout with cash on delivery.",
    tags: ["TypeScript", "Three.js", "React Three Fiber", "E-commerce"],
    link: {
      label: "Read the code ↗",
      href: `${GITHUB}/e-commerce-LampeOnline-`,
    },
    media: {
      kind: "image",
      file: "assets/projects/lampe-online.jpg",
      hint: "Drop lampe-online.jpg · 1600×1000",
      ratio: "16/10",
      alt: "LampeOnline home page with an interactive 3D lamp",
    },
  },
  {
    id: "antigravity-kit-builder",
    index: "P/04",
    title: "Antigravity Kit Builder",
    meta: ["Developer tooling", "Python", "Playwright", "Mermaid"],
    text: "A reusable AI-agent skill that turns a project brief into a complete, verified kit for an AI coding IDE: master prompt, README, design system, architecture with decision records, security model, rules and workflows.",
    tags: ["Python", "Playwright", "System design", "Security", "Design systems"],
    link: {
      label: "Read the code ↗",
      href: `${GITHUB}/Antigravity-Kit-Builder`,
    },
    media: {
      kind: "image",
      file: "assets/projects/antigravity-kit-builder.jpg",
      hint: "Drop antigravity-kit-builder.jpg · 1600×1000",
      ratio: "16/10",
      alt: "Antigravity Kit Builder documentation preview",
    },
  },
];

export const shippedSites: ShippedSite[] = [
  {
    id: "site-01",
    name: "Marlow & Reed",
    domain: "e-comerce-ten-rust.vercel.app",
    isTodo: false,
    media: {
      kind: "image",
      file: "assets/sites/site-01.jpg",
      hint: "Drop site-01.jpg · 1600×1000",
      ratio: "16/10",
      alt: "Marlow & Reed footwear store, hero section",
    },
  },
  {
    id: "site-02",
    name: "EduPulse",
    domain: "github.com/OussEmabouchahwa/eduplus",
    isTodo: false,
    media: {
      kind: "image",
      file: "assets/sites/site-02.jpg",
      hint: "Drop site-02.jpg · 1600×1000",
      ratio: "16/10",
      alt: "EduPulse learning platform landing page",
    },
  },
  {
    id: "site-03",
    name: "Masrouf",
    domain: "github.com/OussEmabouchahwa/Expense-Tracker-Web-Application",
    isTodo: false,
    media: {
      kind: "image",
      file: "assets/sites/site-03.jpg",
      hint: "Drop site-03.jpg · 1600×1000",
      ratio: "16/10",
      alt: "Masrouf expense tracker dashboard",
    },
  },
  {
    id: "site-04",
    name: "Nizam (Flutter app)",
    domain: "github.com/OussEmabouchahwa/life-app",
    isTodo: false,
    media: {
      kind: "image",
      file: "assets/sites/site-04.jpg",
      hint: "Drop site-04.jpg · 1600×1000",
      ratio: "16/10",
      alt: "Nizam app screens: today, plan, grades and Ramadan food plan",
    },
  },
];
