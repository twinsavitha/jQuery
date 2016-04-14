angular.module('MyApp',['ngRoute'])

	.controller('ListCtrl',['$scope','$http', function($scope,$http){
		
		$http.get('./users.json').success(function(users){
			$scope.users=users;
		});
	
	}]);