// Without Page Object Pattern
// todoMvc.spec.js
describe('Todo Task Test', function() {

  var newTodoField = element(by.id('new-todo'));

  it('add an item in the todo list', function() {
    browser.get('http://url-you-want-test/#/');
    newTodoField.sendKeys('Create test without page object');
    newTodoField.sendKeys(protractor.Key.ENTER);
    expect(element.all(by.css('.view')).count()).toEqual(1);
  });

  it('add new item in the todo list', function() {
    browser.get('http://turl-you-want-test/#/');
    newTodoField.sendKeys('Create new test without page object');
    newTodoField.sendKeys(protractor.Key.ENTER);
    expect(element.all(by.css('.view')).count()).toEqual(2);

  });
});
