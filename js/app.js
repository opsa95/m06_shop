// jQuery code
$(document).ready(function () {

});

(function(){
  var shopApp = angular.module('shopApp', ['ng-currency', 'ui.bootstrap', 'ngCookies', 'angularUtils.directives.dirPagination']);

  shopApp.controller('mainController', ['$scope', '$window', function($scope, $window) {
    //Properties

    //Scope variables
    $scope.showAction = 0;
  }]);
})();
