# Playwright TypeScript Automation Framework

## Overview

End-to-end test automation framework built with **Playwright (TypeScript)** and **Jest**, covering UI, API, and cross-browser test scenarios. Designed with production-grade structure — Page Object Model, CI/CD integration, and auto-generated HTML reports on every pipeline run.

> 🚧 Actively in development — commits ongoing.

---

## Tech Stack

| Layer | Tool |
|---|---|
| UI Automation | Playwright (TypeScript) |
| Test Runner | Jest |
| API Testing | Axios / node-fetch |
| Reports | Playwright Test Reporter (built-in) |
| CI/CD | GitHub Actions |
| Code Quality | ESLint (planned) |

---

## Framework Architecture

playwright-typescript-automation-framework/
│
├── tests/
│   ├── ui/
│   │   ├── test_login.ts
│   │   ├── test_search.ts
│   │   └── test_checkout.ts
│   ├── api/
│   │   ├── test_users_api.ts
│   │   └── test_products_api.ts
│   └── conftest.ts
│
├── pages/                  # Page Object Model
│   ├── base_page.ts
│   ├── login_page.ts
│   └── home_page.ts
│
├── utils/
│   ├── api_client.ts
│   └── data_helpers.ts
│
├── test_data/
│   └── users.json
│
├── reports/
├── .github/
│   └── workflows/
│       └── test_pipeline.yml
│
├── package.json
├── tsconfig.json
├── playwright.config.ts
└── README.md
