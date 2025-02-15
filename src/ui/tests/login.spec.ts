import { test, expect } from '../../fixtures';
import { LoginPage } from '../pages/Login.page';
import { InventoryPage } from '../pages/Inventory.page';

test('standard user can login', async ({ page, baseURL }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');

    const inventoryPage = new InventoryPage(page);
    await expect(inventoryPage.header.component).toBeVisible();
    await expect(page).toHaveURL(`${baseURL}${inventoryPage.url}`); 
});

test('locked out user cannot login', async ({ page, baseURL }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('locked_out_user', 'secret_sauce');

    await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out.');
    await expect(page).toHaveURL(`${baseURL}${loginPage.url}`); 
});