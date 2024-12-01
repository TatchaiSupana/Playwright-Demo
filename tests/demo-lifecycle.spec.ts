import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }, testInfo) => {
    await page.goto('https://demoqa.com/login');
    await page.fill('id=userName','demoqa');
    await page.fill('css=input[type=password]','Welcome1!');
    await page.click('id=userForm >> button >> nth=0');
    await page.waitForNavigation();
    const e = await page.waitForSelector('css=div.main-header');
    const headerText = await e.textContent();
    console.log(`Header Text = ${headerText}`);
    await page.click('text=Delete All Books');
    await page.click('id=closeSmallModal-ok');
    await page.waitForSelector('id=closeSmallModal-ok',{state : 'hidden'});
  });

test('User verify empty book collection', async ({ page }) =>{
    
    await page.waitForSelector('text =No rows found');
});

test('User verify add new book collection', async ({ page }) =>{
     await (await page.waitForSelector('text=Book Store API')).scrollIntoViewIfNeeded;

    await Promise.all([
        page.waitForNavigation(),
        page.click('id=gotoStore')
    ]);
    
    await Promise.all([
        page.waitForNavigation(),
        page.click('id=see-book-Git Pocket Guide')
    ]);
    
    await page.click('id=addNewRecordButton >> nth=1');
    await page.click('text=Profile');

    await page.waitForSelector('text=Delete All Books');
    await page.waitForSelector('text=Git Pocket Guide');
    await page.waitForSelector('text=Richard E. Silverman');
    await page.waitForSelector('text=O\'Reilly Media');
});