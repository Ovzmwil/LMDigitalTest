import { Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly signInButton: Locator;
    readonly userName: Locator;
    readonly password: Locator;
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.signInButton = page.locator('#login-button');
        this.userName = page.locator('#user-name');
        this.password = page.locator('#password');
    }

    async goToLoginPage() {
        await this.page.goto('https://www.saucedemo.com');
    }

    async validLogin(username: string, password: string) {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();
        await this.page.waitForLoadState('networkidle');
    }
}
