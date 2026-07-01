import { test } from '../base';
const config = require('../../config/config.json');
const path = require('path');

test.describe('Forms Tests', () => {
    test('[TC-FRM-Add1] Validate whether all input labels are visible on the Forms page', async ({ formPage }) => {
        await formPage.validateInputLabels();
    });

    test('[TC-FRM-Add2] Validate whether all input fields are visible on the Forms page', async ({ formPage }) => {
        await formPage.validateInputFields();
    });

    test('[TC-FRM-Add3] Validate whether Submit and Reset buttons are visible on the Forms page', async ({ formPage }) => {
        await formPage.validateButtons();
    });

    test('[TC-FRM-001] Verify whether the form submits successfully when all required fields are filled with valid data', async ({ formPage }) => {
        await test.step('Fill full name', async () => {
            await formPage.fillFullName('John Doe');
        });

        await test.step('Fill email', async () => {
            await formPage.fillEmail('john.doe@gmail.com');
        });

        await test.step('Select country', async () => {
            await formPage.selectCountry('in');
        });

        await test.step('Select interest', async () => {
            await formPage.selectInterests(['Automation']);
        });

        await test.step('Select preferred contact method', async () => {
            await formPage.selectPreferredContactMethod('Email');
        });

        await test.step('Accept terms and conditions', async () => {
            await formPage.acceptTermsAndConditions();
        });

        await test.step('Click Submit button', async () => {
            await formPage.clickSubmit();
        });

        await test.step('Validate success toast message', async () => {
            await formPage.validateSuccessToastMessage();
        });

        await test.step('Validate inline success message', async () => {
            await formPage.validateInlineSuccessMessage();
        });
    });

    test.only('[TC-FRM-002] Verify whether the form submits successfully when both required and optional fields are filled with valid data', async ({ formPage }) => {
        await test.step('Fill full name', async () => {
            await formPage.fillFullName('Jane Smith');
        });

        await test.step('Fill email', async () => {
            await formPage.fillEmail('jane.smith@gmail.com');
        });

        await test.step('Fill phone number', async () => {
            await formPage.fillPhoneNumber('9012345678');
        });

        await test.step('Fill date of birth', async () => {
            await formPage.fillDateOfBirth('1990-01-01');
        });

        await test.step('Select country', async () => {
            await formPage.selectCountry('in');
        });

        await test.step('Select interest', async () => {
            await formPage.selectInterests(['Performance', 'Security']);
        });

        await test.step('Select preferred contact method', async () => {
            await formPage.selectPreferredContactMethod('SMS');
        });

        await test.step('Fill bio', async () => {
            await formPage.fillBio('This is a sample bio.');
        });

        await test.step('Upload profile picture', async () => {
            await formPage.uploadProfilePicture(path.resolve(__dirname, '../../test_data/images/profile_avatar.jpg'));
        });

        await test.step('Accept terms and conditions', async () => {
            await formPage.acceptTermsAndConditions();
        });

        await test.step('Click Submit button', async () => {
            await formPage.clickSubmit();
        });

        await test.step('Validate success toast message', async () => {
            await formPage.validateSuccessToastMessage();
        });

        await test.step('Validate inline success message', async () => {
            await formPage.validateInlineSuccessMessage();
        });
    });
});
