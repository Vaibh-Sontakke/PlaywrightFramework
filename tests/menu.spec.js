const { test, expect } = require('@playwright/test');
const MenuPage = require('../pages/menuPage')

import {loginCredentials} from "../testData/loginCredentials.json"

test ('Menu Test', async ({page}) => {

    const menuPage = new MenuPage(page)

    await menuPage.menuButton()

})