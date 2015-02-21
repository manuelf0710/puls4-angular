/**
* PostsListController
* Controlador del listado de posts
*/
function PostsListController($scope, $routeParams, $http, Utils) {
	if($scope.posts.length==0){
		$http.get('data/base-data.json').success(function(data) {
			$scope.posts = data;
		});
	}else{
		//console.log($scope.posts);
	}
		$scope.goTo = function( dest ){
		Utils.goTo( dest )
	}
			$scope.Votar = function( action, val, index ){
				if(action=='up'){
				  val.votes =parseInt(val.votes)+1; /*primera forma de aplicar el cambio de acuerdo a el objeto*/
				  //$scope.posts[index].votes = parseInt($scope.posts[index].votes)+1; /*segunda forma de acuerdo al indice posicion del objeto*/
				}
				if(action=='down'){
				val.votes =parseInt(val.votes)-1;
				//$scope.posts[index].votes = parseInt($scope.posts[index].votes)+1; 
				}
		}
	
}