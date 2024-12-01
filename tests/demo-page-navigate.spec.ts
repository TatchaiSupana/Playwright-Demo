import { test } from "@playwright/test";

test('demo page navigate', async ({ page }) =>{
    await page.goto('https://demoqa.com/');
    
    await Promise.all([
        page.waitForNavigation({waitUntil:"networkidle"}),
        page.click('text=Element')
    ]);

    test.setTimeout(0);
    await page.pause();
    
});