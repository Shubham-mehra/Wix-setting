var dashApp = angular.module("dashboardApp", ["ngRoute","ngSanitize","WixControls","pascalprecht.translate","ngMaterial"]);
dashApp.config(function($routeProvider,$httpProvider,$locationProvider,$translateProvider) {
    $httpProvider.defaults.cache = false;
    if (!$httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get = {};
    }
    // disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';

    $routeProvider
    .when("/", {
        templateUrl : "views/view_dashboard.html",
     	controller : "dashboardCtrl"     
    })
    .when("/createRecipe/:index", {
        templateUrl : "views/view_createRecipe.html",
     	controller : "recipeDetailCtrl"     
    })
    .when("/createTags/:index", {
        templateUrl : "views/view_createTags.html",
         controller : "createTagsController",
         controllerAs: 'createTag'     
    })
    .when("/recipeDetail/:index", {
        templateUrl : "views/view_recipeEdit.html",
        controller : "recipeDetailCtrl"
    })
    .when("/recipeDetailDraft/:index", {
        templateUrl : "views/view_recipeEditDraft.html",
        controller : "recipeDetailCtrl"
    })
    .when("/upgradeConfirm", {
        templateUrl : "views/view_upgradeConfirm.html",
        controller : "recipeDetailCtrl"
    })
    .when("/deleteConfirm", {
        templateUrl : "views/view_deleteConfirm.html",
        controller : "dashboardCtrl"     
    })
    .when("/checkBack", {
    templateUrl : "views/view_checkBack.html",
    controller : "recipeDetailCtrl"     
    })
    .when("/contactUs", {
    templateUrl : "views/view_contactUs.html",
    controller : "dashboardCtrl"     
    })
    .when("/draftRecipes", {
        templateUrl : "views/view_draftRecipes.html",
        controller : "dashboardCtrl"     
    })

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

    $translateProvider.useStaticFilesLoader({
    'prefix': 'data/lang-',
    'suffix': '.json'
    });
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('en');
    
});

