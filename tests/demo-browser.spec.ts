import { test , expect , chromium, webkit} from "@playwright/test";

test ('browser test',async () => {
    const chromeBrowser = await chromium.launch({ headless: false});
    const context1 = await chromeBrowser.newContext();
    const page1 = await context1.newPage();
    await page1.goto('https://www.google.com');
    const page2 = await context1.newPage();
    await page2.goto('https://www.facebook.com');

    const browser = await webkit.launch({ headless: false});
    const context2 = await browser.newContext();
    const page3 = await context2.newPage();
    await page3.goto('https://www.facebook.com');
    
    test.setTimeout(0);
    await page2.pause();
});