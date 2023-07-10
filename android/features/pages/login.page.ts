import Page from './page';

class Login extends Page {
    // Elements
    loginBtn = this.element('id','bt_sign_in')

    // Messages
    loginBtnMessage = this.message('Log in')

    // Methods

    public async checkIfLoaded() {
        await expect(this.loginBtn).toBeEnabled()
        await expect(this.loginBtn).toHaveText(this.loginBtnMessage)
    }

    public async logIn() {
        await (await this.loginBtn).click()
    }
}

export default new Login();