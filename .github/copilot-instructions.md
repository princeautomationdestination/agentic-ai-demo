# Project Guidelines

## Code Style
- Use TypeScript for Playwright tests and keep tests readable with clear Arrange-Act-Assert flow.
- Prefer semantic Playwright locators (`getByRole`, `getByLabel`, `getByText`) over brittle CSS/XPath.
- Keep page object methods focused: one intent per method, assertions in explicit `expect*` helpers.

## Architecture
- This repository is a Playwright E2E automation project for OrangeHRM login workflows.
- Follow the existing boundaries:
  - `tests/pages/`: Page Object Model classes (`LoginPage`, `DashboardPage`).
  - `tests/fixtures/`: Extended Playwright fixtures and shared test setup.
  - `tests/specs/`: Scenario-based specs.
  - `artifacts/`: Generated story/scenario/review documentation.
- Prefer importing the custom fixture from `tests/fixtures/auth.fixture.ts` in specs instead of importing `test` directly from `@playwright/test`.

## Build and Test
- Install dependencies: `npm ci` (PowerShell fallback: `npm.cmd ci`).
- Run full suite: `npm run test:e2e`.
- Run focused scenario: `npm run test:scn-001`.
- If PowerShell execution policy blocks scripts, use `npm.cmd` / `npx.cmd`.

## Conventions
- Name specs with scenario IDs: `scn-NNN-description.spec.ts`.
- Keep scenario IDs aligned with `artifacts/scenarios.md`.
- Use `playwright.config.ts` `baseURL`; avoid hardcoding hostnames inside specs.
- Keep credentials environment-driven (`ORANGEHRM_USERNAME`, `ORANGEHRM_PASSWORD`) and avoid introducing new hardcoded secrets.
- When editing custom agent files, verify exact filenames under `.github/agents/` (for example, `qa-anlyst-agent.md` is intentionally spelled that way in this repo).
