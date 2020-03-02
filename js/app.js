var app = angular.module("appcafe", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "view/home.html",
            controller: "producto"
        })
        .when('/productos',{
            templateUrl: "view/producto.html",
            controller: "producto"
        });

});

/*CONTROLADOR */
app.controller("producto", function ($scope) {
    
    $scope.btnprueba = function(){
        console.log("click de prueba");
    }
});