var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/',{
		controller:'cantinasController',
		templateUrl: 'views/cantinas.html'
	})
	.when('/cantinas',{
		controller:'cantinasController',
		templateUrl: 'views/cantinas.html'
	})
	.when('/cantinas/details/:id' ,{
		controller:'cantinasController',
		templateUrl: 'views/cantinas_details.html'
	})
	.when('/cantinas/add' ,{
		controller:'cantinasController',
		templateUrl: 'views/add_cantinas.html'
	})
	.when('/cantinas/edit/:id',{
		controller:'cantinasController',
		templateUrl: 'views/edit_cantinas.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});