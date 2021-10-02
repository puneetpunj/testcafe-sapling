import { Selector } from 'testcafe'
import { step } from 'testcafe-reporter-allure/dist/utils'

class Navbar {
  constructor() {
    this.signInButton = Selector('#signin_button')
    this.loginForm = Selector('#login_form')
  }

  async clickSignInButton(t) {
    await step('Click Sign In Button', t, t.click(this.signInButton))
    await step('Validate user is on Login Page', t, t.expect(this.loginForm.exists).ok())
  }
}

export default new Navbar()
