describe('Massi todo app', function() {

  var taskBox = element(by.model('newTodoDescription'));
  var enter = browser.actions().sendKeys(protractor.Key.ENTER);

  var tasks = {}

  beforeEach(function () {
  browser.ignoreSynchronization = true;
  browser.get('http://localhost:8000');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('MassiToDo');
  });

  it('can add and display a task', function() {
    taskBox.sendKeys('do the weekend challenge');
    element(by.id('addTodo')).click();

    // expect(element.all(by.binding('task.description')).getAttribute('value')).toContain('do the weekend challenge');
    expect(element.all(by.repeater('task in tasks')).getAttribute('value')).toContain('do the weekend challenge');


    // expect(tasks.description.first().getText()).toContain('do the weekend challenge');
  });

});