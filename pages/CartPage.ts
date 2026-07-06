import { Locator, Page } from "@playwright/test";

export class CartPage{
    private readonly checkoutButton: Locator;
    private readonly removeButton: Locator;
    private readonly cartItem: Locator;

    constructor (page:Page){
        this.checkoutButton = page.locator("button[data-test='checkout']");
        this.removeButton = page.locator("//button[contains(.,'Remove')]");
        this.cartItem = page.locator("div.cart_item");
    }

    async checkout(){
        await this.checkoutButton.click();
    }
    
    async removeItem(){
        await this.removeButton.click();
    }

    async getItemCount(){
        return await this.cartItem.count();
    }
}
