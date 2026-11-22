import { test, expect } from "@playwright/test";

test.describe("3D Poster Ring", () => {
  test("arrows cycle the poster counter forward and backward", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Scroll the ring stage into view before interacting
    const nextBtn = page.locator("#next");
    await nextBtn.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);

    const counter = page.locator("#posterCount");
    await expect(counter).toContainText("01 / 08");

    // Click next and wait for the rAF-driven state update
    await nextBtn.click();
    await expect(counter).toContainText("02 / 08", { timeout: 8000 });

    // Click prev
    const prevBtn = page.locator("#prev");
    await prevBtn.click();
    await expect(counter).toContainText("01 / 08", { timeout: 8000 });
  });

  test("respects prefers-reduced-motion: reduce without auto-turning", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Scroll ring into view to trigger IntersectionObserver (inView = true)
    const ring = page.locator("#ring");
    await ring.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const angle1 = await ring.evaluate((el) => el.style.getPropertyValue("--a"));

    await page.waitForTimeout(1000);

    const angle2 = await ring.evaluate((el) => el.style.getPropertyValue("--a"));
    expect(angle1).toBe(angle2);
  });
});
