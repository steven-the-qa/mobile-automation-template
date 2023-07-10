import { Given, When, Then } from '@wdio/cucumber-framework';
import { dismiss_native_alerts, scrollIntoView } from '../support/touchActions';

import Login from '../pages/login.page';

Given('User dismisses an alert message on launch', async () => {
    await dismiss_native_alerts()
})

Given('User checks if Login screen loaded', async () => {
    await Login.checkIfLoaded()
})

When('User scrolls to the Login button', async () => {
    await scrollIntoView(Login.loginBtn)
})

Then('User clicks the Login button', async () => {
    await (await Login.loginBtn).click()
})