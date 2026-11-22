import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

test.describe("MediaSlot build-time resolution and placeholders", () => {
  const fixtureRelPath = "assets/sites/site-04.jpg";
  const fixtureFullPath = path.join(process.cwd(), "public", fixtureRelPath);
  const backupPath = `${fixtureFullPath}.bak`;

  test.beforeEach(() => {
    // Move a real file aside instead of deleting it, so the test never destroys assets.
    if (fs.existsSync(fixtureFullPath)) fs.renameSync(fixtureFullPath, backupPath);
  });

  test.afterEach(() => {
    if (fs.existsSync(backupPath)) fs.renameSync(backupPath, fixtureFullPath);
  });

  test("missing asset displays placeholder with crop marks, hint and path", async ({ page }) => {
    await page.goto("/");
    const placeholder = page.locator("[role='img'][aria-label*='site-04']");
    await expect(placeholder).toBeVisible();
    await expect(placeholder).toContainText("Drop site-04.jpg");
    await expect(placeholder).toContainText(fixtureRelPath);
  });
});
