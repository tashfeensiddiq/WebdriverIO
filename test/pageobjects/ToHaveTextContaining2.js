import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
export default class ToHaveTextContaining2 {
    /**
     * define selectors using getter methods
     */

    get ToastMessage () {
        return $("p=1 Einladung wurde gesendet");
    }

    async Toast ()  {
        const elem = await $("p=1 Einladung wurde gesendet")
        await elem.waitUntil(async function () {
            return (await this.getText()) === '1 Einladung wurde gesendet'
        }, {
            timeout: 10000,
            timeoutMsg: 'expected text to be different after 5s'
        })
    }
    
}

