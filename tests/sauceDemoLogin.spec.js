import { Selector, t } from 'testcafe';

fixture`Login Test`
    .page`https://www.saucedemo.com/`;

test.only('validate user is able to login to sauce demo site', async t => {

    const usernameInput = Selector('#user-name');
    const passwordInput = Selector('#password');
    const submitButton = Selector('#login-button');

    await t
        .typeText(usernameInput, 'standard_user', { paste: true })
        .typeText(passwordInput, 'secret_sauce', { paste: true });

    await t.click(submitButton);

})