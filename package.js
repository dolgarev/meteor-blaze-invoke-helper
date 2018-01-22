/* global Package */

Package.describe({
  name: 'liberation:meteor-blaze-invoke-helper',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.6.0.1')
  api.use(['ecmascript', 'blaze'], 'client')
  api.mainModule('meteor-blaze-invoke-helper.js', 'client')
})

Package.onTest(function (api) {
  api.use(['ecmascript', 'tinytest', 'blaze', 'templating'])
  api.use('liberation:meteor-blaze-invoke-helper', 'client')
  api.mainModule('meteor-blaze-invoke-helper-tests.js', 'client')
})
