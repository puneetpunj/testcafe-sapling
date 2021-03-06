import { Role, Selector } from 'testcafe';

const standardUser = Role('https://www.saucedemo.com/', async t => {
    await t
        .typeText('#user-name', 'standard_user')
        .typeText('#password', 'secret_sauce')
        .click('#login-button');
}, { preserveUrl: true });

const lockedOutUser = Role('https://www.saucedemo.com/', async t => {
    await t
        .typeText('#user-name', 'locked_out_user')
        .typeText('#password', 'secret_sauce')
        .click('#login-button');

    const errorMessage = Selector("h3[data-test='error']")
    await t.expect(errorMessage.innerText).contains('Sorry, this user has been locked out.')

}, { preserveUrl: true });

const problemUser = Role('https://www.saucedemo.com/', async t => {
    await t
        .typeText('#user-name', 'problem_user')
        .typeText('#password', 'secret_sauce')
        .click('#login-button');
}, { preserveUrl: true });

const performanceGlitchUser = Role('https://www.saucedemo.com/', async t => {
    await t
        .typeText('#user-name', 'performance_glitch_user')
        .typeText('#password', 'secret_sauce')
        .click('#login-button');
}, { preserveUrl: true });

module.exports = { standardUser, lockedOutUser, problemUser, performanceGlitchUser }