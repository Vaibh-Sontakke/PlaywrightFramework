const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage')

import {loginCredentials} from "../testData/loginCredentials.json"

test ('Add to Cart Test', async ({page}) => {

    const homePage = new HomePage(page)

    await homePage.addingToCart()

})