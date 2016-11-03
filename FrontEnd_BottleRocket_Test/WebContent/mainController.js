(function(){	
	
	angular.module("myReserveApp").controller("MainController", ["$scope", "$http", "$window", MainController]);
	
function MainController ($scope, $http, $window){
	
	function onGatherBoatData(response){
		
		$scope.boat = response.data;
		
	};
	
	function onError(reason){
		
		$scope.error = "Could not fetch Boat Data";
		
	};
	
	function onGatherCarData(response){
		
		$scope.car = response.data;
		
	};
	
	function onError(reason){
		
		$scope.error = "Could not fetch Car Data";
		
	};
	
	function onGatherTruckData(response){
		
		$scope.truck = response.data;
		
	};
	
	function onError(reason){
		
		$scope.error = "Could not fetch Truck Data";
		
	};
	
	$http.get("http://sandbox.bottlerocketapps.com/FrontEndTechExam2015/boats.json")
		.then(onGatherBoatData, onError);
	
	$http.get("http://sandbox.bottlerocketapps.com/FrontEndTechExam2015/cars.json")
	.then(onGatherCarData, onError);
	
	$http.get("http://sandbox.bottlerocketapps.com/FrontEndTechExam2015/trucks.json")
	.then(onGatherTruckData, onError);
	
	$scope.message = "Hello, Angular Here!";
	
};

}());