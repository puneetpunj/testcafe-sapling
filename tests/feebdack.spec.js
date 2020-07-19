import { Selector, t } from 'testcafe';
import FeedbackPage from '../page-objects/Feedback.page'

const feedbackPage = new FeedbackPage();

fixture`Feedback test`
    .page`http://zero.webappsecurity.com/index.html`;


test.only('Fill the Feedback Form', async t => {
    const feedbackLink = Selector('#feedback');
    await t.click(feedbackLink);

    await t.expect(feedbackPage.feedbackTitle.exists).ok();
    await feedbackPage.fillAndSubmitForm('test', 'test@gmail.com', 'test', 'test');
    await t.expect(feedbackPage.message.innerText).contains('Thank you for your comments');
})