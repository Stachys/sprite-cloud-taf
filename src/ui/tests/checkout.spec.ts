import { test, expect } from '../../fixtures';
import { InventoryPage } from '../pages/Inventory.page';
import { CartPage } from '../pages/Cart.page';
import { CheckoutInfoPage } from '../pages/checkout/CheckoutInfo.page';
import { CheckoutOverviewPage } from '../pages/checkout/CheckoutOverview.page';
import { CheckoutCompletePage } from '../pages/checkout/CheckoutComplete.page';

test('standard user can checkout several inventory items', async ({ standardUser, baseURL }) => {
    const inventoryPage = new InventoryPage(standardUser);
    await inventoryPage.open();
    await inventoryPage.addItemToCart('backpack');
    await inventoryPage.addItemToCart('bike-light');
    await inventoryPage.addItemToCart('bolt-t-shirt');
    await inventoryPage.header.openCart();

    const cartPage = new CartPage(standardUser);
    await cartPage.checkout();

    const checkoutInfoPage = new CheckoutInfoPage(standardUser);
    await checkoutInfoPage.fillOutCheckoutInfo('John', 'Doe', '12345');
    await checkoutInfoPage.continueCheckout();

    const checkoutOverviewPage = new CheckoutOverviewPage(standardUser);
    await checkoutOverviewPage.finishCheckout();

    const checkoutCompletePage = new CheckoutCompletePage(standardUser);
    await expect(standardUser).toHaveURL(`${baseURL}${checkoutCompletePage.url}`);
    await expect(checkoutCompletePage.completeHeader).toHaveText('Thank you for your order!');
});