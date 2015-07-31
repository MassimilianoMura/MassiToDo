describe('Massi todo app', function() {

  beforeEach(function () {
  browser.ignoreSynchronization = true;
  });

  it('has a title', function() {
    browser.get('http://localhost:8000');

    expect(browser.getTitle()).toEqual('MassiToDo');
  });
});