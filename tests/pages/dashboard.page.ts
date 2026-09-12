import { type Locator, type Page, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly dashboardHeading: Locator;
  readonly adminLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
    this.adminLink = page.getByRole('link', { name: 'Admin' });
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/\/dashboard\/index/);
    await expect(this.dashboardHeading).toBeVisible();
    await expect(this.adminLink).toBeVisible();
  }
}
