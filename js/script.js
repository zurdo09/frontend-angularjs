var app = angular.module("Canciones", []);
app.filter("Url", function(){
	return function(item){
		return (JSON.stringify(item)).slice(10,-18);
	};
});
app.controller("CancionesController", function ($scope, $http) {
	$http.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=545ac8adf6966995b1e9ea3a45d76d7d&format=json').success(function (data) {
		$scope.datos = data.tracks.track;
	});
	$scope.ordenarPor = function(orden) {
		$scope.ordenSeleccionado = orden;
	};
});