import { Selector, t } from 'testcafe';

class LoginPage {

  constructor() {
    this.usernameInput = Selector('#user_login');
    this.passwordInput = Selector('#user_password');
    this.submitButton = Selector('.btn-primary');
    this.errorMessage = Selector('.alert-error');
  }

  async enterUsernameAndPassword(username, password) {
    await t
      .typeText(this.usernameInput, username, { paste: true })
      .typeText(this.passwordInput, password, { paste: true })
      .click(this.submitButton);
  }

  async checkErrorMessage(errorMessage) {
    await t.expect(this.errorMessage.innerText).contains(errorMessage);
  }

}

export default new LoginPage();
