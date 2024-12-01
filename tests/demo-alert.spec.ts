import { test , expect } from "@playwright/test";

test ('alert test',async ({ page }) => {
    await page.goto('https://demoqa.com/alerts');
    // await page.click('id=alertButton');
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
      });
    await page.click('id=confirmButton');
    test.setTimeout(0);
    await page.pause();

})