import { test, expect } from "@playwright/test";

test.describe("Responsive layout and horizontal overflow check", () => {
  test("ensures no horizontal overflow and captures screenshots", async ({ page }, testInfo) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const viewport = page.viewportSize();
    const width = viewport?.width ?? 0;

    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    expect(hasHorizontalOverflow).toBe(false);

    await page.screenshot({
      path: `tests/screenshots/viewport-${width}.png`,
      fullPage: true,
    });
  });
});
