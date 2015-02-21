var app = angular.module("app", [
		'ngResource',
		'ngRoute',
]);
app.config(function($routeProvider){
	$routeProvider.when("/add", {
		templateUrl : 'src/views/agregar.html',
		controller: PostNewController
	}).
      when('/posts', {
		  templateUrl: 'src/views/posts-list.html',
		  controller: PostsListController
		  }).
	  
	 
      when('/post/:postId', {
		  templateUrl: 'src/views/post.html',
		  controller: PostDetailController
		  }).
	 when('#/', {
		  templateUrl: 'src/views/posts-list.html',
		  controller: PostsListController
		  }).
      otherwise({
		  redirectTo: '/posts'})
})