var app = angular.module("recipeApp", ["ngRoute","ngSanitize","ngMaterial","pascalprecht.translate","directive.loading","WixControls"]);
app.config(['$routeProvider','$httpProvider','$locationProvider','$translateProvider',function($routeProvider,$httpProvider,$locationProvider,$translateProvider) {
	    $locationProvider.html5Mode(true);
        $httpProvider.defaults.cache = false;
    if (!$httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get = {};
    }
    // disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';

    $routeProvider
    .when("/", {
        templateUrl : "views/view_index.html",
        controller : "mainCtrl"
            
    })
    /*.when("/recipe/:index", {
        templateUrl : "views/view_recipe.html",
        controller : "recipeCtrl"

    })*/
   /* .when("/recipe/:id", {
        templateUrl : "views/view_recipe.html",
        controller : "recipeCtrl"

    })*/
     .when("/recipe/:name", {
        templateUrl : "views/view_recipe.html",
        controller : "recipeCtrl"

    })
    .when("/recipe/", {
      templateUrl : "views/view_recipe.html",
      controller : "recipeCtrl"

    })
      .when("/stopNonLive", {
        templateUrl : "views/view_stopNonLive.html",
        controller : "mainCtrl"

    })
    .otherwise({
        redirectTo: '/'
      });

    $translateProvider.fallbackLanguage('en')
     $translateProvider.registerAvailableLanguageKeys(['en','es','pt','fr','ru','hi','it'],{
        'en_*' : 'en',
        'es_*' : 'es',
        'pt_*' : 'pt',
        'fr_*' : 'fr',
        'ru_*' : 'ru',
        'hi_*' : 'hi',
        'it_*' : 'it'
    })
    $translateProvider.useLoader('customLangFile');
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('en');

  
}]);

