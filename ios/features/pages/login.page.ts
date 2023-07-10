import Page from './page';

class Login extends Page {
    // Messages
    loginBtnMessage = this.message('Log in')

    // Elements
    loginBtn = this.element('xpath',`//XCUIElementTypeButton[@name="${this.loginBtnMessage}"]`);

    // Methods
    public async checkIfLoaded() {
        await expect(this.loginBtn).toBeEnabled()
        await expect(this.loginBtn).toHaveText(this.loginBtnMessage)
    }

    public async logIn() {
        await (await this.loginBtn).click()
    }
}

export default new Login()
