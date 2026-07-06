import { Locator, Page, expect } from "@playwright/test";

export class CheckoutCompletePage{
    private readonly finishedSaleMessage: Locator;

    constructor (page:Page){
        this.finishedSaleMessage = page.getByRole('heading',{name: 'Thank you for your order!'});
    }

    async checkFinishedSale(){
        await expect (this.finishedSaleMessage).toBeVisible();
    }
}