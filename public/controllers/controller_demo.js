angular.module("recipeAppDemo").controller("mainCtrlDemo", function ($scope ,$document,$translate,$window,$q,$rootScope,$http,$location,$timeout, checkDomChange) {
    var instanceIdCons='5cb5d9b2-040b-446a-a14d-e8c8d0eb8fb1'
    Wix.pushState("");
    $scope.socialSettings =
    {
  "showFacebook": true,
  "showTwitter": true,
  "showPinterest": true,
  "showGoogle": true
    }

$scope.getTheSettings = function () {
    //All the settings initialization
    var promiseGetData = $http.get("/getSettings/" + instanceIdCons);
    promiseGetData.then(function(payload){
      settings=payload.data;
      $scope.settings=payload.data
   
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
        console.log("i am in block")
        $scope.showBlockLayout = true;
        $scope.showListLayout = false;
      }
      if ($scope.settings.selectedLayout == "list")
      {
        console.log("i am in list")
        $scope.showBlockLayout = false;
        $scope.showListLayout = true;
      }
    })

  }
    $scope.getTheSettings();

    $scope.gotoRecipe = function(UUID,name,id){
     /* $rootScope.recipes = $scope.recipes;*/
   /*  name = encodeURIComponent(encodeURIComponent(name));*/
      $location.path("/recipe/"+UUID);
    }

/*Wix.setPageMetadata({
     title: 'Recipes',
     description: 'Easily Create,Search,Display & Share Recipes'
    });*/

Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, function(e) {
      console.log(e.key +" and "+ e.value);

      if (e.key == "disp_RecipePage_SearchBox")
      {
      $timeout(function(){
      $scope.settings.disp_RecipePage_SearchBox = e.value
      $http.put("/updateSettings/"+ instanceIdCons, $scope.settings).success(function(response){
      console.log(response);
      })
      },0)
      }
       if (e.key == "disp_RecipePage_SearchDrop")
      {
      $timeout(function(){
      $scope.settings.disp_RecipePage_SearchDrop = e.value
      $http.put("/updateSettings/"+ instanceIdCons, $scope.settings).success(function(response){
      console.log(response);
      })
      },0)
      }
      if (e.key == "disp_RecipePage_SocialShare")
      {
      $timeout(function(){
      $scope.settings.disp_RecipePage_SocialShare = e.value
      $http.put("/updateSettings/"+ instanceIdCons, $scope.settings).success(function(response){
      console.log(response);
      })
      },0)
      }
      if (e.key == "disp_RecipePage_tags")
      {
      $timeout(function(){
      $scope.settings.disp_RecipePage_tags = e.value
      $http.put("/updateSettings/"+ instanceIdCons, $scope.settings).success(function(response){
      console.log(response);
      })
      },0)
      }
      if (e.key == "_backgroundColor")
      {
      $timeout(function(){
      $scope.settings._backgroundColor = e.value.color
      $http.put("/updateSettings/"+ instanceIdCons, $scope.settings).success(function(response){
      console.log(response);
      })
      },0)
      }
      if (e.key == "search_backgroundColor")
      {
      $timeout(function(){
      $scope.settings.search_backgroundColor = e.value.color
      $http.put("/updateSettings/"+ instanceIdCons, $scope.settings).success(function(response){
      console.log(response);
      })
      },0)
      }
      if (e.key == "drop_backgroundColor")
      {
      $timeout(function(){
      $scope.settings.drop_backgroundColor = e.value.color
      $http.put("/updateSettings/"+ instanceIdCons, $scope.settings).success(function(response){
      console.log(response);
      })
      },0)
      }
      if (e.key == "recipePage_font")
      {
      $timeout(function(){
      $scope.settings.recipePage_font = e.value.family
       $http.put("/updateSettings/"+ instanceIdCons, $scope.settings).success(function(response){
      console.log(response);
      })
      },0)
      }
      if (e.key == "appLang")
      {
      $timeout(function(){
      $scope.settings.appLangCode = (e.value).split("!!")[0]
      $scope.settings.appLang = (e.value).split("!!")[1]
       $http.put("/updateSettings/"+ instanceIdCons, $scope.settings).success(function(response){
      console.log(response);
        $timeout(function(){
           $translate.use($scope.settings.appLangCode || 'en')
        },0)
      })
      },0)
      }
      if (e.key == "selectedLayout")
      {
      $timeout(function(){
      $scope.settings.selectedLayout = e.value
       $http.put("/updateSettings/"+ instanceIdCons, $scope.settings).success(function(response){
          console.log(response);
          $scope.getTheSettings();
          
        })
      },0)
      }
      

/*Wix.Settings.getSitePages(function(sitePages) {
      // do something with the site pages
      for (i = 0; i < sitePages.length; i++) {
        if (sitePages[i].title == 'Recipe App' ){
          Wix.navigateToPage(sitePages[i].id);
        }
      }
});*/
})

  $scope.changeSettingsPageOrig = function () {
    Wix.Utils.navigateToSection({ sectionId : 'recipe_app' }, function(error){
    //Handle error use-case
    });

 };

  $scope.gotoFacebook = function(recipe){

    Wix.getSiteInfo(function(siteInfo){
      var siteURL = siteInfo.url
      var facebookURL = "https://www.facebook.com/sharer/sharer.php?u="+encodeURI(siteURL)
      $window.open(facebookURL, "_blank")
    })
    
  }
    $scope.gotoTwitter = function(recipe){

    Wix.getSiteInfo(function(siteInfo){
      var siteURL = siteInfo.url
      var twitterURL = "https://twitter.com/home?status="+encodeURI(siteURL)
      $window.open(twitterURL, "_blank")
    })
    
  }

  $scope.gotoPinterest = function(recipe){

    Wix.getSiteInfo(function(siteInfo){
      var siteURL = siteInfo.url
      var pinterestURL = "https://pinterest.com/pin/create/button/?url="+encodeURI(siteURL)+"&media="+encodeURI(recipe.recipeImageSrc)+"&description="+encodeURI(recipe.shortDescription)
      console.log(pinterestURL)
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
    var promiseGetData = $http.get("/getRecipe/" + instanceIdCons);
     promiseGetData.then(function(payload){
      $scope.recipes=payload.data;
      var theRecipes =payload.data;
      $scope.trueRecipes = theRecipes.filter(function(element){return element.showRecipe==true});
      var theTrueRecipes=$scope.trueRecipes;
      $scope.chunkedData = chunk(theTrueRecipes, 3);
     /* var theRecipes = $scope.recipes
      var trueIndex = theRecipes.filter(function(element){return element.showRecipe==true}).length*/
    })

function chunk(arr, size) {
  var newArr = [];
  for (var i=0; i<arr.length; i+=size) {
    newArr.push(arr.slice(i, i+size));
  }
  return newArr;
}

/*  $scope.gotoRecipe = function(id){
      $rootScope.recipes = $scope.recipes;
      $location.path("/recipe/"+id);

    }*/


//checkDomChange.checkDomChange();
/*$rootScope.$on('$routeChangeSuccess', function(event,next, current) { 
    console.log("route change happened")
    $timeout(function () {checkDomChange.checkDomChange();},0);
 });
*/

$timeout(function () {
        checkDomChange.checkDomChange();
        /*Wix.setHeight(1000);  
       $timeout(function () {
              var height1 = $document.height();
                Wix.setHeight(height1);
          },0);*/
       },0);

/*$timeout(function () {
                        Wix.setHeight($("body[ng-app='recipeApp']").height() + 20);
            }, 3000);*/
/*$('.mydiv').bind("DOMSubtreeModified",function(){
    $timeout(function () {
    Wix.setHeight(0);  
   $timeout(function () {
          var height1 = $document.height();
          Wix.setHeight(height1);
      },0);
   },0);
});*/

 /*
//$scope.$on("$viewContentLoaded", function(){

    var qdefer = $q.defer();
    var foo = function() {
      $timeout(function() {
            $timeout(function() {
                qdefer.resolve();
            }, 0);//Timeout
            }, 0);
        }; 

    var checkViewContenLoadedListner = $rootScope.$on('$viewContentLoaded', foo);

    qdefer.promise.then(function(){
      checkViewContenLoadedListner();
      var height1 = $document.height();
                //height1 = $(document).height();
                Wix.setHeight(height1);
    });

    $scope.onViewLoad = function(){
        alert("i am inside");
        var height = $document;
        Wix.setHeight(height);
    }; 
    

      viewContentLoaded.getLoaded().then(function(){
    //Remove Listner when done
    viewContentLoaded.removeViewContenListner();
    var height1 = document.documentElement.scrollHeight;
    //height1 = $(document).height();
    Wix.setHeight(height1);
}, function(reason) {
    //$log.error(reason);
});
    }); 
/*
    $scope.onViewLoad = function(){
      viewContentLoaded.getLoaded().then(function(){
    //Remove Listner when done
    viewContentLoaded.removeViewContenListner();
    var height1 = document.documentElement.scrollHeight;
    //height1 = $(document).height();
    Wix.setHeight(height1);
}, function(reason) {
    //$log.error(reason);
});
  };
    
/*
    onViewLoad = setTimeout(function(){
        console.log('view changed');
        var height = document.documentElement.scrollHeight;
        Wix.setHeight(height);
        $scope.$digest();
    } 
    ,0);  

    $timeout(function () {
        var height1 = document.documentElement.scrollHeight;
        Wix.setHeight(height1);
    });

    viewContentLoaded.getLoaded().then(function(){
    //Remove Listner when done
    viewContentLoaded.removeViewContenListner();
    //var height1 = document.documentElement.scrollHeight;
    height1 = $(document).height();
    Wix.setHeight(height1);
}, function(reason) {
    //$log.error(reason);
});

     $scope.$on("$viewContentLoaded", function(){
      $timeout(function() {
        var height1 = document.documentElement.scrollHeight;
        Wix.setHeight(height1);
      },0);
    }); 

   $(".panel").on('hidden.bs.collapse || shown.bs.collapse', function () {
    $scope.onViewLoad();
  })
  */ 

$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
  })



});
