import { test, expect } from "@playwright/test";

test('basic locator', async ({ page }) =>{
    await page.goto('https://demoqa.com/login');

    const inputUsername = page.locator('id=userName');
    const inputPassword = page.locator('css=input[type=password]');
    const loginbtn = page.locator('id=userForm >> button >> nth=0');
    const loginHeader = page.locator('css=div.main-header');

    await inputUsername.fill('demoqa');
    await inputPassword.fill('Welcome1!');
    await Promise.all([
        page.waitForNavigation(),
        loginbtn.click()
    ]);

    await loginHeader.waitFor();
    const headerText = await loginHeader.textContent();
    console.log(`Header Text = ${headerText}`);

    
});