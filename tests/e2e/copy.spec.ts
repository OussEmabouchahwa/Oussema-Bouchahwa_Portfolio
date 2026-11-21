import { test, expect } from "@playwright/test";

test.describe("Copy Email Interaction", () => {
  test("copies email address to clipboard and displays feedback", async ({
    page,
    context,
  }) => {
    // Grant clipboard permissions
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);

    await page.goto("/#contact");
    await page.waitForLoadState("networkidle");

    const copyBtn = page.locator("#copy");
    await copyBtn.click();

    const feedback = page.locator("#copied");
    await expect(feedback).toContainText("Copied");

    const clipboardText = await page.evaluate(() => navigator.clipboard.readText());
    expect(clipboardText).toBe("oussema.bouchahwa@ipsas.tn");
  });
});
