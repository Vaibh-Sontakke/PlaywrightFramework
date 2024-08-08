const { Page } = require('@playwright/test');



class HomePage{

  /**
   * @param {Page} page
   */
    constructor (page){
        this.page = page
        this.addToCart = "(//button[contains(text(),'Add to Cart')])[1]"
    }

    async addingToCart(){
        await this.page.locator(this.addToCart).click()
    }



}

module.exports = HomePage