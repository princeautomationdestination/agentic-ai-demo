## SCN-001: Open OrangeHRM login page successfully
Status: Approved
Priority: High
Type: Positive
Preconditions:
- Test environment has internet access.
- OrangeHRM demo URL is reachable.
Steps:
1. Launch a supported browser.
2. Navigate to `https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`.
3. Wait for the login page to load.
Expected Result:
- Login page loads without server/client errors.
- Username and Password input fields are visible.
- Login button is visible and enabled.

## SCN-002: Login with valid credentials and access authenticated area
Status: Pending Clarification
Priority: High
Type: Positive
Preconditions:
- Valid test credentials are available.
- Login page is accessible.
Steps:
1. Open the OrangeHRM login page.
2. Enter a valid username.
3. Enter a valid password.
4. Click the Login button.
Expected Result:
- User is authenticated successfully.
- User is redirected to the expected post-login page.
- A stable post-login element is visible to confirm successful login.

## SCN-003: Verify username and password fields accept user input
Status: Pending
Priority: Medium
Type: Positive
Preconditions:
- Login page is loaded.
Steps:
1. Enter a sample text value in Username field.
2. Enter a sample text value in Password field.
Expected Result:
- Username field displays entered text.
- Password field accepts input and stores entered value.

## SCN-004: Verify password field masks typed characters
Status: Pending
Priority: Medium
Type: Positive
Preconditions:
- Login page is loaded.
Steps:
1. Click on Password field.
2. Type a sample password string.
Expected Result:
- Entered password characters are masked in the UI.

## SCN-005: Login attempt with both username and password empty
Status: Pending Clarification
Priority: High
Type: Negative
Preconditions:
- Login page is loaded.
Steps:
1. Leave Username field blank.
2. Leave Password field blank.
3. Click the Login button.
Expected Result:
- User is not logged in.
- Validation message(s) are displayed for required fields.
- User remains on login page.

## SCN-006: Login attempt with empty username and populated password
Status: Pending Clarification
Priority: High
Type: Negative
Preconditions:
- Login page is loaded.
Steps:
1. Leave Username field blank.
2. Enter any value in Password field.
3. Click the Login button.
Expected Result:
- User is not logged in.
- Validation message is shown for missing username.
- User remains on login page.

## SCN-007: Login attempt with populated username and empty password
Status: Pending Clarification
Priority: High
Type: Negative
Preconditions:
- Login page is loaded.
Steps:
1. Enter any value in Username field.
2. Leave Password field blank.
3. Click the Login button.
Expected Result:
- User is not logged in.
- Validation message is shown for missing password.
- User remains on login page.

## SCN-008: Login attempt with invalid username and valid password
Status: Pending Clarification
Priority: High
Type: Negative
Preconditions:
- A known valid password mapping strategy is defined for this test.
- Login page is loaded.
Steps:
1. Enter an invalid username.
2. Enter password value as per test data strategy.
3. Click the Login button.
Expected Result:
- Authentication fails.
- Error message is displayed for invalid credentials.
- User remains on login page.

## SCN-009: Login attempt with valid username and invalid password
Status: Pending Clarification
Priority: High
Type: Negative
Preconditions:
- A known valid username is available.
- Login page is loaded.
Steps:
1. Enter a valid username.
2. Enter an invalid password.
3. Click the Login button.
Expected Result:
- Authentication fails.
- Error message is displayed for invalid credentials.
- User remains on login page.

## SCN-010: Login attempt with clearly invalid special-character credentials
Status: Pending Clarification
Priority: Medium
Type: Negative
Preconditions:
- Login page is loaded.
Steps:
1. Enter special-character-heavy input in Username (for example, `@@@###`).
2. Enter special-character-heavy input in Password.
3. Click the Login button.
Expected Result:
- Authentication fails.
- Application handles input safely and returns controlled error feedback.
- No crash or unhandled UI error is observed.

## SCN-011: Verify failed login does not create authenticated session
Status: Pending Clarification
Priority: Medium
Type: Negative
Preconditions:
- Login page is loaded.
Steps:
1. Attempt login with invalid credentials.
2. Try to navigate directly to a known authenticated URL path.
Expected Result:
- Access to authenticated area is denied.
- User is redirected back to login page or shown access restriction.

## SCN-012: Verify login form remains usable after failed attempt
Status: Pending
Priority: Medium
Type: Negative
Preconditions:
- Login page is loaded.
Steps:
1. Submit invalid credentials once.
2. Update Username and Password fields with new values.
3. Click Login again.
Expected Result:
- Input fields remain editable after failure.
- Login form continues to accept subsequent attempts without page corruption.
