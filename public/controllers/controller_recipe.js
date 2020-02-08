angular.module("recipeApp").controller("recipeCtrl", function ($scope ,$sce,$route,$document,$translate,$location,$window,$rootScope, $routeParams, $http , $timeout, checkDomChange){
 
Wix.pushState("recipe/"+$routeParams.name);
/*Wix.addEventListener(Wix.Events.EDIT_MODE_CHANGE, function(e) {
        if (e.editMode == 'editor') {
          console.log("I am in Recipe Page")
          Wix.Utils.navigateToSection({ sectionId : 'recipe_app' }, 'recipe/'+theSettRecipeName, function(error){
          });
          Wix.pushState("recipe/"+$routeParams.name);
        }
});*/
//Wix.Data.Public.set("currentPage", $route.current.templateUrl, event => console.log($route.current.templateUrl))       
$scope.recipeName = $routeParams.name

  $scope.socialSettings =
  {
"showFacebook": true,
"showTwitter": true,
"showPinterest": true,
"showGoogle": true
  }
  $scope.printToCart =
  function printDiv() {
    var imgurl = document.getElementById("recipeImage").src;
    var compareimage="https://radiant-island-16688";
    var n = compareimage.localeCompare(imgurl);
    if(n==0)
    {
      var filename = imgurl.replace(/^.*[\\\/]/, '');
      var newurl = "../images/" + filename;
    }
    else
    {
      var newurl=imgurl;
    }
    var printContents = document.getElementById("recipe-container-fluid").innerHTML;
    var WinPrint = window.open('', '_newtab');
    WinPrint.document.write('<html><head><link rel="stylesheet" href="https://cdn.jsdelivr.net/semantic-ui/2.2.6/semantic.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.3/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"><link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css"><link rel="stylesheet" 	href="styles/recipe.css"><title>Print</title>');
    WinPrint.document.write('</head><body style="margin-left:20px;">');
    WinPrint.document.write(printContents);
    WinPrint.document.write('</body></html>');
    WinPrint.document.getElementById("recipeImage").src = newurl;
    WinPrint.document.getElementById("printButton").style.visibility = "hidden";
    WinPrint.document.getElementById("hideHomeButton").style.visibility = "hidden";
    WinPrint.document.getElementById("socialIcons").style.visibility = "hidden";
    $timeout(function () {
      WinPrint.print();
    }, 1500);
    $timeout(function () {
      WinPrint.close();
    }, 1600);
  }

    var promiseGetData = $http.get("/getSettings/" + Wix.Utils.getInstanceId());
    promiseGetData.then(function(payload){
      settings=payload.data;
      $scope.settings=payload.data;

      $scope.settings.disp_RecipeDetail_SocialShare = settings.disp_RecipeDetail_SocialShare
      $scope.settings.disp_RecipeDetail_Tags = settings.disp_RecipeDetail_Tags
      $scope.settings.recipeDetPage_font = settings.recipeDetPage_font
      $scope.settings.det_bodyColor = settings.det_bodyColor
      $scope.settings.det_ingreColor = settings.det_ingreColor
      $scope.settings.disp_RecipeDetail_ExpertTips = true
       $timeout(function(){
          $translate.use($scope.settings.appLangCode || 'en')
      },0)
  /*     if (Wix.Utils.getViewMode() == 'editor' || Wix.Utils.getViewMode() == 'preview' )
        {
          $timeout(function(){
      $scope.settings.selectedDropdown='recipepage'
       $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
        })
        },0)
      }*/

    })

    var promiseGetData = $http.get("/getRecipe/" + Wix.Utils.getInstanceId());
    promiseGetData.then(function(payload){
      var theRecipeName = $scope.recipeName;

      var str = theRecipeName
      var theRecipes = payload.data;
      $scope.index = getIndexOfKey(theRecipes,str)
if (Wix.Utils.getViewMode() == 'site')
{
      if(theRecipes[$scope.index].nutrition.calories != "" || theRecipes[$scope.index].nutrition.fat != "" || theRecipes[$scope.index].nutrition.carbohydrate != "" || theRecipes[$scope.index].nutrition.protien != "" || theRecipes[$scope.index].nutrition.disclaimer != "")
      {
        $timeout(function () {
         $scope.settings.disp_RecipeDetail_nutrition = true
          $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
          //console.log(response);
          })
        },0)
      }
      else
      {
        $timeout(function () {
         $scope.settings.disp_RecipeDetail_nutrition = false
          $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
          //console.log(response);
          })
        },0)
      }
}
      $rootScope.staticRecipes=payload.data;
      $http.get('../data/tags.json')
             .then(function(res){
                $scope.tagList = res.data;
                var theNewData = getmeRecipesAfterTagsMod($rootScope.staticRecipes,$scope.settings.appLangCode,$scope.tagList);
                 $scope.recipes= theNewData;
                 var theRecipes = theNewData;
                  if(theRecipes[$scope.index].videoURL != ''){$scope.trustedVideo = $sce.trustAsResourceUrl(theRecipes[$scope.index].videoURL);}
                  if(theRecipes[$scope.index].expertTips === undefined || theRecipes[$scope.index].expertTips.length == 0){$scope.settings.disp_RecipeDetail_ExpertTips = false}
                  $scope.recipes=theRecipes;
                if (Wix.Utils.getViewMode() == 'site')
                {
                  Wix.setPageMetadata({
                    title: theRecipes[$scope.index].recipeName,
                    description: theRecipes[$scope.index].shortDescription
                  });
                }
    });
  })
 function getmeRecipesAfterTagsMod(arr,lang,tagList){
  var x;
  var y;
   for (x in arr)
    {
      for (y in arr[x].tags)
      {
        arr[x].tags[y] = getValueForKey(tagList,arr[x].tags[y],lang)
      }
    }
    return arr;
}

function getmeRecipesForSaving(arr,lang,tagList){
  var x;
  var y;
   for (x in arr)
    {
      for (y in arr[x].tags)
      {
        arr[x].tags[y] = getkeyForValue(tagList,arr[x].tags[y]).split("#")[0]
      }
    }
    return arr;
}  
 function getkeyForValue(arr ,value){
  var x;
  for (x in arr)
    {
      if (arr[x]==value)
      {
        return x
      }
    }
  }

  function getValueForKey(arr,key,lang){
  var x;
  for (x in arr)
    {
      if (x == key+'#'+lang)
      {
        return arr[x]
      }
    }
  }
function getIndexOfId(recipes, id){
for (var i = 0; i < recipes.length; i++)
{
  var str1= recipes[i].id
    if (str1 == id)
    {
        return i;
    }
}
    
    return -1;
}

function getIndexOfKey(recipes, theRecipeName){
for (var i = 0; i < recipes.length; i++)
{
  var str1= recipes[i].UUID
  /*if (str1.indexOf("-") !== -1){str1 = str1.replace(/-/g, '')}
  if (str1.indexOf(" ") !== -1){str1 = str1.replace(/\s/g, '')}*/
    if (str1 == theRecipeName)
    {
        return i;
    }
}
    
    return -1;
}
    

$scope.gotoHome = function(){
    $location.path("/");
};
$scope.clickBackYes = function(){
  Wix.closeWindow({"reason": true});
}
$scope.clickBackNo = function(){
  Wix.closeWindow({"reason": false});
}

$scope.checkSocialFacebook = function(recipe) {
/*  console.log($window.location.origin)
  console.log($window.location.search)*/
if (Wix.Utils.getViewMode() !== 'site')
{

      Wix.openModal($window.location.origin +"/stopNonLive"+ $window.location.search, 400, 200, function(message)
   { 
  if (message.message.reason == true)
  {}
  else{}
  });
}
else
{
    Wix.getSiteInfo(function(siteInfo){
      var siteURL = siteInfo.url
      //console.log(siteURL)
      var facebookURL = "https://www.facebook.com/sharer/sharer.php?u="+encodeURI(siteURL)+"&t="+encodeURI(recipe.recipeName)
      $window.open(facebookURL, "_blank")
    })
}
       
  };

$scope.checkSocialTwitter = function(recipe) {
/*  console.log($window.location.origin)
  console.log($window.location.search)*/
if (Wix.Utils.getViewMode() !== 'site')
{

      Wix.openModal($window.location.origin +"/stopNonLive"+ $window.location.search, 400, 200, function(message)
   { 
  if (message.message.reason == true)
  {}
  else{}
  });
}
else
{
    Wix.getSiteInfo(function(siteInfo){
      var siteURL = siteInfo.url
      var twitterURL = "https://twitter.com/share?url="+encodeURI(siteURL)+"&text="+encodeURI(recipe.recipeName)
      $window.open(twitterURL, "_blank")
    })
}
       
  };

  $scope.checkSocialPinterest = function(recipe) {
/*  console.log($window.location.origin)
  console.log($window.location.search)*/
if (Wix.Utils.getViewMode() !== 'site')
{

      Wix.openModal($window.location.origin +"/stopNonLive"+ $window.location.search, 400, 200, function(message)
   { 
  if (message.message.reason == true)
  {}
  else{}
  });
}
else
{
    Wix.getSiteInfo(function(siteInfo){
      var siteURL = siteInfo.url
      //console.log(siteURL)
      var pinterestURL = "https://pinterest.com/pin/create/button/?url="+encodeURI(siteURL)+"&media="+encodeURI(recipe.recipeImageSrc)+"&description="+encodeURI(recipe.shortDescription)
      //console.log(pinterestURL)
      $window.open(pinterestURL, "_blank")
    })
}
       
  };

    $scope.checkSocialGoogle = function(recipe) {
/*  console.log($window.location.origin)
  console.log($window.location.search)*/
if (Wix.Utils.getViewMode() !== 'site')
{

      Wix.openModal($window.location.origin +"/stopNonLive"+ $window.location.search, 400, 200, function(message)
   { 
  if (message.message.reason == true)
  {}
  else{}
  });
}
else
{
    Wix.getSiteInfo(function(siteInfo){
      var siteURL = siteInfo.url
      var googleURL = "https://plus.google.com/share?url="+encodeURI(siteURL)
      $window.open(googleURL, "_blank")
    })
}
       
  };


$scope.gotoFacebook = function(recipe){

    Wix.getSiteInfo(function(siteInfo){
      var siteURL = siteInfo.url
      //console.log(siteURL)
      var facebookURL = "https://www.facebook.com/sharer/sharer.php?u="+encodeURI(siteURL)+"&t="+encodeURI(recipe.recipeName)
      $window.open(facebookURL, "_blank")
    })
    
  }
    $scope.gotoTwitter = function(recipe){

    Wix.getSiteInfo(function(siteInfo){
      var siteURL = siteInfo.url
      var twitterURL = "https://twitter.com/share?url="+encodeURI(siteURL)+"&text="+encodeURI(recipe.recipeName)
      $window.open(twitterURL, "_blank")
    })
    
  }

  $scope.gotoPinterest = function(recipe){
    Wix.getSiteInfo(function(siteInfo){
      var siteURL = siteInfo.url
      //console.log(siteURL)
      var pinterestURL = "https://pinterest.com/pin/create/button/?url="+encodeURI(siteURL)+"&media="+encodeURI(recipe.recipeImageSrc)+"&description="+encodeURI(recipe.shortDescription)
      //console.log(pinterestURL)
      $window.open(pinterestURL, "_blank")
    })
    
  }

    $scope.gotoGoogle = function(recipe){

    Wix.getSiteInfo(function(siteInfo){
      var siteURL = siteInfo.url
      var googleURL = "https://plus.google.com/share?url="+encodeURI(siteURL)
      $window.open(googleURL, "_blank")
    })
    
  }

    Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, function(e) {
      //console.log(e.key +"and "+ e.value);

      if (e.key == "disp_RecipeDetail_SocialShare")
      {
      $timeout(function(){
      $scope.settings.disp_RecipeDetail_SocialShare = e.value
      $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
      //console.log(response);
      })
      },0)
      }
      if (e.key == "disp_RecipeDetail_Tags")
      {
      $timeout(function(){
      $scope.settings.disp_RecipeDetail_Tags = e.value
      $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
      //console.log(response);
      })
      },0)
      }
      if (e.key == "recipeDetPage_font")
      {
      $timeout(function(){
      $scope.settings.recipeDetPage_font = e.value.family
      $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
      //console.log(response);
      })
      },0)
      }
      if (e.key == "det_bodyColor")
      {
      $timeout(function(){
      $scope.settings.det_bodyColor = e.value.color
      $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
      //console.log(response);
      })
      },0)
      }
      if (e.key == "det_ingreColor")
      {
      $timeout(function(){
      $scope.settings.det_ingreColor = e.value.color
      $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
      //console.log(response);
      })
      },0)
      }
      if (e.key == "appLang")
      {
      //$location.path('/');
      $timeout(function(){
      $rootScope.staticRecipes = getmeRecipesForSaving($rootScope.staticRecipes,$scope.settings.appLangCode,$scope.tagList)
      $scope.settings.appLangCode = (e.value).split("!!")[0]
      $scope.settings.appLang = (e.value).split("!!")[1]
       var theNewData = getmeRecipesAfterTagsMod($rootScope.staticRecipes,$scope.settings.appLangCode,$scope.tagList);
       $scope.recipes= theNewData;
       var theRecipes = theNewData;
       $scope.trueRecipes = theRecipes.filter(function(element){return element.showRecipe==true});
      
         $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
          $translate.use($scope.settings.appLangCode || 'en')
        })
       },0) 
      }
      if (e.key == "disp_RecipeDetail_nutrition")
      {
      $timeout(function(){
      $scope.settings.disp_RecipeDetail_nutrition = e.value
      $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
      //console.log(response);
      })
      },0)
      }
    });


$scope.reloadRoute = function() {
  $route.reload();
}
 //checkDomChange.checkDomChange();
    window.addEventListener('resize', function(){
     $timeout(function () {
            //console.log("this gets executed from checkDomChange")
                var height1 = $document.height();
                Wix.setHeight(height1);
                //observer.disconnect();
       },0);
     
     });
    
 $timeout(function () {
        checkDomChange.checkDomChange();
       
       },0);

});
