import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    readonly usernameInput = this.page.getByTestId('username');
    readonly passwordInput = this.page.getByTestId('password');
    readonly loginButton = this.page.getByTestId('login-button');
    readonly errorMessage = this.page.getByTestId('error');

    constructor(page: Page) {
        super(page, '/');
    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}