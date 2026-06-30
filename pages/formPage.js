import { DashboardPage } from "./dashboard";
export class FormPage {
    constructor(page) {
        this.page = page;
        this.dashboard = new DashboardPage(page);

        this.inputLabels = {
            fullName: page.getByText('Full name*'),
            email: page.getByText('Email*'),
            phoneNumber: page.getByText('Phone'),
            dateOfBirth: page.getByText('Date of birth'),
            country: page.getByLabel('Country*'),
            preferredContactMethod: page.getByText('Preferred contact method*'),
            interests: page.getByText('Interests*'),
            bio: page.getByText('Bio'),
            profilePicture: page.getByText('Profile picture')
        };
        this.inputFields = {
            fullName : page.getByRole('textbox', {name: 'Full name'}),
            email : page.getByRole('textbox', { name: 'Email' }),
            phoneNumber: page.getByRole('textbox', { name: 'Phone' }),
            dateOfBirth: page.getByRole('textbox', { name: 'Date of birth' }),
            bio: page.getByRole('textbox', {name: 'Bio'}),
            interest: (option) => { return page.getByRole('checkbox', {name: `${option}`}) },
            preferedContactMethod : (method) => { return page.getByRole('radio', { name: `${method}` }) },
            profilePicture : page.getByRole('button', { name: 'Choose a file to upload' }),
            termsAndConditions : page.locator('#form-terms-checkbox')
        };
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.resetButton = page.getByRole('button', { name: 'Reset' });
        this.validationMessage = (message) => { return page.getByText(message) };
        this.errorToastMessage = page.locator('#toast-error');
        this.successToastMessage = page.locator('#toast-success');
        this.inlineSuccessMessage = page.getByText('Your profile has been saved.');
    }
}