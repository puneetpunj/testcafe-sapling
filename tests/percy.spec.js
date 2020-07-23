import { Selector, t } from 'testcafe';

import percySnapshot from '@percy/testcafe'

fixture(`Visual Regression test with Percy`)
    .meta('testType', 'visual')
    .page(`www.example.com`)

test.skip('Visual test', async t => {
    await t.wait(1000);
    await percySnapshot(t, 'Example Page');
})