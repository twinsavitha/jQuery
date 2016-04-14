angular.module('MyApp',[])

	.constant('VERSION','1.0')
	
	.controller('HomeCtrl',['$scope',function($scope){
		$scope.title = "Hello there !";
		$scope.description = function(){
			return 'This is the home page';
		};
	}]);