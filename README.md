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
├── .github/
│   └── workflows/
│       └── test_pipeline.yml
│
├── pages/                      # Page Object Model
│   ├── base_page.ts
│   ├── login_page.ts
│   ├── inventory_page.ts
│   └── cart_page.ts
│
├── tests/
│   ├── ui/
│   │   ├── test_login.spec.ts
│   │   ├── test_cart.spec.ts
│   │   └── test_checkout.spec.ts
│   └── api/
│       └── test_users_api.spec.ts
│
├── package.json
├── package-lock.json
├── playwright.config.ts
├── .gitignore
└── README.md
