const { chromium, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');



module.exports = async config => {

    const browser = await chromium.launch({headless: false})

    const page = await browser.newPage()

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const loginPage = new LoginPage(page)

    await loginPage.loginToApplication()

    await page.context().storageState({path: "token.json"})

  }
  