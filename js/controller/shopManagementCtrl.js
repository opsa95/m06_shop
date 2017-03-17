// jQuery code
$(document).ready(function () {

});

//Angular code
(function (){
	angular.module('shopApp').controller('shopManagement', ['$scope', '$window', function($scope, $window) {
		//Properties
		this.shop = new shopObj();

		/*
		VARIABLES DE DATA
		var tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);
		*/

		//Scope variables
		$scope.showAction;



		/*this.insertShop = function () {
			console.log(this.shop);

			if(this.shop.validate().length==0) {
				alert(this.reservation.toString());
				this.reservation = new reservationObj();
				$scope.reservationManagement.$setPristine();
				$scope.$parent.showAction=0;
			}
			else {showErrors(this.reservation.validate());}
		}*/

	}]);

	angular.module('shopApp').directive("shopManagementForm", function (){
    return {
      restrict: 'E',
      templateUrl:"view/templates/shop-management-form.html",
      controller:function(){

      },
      controllerAs: 'shopManagementForm'
    };
  });
})();
