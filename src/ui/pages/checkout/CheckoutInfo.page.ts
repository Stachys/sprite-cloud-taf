import { Page } from '@playwright/test';
import { BasePage } from '../BasePage';

export class CheckoutInfoPage extends BasePage {
    readonly firstNameInput = this.page.getByTestId('firstName');
    readonly lastNameInput = this.page.getByTestId('lastName');
    readonly postalCodeInput = this.page.getByTestId('postalCode');
    readonly continueButton = this.page.getByTestId('continue');

    constructor(page: Page) {
        super(page, '/checkout-step-one.html');
    }

    async fillOutCheckoutInfo(firstName: string, lastName: string, postalCode: string): Promise<void> {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async continueCheckout(): Promise<void> {
        await this.continueButton.click();
    }
}