## SCN-001: Login Page Loads with Required Controls
Status: Approved
Priority: High
Type: Positive
Preconditions:
- OrangeHRM URL is reachable from the test environment.
- Browser and automation driver are available.
Steps:
1. Launch the browser using automation.
2. Navigate to `https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`.
3. Wait for page render completion.
Expected Result:
- Login page loads successfully.
- Username and password fields and submit action are visible and interactable.

## SCN-002: Successful Login with Valid Credentials
Status: Pending
Priority: High
Type: Positive
Preconditions:
- Valid test credentials are configured securely.
- Login page is accessible.
Steps:
1. Open the login page.
2. Enter valid username.
3. Enter valid password.
4. Submit the login form.
5. Wait for authenticated landing page.
Expected Result:
- Authentication succeeds.
- User is redirected to the authorized area.

## SCN-003: Login Rejection for Invalid Username
Status: Pending
Priority: High
Type: Negative
Preconditions:
- Login page is accessible.
- Invalid username and any password are available as test data.
Steps:
1. Open the login page.
2. Enter invalid username and a password.
3. Submit the login form.
Expected Result:
- Login is denied.
- Error feedback is displayed without application crash.

## SCN-004: Login Rejection for Invalid Password
Status: Pending
Priority: High
Type: Negative
Preconditions:
- Login page is accessible.
- Valid username and invalid password are available as test data.
Steps:
1. Open the login page.
2. Enter valid username and invalid password.
3. Submit the login form.
Expected Result:
- Login is denied.
- Error feedback is displayed without exposing sensitive details.

## SCN-005: Required Field Validation for Empty Username and Password
Status: Pending
Priority: High
Type: Negative
Preconditions:
- Login page is accessible.
Steps:
1. Open the login page.
2. Keep username and password empty.
3. Submit the login form.
Expected Result:
- Submission is blocked or authentication fails safely.
- Required field validation messages appear.

## SCN-006: Required Field Validation for Empty Username Only
Status: Pending
Priority: Medium
Type: Negative
Preconditions:
- Login page is accessible.
Steps:
1. Open the login page.
2. Leave username blank.
3. Enter any password.
4. Submit the form.
Expected Result:
- Login does not proceed.
- Username validation is shown.

## SCN-007: Required Field Validation for Empty Password Only
Status: Pending
Priority: Medium
Type: Negative
Preconditions:
- Login page is accessible.
Steps:
1. Open the login page.
2. Enter any username.
3. Leave password blank.
4. Submit the form.
Expected Result:
- Login does not proceed.
- Password validation is shown.

## SCN-008: Boundary Handling for Maximum-Length Username
Status: Pending
Priority: Medium
Type: Negative
Preconditions:
- Login page is accessible.
- Username data at and above expected maximum length is available.
Steps:
1. Open the login page.
2. Enter a very long username string.
3. Enter any password.
4. Submit the form.
Expected Result:
- Application handles input safely without freeze or crash.
- Input is constrained or rejected with consistent feedback.

## SCN-009: Boundary Handling for Maximum-Length Password
Status: Pending
Priority: Medium
Type: Negative
Preconditions:
- Login page is accessible.
- Password data at and above expected maximum length is available.
Steps:
1. Open the login page.
2. Enter valid username.
3. Enter a very long password string.
4. Submit the form.
Expected Result:
- Application handles input safely without freeze or crash.
- Authentication response is returned in expected time.

## SCN-010: Validation Against Whitespace-Only Credentials
Status: Pending
Priority: Medium
Type: Negative
Preconditions:
- Login page is accessible.
Steps:
1. Open the login page.
2. Enter spaces in username and password fields.
3. Submit the form.
Expected Result:
- Whitespace-only credentials are treated as invalid.
- Appropriate validation or authentication error is shown.

## SCN-011: Validation Against Special Characters in Credentials
Status: Pending
Priority: Medium
Type: Negative
Preconditions:
- Login page is accessible.
- Test data with special characters is available.
Steps:
1. Open the login page.
2. Enter special-character-heavy username and password values.
3. Submit the form.
Expected Result:
- Inputs are handled safely and consistently.
- No script execution or UI breakage occurs.

## SCN-012: Resilience During Temporary Network Interruption
Status: Pending
Priority: High
Type: Negative
Preconditions:
- Test environment can simulate transient network loss.
- Login automation includes timeout handling.
Steps:
1. Start login flow and navigate to the login page.
2. Interrupt network before form submission or response completion.
3. Submit credentials and observe behavior.
4. Restore network and retry login.
Expected Result:
- Test fails gracefully with clear diagnostics during outage.
- No indefinite hang occurs.
- Flow can recover on retry after connectivity returns.

## SCN-013: Resilience Under Repeated Automated Login Cycles
Status: Pending
Priority: High
Type: Positive
Preconditions:
- Valid credentials are available.
- Logout flow is automatable.
Steps:
1. Execute login with valid credentials.
2. Confirm authenticated page.
3. Execute logout.
4. Repeat steps for multiple iterations.
Expected Result:
- Login/logout remains stable across runs.
- No intermittent failures are observed under stable conditions.

## SCN-014: Automation Compatibility in Unattended Regression Run
Status: Pending
Priority: High
Type: Positive
Preconditions:
- Login scenario is integrated into regression suite.
- CI or unattended runner is configured.
Steps:
1. Trigger regression suite in unattended mode.
2. Monitor login execution as part of the suite.
3. Validate suite completion state.
Expected Result:
- Login steps execute without manual intervention.
- Regression run can complete with deterministic login behavior.

## SCN-015: Session Persistence After Successful Login and Refresh
Status: Pending
Priority: Medium
Type: Positive
Preconditions:
- Successful login has been completed with valid credentials.
Steps:
1. Refresh the authenticated page.
2. Navigate to another protected page.
3. Return to dashboard or landing page.
Expected Result:
- Session remains authenticated after refresh and navigation.
- User is not redirected unexpectedly to login.

## SCN-016: Concurrent Login Execution Isolation
Status: Pending
Priority: Medium
Type: Negative
Preconditions:
- Parallel execution infrastructure is available.
- Isolated users or isolated sessions are configured.
Steps:
1. Run login tests concurrently across multiple workers.
2. Capture results, collisions, and timing.
Expected Result:
- Parallel runs do not corrupt each other sessions.
- Failures, if any, are isolated and diagnosable per worker.

## SCN-017: Credential Masking in Logs on Failed Authentication
Status: Pending
Priority: Medium
Type: Negative
Preconditions:
- Test logging and reporting are enabled.
Steps:
1. Execute a failed login attempt.
2. Review captured logs and reports.
Expected Result:
- Password values are masked or omitted in logs.
- Failure details remain actionable without leaking secrets.
