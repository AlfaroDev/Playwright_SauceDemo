import { Locator, Page } from "@playwright/test";

export class InventoryPage{
    private readonly titles: Locator;
    private readonly prices: Locator;
    private readonly items: Locator;
    private readonly filterDropdown: Locator;
    
    constructor(private page:Page){
        this.titles = page.locator('//div[@class=\'inventory_item\']//div[@class=\'inventory_item_label\']/a');
        this.items = page.locator('//div[@class=\'inventory_item\']');
        this.filterDropdown = page.locator('[data-test="product-sort-container"]');
        this.prices = page.locator('[data-test="inventory-item-price"]');
    }

    async getItemsNames(){
        const titlesText = await this.titles.allInnerTexts();
        console.log('Número de titulos: ', titlesText.length);
        let count = 1;
        for (let title of titlesText){
            console.log('Titulo ', count, ' : ', title);
            count = count + 1;
        }
        return titlesText;
    }

    async getItemsPrices(){
        const rawPrices = await this.prices.allTextContents();
        return rawPrices.map(p => parseFloat(p.replace('$', '')));
    }

    async randomItemSelector(){
        const itemsObjects = await this.items.all();
        const randomIndex = Math.floor(Math.random() * itemsObjects.length);
        return itemsObjects[randomIndex];
    }

    async extractItemInfo(randomItem: Locator){
        await randomItem.locator('.inventory_item_name').innerText();
        await randomItem.locator('.inventory_item_desc').innerText();
        await randomItem.locator('.inventory_item_price').innerText();
        return [await randomItem.locator('.inventory_item_name').innerText(), 
            await randomItem.locator('.inventory_item_desc').innerText(), 
            await randomItem.locator('.inventory_item_price').innerText()];
    }

    async selectItem(randomItem: Locator){
        await randomItem.locator('a:has(.inventory_item_name)').click();
    }

    async selectFilter(option: 'az' | 'za' | 'lohi' | 'hilo') {
        await this.filterDropdown.selectOption(option);
    }

}