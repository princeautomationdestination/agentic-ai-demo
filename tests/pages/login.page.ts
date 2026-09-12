import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginHeading: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginHeading = page.getByRole('heading', { name: 'Login' });
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async goto(): Promise<void> {
    await this.page.goto('/web/index.php/auth/login', { waitUntil: 'domcontentloaded' });
    await expect(this.page).toHaveURL(/\/web\/index\.php\/auth\/login$/);
    await expect(this.loginHeading).toBeVisible();
  }

  async assertLoginPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/\/web\/index\.php\/auth\/login$/);
    await expect(this.loginHeading).toBeVisible();
    await expect(this.usernameInput).toBeVisible();
    await expect(this.usernameInput).toBeEditable();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.passwordInput).toBeEditable();
    await expect(this.loginButton).toBeVisible();
    await expect(this.loginButton).toBeEnabled();
  }
}
