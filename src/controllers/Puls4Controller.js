/**
* Puls4Controller
* Controlador
*/
app.controller("Puls4Controller", function Puls4Controller($scope, $http, Utils){
  $http.get('data/base-data.json').success(function(data) {
	$scope.posts = data;
  });
})
