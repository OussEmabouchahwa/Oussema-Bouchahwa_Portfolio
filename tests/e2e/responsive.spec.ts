import { test, expect } from "@playwright/test";

test.describe("Responsive layout and horizontal overflow check", () => {
  test("ensures no horizontal overflow and captures screenshots", async ({ page }, testInfo) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const viewport = page.viewportSize();
    const width = viewport?.width ?? 0;

    const overflowInfo = await page.evaluate(() => {
      const docWidth = document.documentElement.scrollWidth;
      const winWidth = window.innerWidth;
      const elements = Array.from(document.querySelectorAll("*"));
      const overflowing = elements
        .filter((el) => {
          const rect = el.getBoundingClientRect();
          return rect.right > winWidth + 1;
        })
        .map((el) => ({
          tag: el.tagName,
          className: el.className,
          right: el.getBoundingClientRect().right,
        }))
        .slice(0, 5);

      return { docWidth, winWidth, overflowing };
    });

    console.log(`Viewport ${width}:`, JSON.stringify(overflowInfo));
    expect(overflowInfo.docWidth <= overflowInfo.winWidth).toBe(true);

    await page.screenshot({
      path: `tests/screenshots/viewport-${width}.png`,
      fullPage: true,
    });
  });
});
