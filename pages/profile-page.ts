import { Locator, Page } from "@playwright/test";

export class ProfilePage{

    readonly page:Page;
    readonly usernameLabelLocator: Locator;
    readonly logoutBtnLocator : Locator;

    constructor(page : Page){
        this.page = page;
        this.usernameLabelLocator = this.page.locator('id=userName-value');
        this.logoutBtnLocator = this.page.locator('id=submit >> nth=0');
    }

    async logout(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.logoutBtnLocator.click()
        ])
    }
}