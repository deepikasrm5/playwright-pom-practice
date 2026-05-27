import { expect } from '@playwright/test';
class HomePage {
    constructor(page) {
        this.page = page;

        this.homePageTitle = page.getByRole('heading', { name: 'Playwright Test Suite' });
        this.homePageHeader = page.getByText('Comprehensive Test Website')
        this.homePageDescription = page.locator('#page-description');
        this.sectionCards = page.locator('.section-cards');
        this.sectionCard = (section) => this.sectionCards.getByTestId(`section-${section}`);
        this.openTestSectionButton = (section) => this.sectionCard(section).getByRole('button', { name: 'Open Test Section' });
        this.backButton = page.getByTestId('back-button');
        this.logo = page.getByRole('banner').locator('#header-logo');
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

    async validateLogoVisibility() {
        await expect(this.logo).toBeVisible({ timeout: 10000 });
    }

    async validateDescriptionText() {
        await expect(this.homePageDescription).toBeVisible({ timeout: 10000 });
        await expect(this.homePageDescription).not.toBeEmpty();
    }
}
module.exports = HomePage;