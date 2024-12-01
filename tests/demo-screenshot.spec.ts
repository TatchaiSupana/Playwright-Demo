import { test, expect } from "@playwright/test";

test('screenshot invalid login', async ({ page }) =>{
    await page.goto('https://demoqa.com/login');
    await page.fill('id=userName','demoqa');
    await page.fill('css=input[type=password]','Welcome1!');
    await page.click('id=userForm >> button >> nth=0');
    await page.waitForNavigation();
    const e = await page.waitForSelector('css=div.main-header');
    const headerText = await e.textContent();
    console.log(`Header Text = ${headerText}`);
    await page.screenshot({path : 'screenshop.png', fullPage : true})
    await page.locator('css=div.main-header').screenshot({path : 'screenshot-element.png'});

});