var todoApp = angular.module('todoApp', []);

todoApp.controller('MainController', function($scope) {

  var self = this;

  self.title = 'Some title';

  var tasks = {}

  $scope.tasks = [{
    id: "1",
    description: 'weekend challenge',
    done: false
  },{
    id: "2",
    description: 'drink less',
    done: false
  }];

  $scope.addTodo = function () {
    $scope.tasks.push({
      // id: $scope.tasks.data.length + 1,
      description: $scope.newTodoDescription,
      done: false
    });
    $scope.newTodoDescription = '';
}

});

