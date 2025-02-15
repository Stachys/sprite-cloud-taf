import { Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class Header extends BaseComponent {
    readonly cartButton = this.component.getByTestId('shopping-cart-link');

    constructor(protected readonly page: Page) {
        super(page.getByTestId('primary-header'));
    }

    async openCart(): Promise<void> {
        await this.cartButton.click();
    }
}
