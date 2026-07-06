import { expect, Locator, Page } from "@playwright/test";

export class ItemPage{

    private readonly actualNameText: Locator;
    private readonly actualDescriptionText: Locator;
    private readonly actualPrice: Locator;
    private readonly addToCartButton:Locator;
    private readonly goToCartButton: Locator;

    constructor (page:Page){
        this.actualNameText = page.locator('//div[@data-test=\'inventory-item-name\']');
        this.actualDescriptionText = page.locator('//div[@data-test=\'inventory-item-desc\']');
        this.actualPrice = page.locator('//div[@data-test=\'inventory-item-price\']');
        this.addToCartButton = page.locator("//button[@data-test='add-to-cart']");
        this.goToCartButton = page.locator("a.shopping_cart_link");
    }

    async checkInfoMatching(expectedTitle:string, expectedDescription:string, expectedPrice:string){
        expect(this.addToCartButton).toBeVisible();

        const actualName = await this.actualNameText.innerText();
        const actualDescription = await this.actualDescriptionText.innerText();
        const actualPrice = await this.actualPrice.innerText();

        expect(expectedTitle).toEqual(actualName);
        expect(expectedDescription).toEqual(actualDescription);
        expect(expectedPrice).toEqual(actualPrice);

        console.log(`Validados Titulo ${actualName}, Descripción ${actualDescription}, Precio ${actualPrice}`);
    }

    async addItemToCart(){
        await this.addToCartButton.click();
    }

    async goToCart(){
        await this.goToCartButton.click();
    }
}