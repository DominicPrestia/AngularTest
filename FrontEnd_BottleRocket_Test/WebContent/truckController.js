//This loads the truck information into the modal and displays the modal
(function(){

	angular.module("myReserveApp").controller("TruckController",function($scope, $window, $modal, $log){
		//enable modal animation
		$scope.animationsEnabled = true;
		
		$scope.open = function (size, index) {
			
			
			    var modalInstance = $modal.open({
			      animation: $scope.animationsEnabled,
			      template: '<div class="modal-header">\
							  		<h2 class="modal-title">Reserved Vehicle: </h2>\
							  	</div>\
							  	<div class="modal-body">\
							  		<ul class="carInfo">\
							  			<li class="listFormat"><div class="divSet">Make:</div><div class="listInfoAlign">{{truck.make}}</div></li>\
			    	  						<div class="clearDiv"></div>\
							  			<li class="listFormat"><div class="divSet">Model:</div><div class="listInfoAlign">{{truck.model}}</div></li>\
			    	  						<div class="clearDiv"></div>\
							  			<li class="listFormat"><div class="divSet">Year:</div><div class="listInfoAlign">{{truck.year}}</div></li>\
			    	  						<div class="clearDiv"></div>\
							  			<li class="listFormat"><div class="divSet">Color:</div><div class="listInfoAlign">{{truck.color}}</div></li>\
			    	  						<div class="clearDiv"></div>\
							  			<li class="listFormat"><div class="divSet">Mileage:</div><div class="listInfoAlign">{{truck.mileage | number}}</div></li>\
			    	  						<div class="clearDiv"></div>\
							  			<li class="listFormat"><div class="divSet">Doors:</div><div class="listInfoAlign">{{truck.doors}}</div></li>\
			    	  						<div class="clearDiv"></div>\
							  			<li class="listFormat"><div class="divSet">Horsepower:</div><div class="listInfoAlign">{{truck.horsepower}}</div></li>\
			    	  						<div class="clearDiv"></div>\
							  			<li class="listFormat"><div class="divSet">Price:</div><p class="listInfoAlign">{{truck.price | number}}</p></li>\
			    	  						<div class="clearDiv"></div>\
							  		</ul>\
			    	  				<div class="formContainer">\
			    	  					<form name="form" class="formStyles" ng-submit="submit()">\
			    	  						<p class="para">\
					    	  					 <label class="labelCell" id="nameLabel" for="name">Name:</label>\
										    	 	<input class="inputStyles" type="text" id="name" name="name" required>\
				    	  					</p>\
			    	  						<div class="clearDiv"></div>\
			    	  						<p class="para">\
					    	  					 <label class="labelCell" id="phoneLabel" for="phone">Phone:</label>\
										    	 	<input class="inputStyles" type="text" id="phone" name="phone" required/>\
				    	  					</p>\
			    	  						<div class="clearDiv"></div>\
			    	  						<p class="para">\
					    	  					 <label class="labelCell" id="emailLabel" for="name">Email:</label>\
										    	 	<input class="inputStyles" type="email" id="email" name="email" required/>\
			    	  						</p>\
			    	  						<div class="clearDiv"></div>\
						  					<p class="para">\
					    	  					 <label class="labelCell" id="addressLabel" for="address">Address:</label>\
										    	 	<input class="inputStyles" type="text" id="address" name="address"/>\
						  					</p>\
			    	  								<input type="checkbox" class="checkBox" name="Trailer" value="Trailer"> Add Trailer<br>\
			    	  						<div class="clearDiv"></div>\
								    	  	<p class="para textAreaPara">\
						  						<label id="commentsLabel" for="comments">Notes:</label>\
			    	  								<br>\
						  					 			<textarea class="textInputStyles" placeholder="Please include any additional notes you might have here." rows="5" cols="50" id="comments"name="comments" maxlength="500"></textarea>\
								    	  	</p>\
			    	  							<br>\
			    	  						<div class="submitButton">\
			    	  							<input id="submitID" type="submit" value="Submit"/>\
			    	  						</div>\
			    	  					</form>\
			    	  				</div>\
			    	  			</div>',
			      controller: 'TruckInstanceCtrl',
			      size: size,
			      resolve: {
			    	  truck: function(){
			      
			    	  return $scope.truck[index];
			    	  }
			      }
			    });
			
		};

	});
	
	angular.module("myReserveApp").controller('TruckInstanceCtrl', function ($scope, $modalInstance, truck) {

		  $scope.truck = truck;

		});

}());