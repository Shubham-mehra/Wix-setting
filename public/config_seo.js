var app = angular.module("recipeApp", ["ngRoute","WixControls"]);
app.config(function($routeProvider,$locationProvider) {
	    $locationProvider.html5Mode(true);

    $routeProvider
    .when("/", {
        templateUrl : "views/view_seo.html",
        controller : "mainCtrlSeo"     
    })
    .when("/recipe/:recipeName", {
        templateUrl : "views/view_recipeSeo.html",
        controller : "recipeSeoCtrl"

    })
    .otherwise({
        redirectTo: '/'
      });
  
});

