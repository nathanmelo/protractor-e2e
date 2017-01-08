// todoTask.po.js
var TodoTask = function() {
  this.listOfItems = element.all(by.css('.view-all'));
  this.newTodoField = element(by.id('new-todo-task'));
};

TodoTask.prototype.addItemOnTodoList = function(item) {
  this.newTodoField.sendKeys(item);
  this.newTodoField.sendKeys(protractor.Key.ENTER);
};

TodoTask.prototype.visit = function() {
  browser.get('http://url-you-want-test/#/');
};

module.exports = TodoTask;
