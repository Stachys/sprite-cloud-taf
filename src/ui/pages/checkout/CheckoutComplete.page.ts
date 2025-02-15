import { Page } from '@playwright/test';
import { BasePage } from '../BasePage';

export class CheckoutCompletePage extends BasePage {
    readonly completeHeader = this.page.getByTestId('complete-header');

    constructor(page: Page) {
        super(page, '/checkout-complete.html');
    }
}