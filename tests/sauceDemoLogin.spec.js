import { Selector, t } from 'testcafe';
import LoginPage from '../page-objects/saucedemo/Login.page';
import ProductsPage from '../page-objects/saucedemo/Products.page';

import { standardUser, lockedOutUser, problemUser, performanceGlitchUser } from '../Roles/userRoles';

fixture(`Sauce Demo Tests`)
    .page(`https://www.saucedemo.com/`)
    .meta('testType', 'sauceDemo');

test('validate user is able to login to sauce demo site', async t => {
    await LoginPage.enterUsernameAndPassword('standard_user', 'secret_sauce')
})

test.only('validate user is able to add items to the cart', async t => {
    // await t.useRole(standardUser);
    // await ProductsPage.clickOnFirstAddToCart();

    // await t.useRole(lockedOutUser);
    await LoginPage.enterUsernameAndPassword('locked_out_user', 'secret_sauce')
    const errorMessage = Selector("h3[data-test='error']")
    await t.expect(errorMessage.innerText).contains('Sorry, this user has been locked out.')

})
