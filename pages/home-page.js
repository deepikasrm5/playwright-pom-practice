import { expect } from '@playwright/test';
class HomePage {
    constructor(page) {
        this.page = page;

        this.homePageTitle = page.getByRole('heading', { name: 'Playwright Test Suite' });
        this.homePageHeader = page.getByText('Comprehensive Test Website')
        this.homePageDescription = page.locator('div.text-center mb-12').locator('p');
        this.sectionCard = (section) => page.getByTestId(`section-${section}`);
        this.openTestSectionButton = (section) => this.sectionCard(section).getByRole('button', { name: 'Open Test Section' });
        this.backButton = page.getByTestId('back-button');
    }

    async navigate() {
        await this.page.goto('https://test-playground-3.preview.emergentagent.com', { waitUntil: 'domcontentloaded', timeout: 10000 });

    }

    async validateHomePageTitle() {
        await expect(this.homePageTitle).toBeVisible({ timeout: 10000 });
    }

    async validateHomePageHeader() {
        await expect(this.homePageHeader).toBeVisible({ timeout: 10000 });
    }

    async hardReload() {
        await this.page.reload({ waitUntil: 'domcontentloaded', timeout:10000, bypassCache: true });
    }

    async validateURL(expectedURL) {
        await expect(this.page).toHaveURL(expectedURL, { timeout: 10000 });
    }
}
module.exports = HomePage;