import { Locator, Page } from "@playwright/test";

export class CheckoutInfoPage{
    private readonly firstNameTextbox: Locator;
    private readonly lastNameTextbox: Locator;
    private readonly postalCodeTextbox: Locator; 
    private readonly continueButton: Locator; 

    constructor(page:Page){
        this.firstNameTextbox = page.getByRole('textbox',{name:'First Name'});
        this.lastNameTextbox = page.getByRole('textbox',{name:'Last Name'});
        this.postalCodeTextbox = page.getByRole('textbox',{name:'Zip/Postal Code'});
        this.continueButton = page.locator("input#continue");
    }

    async fillInfoForm(firstName:string, lastName:string, postalCode:string){
        await this.firstNameTextbox.fill(firstName);
        await this.lastNameTextbox.fill(lastName);
        await this.postalCodeTextbox.fill(postalCode);
        await this.continueButton.click();
    }

}