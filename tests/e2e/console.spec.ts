import { test, expect } from "@playwright/test";

test.describe("Console and page load", () => {
  test("loads with no console errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        errors.push(msg.text());
      }
    });

    await page.goto("/");
    expect(errors).toEqual([]);
  });
});
