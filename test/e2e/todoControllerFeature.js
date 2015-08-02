describe('Massi todo app', function() {

  var taskBox = element(by.model('newTodoDescription'));
  var list = element.all(by.repeater('task in tasks'));
  var boxDone = element.all(by.css('checkbox'));
  var deleteSelected = element(by.buttonText('Clear completed'));

  var tasks = {}

  beforeEach(function () {
  browser.ignoreSynchronization = true;
  browser.get('http://localhost:8000');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('MassiToDo');
  });

  it('can add and display a new task', function() {
    taskBox.sendKeys('my new todo').sendKeys(protractor.Key.ENTER);
    expect(list.last().getText()).toEqual('my new todo')
  });

  it('can be selected as done', function() {
    taskBox.sendKeys('my new boring task').sendKeys(protractor.Key.ENTER);
    selectCheckbox = boxDone.isSelected();
    expect(selectCheckbox).toBeTruthy();
  });

  // it('can delete task done', function() {
  //   taskBox.sendKeys('learn protractor...').sendKeys(protractor.Key.ENTER);
  //   boxDone.click();
  //   deleteSelected.click();
  //   expect(list.last().getText()).toNotEqual('learn protractor...');
  //   console.log(list.last());
  // });

  it('can clear the list of tasks', function() {
    expect(tasks.count()).toEqual(2);
  });


});