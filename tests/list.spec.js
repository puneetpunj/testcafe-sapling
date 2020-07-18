import { Selector, t } from 'testcafe';

import { ClientFunction } from 'testcafe';

fixture`List Test`
    .page('https://js.devexpress.com/');

const getSalesAmount = ClientFunction(() => {
    const grid = document.querySelector('.dx-datagrid-rowsview');
    const rowCount = grid.querySelectorAll('.dx-data-row').length;
    const sales = grid.querySelectorAll('td:nth-child(3)');
    const customers = grid.querySelectorAll('td:nth-child(7)');

    const array = [];

    for (let i = 0; i < rowCount; i++) {
        array.push({
            sales: sales[i].textContent,
            customer: customers[i].textContent
        });
    }
    return array;
});

test('Validate all list values are retrieved succesful', async t => {
    const a = await getSalesAmount();
    await t
        .expect(a).eql([
            { sales: '$6,370', customer: 'Renewable Supplies' },
            { sales: '$4,530', customer: 'Apollo Inc' },
            { sales: '$1,110', customer: 'Johnson & Assoc' },
            { sales: '$6,600', customer: 'Global Services' },
            { sales: '$2,830', customer: 'Health Plus Inc' },
            { sales: '$6,770', customer: 'Gemini Stores' },
            { sales: '$1,460', customer: 'Discovery Systems' }
        ]);
})