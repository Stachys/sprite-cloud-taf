import { Page } from '@playwright/test';
import { Header } from './components/header';

export abstract class BasePage {
    constructor(protected readonly page: Page, readonly url: string) {}

    async open() {
        await this.page.goto(this.url);
    }
}
