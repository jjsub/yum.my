(function(){
  'use strict';

  angular.module('yum.my')
  .factory('HttpIntercerptor', ['$rootScope', function($rootScope){

    function responser(res){
      var email = res.header('x-authenticated-user');

      if(email){
        $rootScope.$broadcast('authenticated', email);
      }

      return res;
    }

    return {response:response};
  }]);
})();

