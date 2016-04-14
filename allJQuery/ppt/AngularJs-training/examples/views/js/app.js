angular.module('MyApp',['ngRoute'])

	.config(['$routeProvider',function($routeProvider){

		$routeProvider.when('/',{
			controller: 'HomeCtrl',
			templateUrl: './home.html'
		});

		$routeProvider.when('/info',{
			controller: 'InfoCtrl',
			templateUrl: './home.html'
		});
	}])

	.controller('HomeCtrl',['$scope',function($scope){
		$scope.hello = 'hello';
	}])

	.controller('InfoCtrl',['$scope',function($scope){
		$scope.hello = 'Hey';
	}]);