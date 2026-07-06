import { Locator, Page } from "@playwright/test";

export class CheckoutOverviewPage{
    private readonly finishButton: Locator;

    constructor (page:Page){
        this.finishButton = page.locator("button#finish");
    }

    async finish(){
        await this.finishButton.click();
    }
}