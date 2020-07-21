import { Selector, t } from 'testcafe';
import { convertxpathtocss } from '../../lib/helper';

class LoginPage {

    constructor() {
        this.usernameInput = Selector('#user-name');
        this.passwordInput = Selector('#password');
        this.submitButton = Selector('#login-button');
    }

    async enterUsernameAndPassword(username, password) {
        await t
            .typeText(this.usernameInput, username, { paste: true })
            .typeText(this.passwordInput, password, { paste: true })
            .click(this.submitButton);
    }

    async clickOnFirstAddToCart() {
        const firstAddToCart = convertxpathtocss("//div[@class='inventory_list']//div[1]//div[3]//button[1]")
        await t.click(firstAddToCart)
    }
}

export default new LoginPage();
