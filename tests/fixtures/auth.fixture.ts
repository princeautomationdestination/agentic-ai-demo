import { test as base, expect } from '@playwright/test';

import { DashboardPage } from '../pages/dashboard.page';
import { LoginPage } from '../pages/login.page';

type AuthFixture = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  credentials: {
    username: string;
    password: string;
  };
};

export const test = base.extend<AuthFixture>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  credentials: async ({}, use) => {
    const username = process.env.ORANGEHRM_USERNAME;
    const password = process.env.ORANGEHRM_PASSWORD;

    if (!username || !password) {
      throw new Error(
        'Set ORANGEHRM_USERNAME and ORANGEHRM_PASSWORD environment variables before running SCN-001.'
      );
    }

    await use({ username, password });
  }
});

export { expect };
