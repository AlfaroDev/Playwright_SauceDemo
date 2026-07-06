import { createBdd } from 'playwright-bdd';
import { CartPage } from '../../pages/CartPage';
import { CheckoutInfoPage } from '../../pages/CheckoutInfoPage';
import { CheckoutOverviewPage } from '../../pages/CheckoutOverview';
import { CheckoutCompletePage } from '../../pages/CheckoutCompletePage';

const { When, Then } = createBdd();

When('I proceed to checkout', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.checkout();
});

When('I fill the checkout form with my personal info', async ({ page }) => {
  const checkoutInfoPage = new CheckoutInfoPage(page);
  await checkoutInfoPage.fillInfoForm(
    process.env.firstName,
    process.env.lastName,
    process.env.postalCode
  );
});

When('I finish the order', async ({ page }) => {
  const checkoutOverviewPage = new CheckoutOverviewPage(page);
  await checkoutOverviewPage.finish();
});

Then('the purchase should be completed successfully', async ({ page }) => {
  const checkoutCompletePage = new CheckoutCompletePage(page);
  await checkoutCompletePage.checkFinishedSale();
});