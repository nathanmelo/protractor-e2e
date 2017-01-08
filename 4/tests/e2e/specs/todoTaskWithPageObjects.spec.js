// TodoTaskWithPageObjects.spec.js
var TodoTask = require('../page-objects/TodoTask.po.js');

describe('Todo Task Test', function() {

  var TodoTask = new TodoTask();

  beforeEach(function() {
    TodoTask.visit();
  });

  it('add an item in the todo list', function() {
    TodoTask.addItemOnTodoList('Create test with page object');
    expect(TodoTask.listOfItems.count()).toEqual(1);
  });

  it('add new item in the todo list', function() {
    TodoTask.addItemOnTodoList('Create new test with page object');
    expect(TodoTask.listOfItems.count()).toEqual(2);
  });

});
