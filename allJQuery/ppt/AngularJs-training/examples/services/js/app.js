angular.module('MyApp',['ngRoute'])

	.factory('userService',function(){
		var user;
		return {
			setCurrentUser : function(current){
				user=current;
			},
			getCurrentUser : function(){
				return user;
			}
		};
	})
	
	.controller('DetailCtrl',['$scope','userService', function($scope,userService){
		userService.setCurrentUser('kunal');
	
	}])

	.controller('InfoCtrl',['$scope','userService', function($scope,userService){
		
		$scope.user=userService.getCurrentUser();
	}]);