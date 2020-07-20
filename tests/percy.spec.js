import { Selector, t } from 'testcafe';

import percySnapshot from '@percy/testcafe'

fixture`Visual Regression test with Percy`
    .page`www.example.com`

test.only('Visual test', async t => {
    await t.wait(1000);
    await percySnapshot(t, 'Example Page');
})