import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('//*[@id="mat-dialog-0"]/app-site-notice/div/div[2]/button[1]');
    }
}

export default new SecurePage();
