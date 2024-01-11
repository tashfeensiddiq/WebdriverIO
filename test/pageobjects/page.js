import { browser } from '@wdio/globals'
import environment from '../../environment.js'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async open (path) {
       // console.log(environment[process.env.ENV]),
        await browser.url(environment[process.env.ENV])
        
    }
}
