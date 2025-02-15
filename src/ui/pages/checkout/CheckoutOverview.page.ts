import { Page } from '@playwright/test';
import { BasePage } from '../BasePage';

export class CheckoutOverviewPage extends BasePage {
    readonly finishButton = this.page.getByTestId('finish');

    constructor(page: Page) {
        super(page, '/checkout-step-two.html');
    }

    async finishCheckout(): Promise<void> {
        await this.finishButton.click();
    }
}