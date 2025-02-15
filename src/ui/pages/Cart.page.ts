import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
    constructor(page: Page) {
        super(page, '/cart.html');
    }

    async removeItemFromCart(itemName: string): Promise<void> {
        const removeButton = this.page.getByTestId(`remove-sauce-labs-${itemName}`);
        await removeButton.click();
    }

    async checkout() {
        const checkoutButton = this.page.getByTestId('checkout');
        await checkoutButton.click();
    }
}