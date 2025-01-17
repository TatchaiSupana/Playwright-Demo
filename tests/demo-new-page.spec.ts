import { test } from "@playwright/test";

test('demo new page', async ({ page , context}) =>{
    await page.goto('https://demoqa.com/browser-windows');
    const [ newPage ] = await Promise.all([
        context.waitForEvent('page'),
        page.click('id=tabButton')
    ]); 
    
    await newPage.waitForLoadState();
    const text = await newPage.textContent('id=sampleHeading');
    console.log(text);

});

test('demo new page 01', async ({ page , context}) =>{
    await page.goto('https://demoqa.com/browser-windows');
    const pagePromise = context.waitForEvent('page');
    await page.click('id=tabButton')
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    const text = await newPage.textContent('id=sampleHeading')
    console.log(text);

});
 
