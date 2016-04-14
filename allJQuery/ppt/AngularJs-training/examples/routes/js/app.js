angular.module('MyApp',['ngRoute'])

	.constant('VERSION','1.0')

	.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/',{
			controller: 'HomeCtrl',
			templateUrl: './home.html'	
		});

		$routeProvider.when('/info',{
			controller: 'InfoCtrl',
			templateUrl: './info.html'	
		});
	}])
	
	.controller('HomeCtrl',['$scope',function($scope){
		$scope.title = "Hello there !";
		$scope.description = function(){
			return 'This is the home page';
		};
	}])

	.controller('InfoCtrl',['$scope', function($scope){
		$scope.title = "This is the info page";
	}]);