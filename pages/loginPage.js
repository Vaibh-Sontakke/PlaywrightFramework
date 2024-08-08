const { Page } = require('@playwright/test');



class LoginPage{

  /**
   * @param {Page} page
   */
    constructor (page){
        this.page = page
        this.username = "Enter Email"
        this.password = "//input[@id='password1']"
        this.loginButton = "button[type='submit']"
    }


    async loginToApplication(){
        await this.page.getByPlaceholder(this.username).fill("admin@email.com")
        await this.page.locator(this.password).fill("admin@123")
        await this.page.locator(this.loginButton).click()
    }

}

module.exports = LoginPage