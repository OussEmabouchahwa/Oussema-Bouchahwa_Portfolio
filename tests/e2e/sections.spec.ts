import { test, expect } from "@playwright/test";

test.describe("Sections and Navigation Scrolling", () => {
  const sectionIds = ["work", "media", "experience", "stack", "about", "contact"];

  test("all 6 sections render with their respective h2 heading", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    for (const id of sectionIds) {
      const section = page.locator(`section#${id}`);
      await expect(section).toBeVisible();
      const h2 = section.locator("h2");
      await expect(h2).toBeVisible();
    }
  });

  test("sequence clips link to the correct section", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    for (const id of sectionIds) {
      const clip = page.locator(`nav[aria-label*='Sequence'] a[data-sec='${id}']`);
      await expect(clip).toBeVisible();
      await expect(clip).toHaveAttribute("href", `#${id}`);
    }
  });
});
