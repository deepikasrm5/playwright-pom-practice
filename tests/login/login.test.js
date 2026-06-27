import { test } from '../base';
const config = require('../../config/config.json');

test.describe('Login Tests', () => {

    test('Login with valid credentials', async ({ loginPage }) => {
        await loginPage.navigate(config.baseUrl);
        await loginPage.login(config.valid.username, config.valid.password);
        await loginPage.page.waitForURL('**/dashboard', { timeout: 10000 });
    });
});