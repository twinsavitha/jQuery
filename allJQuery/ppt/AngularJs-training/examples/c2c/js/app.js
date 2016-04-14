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

	.controller('ListCtrl',['$scope','$rootScope','$http','userService', function($scope,$rootScope,$http,userService){
		
		$http.get('./users.json').success(function(users){
			$scope.users=users;
		});


		$scope.selectUser= function(user){
			userService.setCurrentUser(user);
			$rootScope.$broadcast('userChanged');
		};
	
	}])

	.controller('DetailCtrl',['$scope','userService',function($scope,userService){
		$scope.$on('userChanged',function(event){
			$scope.currentUser= userService.getCurrentUser();
		})
	}]);