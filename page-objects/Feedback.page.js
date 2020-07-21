import { Selector, t } from 'testcafe';

class FeedbackPage {

    constructor() {
        this.feedbackTitle = Selector('#feedback-title');

        this.formName = Selector('#name');
        this.formEmail = Selector('#email');
        this.formSubject = Selector('#subject');
        this.formComments = Selector('#comment');

        this.formSubmitButton = Selector('input').withAttribute('value', 'Send Message');

        this.message = Selector('div');
    }

    async fillAndSubmitForm(name, email, subject, comments) {
        await t.typeText(this.formName, name, { paste: true })
        await t.typeText(this.formEmail, email, { paste: true })
        await t.typeText(this.formSubject, subject, { paste: true })
        await t.typeText(this.formComments, comments, { paste: true })

        await t.click(this.formSubmitButton)
    }

}

export default new FeedbackPage();