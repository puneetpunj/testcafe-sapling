import { Selector, t } from 'testcafe';


fixture`Feedback test`
    .page`http://zero.webappsecurity.com/index.html`;


test('Fill the Feedback Form', async t => {
    const feedbackLink = Selector('#feedback');
    await t.click(feedbackLink);

    const feedbackTitle = Selector('#feedback-title');
    await t.expect(feedbackTitle.exists).ok();

    const formName = Selector('#name');
    const formEmail = Selector('#email');
    const formSubject = Selector('#subject');
    const formComments = Selector('#comment');

    const formSubmitButton = Selector('.btn-signin');

    await t.typeText(formName, 'Puneet', { paste: true })
    await t.typeText(formEmail, 'Puneet@gmail.com', { paste: true })
    await t.typeText(formSubject, 'Puneet', { paste: true })
    await t.typeText(formComments, 'Puneet', { paste: true })

    await t.click(formSubmitButton)

    const message = Selector('div');
    await t.expect(message.innerText).contains('Thank you for your comments');
})