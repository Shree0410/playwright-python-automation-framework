# Playwright Python Automation Framework

## Overview

End-to-end test automation framework built with **Playwright (Python)** and **pytest**, covering UI, API, and cross-browser test scenarios. Designed with production-grade structure — Page Object Model, CI/CD integration, and auto-generated HTML reports on every pipeline run.

> 🚧 Actively in development — commits ongoing.

---

## Tech Stack

| Layer | Tool |
|---|---|
| UI Automation | Playwright (Python) |
| Test Runner | pytest |
| API Testing | requests, pytest |
| Reports | pytest-html |
| CI/CD | GitHub Actions |
| Code Quality | SonarQube (planned) |

---

## Framework Architecture

playwright-python-automation-framework/

│

├── tests/

│   ├── ui/

│   │   ├── test_login.py

│   │   ├── test_search.py

│   │   └── test_checkout.py

│   ├── api/

│   │   ├── test_users_api.py

│   │   └── test_products_api.py

│   └── conftest.py

│

├── pages/                  # Page Object Model

│   ├── base_page.py

│   ├── login_page.py

│   └── home_page.py

│

├── utils/

│   ├── api_client.py

│   └── data_helpers.py

│

├── test_data/

│   └── users.json

│

├── reports/

├── .github/

│   └── workflows/

│       └── test_pipeline.yml

│

├── requirements.txt

├── pytest.ini

└── README.md
