import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accessibility (axe)", () => {
  test("zero serious or critical WCAG 2.1 AA violations", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    // Filter to serious and critical only
    const serious = results.violations.filter(
      (v) => v.impact === "serious" || v.impact === "critical",
    );

    if (serious.length > 0) {
      const summary = serious
        .map(
          (v) =>
            `[${v.impact}] ${v.id}: ${v.description}\n  ${v.nodes.map((n) => n.target.join(", ")).join("\n  ")}`,
        )
        .join("\n\n");
      console.error("axe violations:\n" + summary);
    }

    expect(serious).toHaveLength(0);
  });

  test("keyboard Tab lands on all interactive elements with visible focus ring", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Tab through the first 10 focusable elements, verify each has an outline
    for (let i = 0; i < 10; i++) {
      await page.keyboard.press("Tab");
      const focused = page.locator(":focus");
      await expect(focused).toBeVisible();
      const outline = await focused.evaluate((el) => {
        const style = getComputedStyle(el);
        return style.outlineStyle !== "none" && style.outlineWidth !== "0px";
      });
      expect(outline).toBe(true);
    }
  });
});
