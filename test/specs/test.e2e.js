import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await browser.maximizeWindow();
        await LoginPage.login('tupm@yopmail.com', 'CLMAdmin2024')
       //await expect(SecurePage.flashAlert).toBeExisting()
       // await expect(SecurePage.flashAlert).toHaveTextContaining()
    })
})

