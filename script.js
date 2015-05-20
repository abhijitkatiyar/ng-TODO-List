// Code goes here
var app = angular.module('myapp', []);

app.controller('ctrl', function($scope) {

  $scope.flag1 = true;
  $scope.arr = [];
  $scope.str = "";
  $scope.flagtable = false;
  $scope.id = 0;
  $scope.edit = false;

  $scope.add = function() {
    $scope.flag1 = !$scope.flag1;
  };

  $scope.addNewTask = function() {
    $scope.flag1 = !$scope.flag1;
    $scope.obj.status = 'todo';
    $scope.obj.time = (new Date()).toLocaleDateString();
    $scope.obj.id = $scope.id;
    $scope.id++;
    //console.log($scope.obj.time)
    $scope.arr.push($scope.obj);
    $scope.obj = {};
    $scope.flagtable = true;
  };

  $scope.disp = function(query) {
    $scope.str = query;
  }

  $scope.taskRemove = function(x) {
    var i = $scope.arr.indexOf(x);
    if (i >= 0)
      $scope.arr.splice(i, 1);
  }

  $scope.taskEdit = function(x) {

  }

});
