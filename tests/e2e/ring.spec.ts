import { test, expect } from "@playwright/test";

test.describe("3D Poster Ring", () => {
  test("arrows cycle the poster counter forward and backward", async ({ page }) => {
    await page.goto("/#media");
    await page.waitForLoadState("networkidle");

    const counter = page.locator("#posterCount");
    await expect(counter).toContainText("01 / 08");

    // Click next
    const nextBtn = page.locator("#next");
    await nextBtn.click();
    await expect(counter).toContainText("02 / 08");

    // Click prev
    const prevBtn = page.locator("#prev");
    await prevBtn.click();
    await expect(counter).toContainText("01 / 08");
  });

  test("respects prefers-reduced-motion: reduce without auto-turning", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/#media");
    await page.waitForLoadState("networkidle");

    const ring = page.locator("#ring");
    const angle1 = await ring.evaluate((el) => el.style.getPropertyValue("--a"));

    await page.waitForTimeout(1000);

    const angle2 = await ring.evaluate((el) => el.style.getPropertyValue("--a"));
    expect(angle1).toBe(angle2);
  });
});
