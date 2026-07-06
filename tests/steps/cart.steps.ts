import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { ItemPage } from '../../pages/ItemPage';
import { CartPage } from '../../pages/CartPage';

const { When, Then } = createBdd();

When('I add the item to the cart', async ({ page }) => {
  const itemPage = new ItemPage(page);
  await itemPage.addItemToCart();
});

When('I go to the cart', async ({ page }) => {
  const itemPage = new ItemPage(page);
  await itemPage.goToCart();
});

When('I remove the item from the cart', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.removeItem();
});

Then('the cart should be empty', async ({ page }) => {
  const cartPage = new CartPage(page);
  expect(await cartPage.getItemCount()).toEqual(0);
});