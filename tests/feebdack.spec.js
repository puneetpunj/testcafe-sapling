import { Selector, t } from 'testcafe';
import FeedbackPage from '../page-objects/Feedback.page'

fixture`Feedback test`
    .page`http://zero.webappsecurity.com/index.html`;


test('Fill the Feedback Form', async t => {
    const feedbackLink = Selector('#feedback');
    await t.click(feedbackLink);

    await t.expect(FeedbackPage.feedbackTitle.exists).ok();
    await FeedbackPage.fillAndSubmitForm('test', 'test@gmail.com', 'test', 'test');
    await t.expect(FeedbackPage.message.innerText).contains('Thank you for your comments');
})