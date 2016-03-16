## Acceptance test driver

This package intentionally doesn't do anything.

The idea is that the acceptance test driver simply runs your app *as usual* but in test mode. So you can include extra testing files to make special APIs available to your acceptance test suite that won't be shipped to production or available in development.

Read more at http://guide.meteor.com/testing.html#acceptance

### Installation

*NOTE*: Requires Meteor 1.3

```
meteor add tmeasday:acceptance-test-driver
```

### Usage

```
meteor test --full-app --driver-package tmeasday:acceptance-test-driver
```

Then simply point your acceptance test runner at `localhost:3000`.