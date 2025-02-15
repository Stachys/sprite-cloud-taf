# Sprite Cloud TAF  

## Project Structure  

```
|── src/
|   │── api/                     # API-related test files  
|   │   ├── endpoints/           # API endpoint handlers  
|   │   ├── interfaces/          # TypeScript interfaces  
|   │   ├── tests/               # API test specifications  
|   │── ui/                      # UI-related test files  
|   │   ├── pages/               # Page Object Model (POM) structure  
|   │   ├── components/          # UI components 
|   │   ├── tests/               # UI test specifications  
|   │── fixtures.ts              # Shared test fixtures  
│── test-results/            # Stores test reports and logs  
│── playwright.api.config.ts # Playwright API test configuration  
│── playwright.ui.config.ts  # Playwright UI test configuration  
│── package.json             # Project dependencies and scripts  
│── README.md                # Project documentation  
```

## Installation  

Ensure you have Node.js installed. Then, run:  

```sh
npm install
```

## Running Tests  

### UI Tests  

Run UI tests using:  

```sh
npm run test:ui
```

### API Tests  

Run API tests using:  

```sh
npm run test:api
```

## Generating Test Reports  

After test execution, view the report with:  

```sh
npx playwright show-report
```
