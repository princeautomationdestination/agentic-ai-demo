# OrangeHRM Login Manual Test Scenarios

Source story: `US-HRM-001` (Automate Login Flow for OrangeHRM)

## Scenario List

| Scenario ID | Title | Category |
|---|---|---|
| SCN-001 | Valid Login Redirects to Dashboard | Positive |
| SCN-002 | Invalid Password Shows Error | Negative |
| SCN-003 | Invalid Username Shows Error | Negative |
| SCN-004 | Blank Username and Password Show Required Validation | Validation |
| SCN-005 | Blank Password Shows Required Validation | Validation |
| SCN-006 | Blank Username Shows Required Validation | Validation |
| SCN-007 | Password Is Masked on Login Form | Validation |
| SCN-008 | Unauthorized Dashboard URL Redirects to Login | Session/Auth |
| SCN-009 | Logout Terminates Session and Returns to Login | Session/Auth |
| SCN-010 | Browser Back After Logout Does Not Restore Authenticated Session | Session/Auth |
| SCN-011 | Idle Session Timeout Forces Re-Authentication | Session/Auth |
| SCN-012 | Consecutive Valid Logins Remain Stable Across Repeats | Positive |

## Detailed Scenarios

### SCN-001: Valid Login Redirects to Dashboard
Type: Positive
Preconditions:
- Login page is reachable at `/web/index.php/auth/login`.
- Valid credentials are available.
Steps:
1. Open the OrangeHRM login page.
2. Enter valid username and valid password.
3. Click `Login`.
Expected Result:
- User is redirected to the dashboard.
- Authenticated UI elements are visible.

### SCN-002: Invalid Password Shows Error
Type: Negative
Preconditions:
- Valid username and invalid password are available.
Steps:
1. Open the login page.
2. Enter valid username and invalid password.
3. Click `Login`.
Expected Result:
- Login is rejected.
- `Invalid credentials` (or equivalent) message is shown.
- User remains on the login page.

### SCN-003: Invalid Username Shows Error
Type: Negative
Preconditions:
- Invalid username and any password are available.
Steps:
1. Open the login page.
2. Enter invalid username and a password.
3. Click `Login`.
Expected Result:
- Login is rejected.
- `Invalid credentials` (or equivalent) message is shown.
- User remains on the login page.

### SCN-004: Blank Username and Password Show Required Validation
Type: Validation
Preconditions:
- Login page is open.
Steps:
1. Keep both fields empty.
2. Click `Login`.
Expected Result:
- Required-field validation appears for username and password.
- Login request is not completed.

### SCN-005: Blank Password Shows Required Validation
Type: Validation
Preconditions:
- Login page is open.
Steps:
1. Enter a valid username.
2. Leave password empty.
3. Click `Login`.
Expected Result:
- Password required validation appears.
- User is not authenticated.

### SCN-006: Blank Username Shows Required Validation
Type: Validation
Preconditions:
- Login page is open.
Steps:
1. Leave username empty.
2. Enter any password.
3. Click `Login`.
Expected Result:
- Username required validation appears.
- User is not authenticated.

### SCN-007: Password Is Masked on Login Form
Type: Validation
Preconditions:
- Login page is open.
Steps:
1. Type text in the password field.
2. Observe visible characters in the field.
Expected Result:
- Password characters are masked.

### SCN-008: Unauthorized Dashboard URL Redirects to Login
Type: Session/Auth
Preconditions:
- No active authenticated session.
Steps:
1. Directly navigate to a protected URL (for example, dashboard).
Expected Result:
- User is redirected to login.
- Protected content is not displayed.

### SCN-009: Logout Terminates Session and Returns to Login
Type: Session/Auth
Preconditions:
- User is logged in successfully.
Steps:
1. Click user menu.
2. Click `Logout`.
Expected Result:
- User is returned to login page.
- Session is terminated.

### SCN-010: Browser Back After Logout Does Not Restore Authenticated Session
Type: Session/Auth
Preconditions:
- User has logged in and then logged out.
Steps:
1. After logout, click browser `Back`.
Expected Result:
- User cannot access authenticated pages.
- Application stays on login or redirects back to login.

### SCN-011: Idle Session Timeout Forces Re-Authentication
Type: Session/Auth
Preconditions:
- User is logged in.
- Session timeout is configured in the environment.
Steps:
1. Stay idle until timeout period passes.
2. Attempt to navigate or refresh.
Expected Result:
- Session is expired.
- User is redirected to login and must authenticate again.

### SCN-012: Consecutive Valid Logins Remain Stable Across Repeats
Type: Positive
Preconditions:
- Valid credentials are available.
Steps:
1. Perform valid login.
2. Logout.
3. Repeat the login-logout cycle multiple times.
Expected Result:
- Each cycle completes successfully.
- No intermittent auth failure is observed during repeats.
