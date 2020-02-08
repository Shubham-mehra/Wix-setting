angular.module("recipeApp").controller("mainCtrl",function ($scope,$route,$document,$translate,$window,$q,$rootScope,$http,$location,$timeout, checkDomChange) {
  
  $(document).ready(function() {
    Wix.addEventListener(Wix.Events.STYLE_PARAMS_CHANGE, function(event) {
        console.log("Edit mode changed to " + event.editMode);
    });
    Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, function(event) {
      console.log("Edit mode changed to " + event.editMode);
      
    });
  });
  $scope.tagsData=[];
  $scope.drpDwnFiltrSearch={};
  let promiseTowaitForInitialization=[];
  const customInit=function(){
    promiseTowaitForInitialization.push($scope.getTheSettings());
    promiseTowaitForInitialization.push(getRecipeData());
    promiseTowaitForInitialization.push(getTagDataLocal());
    getTagData();
    $q.all(promiseTowaitForInitialization).then(function(suc){
      var theNewData = getmeRecipesAfterTagsMod($rootScope.staticRecipes,$scope.settings.appLangCode,$scope.tagList);
      $scope.recipes= theNewData;
      $scope.trueRecipes = theNewData.filter(function(element){return element.showRecipe==true});
      //$scope.theSettRecipeName =  $scope.trueRecipes[0].UUID;
      if($scope.trueRecipes.length>1)
      {
        $scope.theSettRecipeName =  $scope.trueRecipes[1].UUID;
      }
      else
      {
        $scope.theSettRecipeName =  $scope.trueRecipes[0].UUID;
      }
    },function(err){
      alert('Something went worng');
    })
  }
  const getTagData=function(){
    $http.get("/get-tag-data/"+Wix.Utils.getInstanceId()).then(function(data){
      if(data!=undefined&&data.data!=undefined&&data.data.length>0){
        $scope.tagsData=data.data.filter(function(val){return val.ParentId===0});
        angular.forEach($scope.tagsData,function(category){
          category.Title=category.Title.toUpperCase();
          $scope.drpDwnFiltrSearch[category.Title]=undefined;
          category.childs=[];
          angular.forEach(data.data,function(subCategory){
            if(subCategory._id!=null&&subCategory.ParentId!=0&&subCategory.ParentId==category._id){
              subCategory.Title=subCategory.Title.toUpperCase();
              category.childs.push(subCategory);
            }
          });
        });
      } 
      $scope.settings.disp_RecipePage_SearchDrop=($scope.tagsData.length>0)?true:false
    },function(err){
        console.log(err);
    })

   // $scope.settings.disp_RecipePage_SearchDrop=($scope.tagsData.length>0)?true:false
  }
  $scope.customDropDwnFltr=function(val){
    var flag=true;
    let tempTags=val.tags&&val.tags.length>0?val.tags.filter(function(v){return v!=undefined}).map(function(v){return v.toLowerCase()}):[];
    for(let key in $scope.drpDwnFiltrSearch){
      if($scope.drpDwnFiltrSearch[key]&&typeof $scope.drpDwnFiltrSearch[key]=='string'&&$scope.drpDwnFiltrSearch[key].length>0){
        if(tempTags.length>0&&tempTags.includes($scope.drpDwnFiltrSearch[key].toLowerCase())){
          flag=true;
        }else{
          return false;
        }
      }
    }
    return flag;
  }
  Wix.pushState("");
  Wix.addEventListener(Wix.Events.EDIT_MODE_CHANGE, function(e) {
      if (e.editMode == 'editor') {
        // console.log("I am in Search Page")
        $window.location.href = $window.location.origin + $window.location.search;
        /*Wix.getComponentInfo( function(compInfo) { 
          console.log(compInfo)
        });
        
        Wix.Utils.navigateToSection({ sectionId : 'recipe_app' },'/', function(error){});
        Wix.pushState("");*/
        
      }
  });
  window.addEventListener('resize', function(){
    $timeout(function () {
          //console.log("this gets executed from checkDomChange")
              var height1 = $document.height();
              Wix.setHeight(height1);
              //observer.disconnect();
      },0);
    });
  //console.log(Wix.Utils.getViewMode())
  //Wix.Data.Public.set("currentPage", $route.current.templateUrl, event => console.log($route.current.templateUrl))
  $scope.socialSettings ={"showFacebook": true,"showTwitter": true,"showPinterest": true,"showGoogle": true}


  $scope.getTheSettings = function () {
      return $http.get("/getSettings/" + Wix.Utils.getInstanceId()).then(function(payload){
        //settings=payload.data;
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
        // console.log($scope.settings)
        // $scope.settings.disp_RecipePage_SearchBox = settings.disp_RecipePage_SearchBox
        // $scope.settings.disp_RecipePage_SearchDrop = settings.disp_RecipePage_SearchDrop
        // $scope.settings.disp_RecipePage_SocialShare = settings.disp_RecipePage_SocialShare
        // $scope.settings.disp_RecipePage_tags = settings.disp_RecipePage_tags
        // $scope.settings._backgroundColor = settings._backgroundColor
        // $scope.settings.search_backgroundColor = settings.search_backgroundColor
        // $scope.settings.drop_backgroundColor = settings.drop_backgroundColor
        // $scope.settings.recipePage_font = settings.recipePage_font
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
      });
  }
  const getRecipeData=function(){
    return $http.get("/getRecipe/" + Wix.Utils.getInstanceId()).then(function(payload){
      $rootScope.staticRecipes=payload.data;
    })
  }
  const getTagDataLocal=function(){
    return $http.get('../data/tags.json').then(function(res){
      $scope.tagList = res.data;
    })
  }
  
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
        let curntSettingValue=angular.copy($scope.settings);
        curntSettingValue['selectedDropdown']='searchrecipe';
        if(e.key=='selectedDropdown'){
          var theSettRecipeName = $scope.theSettRecipeName;
          
          //code for route page to reciepage 
          (e.value=="recipepage")?$location.path("/recipe/"+theSettRecipeName):$location.path("/");
         //end here route page code 
        }
        else if (e.key == "disp_RecipePage_SearchBox"
            ||e.key == "disp_RecipePage_SearchDrop"
            ||e.key == "disp_RecipePage_SocialShare"
            ||e.key == "disp_RecipePage_tags"
            
            
          )
        {
          $timeout(function(){
            curntSettingValue[e.key]=e.value;
            $scope.settings[e.key] = e.value;
            $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), curntSettingValue).success(function(response){
          //console.log(response);
            })
          },0)
        }
        //Code for category data start here
          else if(e.key=="disp_Course"
                  ||e.key=="disp_Ingredients"
                  ||e.key=="disp_Cuisine"
                  ||e.key=="disp_Mealtime"
                  ||e.key=="disp_Difficulty"
                  ||e.key=="disp_Season"
                  )
          {
            $timeout(function(){
              e.key=e.key.toUpperCase();
              if(!curntSettingValue.hasOwnProperty('category')){curntSettingValue['category']={}};
              curntSettingValue.category[e.key]=e.value;
              if(!$scope.settings.hasOwnProperty('category')){$scope.settings['category']={}};
              $scope.settings.category[e.key] = e.value;
              //$scope.settings[e.key] = e.value;
              $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), curntSettingValue).success(function(response){
            //console.log(response);
              })
            },0)
          }
        //Code for Category Data ends Here
        else if(e.key == "_backgroundColor"
                ||e.key == "search_backgroundColor"
                ||e.key == "drop_backgroundColor" )
        {
          $timeout(function(){
            curntSettingValue[e.key]=e.value.color;
            $scope.settings[e.key] = e.value.color;
            $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), curntSettingValue).success(function(response){
          //console.log(response);
            })
          },0)
        }
        else if (e.key == "recipePage_font")
        {
          $timeout(function(){
            curntSettingValue[e.key] = e.value.family;
            $scope.settings[e.key] = e.value.family;
            $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), curntSettingValue).success(function(response){
            //console.log(response);
            })
          },0)
        }
        else if (e.key == "appLang")
        {
          $timeout(function(){
          $rootScope.staticRecipes = getmeRecipesForSaving($rootScope.staticRecipes,$scope.settings.appLangCode,$scope.tagList)
          $scope.settings.appLangCode = (e.value).split("!!")[0];
          $scope.settings.appLang = (e.value).split("!!")[1];
          var theNewData = getmeRecipesAfterTagsMod($rootScope.staticRecipes,$scope.settings.appLangCode,$scope.tagList);
          $scope.recipes= theNewData;
          var theRecipes = theNewData;
          $scope.trueRecipes = theRecipes.filter(function(element){return element.showRecipe==true});
          let temp=angular.copy($scope.settings);
          temp['selectedDropdown']='searchrecipe';
            $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), temp).success(function(response){
              $translate.use($scope.settings.appLangCode || 'en')
            })
          },0) 
      
        }
        else if (e.key == "selectedLayout")
        {
          $timeout(function(){
            curntSettingValue[e.key] = e.value;
            $scope.settings.selectedLayout = e.value
            $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), curntSettingValue).success(function(response){
              //console.log(response);
              $window.location.href = $window.location.origin + $window.location.search;
              $scope.getTheSettings();
              
            })
          },0)  
        }
        else{
          $timeout(function(){
            Wix.Styles.getStyleParams( function(styleParams) {
              if(e.key!='selectedDropdown'&&styleParams.booleans.hasOwnProperty(e.key)&&$scope.settings.hasOwnProperty(e.key)){
                $scope.settings[e.key]=e.value;
                curntSettingValue[e.key] = e.value;
                $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), curntSettingValue).success(function(response){
                  //console.log(response);
                })
              }
           });
          })
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
  //console.log("i am called inside the root")  
  //checkDomChange.checkDomChange();

  $timeout(function () {
   // console.log("i am called inside the root for adjust")
          checkDomChange.checkDomChange();
          Wix.setHeight(500); 
          //Wix.Settings.refreshApp();
        $timeout(function () {
                var height1 = $document.height();
                  Wix.setHeight(height1);
            },1);
        },1);
  }


  $('.message .close').on('click', function(){   
    $(this).closest('.message').transition('fade');
  });

  ////Test Code for dynamic tag adding.

customInit();
});
