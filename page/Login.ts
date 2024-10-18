
import { expect, type Locator, type Page } from '@playwright/test';



 export class PlaywrightProjects {

    readonly page: Page;
    readonly getUserName: Locator;
    readonly getPassword: Locator;
    readonly getButton: Locator;
    readonly tocList: Locator;

    constructor (page: Page) {

        this.page = page;
        this.getUserName = page.locator("//input[@name='user-name']");
        this.getPassword = page.locator("//input[@name='password']");
        this.getButton = page.locator ("//input[@name='login-button']");
        }

    async goTo (){
        await this.page.goto ("https://www.saucedemo.com/");
        await this.page.waitForLoadState ("networkidle");
        
    }

    async loginPageStandard (){

        await this.getUserName.type ("standard_user", {delay:200});
        await this.getPassword.type ("secret_sauce", {delay:200}); 
        await this.getButton.click ();
    }
}