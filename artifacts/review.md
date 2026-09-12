# Automation Code Review

Scope:
- `tests/specs/scn-001-successful-login.spec.ts`
- `tests/pages/login.page.ts`
- `tests/pages/dashboard.page.ts`
- `tests/fixtures/auth.fixture.ts`

## Findings (ordered by severity)

### High
1. Insecure and non-deterministic credential fallback in fixture
- File: `tests/fixtures/auth.fixture.ts:22`
- File: `tests/fixtures/auth.fixture.ts:23`
- Issue: The fixture silently falls back to hardcoded credentials (`Admin` / `admin123`) when environment variables are missing.
- Impact:
  - Security risk: credentials are embedded in source.
  - Reliability risk: test can pass locally with fallback but fail in CI/environments where secret management is expected.
  - Operational risk: accidental execution against unintended accounts.

Suggested fix:
- Remove hardcoded defaults.
- Require `ORANGEHRM_USERNAME` and `ORANGEHRM_PASSWORD` explicitly, and fail fast with a clear error if absent.
- Source credentials only from secure env/secret stores.

### Medium
2. Brittle dashboard validation tied to accessible name that may vary
- File: `tests/pages/dashboard.page.ts:9`
- File: `tests/pages/dashboard.page.ts:15`
- Issue: `getByRole('navigation', { name: 'Sidepanel' })` is highly UI/locale/accessibility-name dependent, then chained with `Admin` link validation.
- Impact: Increased flakiness across UI revisions, translations, or accessibility label changes.

Suggested fix:
- Prefer stable selectors (`data-testid`) for structural shell elements.
- Keep one resilient dashboard readiness assertion (URL + heading), and use additional checks only when tied to stable product contracts.

3. Login page readiness checks are minimal for a critical entry flow
- File: `tests/pages/login.page.ts:7`
- Issue: `goto()` checks only heading visibility before proceeding to fill fields.
- Impact: Potential false readiness and intermittent failures if form controls are delayed or partially rendered.

Suggested fix:
- In `goto()`, assert URL and readiness of username/password/login button (visible and enabled/editable) before returning.
- This keeps synchronization centralized in POM and reduces spec-level timing issues.

### Low
4. Redundant assertion in spec duplicates page object responsibility
- File: `tests/specs/scn-001-successful-login.spec.ts:9`
- Issue: `expect(dashboardPage.heading).toContainText('Dashboard')` duplicates `dashboardPage.expectLoaded()` checks.
- Impact: Minor duplication and tighter coupling to internal locator exposure.

Suggested fix:
- Keep assertions encapsulated in `dashboardPage.expectLoaded()` and avoid reasserting the same condition in spec unless validating a distinct behavior.

## Production readiness verdict
- Verdict: **Not production-ready yet**.
- Reason: The credential handling issue is a blocker for secure and deterministic CI usage. The other findings are moderate reliability concerns that should be addressed to reduce flakiness and maintenance overhead.

## Missing tests and residual risks
1. Negative authentication path is missing
- Missing: invalid password, invalid username, and expected error-message assertions.
- Risk: only happy path is validated; auth rejection behavior can regress unnoticed.

2. Required-field validations are missing
- Missing: blank username/password validation coverage.
- Risk: client-side validation regressions are undetected.

3. Session/auth stability coverage is missing
- Missing: repeated-run stability test and (if in scope) session persistence/timeout behavior.
- Risk: flaky auth or session regressions may appear in regression runs without early signal.

4. Secret-handling checks are missing
- Missing: explicit assurance that logs/reports do not expose credentials.
- Risk: credentials leakage in CI artifacts.

## Notes on architecture and patterns
- POM usage is present and directionally good.
- Shared fixture composition in `auth.fixture.ts` is appropriate for reuse.
- Strengthening selector stability and fixture security would materially improve quality and reliability.
