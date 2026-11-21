import { describe, expect, it } from "vitest";
import { projects, shippedSites } from "./projects";
import { jobs } from "./experience";
import { sections } from "./sections";
import { showreelData, reels, campaignData, posters } from "./media";
import { profile } from "./profile";
import type { Media } from "./types";

describe("Content Model & Integrity", () => {
  it("ensures every project has required fields and unique IDs", () => {
    const ids = new Set<string>();
    for (const project of projects) {
      expect(project.id).toBeTruthy();
      expect(ids.has(project.id)).toBe(false);
      ids.add(project.id);

      expect(project.title).toBeTruthy();
      expect(project.text).toBeTruthy();
      expect(project.tags.length).toBeGreaterThan(0);
      expect(project.media).toBeTruthy();
      expect(project.media.file).toMatch(/^assets\//);
    }
  });

  it("ensures all media slots have unique file paths starting with assets/", () => {
    // Unique media slots declared across the site per docs/CONTENT.md table
    const declaredSlots: Media[] = [
      profile.hero.layers.poster,
      profile.hero.layers.heroApp,
      profile.about.portrait,
      ...projects.map((p) => p.media),
      ...shippedSites.map((s) => s.media),
      showreelData.media,
      ...reels.map((r) => r.media),
      campaignData.promo,
      ...campaignData.photos,
      ...posters.map((p) => p.media),
    ];

    const paths = new Set<string>();
    for (const media of declaredSlots) {
      expect(media.file).toMatch(/^assets\//);
      expect(paths.has(media.file)).toBe(false);
      paths.add(media.file);
    }
  });

  it("verifies jobs months are 12, 6, 1 and in correct order", () => {
    const months = jobs.map((j) => j.months);
    expect(months).toEqual([12, 6, 1]);
  });

  it("strictly ensures LMS & Expense Tracker specs never contain 'built' or 'deployed'", () => {
    const lmsProject = projects.find((p) => p.id === "lms-expense-tracker-specs");
    expect(lmsProject).toBeDefined();
    if (lmsProject) {
      const lower = lmsProject.text.toLowerCase();
      expect(lower).not.toContain("built");
      expect(lower).not.toContain("deployed");
    }
  });

  it("verifies section IDs are unique and timecodes increase monotonically", () => {
    const ids = new Set<string>();
    let lastSeconds = -1;

    for (const section of sections) {
      expect(section.id).toBeTruthy();
      expect(ids.has(section.id)).toBe(false);
      ids.add(section.id);

      const parts = section.timecode.split(":").map(Number);
      expect(parts.length).toBe(4);
      const totalSeconds = parts[0] * 3600 + parts[1] * 60 + parts[2] + parts[3] / 25;
      expect(totalSeconds).toBeGreaterThan(lastSeconds);
      lastSeconds = totalSeconds;
    }
  });
});
