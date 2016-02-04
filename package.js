Package.describe({
  name: 'jss:meteor-lwip',
  version: '0.0.1',
  summary: 'Light Weight Image Processor for NodeJS (https://github.com/EyalAr/lwip) wrapped for Meteor',
  git: 'https://github.com/JSSolutions/meteor-lwip',
  documentation: 'README.md'
});

Npm.depends({
  'lwip': '0.0.8'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('lwip.js', 'server');
  api.export('lwip', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('jss:meteor-lwip');
  api.addFiles('lwip-tests.js', 'server');
});
