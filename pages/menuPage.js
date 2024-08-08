const { Page } = require('@playwright/test');



class MenuPage{

  /**
   * @param {Page} page
   */
    constructor (page){
        this.page = page
        this.menu = "//img[@alt='menu']"
    }

    async menuButton(){
        await this.page.locator(this.menu).click()
    }



}

module.exports = MenuPage