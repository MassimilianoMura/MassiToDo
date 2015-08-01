describe('Massi todo app', function() {

  var tasks = [];

  beforeEach(function () {
  browser.ignoreSynchronization = true;
  });

  it('has a title', function() {
    browser.get('http://localhost:8000');
    expect(browser.getTitle()).toEqual('MassiToDo');
  });

  it('can add and display a task', function() {
    addNewTask(['do the weekend challenge']);
    expect(tasks.first().getText()).toContain('do the weekend challenge');
  });

});