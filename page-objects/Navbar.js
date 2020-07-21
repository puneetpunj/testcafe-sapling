import { Selector, t } from 'testcafe';

class Navbar {
  constructor() {
    this.signInButton = Selector('#signin_button');
    this.loginForm = Selector('#login_form');
  }

  async clickSignInButton() {
    await t.click(this.signInButton);
    await t.expect(this.loginForm.exists).ok();
  }
}

export default new Navbar();
