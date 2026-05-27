import { test, expect } from '../base';
import { url, sectionIds, paths} from '../../test_data/constants.json';

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
        await homePage.validateURL(url + paths.homepage);
    });

    test(`Validate whether the logo is visible on the homepage`, async ( { homePage } ) => {
        await homePage.validateLogoVisibility();
    });

    // test(`Validate whether the header remains visible after vertical scrolling`, async ( { homePage } ) => {
    //     await homePage.scrollVertically();
    //     await homePage.validateHeaderVisibilityAfterScroll();
    // });

    test('Validate whether the description text is visible and non-empty', async ( { homePage } ) => {
        await homePage.validateDescriptionText();
    });

    test('Validate whether the homepage contains all 6 section cards', async ( { homePage } ) => {
        await homePage.validateSectionCards();
    });

    test('Validate whether each section has its own section name and description', async ( { homePage } ) => {
        await homePage.validateSectionNamesAndDescriptions();
    });

    test('Validate whether the "Open Test Section" button is visible for each section card', async ( { homePage } ) => {
        await homePage.validateOpenTestSectionButtons();
    });

    test('Validate whether clicking on Login and Authentication section card navigates to the correct URL and returns back to homepage if we click on Back to home', async ( { homePage } ) => {
        await homePage.clickOpenTestSectionButton(sectionIds.login);
        await homePage.validateURL(url + paths.login);
        await homePage.clickBackButton();
        await homePage.validateURL(url + paths.homepage);
    });

    test('Validate whether clicking on Forms section card navigates to the correct URL and returns back to homepage if we click on Back to home', async ( { homePage } ) => {
        await homePage.clickOpenTestSectionButton(sectionIds.forms);
        await homePage.validateURL(url + paths.forms);
        await homePage.clickBackButton();
        await homePage.validateURL(url + paths.homepage);
    });

    test('Validate whether clicking on Multi-step form section card navigates to the correct URL and returns back to homepage if we click on Back to home', async ( { homePage } ) => {
        await homePage.clickOpenTestSectionButton(sectionIds.multiSteps);
        await homePage.validateURL(url + paths.multiSteps);
        await homePage.clickBackButton();
        await homePage.validateURL(url + paths.homepage);
    });

    test('Validate whether clicking on data table section card navigates to the correct URL and returns back to homepage if we click on Back to home', async ( { homePage } ) => {
        await homePage.clickOpenTestSectionButton(sectionIds.dataTable);
        await homePage.validateURL(url + paths.dataTable);
        await homePage.clickBackButton();
        await homePage.validateURL(url + paths.homepage);
    });

    test('Validate whether clicking on Modals and dialogs section card navigates to the correct URL and returns back to homepage if we click on Back to home', async ( { homePage } ) => {
        await homePage.clickOpenTestSectionButton(sectionIds.modals);
        await homePage.validateURL(url + paths.modals);
        await homePage.clickBackButton();
        await homePage.validateURL(url + paths.homepage);
    });

    test('Validate whether clicking on dynamic content section card navigates to the correct URL and returns back to homepage if we click on Back to home', async ( { homePage } ) => {
        await homePage.clickOpenTestSectionButton(sectionIds.dynamicContent);
        await homePage.validateURL(url + paths.dynamicContent);
        await homePage.clickBackButton();
        await homePage.validateURL(url + paths.homepage);
    });

    test('Validate whether the homepage still loads with cookies cleared or in incognito context', async ( { homePage } ) => {
        await homePage.clearCookies();
        await homePage.hardReload();
        await homePage.validateHomePageTitle();
    });
});

