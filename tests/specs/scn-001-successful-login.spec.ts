import { expect, test } from '../fixtures/auth.fixture';

test.describe('SCN-001 Successful UI login with valid credentials', () => {
  test('authenticates user and lands on dashboard', async ({ loginPage, dashboardPage, credentials }) => {
    await loginPage.goto();
    await loginPage.login(credentials.username, credentials.password);

    await dashboardPage.expectLoaded();
    await expect(dashboardPage.heading).toContainText('Dashboard');
  });
});
