import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $("[formcontrolname='Email']");
    }

    get inputPassword () {
        return $("[formcontrolname='Password']");
    }

    get btnSubmit () {
        return $("button[aria-label='LOGIN']");
    }

    get btnTeams () {
        return $("//span[contains(@class,'nav-link-title ng-star-inserted')and contains(text(), 'Team')]");
    }

    get btnUserAdd () {
        return $("//span[contains(text(),'NUTZER ZUWEISEN')]");
    }

    get inputEmail () {
        return $("[formcontrolname='Email']")
    }

    get inputOrg () {
        return $("input[data-placeholder='Unternehmen']");
    }

    get inputOrgName() {
        return $("span=Halter UK");
    }

    get inputRole() {
        return $("span=Rolle");
    }

    get inputRoleType() {
        return $("span=Projektmanager");
    }

    get createUser() {
        return $("span=Benutzer einladen");
    }

    get clickUser() {
        return $("p=TU PM");
    }

    get logoutButton() {
        return $("span=Abmelden");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {

        await browser.maximizeWindow()
        console.log(await browser.getWindowRect())

        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.waitForClickable();
        await this.btnSubmit.click();
        await browser.pause(20000);

        await this.btnTeams.click();
        await browser.pause(10000);

        await this.btnUserAdd.click();
        await browser.pause(3000);

        await this.inputEmail.setValue("auto2@yopmail.com");
        await browser.pause(3000);

        await this.inputOrg.click();
        await browser.pause(3000);

        await this.inputOrgName.click();
        await browser.pause(2000);

        await this.inputRole.click();
        await browser.pause(3000);

        await this.inputRoleType.click();
        await browser.pause(3000);

        await this.clickUser.click();
        await browser.pause(1500);

        await this.logoutButton.click();
        await browser.pause(10000);

        await browser.browserClose;


    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
