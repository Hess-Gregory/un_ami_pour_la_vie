describe('Protractor Demo App', function() {
  it('enter search word in google search field', function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://www.google.com/');
    element(by.name('q')).sendKeys('protractor for angular testing');
    browser.sleep('10000');
  });
});
