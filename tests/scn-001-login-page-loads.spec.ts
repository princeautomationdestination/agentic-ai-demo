import { expect, test } from './fixtures/login.fixture';

test.describe('SCN-001: Login Page Loads with Required Controls', () => {
  test('should load login page and show required, interactable controls', async ({ loginPage }) => {
    await test.step('Navigate to login page and wait for render completion', async () => {
      await loginPage.goto();
    });

    await test.step('Validate login page controls are visible and interactable', async () => {
      await loginPage.assertLoginPageLoaded();

      // Extra assertion to ensure the form can receive user input.
      await loginPage.usernameInput.fill('test-user');
      await expect(loginPage.usernameInput).toHaveValue('test-user');
      await loginPage.usernameInput.clear();
    });
  });
});
