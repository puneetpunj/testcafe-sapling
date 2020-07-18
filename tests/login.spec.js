import { Selector, t } from 'testcafe';

fixture`Login Test`.page`http://zero.webappsecurity.com/index.html`;

test.only('User cannot login with invalid credentials', async (t) => {

  // navbar.clickSignInButton();
  const signInButton = Selector('#signin_button');
  const loginForm = Selector('#login_form');
  await t.click(signInButton);
  await t.expect(loginForm.exists).ok();


  // loginPage.enterUsernameAndPassword('invalid', 'invalid');
  // loginPage.checkErrorMessage('Login and/or password are wrong');

  const usernameInput = Selector('#user_login');
  const passwordInput = Selector('#user_password');
  const submitButton = Selector('.btn-primary');
  const errorMessage = Selector('.alert-error').innerText;
  await t
    .typeText(usernameInput, 'invalid', { paste: true })
    .typeText(passwordInput, 'invalid', { paste: true })
    .click(submitButton);
  await t.expect(errorMessage).contains('Login and/or password are wrong.');

});


test('User can login to application with valid credentials', async (t) => {

  await t.setPageLoadTimeout(50000)

  const signInButton = Selector('#signin_button');
  const loginForm = Selector('#login_form');
  await t.click(signInButton);
  await t.expect(loginForm.exists).ok();

  const usernameInput = Selector('#user_login');
  const passwordInput = Selector('#user_password');
  const submitButton = Selector('.btn-primary');

  await t
    .typeText(usernameInput, 'username', { paste: true })
    .typeText(passwordInput, 'password', { paste: true });

  await t.click(submitButton);

  const accountSummary = Selector('#account_summary_tab');
  await t.expect(accountSummary.exists).ok();
  await t.expect(loginForm.exists).notOk();

  const userIcon = Selector('.icon-user');
  await t.click(userIcon);

  const logoutButton = Selector('#logout_link');
  await t.click(logoutButton);

  await t.expect(logoutButton.exists).notOk();
  await t.expect(signInButton.exists).ok()

});