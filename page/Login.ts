
import { expect, type Locator, type Page } from '@playwright/test';


 export class PlaywrightProjects {

    readonly page: Page;
    readonly getUserName: Locator;
    readonly getPassword: Locator;
    readonly getButton: Locator;
    readonly homeTextValidation: Locator;

    constructor (page: Page) {

        this.page = page;
        this.getUserName = page.locator("//input[@name='user-name']");
        this.getPassword = page.locator("//input[@name='password']");
        this.getButton = page.locator ("//input[@name='login-button']");
        this.homeTextValidation = page.locator ("//span[text()='Products']")

        }

    async goTo (){
        await this.page.goto ("https://www.saucedemo.com/");
        
    }

    async loginPageStandard (){

        await this.page.waitForLoadState ("networkidle");
        await this.getUserName.type ("standard_user", {delay:200});
        await this.getPassword.type ("secret_sauce", {delay:200}); 
        await this.getButton.click ();
    }
/*
    async loginValidation (){ 

    let output: string = "Product";
       let validation =  await this.homeTextValidation.textContent ();
       
        if (validation === output) {
            return "match"
    
        }else {
            return "Not Match"
        }
        console.log(validation);

        
    } */
}