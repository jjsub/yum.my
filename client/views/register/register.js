(function(){
  'use strict';

  angular.module('yum.my')
  .controller('RegisterCtrl', ['$scope','$location','User', function($scope, $location){
    $scope.user = {};


    function success(response){
     toastr.success('User successfuly register') ;
     $location.path('/login');
    }

    function failure(response){
      toastr.error('Error during registrations, try again.');
      $scope.user = {};
    }

    $scope.register = function(){
      User.register($scope.user).then(success, failure);
    };
  }]);
})();
