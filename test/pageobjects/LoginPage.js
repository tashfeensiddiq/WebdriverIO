import { $ } from '@wdio/globals'
import Page from './page.js';
import locators from "./locators.js";
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    

    

    get btnUserAdd () {return $("//span[contains(text(),'NUTZER ZUWEISEN')]");}

    get inputEmail () {return $("[formcontrolname='Email']")}

    get inputOrg () {return $("input[data-placeholder='Unternehmen']");}

    get inputOrgName() {return $("span=Halter UK");}

    get inputRole() {return $("span=Rolle");}

    get inputRoleType() {return $("span=Projektmanager");}

    get createUser() {return $("span=Benutzer einladen");}

    get clickUser() {return $("p=TU PM");}

    get logoutButton() {return $("span=Abmelden");}

    get ToastMessage () {return $("p=1 Einladung wurde gesendet");}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {

       // await browser.maximizeWindow()
       // console.log(await browser.getWindowRect())


       await locators.loginpage2.inputUsername.setValue(username);
       await locators.loginpage2.inputPassword.setValue(password);

       await browser.pause(2000);

       await locators.loginpage2.btnSubmit.waitForClickable();
       await locators.loginpage2.btnSubmit.click();
       await browser.pause(10000);

        await locators.module.btnTeams.click();
        await browser.pause(10000);

        await locators.teams.btnOrgAdd.click();
        await browser.pause(3000);

        await locators.assignorg.OrgLogoAdd.click();
        await browser.pause(2000);

      

        //await locators.assignorg.OrgLogoAddModal.click();

   

        const filePath = '../data/files/logo1.png'
        const element = await locators.assignorg.OrgLogoAddModal;

        let isExisting = await element.isExisting();
        console.log(isExisting);

        await this.fileUpload(filePath, element)
        await locators.assignorg.OrgLogoAddModalSave.click();

    



        /*

        await this.btnUserAdd.click();
        await browser.pause(3000);

        await this.inputEmail.setValue("auto6@yopmail.com");
        await browser.pause(3000);

        await this.inputOrg.click();
        await browser.pause(3000);

        await this.inputOrgName.click();
        await browser.pause(2000);

        await this.inputRole.click();
        await browser.pause(3000);

        await this.inputRoleType.click();
        await browser.pause(3000);

        await this.createUser.click();

        this.Toast();
        await expect(await this.ToastMessage).toHaveTextContaining('1 Einladung wurde gesendet')

        await this.clickUser.click();
        await browser.pause(1500);

        await this.logoutButton.click();
        await browser.pause(10000);

        await browser.browserClose;
*/

    }

    async fileUpload(url, upload_file_element) {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const filePath = path.join(__dirname, url);
    
        // const upload_file_element = await locator;
        // await upload_file_element.scrollIntoView({ block: 'end' });
        await browser.execute(async (e) => {
          e.style.display = 'block';
        }, upload_file_element);
    
        //await upload_file_element.waitForDisplayed();
        await browser.pause(3000);
        await browser.debug();
        await upload_file_element.setValue(filePath);
        await browser.pause(3000);
      }

    /*

    async Toast ()  {
        const elem = await $("p=1 Einladung wurde gesendet")
        await elem.waitUntil(async function () {
            return (await this.getText()) === '1 Einladung wurde gesendet'
        }, {
            timeout: 10000,
            timeoutMsg: 'expected text to be different after 5s'
        })
    }
    */

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
