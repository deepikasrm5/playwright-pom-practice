import { test, expect } from '../base';


test.describe('Home Page Tests', () => {
    test('Validate whether homepage title is visible', async ( { homePage } ) => {
        await homePage.validateHomePageTitle();
    });
});

