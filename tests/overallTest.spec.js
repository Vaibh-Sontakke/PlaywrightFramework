const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const HomePage = require('../pages/homePage');
const MenuPage = require('../pages/menuPage');

test.describe('Test Suite with Login', () => {
test ('Login Test', async ({page}) => {

    test.setTimeout(120000);

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const loginPage = new LoginPage(page)

    await loginPage.loginToApplication()

    await page.context().storageState({path: "cookiesToken.json"})

  });

  test ('Add to Cart Test', async ({browser}) => {

    const context = await browser.newContext({storageState: "cookiesToken.json"})

    const page = await context.newPage()

    const homePage = new HomePage(page)

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await homePage.addingToCart()

  });

  test ('Menu Test', async ({browser}) => {

    const context = await browser.newContext({storageState: "cookiesToken.json"})

    const page = await context.newPage()

    const menuPage = new MenuPage(page)

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await menuPage.menuButton()

});

})
