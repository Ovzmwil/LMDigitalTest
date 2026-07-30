LM Digital Test

End-to-end UI and API automation framework built with Playwright and TypeScript.

Tech stack
Language: TypeScript
UI Automation: Playwright
API Automation: Playwright APIRequestContext
Test Runner: Playwright Test
CI: GitHub Actions
Architecture: Page Object Model (POM)


Application: https://www.saucedemo.com/

Clone the repository:

git clone https://github.com/Ovzmwil/LMDigitalTest.git
cd LMDigitalTest

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install
Running the tests
Run all tests

Executes the complete UI and API test suite.

npx playwright test
Run only UI tests
npx playwright test tests/ui
Run only API tests
npx playwright test tests/api
Run a single test file

Example: run the GET API test.

npx playwright test tests/api/getPost.spec.ts

Example: run the UI cart test.

npx playwright test tests/ui/addToCart.spec.ts
Run a single test by name
npx playwright test -g "GET /posts/1 should return a valid post"
Reports

After execution, Playwright generates an HTML report.

Open the report with:

npx playwright show-report
