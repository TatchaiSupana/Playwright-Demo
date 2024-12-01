import { test } from "@playwright/test";

test('sub menu', async ({ page }) =>{
    await page.goto('https://playwright.dev/');
    await page.hover('css=div.navbar__item.dropdown--hoverable');
    // await page.click ('css=div.navbar__item.dropdown--hoverable >> css=a[href*="/python/"]');
    await page.click ('css=div.navbar__item.dropdown--hoverable >> text=Python');
    await page.waitForSelector('text=Playwright for Python');

    test.setTimeout(0);
    await page.pause();

});