import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { FormPage } from "../pages/formPage";
import { baseUrl } from "../config/config.json";
export const test = base.extend({

    loginPage: [async ({ browser }, use) => {

        const context = await browser.newContext({
            storageState: undefined
        });

        const page = await context.newPage();
        const loginPage = new LoginPage(page);

        await use(loginPage);

        await context.close();

    }, { scope: 'worker' }],

    formPage: async ({ page }, use) => {
        const formPage = new FormPage(page);
        await use(formPage);
        await formPage.page.goto(baseUrl);
        await formPage.page.waitForLoadState('domcontentloaded', { timeout: 10000 });
        await formPage.page.waitForSelector('text=Forms', { timeout: 10000 });
    },


    alertsPage: async ({ page }, use) => {
        const alertsPage = new AlertsPage(page);
        await use(alertsPage);
    },

    multiStepFormPage: async ({ page }, use) => {
        const multiStepFormPage = new MultiStepFormPage(page);
        await use(multiStepFormPage);
    },


    tablePage: async ({ page }, use) => {
        const tablePage = new TablePage(page);
        await use(tablePage);
    },

    dynamicDataPage: async ({ page }, use) => {
        const dynamicDataPage = new DynamicDataPage(page);
        await use(dynamicDataPage);
    },

});
export { expect } from '@playwright/test';