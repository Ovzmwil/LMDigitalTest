import { type Page, type Locator } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;
    readonly products: Locator;
    readonly cartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.products = page.locator('.card-body');
        this.cartButton = page.locator('[routerlink="/dashboard/cart"]')

    }
}