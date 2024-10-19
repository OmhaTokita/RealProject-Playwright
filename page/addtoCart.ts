import { expect, Selectors, type Locator, type Page } from '@playwright/test';


export class addtoCart {

    readonly page: Page;
    readonly AddtoCartElements: Locator ; 
    readonly checkAddtoCart: Locator ; 




    constructor (page:Page) {

        this.page = page ;
        var element = this.AddtoCartElements = page.locator ("//button[text()='Add to cart']");
        this.checkAddtoCart = page.locator ("");
        

    }

    async multipleAddtoCart () {

        
    const buttons = await this.AddtoCartElements.all();

    for (const button of buttons) { // Retrieve all matching buttons
        await button.click();
        await this.page.waitForTimeout(500); // Optional delay between clicks
    }
      
      
        
    }
}