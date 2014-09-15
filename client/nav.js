(function)(){

  'use strict';

  angular.module('yum.my')
  .controller('NavCtrl', ['$scope', function($scope){
    $scope.$on('authenticated', function(event, email){
      console.log('insede nav ctrl, emial:', emial );
    });





  }]);
})();
