//protractor.conf.js
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var SpecReporter         = require('jasmine-spec-reporter').SpecReporter;

module.exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['specs/*.spec.js'],
  baseUrl: 'http://www.protractortest.org/',

  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailedSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));

    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
      takeScreenshots: true,
      fixedScreenshotName: true
    }));


  }



};
