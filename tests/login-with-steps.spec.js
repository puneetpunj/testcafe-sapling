import { Selector, t } from 'testcafe'
import LoginPage from '../page-objects/Login-steps.page'
import Navbar from '../page-objects/Navbar-steps'

fixture`Login Test`.page`http://zero.webappsecurity.com/index.html`

test('User cannot login with invalid credentials', async (t) => {
  await Navbar.clickSignInButton(t)

  await LoginPage.enterUsernameAndPassword(t, 'invalid', 'invalid')
  await LoginPage.checkErrorMessage(t, 'Login and/or password are wrong')
})

test.skip('User can login to application with valid credentials', async (t) => {
  await t.setPageLoadTimeout(50000)

  const signInButton = Selector('#signin_button')
  const loginForm = Selector('#login_form')
  await t.click(signInButton)
  await t.expect(loginForm.exists).ok()

  const usernameInput = Selector('#user_login')
  const passwordInput = Selector('#user_password')
  const submitButton = Selector('.btn-primary')

  await t.typeText(usernameInput, 'username', { paste: true }).typeText(passwordInput, 'password', { paste: true })

  await t.click(submitButton)

  const accountSummary = Selector('#account_summary_tab')
  await t.expect(accountSummary.exists).ok()
  await t.expect(loginForm.exists).notOk()

  const userIcon = Selector('.icon-user')
  await t.click(userIcon)

  const logoutButton = Selector('#logout_link')
  await t.click(logoutButton)

  await t.expect(logoutButton.exists).notOk()
  await t.expect(signInButton.exists).ok()
})
