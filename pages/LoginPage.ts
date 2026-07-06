import { Locator, Page, expect } from "@playwright/test";

export class LoginPage{
    private readonly usernameTextbox: Locator
    private readonly passwordTextbox: Locator
    private readonly loginButton: Locator
    private readonly errorMessage: Locator

    constructor(private page:Page){
        this.usernameTextbox = page.getByRole('textbox',{name:'Username'});
        this.passwordTextbox = page.locator('input[id=password]');
        this.loginButton = page.locator('input[id=login-button]');
        this.errorMessage = page.locator("//h3[@data-test='error']")
    }

    async login(user:string, password:string){
        await this.usernameTextbox.fill(user);
        await this.passwordTextbox.fill(password);
        await this.page.keyboard.press('Enter');
        await this.loginButton.click;
    }

    async checkErrorMessage(){
        expect (await this.errorMessage.innerText()).toEqual("Epic sadface: Sorry, this user has been locked out.");
    }

}