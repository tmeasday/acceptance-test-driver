Package.describe({
  name: 'tmeasday:acceptance-test-driver',
  version: '0.1.0',
  summary: 'A simple "null" driver for acceptance tests',
  git: 'https://github.com/tmeasday/acceptance-test-driver.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-beta.16');
  api.use('ecmascript');
  api.mainModule('acceptance-test-driver.js');
});
