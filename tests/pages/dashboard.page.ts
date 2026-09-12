import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardPage {
  readonly heading: Locator;
  readonly sidePanel: Locator;

  constructor(private readonly page: Page) {
    this.heading = this.page.getByRole('heading', { name: 'Dashboard' });
    this.sidePanel = this.page.getByRole('navigation', { name: 'Sidepanel' });
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/\/web\/index\.php\/dashboard\/index/);
    await expect(this.heading).toBeVisible();
    await expect(this.sidePanel.getByRole('link', { name: 'Admin' })).toBeVisible();
  }
}
