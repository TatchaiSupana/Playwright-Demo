import { test } from "@playwright/test";

test("demo modal", async ({ page }) => {
  await page.goto("https://demoqa.com/modal-dialogs");
  await page.click("id=showSmallModal");
  await page.click("id=closeSmallModal");
  await page.waitForSelector("id=closeSmallModal", { state: "hidden" });
});
