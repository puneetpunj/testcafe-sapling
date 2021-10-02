import { Selector } from 'testcafe'
import { step } from 'testcafe-reporter-allure/dist/utils'

class LoginPage {
  constructor() {
    this.usernameInput = Selector('#user_login')
    this.passwordInput = Selector('#user_password')
    this.submitButton = Selector('.btn-primary')
    this.errorMessage = Selector('.alert-error')
  }

  async enterUsernameAndPassword(t, username, password) {
    await step(
      'Enter username & password and click submit',
      t,
      t
        .typeText(this.usernameInput, username, { paste: true })
        .typeText(this.passwordInput, password, { paste: true })
        .click(this.submitButton)
    )
  }

  async checkErrorMessage(t, errorMessage) {
    await step(
      `check error message is - ${errorMessage}`,
      t,
      t.expect(this.errorMessage.innerText).contains(errorMessage)
    )
  }
}

export default new LoginPage()
