import { test as base } from '@playwright/test';
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
    await use({
      username: process.env.ORANGEHRM_USERNAME ?? 'Admin',
      password: process.env.ORANGEHRM_PASSWORD ?? 'admin123',
    });
  },
});

export { expect } from '@playwright/test';
