const { test } = require('@playwright/test');
import {page} from '@playwright/test'


class loginPage {

    constructor (page){
        this.page = page
    }


    async navigateToBaseURL(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }

    async username(){
        await this.page.
    }

}