export class HomePage {
    constructor(page) {
        this.page = page;

        this.homePageTitle = page.getByRole('heading', { name: 'Playwright Test Suite' });
        this.homePageDescription = page.locator('div.text-center mb-12').locator('p');
        this.sectionCard = (section) => page.getByTestId(`section-${section}`);
        this.openTestSectionButton = (section) => this.sectionCard(section).getByRole('button', { name: 'Open Test Section' });
        this.backButton = page.getByTestId('back-button');
    }
}