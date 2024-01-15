import { $ } from '@wdio/globals'
import Page from './page.js';
import locators from "./locators.js";
import path from 'path';
import { fileURLToPath } from 'url';

describe('Creating a new testcase with before & after', async () => {

    before('login', async () => {
        await locators.loginpage2.inputUsername.setValue(username);
        await locators.loginpage2.inputPassword.setValue(password);
 
        await browser.pause(2000);
 
        await locators.loginpage2.btnSubmit.waitForClickable();
        await locators.loginpage2.btnSubmit.click();
        await browser.pause(10000);   
    })

    it('Add new user', async () => {
    })

    it('Add organization image', async () => {
    })

    after('logout', async () => {

    })

})





export default new newsetup();