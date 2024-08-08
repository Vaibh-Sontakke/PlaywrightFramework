const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage')

import {loginCredentials} from "../testData/loginCredentials.json"

test ('Login Test', async ({page}) => {

    test.setTimeout(120000);

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const loginPage = new LoginPage(page)

    await loginPage.loginToApplication()

})