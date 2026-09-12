import { test } from '../fixtures/auth.fixture';

test.describe('SCN-001: Valid Login Redirects to Dashboard', () => {
  test('redirects authenticated user to dashboard with authenticated UI visible', async ({
    loginPage,
    dashboardPage,
    credentials
  }) => {
    // Arrange
    await loginPage.goto();
    await loginPage.expectLoaded();

    // Act
    await loginPage.login(credentials.username, credentials.password);

    // Assert
    await dashboardPage.expectLoaded();
  });
});
