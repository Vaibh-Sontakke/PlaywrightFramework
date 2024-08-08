const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const MenuPage = require('../pages/menuPage');

test.describe('Test Suite with Login', () => {


  test ('Add to Cart Test', async ({page}) => {

    const homePage = new HomePage(page)

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await homePage.addingToCart()

  });

  test ('Menu Test', async ({page}) => {

    const menuPage = new MenuPage(page)

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await menuPage.menuButton()

});

})
