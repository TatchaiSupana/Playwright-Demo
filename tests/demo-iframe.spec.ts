import { test } from "@playwright/test";

test('demo iframe',async ({ page }) => {
    await page.goto('https://demoqa.com/frames');
    const frame1 = page.frameLocator('id=frame1');
    const text = await frame1.locator('id=sampleHeading').textContent();
    console.log(text);

    const e = await page.waitForSelector('id=framesWrapper >> div >> nth=0');
    const headerText = await e.textContent();
    console.log(headerText);
})