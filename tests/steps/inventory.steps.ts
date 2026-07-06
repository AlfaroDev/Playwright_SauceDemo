import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { InventoryPage } from '../../pages/InventoryPage';
import { ItemPage } from '../../pages/ItemPage';

const { Given, When, Then } = createBdd();

let randomItem: any;
let randomItemInfo: any[];

Given('I am logged in with valid credentials', async ({ page }) => {
  await page.goto(process.env.baseURL);
  const loginPage = new (await import('../../pages/LoginPage')).LoginPage(page);
  await loginPage.login(process.env.user, process.env.password);
});

When('I select a random item from the inventory', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.getItemsNames();
  randomItem = await inventoryPage.randomItemSelector();
  randomItemInfo = await inventoryPage.extractItemInfo(randomItem);
  await inventoryPage.selectItem(randomItem);
});

Then('the item detail page should match the inventory info', async ({ page }) => {
  const itemPage = new ItemPage(page);
  itemPage.checkInfoMatching(randomItemInfo[0], randomItemInfo[1], randomItemInfo[2]);
});

When('I filter the inventory by {string}', async ({ page }, filter: string) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.selectFilter(filter as 'az' | 'za' | 'lohi' | 'hilo');
});

Then('the items should be sorted alphabetically A to Z', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  const names = await inventoryPage.getItemsNames();
  expect(names).toEqual([...names].sort());
});

Then('the items should be sorted alphabetically Z to A', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  const names = await inventoryPage.getItemsNames();
  expect(names).toEqual([...names].sort().reverse());
});

Then('the items should be sorted by price low to high', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  const prices = await inventoryPage.getItemsPrices();
  expect(prices).toEqual([...prices].sort((a, b) => a - b));
});

Then('the items should be sorted by price high to low', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  const prices = await inventoryPage.getItemsPrices();
  expect(prices).toEqual([...prices].sort((a, b) => b - a));
});