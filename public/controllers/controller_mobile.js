angular.module("recipeAppMobile").controller("mainCtrlMobile", function ($scope ,$document,$translate,$window,$location,$q,$rootScope,$http, $timeout, checkDomChange) {
  $scope.mobileTagsData=[];//scrope for handle mobile dropdown tag data
  $scope.drpDwnFiltrSearchmobile={};//scope for handle filter tags
  $scope.socialSettings =
  {
"showFacebook": true,
"showTwitter": true,
"showPinterest": true,
"showGoogle": true
  }
  

//code edit -for-dropdown

$http.get("/get-tag-data/"+Wix.Utils.getInstanceId()).then(function(data)
{
  if(data!=undefined&&data.data!=undefined&&data.data.length>0)
  {
    $scope.mobileTagsData=data.data.filter(function(values){return values.ParentId===0});
    angular.forEach($scope.mobileTagsData,function(mobilecategory)
    {
      mobilecategory.Title=mobilecategory.Title.toUpperCase();
      $scope.drpDwnFiltrSearchmobile[mobilecategory.Title]=undefined;
      mobilecategory.childs=[];
      angular.forEach(data.data,function(mobilesubCategory)
      {
        if(mobilesubCategory._id!=null&&mobilesubCategory.ParentId!=0&&mobilesubCategory.ParentId==mobilecategory._id){
          mobilesubCategory.Title=mobilesubCategory.Title.toUpperCase();
          mobilecategory.childs.push(mobilesubCategory);
        }
      });
    });
  } 
},function(err){
    console.log(err);
})


$scope.mobiledropDownFilter=function(tagvalues){
  var flag=true;
  let tempTags=tagvalues.tags&&tagvalues.tags.length>0?tagvalues.tags.map(function(values){return values.toLowerCase()}):[];
  for(let key in $scope.drpDwnFiltrSearchmobile){
    if($scope.drpDwnFiltrSearchmobile[key]&&typeof $scope.drpDwnFiltrSearchmobile[key]=='string'&&$scope.drpDwnFiltrSearchmobile[key].length>0){
      if(tempTags.length>0&&tempTags.includes($scope.drpDwnFiltrSearchmobile[key].toLowerCase())){
        flag=true;
      }else{
        return false;
      }
    }
  }
  return flag;
}

//code end -for-dropdown



Wix.pushState("");
  //All the settings initialization
  var promiseGetData = $http.get("/getSettings/" + Wix.Utils.getInstanceId());
  promiseGetData.then(function(payload){
    settings=payload.data;
    $scope.settings=payload.data
    if(!$scope.settings.hasOwnProperty('category')){$scope.settings['category']=
                                                              {
                                                                    "DISP_INGREDIENTS": true,
                                                                    "DISP_CUISINE": true,
                                                                    "DISP_COURSE": true,
                                                                    "DISP_SEASON": true,
                                                                    "DISP_MEALTIME": true,
                                                                    "DISP_DIFFICULTY": true
                                                                }
                                                      };
 
    $scope.settings.disp_RecipePage_SearchBox = settings.disp_RecipePage_SearchBox
    //made change to accomplish disapeering of drop down on Jan 28th 2019
    //$scope.settings.disp_RecipePage_SearchDrop = false
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
   checkDomChange.checkDomChange();
   checkDomChange.checkDomChangeAttr();
  })

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

    });
  })
  $scope.gotoRecipe = function(UUID,name,id){  
     $location.path("/recipe/"+UUID);      
  }

// Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, function(e) {
//       console.log(e.key +"and "+ e.value);

//       if (e.key == "disp_RecipePage_SearchBox")
//       {
//       $timeout(function(){
//       $scope.settings.disp_RecipePage_SearchBox = e.value
//       $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
//       console.log(response);
//       })
//       },0)
//       }
//        if (e.key == "disp_RecipePage_SearchDrop")
//       {
//       $timeout(function(){
//       $scope.settings.disp_RecipePage_SearchDrop = e.value
//       $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
//       console.log(response);
//       })
//       },0)
//       }
//       if (e.key == "disp_RecipePage_SocialShare")
//       {
//       $timeout(function(){
//       $scope.settings.disp_RecipePage_SocialShare = e.value
//       $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
//       console.log(response);
//       })
//       },0)
//       }
//       if (e.key == "disp_RecipePage_tags")
//       {
//       $timeout(function(){
//       $scope.settings.disp_RecipePage_tags = e.value
//       $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
//       console.log(response);
//       })
//       },0)
//       }
//       if (e.key == "_backgroundColor")
//       {
//       $timeout(function(){
//       $scope.settings._backgroundColor = e.value.color
//       $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
//       console.log(response);
//       })
//       },0)
//       }
//       if (e.key == "search_backgroundColor")
//       {
//       $timeout(function(){
//       $scope.settings.search_backgroundColor = e.value.color
//       $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
//       console.log(response);
//       })
//       },0)
//       }
//       if (e.key == "drop_backgroundColor")
//       {
//       $timeout(function(){
//       $scope.settings.drop_backgroundColor = e.value.color
//       $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
//       console.log(response);
//       })
//       },0)
//       }
//       if (e.key == "recipePage_font")
//       {
//       $timeout(function(){
//       $scope.settings.recipePage_font = e.value.family
//        $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
//       console.log(response);
//       })
//       },0)
//       }
//        if (e.key == "appLang")
//       {
//       $timeout(function(){
//       $rootScope.staticRecipes = getmeRecipesForSaving($rootScope.staticRecipes,$scope.settings.appLangCode,$scope.tagList)
//       $scope.settings.appLangCode = (e.value).split("!!")[0]
//       $scope.settings.appLang = (e.value).split("!!")[1]
//        var theNewData = getmeRecipesAfterTagsMod($rootScope.staticRecipes,$scope.settings.appLangCode,$scope.tagList);
//        $scope.recipes= theNewData;
//        var theRecipes = theNewData;
//        $scope.trueRecipes = theRecipes.filter(function(element){return element.showRecipe==true});
      
//          $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.settings).success(function(response){
//           $translate.use($scope.settings.appLangCode || 'en')
//         })
//        },0) 
//       }
      
// })
// Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, function(e) {
//   //console.log(e.key +" and "+ e.value);
//   let curntSettingValue=angular.copy($scope.settings);
//   curntSettingValue['selectedDropdown']='searchrecipe';
//   if(e.key=='selectedDropdown'){
//     var theSettRecipeName = $scope.theSettRecipeName;
    
//     //code for route page to reciepage 
//     (e.value=="recipepage")?$location.path("/recipe/"+theSettRecipeName):$location.path("/");
//    //end here route page code 
//   }
//   else if (e.key == "disp_RecipePage_SearchBox"
//       ||e.key == "disp_RecipePage_SearchDrop"
//       ||e.key == "disp_RecipePage_SocialShare"
//       ||e.key == "disp_RecipePage_tags"
      
      
//     )
//   {
//     $timeout(function(){
//       curntSettingValue[e.key]=e.value;
//       $scope.settings[e.key] = e.value;
//       $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), curntSettingValue).success(function(response){
//     //console.log(response);
//       })
//     },0)
//   }
//   //Code for category data start here
//     else if(e.key=="disp_Course"
//             ||e.key=="disp_Ingredients"
//             ||e.key=="disp_Cuisine"
//             ||e.key=="disp_Mealtime"
//             ||e.key=="disp_Difficulty"
//             ||e.key=="disp_Season"
//             )
//     {
//       $timeout(function(){
//         e.key=e.key.toUpperCase();
//         if(!curntSettingValue.hasOwnProperty('category')){curntSettingValue['category']={}};
//         curntSettingValue.category[e.key]=e.value;
//         if(!$scope.settings.hasOwnProperty('category')){$scope.settings['category']={}};
//         $scope.settings.category[e.key] = e.value;
//         //$scope.settings[e.key] = e.value;
//         $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), curntSettingValue).success(function(response){
//       //console.log(response);
//         })
//       },0)
//     }
//   //Code for Category Data ends Here
//   else if(e.key == "_backgroundColor"
//           ||e.key == "search_backgroundColor"
//           ||e.key == "drop_backgroundColor" )
//   {
//     $timeout(function(){
//       curntSettingValue[e.key]=e.value.color;
//       $scope.settings[e.key] = e.value.color;
//       $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), curntSettingValue).success(function(response){
//     //console.log(response);
//       })
//     },0)
//   }
//   else if (e.key == "recipePage_font")
//   {
//     $timeout(function(){
//       curntSettingValue[e.key] = e.value.family;
//       $scope.settings[e.key] = e.value.family;
//       $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), curntSettingValue).success(function(response){
//       //console.log(response);
//       })
//     },0)
//   }
//   else if (e.key == "appLang")
//   {
//     $timeout(function(){
//     $rootScope.staticRecipes = getmeRecipesForSaving($rootScope.staticRecipes,$scope.settings.appLangCode,$scope.tagList)
//     $scope.settings.appLangCode = (e.value).split("!!")[0];
//     $scope.settings.appLang = (e.value).split("!!")[1];
//     var theNewData = getmeRecipesAfterTagsMod($rootScope.staticRecipes,$scope.settings.appLangCode,$scope.tagList);
//     $scope.recipes= theNewData;
//     var theRecipes = theNewData;
//     $scope.trueRecipes = theRecipes.filter(function(element){return element.showRecipe==true});
//     let temp=angular.copy($scope.settings);
//     temp['selectedDropdown']='searchrecipe';
//       $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), temp).success(function(response){
//         $translate.use($scope.settings.appLangCode || 'en')
//       })
//     },0) 

//   }
//   else if (e.key == "selectedLayout")
//   {
//     $timeout(function(){
//       curntSettingValue[e.key] = e.value;
//       $scope.settings.selectedLayout = e.value
//       $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), curntSettingValue).success(function(response){
//         //console.log(response);
//         $window.location.href = $window.location.origin + $window.location.search;
//         $scope.getTheSettings();
      
//       })
//     },0)  
//   }
//   else{
//     $timeout(function(){
//       Wix.Styles.getStyleParams( function(styleParams) {
//         if(e.key!='selectedDropdown'&&styleParams.booleans.hasOwnProperty(e.key)&&$scope.settings.hasOwnProperty(e.key)){
//           $scope.settings[e.key]=e.value;
//           curntSettingValue[e.key] = e.value;
//           $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), curntSettingValue).success(function(response){
//             //console.log(response);
//           })
//         }
//      });
//     })
//   }
// })
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
    console.log(siteURL)
    var pinterestURL = "https://pinterest.com/pin/create/button/?url="+encodeURI(siteURL)+"&media="+encodeURI(recipe.recipeImageSrc)+"&description="+encodeURI(recipe.shortDescription)
    console.log(pinterestURL)
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
  console.log("i am in the getmeRecipesAfterTagsMod")
  console.log(arr)
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

checkDomChange.checkDomChange();
checkDomChange.checkDomChangeAttr();
/*$rootScope.$on('$routeChangeSuccess', function(event,next, current) { 
  console.log("route change happened")
  $timeout(function () {checkDomChange.checkDomChange();},0);
});
*/

$timeout(function () {
      checkDomChange.checkDomChange();
      checkDomChange.checkDomChangeAttr();
      Wix.setHeight(500);  
     $timeout(function () {
            var height1 = $document.height();
            Wix.setHeight(height1);
        },0);
     },0);

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

});
