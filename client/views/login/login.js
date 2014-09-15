(function(){
  'use strict';

  angular.module('yum.my')
  .controller('RegisterCtrl', ['$scope','$location','User', function($scope, $location){
    $scope.user = {};

    function success(response){
    toastr.success('Successful login.');
    $location.path('/');
    }

    function failure(response){
    toastr.failure('Your login fail, please try again.');
    $location.path('/');
    }

    $scope.login = function(){
      User.login($scope.user).them(success, failure);
    };
  }]);
})();
