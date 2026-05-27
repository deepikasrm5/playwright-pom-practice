import { test, expect } from '../base';

test.describe.configure({ mode: 'serial' });
test.describe('Home Page Tests', () => {
    test('Validate whether homepage header is visible', async ( { homePage } ) => {
        await homePage.validateHomePageHeader();
    });

    test('Validate whether homepage title is visible', async ( { homePage } ) => {
        await homePage.validateHomePageTitle();
    });

    test('Verify whether the home page loads correctly on hard refresh (F5 / reload)', async ( { homePage } ) => {
        await homePage.hardReload();
        await homePage.validateURL('https://test-playground-3.preview.emergentagent.com/');
    });
});

