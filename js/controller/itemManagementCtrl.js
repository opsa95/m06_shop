// jQuery code
$(document).ready(function () {

});

//Angular code
(function (){
	angular.module('shopApp').controller('itemManagement', ['$scope', '$window', '$filter', function($scope, $window, $filter) {

		$scope.itemsArray = [];
		$scope.pageSize = 10;
		$scope.currentPage = 1;
		$scope.filteredData;
		$scope.showAction;

		this.initForm =  function () {
			//Acces to the server to get all reviews
			for (var i = 0; i < 100; i++)	{
				var item = new itemObj();
				// ID, NAME,  DESCRIPTION, PRICE, UNITS, AVAILABLE DATE, EXPIRATION DATE, IMAGE
				item.construct(i,"Item Name","Item Description","Item Price",5,"0","0","/images/"+i+".jpg");
				$scope.itemsArray.push(item);
			}
      $scope.filteredData = $scope.itemsArray;
		}

		$scope.$watch("nameSearch+typeSearch", function () {
        $scope.filteredData=$filter('filter')
        ($scope.reviewsArray,
          { name:$scope.nameSearch,
            type: $scope.typeSearch }
        );
    });

	}]);

	angular.module('shopApp').directive("itemManagementForm", function (){
    return {
      restrict: 'E',
      templateUrl:"view/templates/item-management-form.html",
      controller:function(){

      },
      controllerAs: 'itemManagementForm'
    };
  });
})();
