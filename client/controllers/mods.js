var myApp = angular.module('myApp');

myApp.controller('cantinasController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){

	$scope.getcantinas = function() {
        $http.get('/api/cantinas')
            .then(function(response) {
            $scope.cantinas = response.data;
        });
    }﻿

    $scope.getcantinas = function() {
    	var id = $routeParams.id;
        $http.get('/api/cantinas/'+id)
            .then(function(response) {
            $scope.cantinas = response.data;
        });
    }﻿

        $scope.addcantinas = function() {
    	var id = $routeParams.id;
        $http.post('/api/cantinas/', $scope.cantinas)
            .then(function(response) {
            window.location.href="#/cantinas";
        });
    }﻿

       $scope.updatecantinas = function() {
        var id = $routeParams.id;
        $http.put('/api/cantinas/'+id, $scope.cantinas)
            .then(function(response) {
            window.location.href="#/cantinas";
        });
    }﻿

     $scope.removecantinas = function(id) {
        $http.delete('/api/cantinas/'+id)
            .then(function(response) {
            window.location.href="#";
        });
    }﻿
}]);