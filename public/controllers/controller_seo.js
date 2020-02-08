var app = angular.module("recipeApp", ["WixControls"]);
app.controller("mainCtrlSeo", function ($scope,$document,$window,$q,$rootScope,$http,$timeout) {

var modifyURL = Wix.Utils.getSectionUrl()
$scope.sectionUrl = modifyURL.replace(/^https?\:\/\//i, "//");
 var promiseGetData = $http.get("/getRecipe/" + Wix.Utils.getInstanceId());
    promiseGetData.then(function(payload){
      $scope.recipes=payload.data;
      var theRecipes =payload.data;
      $scope.trueRecipes = theRecipes.filter(function(element){return element.showRecipe==true});
    })

});