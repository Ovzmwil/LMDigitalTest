import { test, expect } from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';


test('Login Sauce Demo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const loginPage = new LoginPage(page);

  loginPage.goToLoginPage();
  await loginPage.validLogin('standard_user', 'secret_sauce');
  
  expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');

});