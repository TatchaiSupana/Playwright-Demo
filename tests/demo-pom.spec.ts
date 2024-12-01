import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { ProfilePage } from "../pages/profile-page";

type DemoFixture = {
  loginPage: LoginPage;
  profilePage: ProfilePage;
  name: string;
};

const demoFixtureTest = test.extend<DemoFixture>({
  loginPage: async ({ page }, use) => {
    await page.goto("https://demoqa.com/login");
    const loginpage = new LoginPage(page);
    await use(loginpage);
  },
  profilePage: async ({ page }, use) => {
    const profilePage = new ProfilePage(page);
    await use(profilePage);
  },
  name: async ({}, use) => {
    const name = "Pruk";
    await use(name);
  },
});

demoFixtureTest(
  "demo Fixture login and profile",
  async ({ loginPage, profilePage, name }) => {
    await loginPage.login("demoqa", "Welcome1!");
    await expect(profilePage.usernameLabelLocator).toContainText("demoqa");
    await profilePage.logout();
    await expect(loginPage.loginBtnLocator).toBeVisible();
  }
);

test.only("demo pom login and profile", async ({ page }) => {
  await page.goto("https://demoqa.com/login");
  const loginpage = new LoginPage(page);
  await loginpage.login("demoqa", "Welcome1!");

  const profilePage = new ProfilePage(page);
  await expect(profilePage.usernameLabelLocator).toContainText("demoqa");
  await profilePage.logout();
});
