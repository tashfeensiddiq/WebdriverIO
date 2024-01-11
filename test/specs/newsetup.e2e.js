import { $ } from '@wdio/globals'
import Page from './page.js';
import locators from "./locators.js";
import path from 'path';
import { fileURLToPath } from 'url';

describe('Creating a new testcase with before & after', async () => {

    before('login', async () => {

    })

    it('Add new user', async () => {
    })

    it('Add organization image', async () => {
    })

    after('logout', async () => {

    })

})
