# SauceDemo Playwright Test Automation

End-to-end test automation suite for the SauceDemo e-commerce platform, built with Playwright and TypeScript using the Page Object Model pattern, covering login, inventory, cart, and checkout flows with full trace and screenshot reporting.

---

## Tech Stack
- **Playwright** — browser automation and test runner
- **TypeScript** — language
- **playwright-bdd** — Gherkin / BDD support
- **monocart-reporter** — trend report across runs
- **GitHub Actions** — CI/CD

---

## Setup

```bash
npm install
npx playwright install --with-deps
```

---

## Environment Variables

| Variable | Value |
|---|---|
| `BASE_URL` | `https://www.saucedemo.com` |
| `USER` | See [saucedemo.com](https://www.saucedemo.com) |
| `PASSWORD` | See [saucedemo.com](https://www.saucedemo.com) |
| `FAILED_USER` | See [saucedemo.com](https://www.saucedemo.com) |
| `FAILED_PASSWORD` | See [saucedemo.com](https://www.saucedemo.com) |
| `FIRST_NAME` | Any string |
| `LAST_NAME` | Any string |
| `POSTAL_CODE` | Any string |

> For CI, set these as GitHub Secrets. For local runs, add them to `.env.qa`.

---

## Run Tests

```bash
# All tests
npm test

# Regression only
npx bddgen && npx playwright test --grep "@regression"

# Specific test case
npx bddgen && npx playwright test --grep "Complete purchase with a random item"

# See the browser
npx bddgen && npx playwright test --headed

# Debug mode
npx bddgen && npx playwright test --debug
```

---

## Test Cases

| Test | Tags |
|---|---|
| Complete purchase with random item | `@e2e` `@regression` |
| Inventory filters (A→Z, Z→A, price) | `@filters` `@regression` |
| Remove item from cart | `@cart` `@regression` |
| Failed login with locked out user | `@login` `@regression` |

---

## Reports

```bash
npx monocart show-report monocart-report/{timestamp}/index.html    # trend report, replace  with the folder name
```
