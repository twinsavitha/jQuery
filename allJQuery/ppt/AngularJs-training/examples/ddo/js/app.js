angular.module('MyApp',['ngRoute'])

	.directive('myCircle',function(){
		return{
			templateUrl:'./circle.html',
			link: function(scope,element){

				element.on('click',function(){
					alert('clicked');
				});
		}

		};
	})

	.directive('myRectangle',function(){
		return{
			templateUrl:'./rectangle.html',
			restrict:'E',
			replace: true
		};
	})




