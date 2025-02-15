import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Header } from './components/Header';

export class InventoryPage extends BasePage {
    public readonly header = new Header(this.page);

    constructor(page: Page) {
        super(page, '/inventory.html');
    }

    async addItemToCart(itemName: string): Promise<void> {
        const addToCartButton = this.page.getByTestId(`add-to-cart-sauce-labs-${itemName}`);
        await addToCartButton.click();
    }
}
