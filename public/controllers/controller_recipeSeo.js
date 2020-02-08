var app = angular.module("recipeApp", ["WixControls"]);
app.controller("recipeSeoCtrl", function ($scope,$document,$location,$window,$rootScope,$http,$timeout) {

var URL = $location.absUrl()
if (URL.indexOf("?") !== -1)
{
aURL= URL.split('?')
bURL=aURL[0]
$scope.recipeName = bURL.split('/').pop();
}
else{
$scope.recipeName = URL.split('/').pop();
}

console.log($scope.recipeName)
//Wix.pushState("recipe/"+$scope.recipeName);


var promiseGetData = $http.get("/getRecipe/" + Wix.Utils.getInstanceId());
promiseGetData.then(function(payload){
    var theRecipeName = $scope.recipeName;
    console.log(theRecipeName)

    var str = theRecipeName
  /*  if (str.indexOf("-") !== -1){str = str.replace(/-/g, '')}
    if (str.indexOf(" ") !== -1){str = str.replace(/\s/g, '')}*/
    var theRecipes = payload.data;
  $scope.index = getIndexOfKey(theRecipes,str)
  $scope.recipes=payload.data;
      })


function getIndexOfKey(recipes, theRecipeName){
for (var i = 0; i < recipes.length; i++)
{
  var str1= recipes[i].UUID
/*  if (str1.indexOf("-") !== -1){str1 = str1.replace(/-/g, '')}
  if (str1.indexOf(" ") !== -1){str1 = str1.replace(/\s/g, '')}*/
    if (str1 == theRecipeName)
    {
        return i;
    }
}
    
    return -1;
}
    
   
});
