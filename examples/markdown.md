# Tabula UI

This project was bootstrapped with [Create React App (TypeScript)](https://github.com/wmonk/create-react-app-typescript).

Base path: `<hostname>/tabula/`

## Getting started

### Add environment variables

Create a `.env.integration-test` file and add dev machine to machine key to it:

```
MACHINE_TO_MACHINE_KEY=XXX
```

### Install dependencies

```
yarn
```

### Start dev server

```
yarn start
```

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.

To view logs in the Chrome dev tools add `Verbose` to the log levels within the dev tools.

By default the app will write all logs at the `INFO` level or higher to the console. To write out all logs add `?log=DEBUG` to the url.

### Storybook

```
yarn storybook
```

This will launch Storybook to allow you to visually see multiple component states at once. This is great for quick, iterative, development on UI components.

### Unit tests

```
yarn test
```

Launches the test runner in the interactive watch mode.

This also takes snapshots of all the Storybook components.

### Integration tests

```
yarn test:integration
```

To debug the integration tests run them as:

```
yarn test:integration:visible
```

This will make the browser visible, slow down the tests, and stop the tests and enter debug mode if one fails.

To further debug the tests add the following line at any point you would like to inspect the test:

```javascript
await jestPuppeteer.debug();
```

To run only a specific test (based on the name of the test):

```
yarn test:integration --testNamePattern "Matr Tutor & Tutor"
```

Replacing `"Matr Tutor & Tutor"` with the name of the test you want to run.

### Fix lint and formatting

```
yarn fix
```

This will format the code, fix any lint errors that can automatically be fixed, and display any lint errors that cannot be.

### Build

```
yarn build
```

Builds the project into `/build`.

## Misc

To log in as a student run the following in your browser console:

```js
localStorage.setItem('matr-auth/student', JSON.stringify({
  studentId: '123456789',
  supervisorId: '--',
  accessToken: '--put-machine-to-machine-key-here--',
}));
```

## Miscellaneous

### Minimum Spec

- Browser: Chrome
- Screen size: `1366` x `750`
