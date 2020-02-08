angular.module("dialogApp").controller("dialogCtrl", function ($scope,$route,$document,$translate,$window,$q,$rootScope,$http,$location,$timeout, checkDomChange) {
    
    Wix.pushState("");
    Wix.addEventListener(Wix.Events.EDIT_MODE_CHANGE, function(e) {
        if (e.editMode == 'editor') {
          console.log("I am in Search Page")
          $window.location.href = $window.location.origin + $window.location.search;
          /*Wix.getComponentInfo( function(compInfo) { 
            console.log(compInfo)
          });
          
          Wix.Utils.navigateToSection({ sectionId : 'recipe_app' },'/', function(error){});
          Wix.pushState("");*/
          
        }
    });
     
    //console.log(Wix.Utils.getViewMode())
    //Wix.Data.Public.set("currentPage", $route.current.templateUrl, event => console.log($route.current.templateUrl))
    $scope.socialSettings =
    {
  "showFacebook": true,
  "showTwitter": true,
  "showPinterest": true,
  "showGoogle": true
    }

$scope.getTheSettings = function () {
    //All the settings initialization
    var promiseGetData = $http.get("/getSettings/" + Wix.Utils.getInstanceId());
    promiseGetData.then(function(payload){
      settings=payload.data;
      $scope.settings=payload.data
      console.log($scope.settings)
   
      $scope.settings.disp_RecipePage_SearchBox = settings.disp_RecipePage_SearchBox
      $scope.settings.disp_RecipePage_SearchDrop = settings.disp_RecipePage_SearchDrop
      $scope.settings.disp_RecipePage_SocialShare = settings.disp_RecipePage_SocialShare
      $scope.settings.disp_RecipePage_tags = settings.disp_RecipePage_tags
      $scope.settings._backgroundColor = settings._backgroundColor
      $scope.settings.search_backgroundColor = settings.search_backgroundColor
      $scope.settings.drop_backgroundColor = settings.drop_backgroundColor
      $scope.settings.recipePage_font = settings.recipePage_font
      $timeout(function(){
          $translate.use($scope.settings.appLangCode || 'en')
      },0)

      if ($scope.settings.selectedLayout == "block")
      {
        //console.log("i am in block")
          $scope.showBlockLayout = true;
          $scope.showListLayout = false;
      }
      if ($scope.settings.selectedLayout == "list")
      {
        //console.log("i am in list")
          $scope.showBlockLayout = false;
          $scope.showListLayout = true;
      }
      checkDomChange.checkDomChange();
    })
  }
$scope.getTheSettings();
  //console.log("getRecipe gets called")
   var promiseGetData = $http.get("/getRecipe/" + Wix.Utils.getInstanceId());
     promiseGetData.then(function(payload){
      $rootScope.staticRecipes=payload.data;
        $http.get('../data/tags.json')
               .then(function(res){
                  $scope.tagList = res.data;
                  var theNewData = getmeRecipesAfterTagsMod($rootScope.staticRecipes,$scope.settings.appLangCode,$scope.tagList);
                   $scope.recipes= theNewData;
                   var theRecipes = theNewData;
                   $scope.trueRecipes = theRecipes.filter(function(element){return element.showRecipe==true});
                   $scope.theSettRecipeName =  $scope.trueRecipes[0].UUID;

                   if (Wix.Utils.getViewMode() == "editor")
                   {
                       if ($scope.settings.selectedDropdown == "recipepage")
                       {console.log("recipepage")
                        $scope.changeSettingsPage();}
                        else
                       {console.log("searchpage")
                        $scope.changeSettingsPageOrig();}
                   }
      });
    })
  
  $scope.gotoRecipe = function(UUID,name,id){
    $location.path("/recipe/"+UUID);
  }

$scope.changeSettingsPage = function () {
  var theSettRecipeName = $scope.theSettRecipeName;
  $location.path("/recipe/"+theSettRecipeName);
    //Wix.Utils.navigateToSection({ sectionId : 'recipe_app' }, 'recipe/'+theSettRecipeName, function(error){
    //Handle error use-case
  //});

 };

Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, function(e) {
      //console.log(e.key +" and "+ e.value);

      if (e.key == "disp_RecipePage_SearchBox")
      {
      $timeout(function(){
      $scope.settings.disp_RecipePage_SearchBox = e.value
      $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
      //console.log(response);
      })
      },0)
      }
       if (e.key == "disp_RecipePage_SearchDrop")
      {
      $timeout(function(){
      $scope.settings.disp_RecipePage_SearchDrop = e.value
      $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
      //console.log(response);
      })
      },0)
      }
      if (e.key == "disp_RecipePage_SocialShare")
      {
      $timeout(function(){
      $scope.settings.disp_RecipePage_SocialShare = e.value
      $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
      //console.log(response);
      })
      },0)
      }
      if (e.key == "disp_RecipePage_tags")
      {
      $timeout(function(){
      $scope.settings.disp_RecipePage_tags = e.value
      $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
      //console.log(response);
      })
      },0)
      }
      if (e.key == "_backgroundColor")
      {
      $timeout(function(){
      $scope.settings._backgroundColor = e.value.color
      $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
      //console.log(response);
      })
      },0)
      }
      if (e.key == "search_backgroundColor")
      {
      $timeout(function(){
      $scope.settings.search_backgroundColor = e.value.color
      $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
      //console.log(response);
      })
      },0)
      }
      if (e.key == "drop_backgroundColor")
      {
      $timeout(function(){
      $scope.settings.drop_backgroundColor = e.value.color
      $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
      //console.log(response);
      })
      },0)
      }
      if (e.key == "recipePage_font")
      {
      $timeout(function(){
      $scope.settings.recipePage_font = e.value.family
       $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
      //console.log(response);
      })
      },0)
      }
      if (e.key == "appLang")
      {
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
      if (e.key == "selectedLayout")
      {
      $timeout(function(){
      $scope.settings.selectedLayout = e.value
       $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
          //console.log(response);
          $window.location.href = $window.location.origin + $window.location.search;
          $scope.getTheSettings();
          
        })
      },0)  
      }
})
/*if (Wix.Utils.getViewMode() == 'editor' || Wix.Utils.getViewMode() == 'preview' )
{
   $timeout(function(){
      $scope.settings.selectedDropdown='searchrecipe'
       $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
        })
      },0)  

}*/
$scope.reloadRoute = function() {
   $route.reload();
}
  $scope.changeSettingsPageOrig = function () {
    $location.path("/");
    //Wix.Utils.navigateToSection({ sectionId : 'recipe_app' }, function(error){
    //Handle error use-case
    //});

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

      Wix.openModal($window.location.origin +"/dialog"+ $window.location.search, 400, 200, function(message)
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
      siteURL = siteURL +"/recipe/"+ recipe.UUID
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
      siteURL = siteURL +"/recipe/"+ recipe.UUID
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
      siteURL = siteURL +"/recipe/"+ recipe.UUID
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
      siteURL = siteURL +"/recipe/"+ recipe.UUID
      var googleURL = "https://plus.google.com/share?url="+encodeURI(siteURL)
      $window.open(googleURL, "_blank")
    })
}
       
  };
  $scope.gotoFacebook = function(recipe){

    Wix.getSiteInfo(function(siteInfo){
      var siteURL = siteInfo.url
      siteURL = siteURL +"/recipe/"+ recipe.UUID
      var facebookURL = "https://www.facebook.com/sharer/sharer.php?u="+encodeURI(siteURL)+"&t="+encodeURI(recipe.recipeName)
      $window.open(facebookURL, "_blank")
    })
    
  }
    $scope.gotoTwitter = function(recipe){

    Wix.getSiteInfo(function(siteInfo){
      var siteURL = siteInfo.url
      siteURL = siteURL +"/recipe/"+ recipe.UUID
      var twitterURL = "https://twitter.com/share?url="+encodeURI(siteURL)+"&text="+encodeURI(recipe.recipeName)
      $window.open(twitterURL, "_blank")
    })
    
  }

  $scope.gotoPinterest = function(recipe){

    Wix.getSiteInfo(function(siteInfo){
      var siteURL = siteInfo.url
      siteURL = siteURL +"/recipe/"+ recipe.UUID
      //console.log(siteURL)
      var pinterestURL = "https://pinterest.com/pin/create/button/?url="+encodeURI(siteURL)+"&media="+encodeURI(recipe.recipeImageSrc)+"&description="+encodeURI(recipe.shortDescription)
      //console.log(pinterestURL)
      $window.open(pinterestURL, "_blank")
    })
    
  }

    $scope.gotoGoogle = function(recipe){

    Wix.getSiteInfo(function(siteInfo){
      var siteURL = siteInfo.url
      siteURL = siteURL +"/recipe/"+ recipe.UUID
      var googleURL = "https://plus.google.com/share?url="+encodeURI(siteURL)
      $window.open(googleURL, "_blank")
    })
    
  }

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
function chunk(arr, size) {
  var newArr = [];
  for (var i=0; i<arr.length; i+=size) {
    newArr.push(arr.slice(i, i+size));
  }
  return newArr;
}

if ($location.path() !== '/stopNonLive')
{
console.log("i am called inside the root")  
//checkDomChange.checkDomChange();

$timeout(function () {
  console.log("i am called inside the root for adjust")
        checkDomChange.checkDomChange();
        Wix.setHeight(1);  
       $timeout(function () {
              var height1 = $document.height();
                Wix.setHeight(height1);
          },1);
       },1);
}
$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  });

});
