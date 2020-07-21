import { Selector, t } from 'testcafe';
import { convertxpathtocss } from '../../lib/helper';

class ProductsPage {

    async clickOnFirstAddToCart() {
        const firstAddToCart = convertxpathtocss("//div[@class='inventory_list']//div[1]//div[3]//button[1]")
        await t.click(firstAddToCart)
    }
}

export default new ProductsPage();
