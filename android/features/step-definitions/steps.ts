import { Given, When, Then } from '@wdio/cucumber-framework';
import { scrollIntoView } from '../support/touchActions';

import Login from '../pages/login.page';

Given('User checks if Login screen loaded', async () => {
    await Login.checkIfLoaded()
})

When('User scrolls to the Login button', async () => {
    await scrollIntoView(Login.loginBtn)
})

Then('User clicks the Login button', async () => {
    await (await Login.loginBtn).click()
})