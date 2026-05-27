import { test as base, expect } from '@playwright/test';

const HomePage = require('../pages/home-page');
const LoginPage = require('../pages/login');
const FormPage = require('../pages/form-elements');
const DynamicContentPage = require('../pages/dynamic-content');
const DataTablePage = require('../pages/data-table');
const ModalPage = require('../pages/modals-dialogs');
const MultiStepFormPage = require('../pages/multi-step-form');

const test = base.extend({
    sharedPage: [async ({ browser }, use) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://test-playground-3.preview.emergentagent.com');
        await use(page);
        await context.close();
    }, {scope: 'worker'}],

    homePage: [async ({ sharedPage }, use) => {
        const homePage = new HomePage(sharedPage);
        await homePage.navigate();
        await use(homePage);
    }, {scope: 'worker'}],

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    formPage: async ({ page }, use) => {
        await use(new FormPage(page));
    },

    dynamicContentPage: async ({ page }, use) => {
        await use(new DynamicContentPage(page));
    },

    dataTablePage: async ({ page }, use) => {
        await use(new DataTablePage(page));
    },

    modalPage: async ({ page }, use) => {
        await use(new ModalPage(page));
    },

    multiStepFormPage: async ({ page }, use) => {
        await use(new MultiStepFormPage(page));
    }
});

module.exports = { test, expect };