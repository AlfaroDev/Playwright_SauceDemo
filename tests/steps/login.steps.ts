import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../../pages/LoginPage';

const { Given, When, Then } = createBdd();

Given('I am on the login page', async ({ page }) => {
  await page.goto('/');
});

When('I login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(process.env.user, process.env.password);
});

When('I login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(process.env.failedUser, process.env.failedPassword);
});

Then('I should see a login error message', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.checkErrorMessage();
});