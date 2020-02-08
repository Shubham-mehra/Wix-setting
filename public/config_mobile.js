var app = angular.module("recipeAppMobile", ["ngRoute","ngMaterial","pascalprecht.translate"]);
app.config(function($routeProvider,$locationProvider,$translateProvider) {
	    $locationProvider.html5Mode(true);

    $routeProvider
    .when("/", {
        templateUrl : "views/view_mobile.html",
        controller : "mainCtrlMobile"     
    })
    .when("/recipe/:name", {
        templateUrl : "views/view_recipeMobile.html",
        controller : "recipeCtrlMobile"

    })
    .when("/mobile/recipe/:name", {
        templateUrl : "views/view_recipeMobile.html",
        controller : "recipeCtrlMobile"

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

  
});

