import { test, expect } from "@playwright/test";

test.describe("Nav and Timecode Shell", () => {
  test("displays brand monogram and full name", async ({ page }) => {
    await page.goto("/");
    const brand = page.locator("header a[href='#top']");
    await expect(brand).toBeVisible();
    await expect(brand).toContainText("ob");
    await expect(brand).toContainText("Oussema Bouchahwa");
  });

  test("scrolling to the bottom updates the timecode and progress bar", async ({ page }) => {
    await page.goto("/");

    const timecodeDisplay = page.locator("header").getByLabel("Timeline position");
    await expect(timecodeDisplay).toContainText("00:00:00:00");

    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(400);

    // Verify timecode updated
    const updatedText = await timecodeDisplay.innerText();
    expect(updatedText).not.toContain("00:00:00:00");

    // Verify progress bar is near 100%
    const progressSpan = page.locator("header span[class*='progressIndicator']");
    const widthStyle = await progressSpan.getAttribute("style");
    expect(widthStyle).toMatch(/width:\s*([89]\d|100)(\.\d+)?%/);
  });
});
