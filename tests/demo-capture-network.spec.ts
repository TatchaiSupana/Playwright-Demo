import { test, expect } from "@playwright/test";

test("basic network control capture", async ({ page }) => {
  await page.goto("https://demoqa.com/login");
  await page.fill("id=userName", "demoqa");
  await page.fill("css=input[type=password]", "Welcome1!");

  const [response] = await Promise.all([
    // page.waitForRequest(new RegExp('.*/v1/Login*')),
    page.waitForResponse(new RegExp(".*/v1/Login*")),
    page.waitForNavigation(),
    page.click("id=userForm >> button >> nth=0"),
  ]);
  expect(response.status()).toEqual(200);
  console.log(await response.json());

  const e = await page.waitForSelector("css=div.main-header");
  const headerText = await e.textContent();
  console.log(`Header Text = ${headerText}`);
});

test("basic mock network", async ({ page }) => {
  Promise.all([
    page.route(new RegExp(".*/v1/Books.*"), (route) => {
      route.fulfill({
        body: `{
                    "books": [
                      {
                        "isbn": "9781449325862",
                        "title": "Git Pocket Guide",
                        "subTitle": "A Working Introduction",
                        "author": "Richard E. Silverman",
                        "publish_date": "2020-06-04T08:48:39.000Z",
                        "publisher": "O'Reilly Media",
                        "pages": 234,
                        "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp",
                        "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
                      }
                      
                    ]
                  }`,
      });
    }),
    page.goto("https://demoqa.com/books"),
  ]);
  await page.pause();
});
