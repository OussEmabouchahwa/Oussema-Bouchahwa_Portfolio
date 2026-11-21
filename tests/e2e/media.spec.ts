import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

test.describe("MediaSlot build-time resolution and placeholders", () => {
  const fixtureRelPath = "assets/projects/antigravity-kit-builder.jpg";
  const fixtureFullPath = path.join(process.cwd(), "public", fixtureRelPath);

  test("missing asset displays placeholder with crop marks, hint and path", async ({ page }) => {
    // Ensure fixture does not exist for this test
    if (fs.existsSync(fixtureFullPath)) {
      fs.unlinkSync(fixtureFullPath);
    }

    await page.goto("/");
    const placeholder = page.locator("[role='img'][aria-label*='antigravity-kit-builder']");
    await expect(placeholder).toBeVisible();
    await expect(placeholder).toContainText("Drop antigravity-kit-builder.jpg");
    await expect(placeholder).toContainText("assets/projects/antigravity-kit-builder.jpg");
  });
});
