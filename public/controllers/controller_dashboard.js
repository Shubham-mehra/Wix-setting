angular.module("dashboardApp").controller("dashboardCtrl", function ($scope,$translate,$http,$location,$window,$document,$rootScope,$timeout) {
      $scope.needSaving=false
      $scope.showAddtagsButton=false;//for Add Tags Button Show/Hide
      $scope.needSavingDraft=false
      //console.log(Wix.Utils.getLocale())
      $translate.use(Wix.Utils.getLocale() || 'en')
  
 var promiseGetData = $http.get("/getRecipe/" + Wix.Utils.getInstanceId());
    promiseGetData.then(function(payload){
      //console.log("I am in Promise DashBoard Controller")
      //console.log(payload.data)
      $scope.recipes=payload.data;
      $rootScope.recipes=payload.data;
      var theRecipes = $scope.recipes
      $scope.dashIndex = theRecipes.filter(function(element){return element.showRecipe==false}).length
      $scope.theTrueDashRecipes = theRecipes.filter(function(element){return element.showRecipe==true})
      $scope.theDraftDashRecipes = theRecipes.filter(function(element){return element.showRecipe==false})

       $timeout(function(){
      //console.log("I am in timeout DashBoard Controller")
      var theRecipes = $scope.recipes
      $scope.dashIndex = theRecipes.filter(function(element){return element.showRecipe==false}).length
      $scope.theTrueDashRecipes = theRecipes.filter(function(element){return element.showRecipe==true})
      $scope.theDraftDashRecipes = theRecipes.filter(function(element){return element.showRecipe==false})
      },0)
    })

  $timeout(function(){
    Wix.Dashboard.getEditorUrl(function(url) {
      $scope.$apply(function(){
       //url = url.replace(/^http:\/\//i, 'https://');
       $scope.settingsUrl = url

     })
    });
  },0)

$timeout(function(){
    var instanceValue = getQueryVariable('instance');
    var pair = instanceValue.split('.');
    var data = pair[1];
    data = decodeURIComponent(data)
    var base64 = $window.atob(data);
    var base64obj = JSON.parse(base64)
    if (base64obj.vendorProductId == 'recipe_001')
    {
      $scope.showUpgradeButton = false;
    }
    else
    {
      $scope.showUpgradeButton = true;
    }
},0)

$scope.openBilling = function(){

  //Wix.closeWindow({"reason": "this was clicked in the modal"});
    Wix.Settings.openBillingPage();

}

$scope.clickDeleteYes = function(){
  Wix.closeWindow({"reason": true});
}
$scope.clickDeleteNo = function(){
  Wix.closeWindow({"reason": false});
}
var dragStart = function(e, ui) {
        ui.item.data('start', ui.item.index());
    }
var dragEnd = function(e, ui) {
        var start = ui.item.data('start'),
            end = ui.item.index();
           $scope.theTrueDashRecipes.splice(end, 0, 
           $scope.theTrueDashRecipes.splice(start, 1)[0]);
           $scope.$apply();
          $scope.saveChangesDash();  
    }

 var sortableEle = $('#sortable').sortable({
        start: dragStart,
        update: dragEnd
    });

 $( "#sortable" ).disableSelection();


 $scope.gotoDash = function(){
    $location.path("/");
  };

$scope.removeRecipeDash = function(recipe) {
/*console.log($window.location.origin)
console.log($window.location.search)
  Wix.openModal($window.location.origin +"/dashboard#/deleteConfirm"+ $window.location.search, 400, 200, function(message)
   { 
  if (message.message.reason == true)
  {
    var index = $scope.theTrueDashRecipes.indexOf(recipe)
    $scope.theTrueDashRecipes.splice(index,1);
    $scope.saveChangesDash(); 
  }
  else{}
});*/

 var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    onOpen: function() {
        // console.log('modal open');
    },
    onClose: function() {
        // console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});

// set content
modal.setContent('<h1>Delete</h1><p>Sure you want to delete this recipe?</p>');

// add another button
modal.addFooterBtn('Delete', 'tingle-btn tingle-btn--danger tingle-btn--pull-right', function() {
    // here goes some logic
    modal.close();
    var index = $scope.theTrueDashRecipes.indexOf(recipe)
    $scope.theTrueDashRecipes.splice(index,1);
    $scope.saveChangesDash(); 
});
// add a button
modal.addFooterBtn('Not Now', 'tingle-btn tingle-btn--default tingle-btn--pull-right', function() {
    // here goes some logic
    modal.close();
});


modal.open();

}

  $scope.contactUs = function() {

/*  Wix.openModal($window.location.origin +"/dashboard#/contactUs"+ $window.location.search, 400, 200, function(message)
   { 
  
  });*/

  var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});

// set content
modal.setContent('<h1>Contact App Developer</h1><p>Email : disha.it@outlook.com</p>');

// add another button
modal.open();
     
 };
  $scope.removeRecipeDraft = function(recipe) {

/*      Wix.openModal($window.location.origin +"/dashboard#/deleteConfirm"+ $window.location.search, 400, 200, function(message)
   { 
  if (message.message.reason == true)
  {
     var index = $scope.theDraftDashRecipes.indexOf(recipe)
     $scope.theDraftDashRecipes.splice(index,1);
     $scope.saveChangesDashDraft(); 
  }
  else{}
});*/
       
var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});

// set content
modal.setContent('<h1>Delete</h1><p>Sure you want to delete this recipe?</p>');

// add another button
modal.addFooterBtn('Delete', 'tingle-btn tingle-btn--danger tingle-btn--pull-right', function() {
    // here goes some logic
    modal.close();
    var index = $scope.theDraftDashRecipes.indexOf(recipe)
     $scope.theDraftDashRecipes.splice(index,1);
     $scope.saveChangesDashDraft(); 
});
// add a button
modal.addFooterBtn('Not Now', 'tingle-btn tingle-btn--default tingle-btn--pull-right', function() {
    // here goes some logic
    modal.close();
});


modal.open();
       
  };

  $scope.editRecipe = function(recipe) {
    //console.log(recipe)
      var array1 = $scope.theTrueDashRecipes 
      var array2 = $scope.theDraftDashRecipes 
      $scope.recipes = array1.concat(array2)
        var index = $scope.recipes.indexOf(recipe)
        $rootScope.recipes=$scope.recipes;
          $location.path("/recipeDetail/"+index);
  };
$scope.editRecipeFromDraft  = function(recipe) {
      var array1 = $scope.theTrueDashRecipes 
      var array2 = $scope.theDraftDashRecipes 
      $scope.recipes = array1.concat(array2)
        var index = $scope.recipes.indexOf(recipe)
          $rootScope.recipes=$scope.recipes;
          $location.path("/recipeDetailDraft/"+index);
  };
  $scope.gotoCreateTags=function()
  {
      $location.path("/createTags/"+ 0);
  }
$scope.gotoCreateRecipe = function () {
    /*var array1 = $scope.theTrueDashRecipes 
    var array2 = $scope.theDraftDashRecipes 
    $scope.recipes = array1.concat(array2)*/
      var index = $scope.recipes.length;
     /* var theRecipes = $scope.recipes
      $scope.dashIndex = theRecipes.filter(function(element){return element.showRecipe==false}).length*/
      var theRecipes = $scope.recipes
      var trueIndex = theRecipes.filter(function(element){return element.showRecipe==true}).length
     /* var urlParams = new URLSearchParams($window.location.search);
      var instanceValue = urlParams.get('instance')*/
      var instanceValue = getQueryVariable('instance');

      var pair = instanceValue.split('.');
      var data = pair[1];
      data = decodeURIComponent(data)
      var base64 = $window.atob(data);
      var base64obj = JSON.parse(base64)
      if (trueIndex < 2 || base64obj.vendorProductId=='recipe_001') 
      {
      $scope.recipes.unshift({"id": index+1,
                        "recipeImageSrc": "",
                        "videoURL":"",
                        "UUID" : generateUUID(),
                        "recipeName": "",
                        "servingSize": "",
                        "prepTime": "",
                        "nutrition":{
                          "calories": "",
                          "fat": "",
                          "carbohydrate": "",
                          "protien": "",
                          "disclaimer": ""
                        },
                        "tags": [],
                        "totalTime": "",
                        "ingredients" : [{
                        "dish" : "",
                        "ingredient":[""]
                        }],
                        "directions" : [{
                        "step" : "Step 1" ,
                        "direction" : ""
                         }],
                        "expertTips": []
                        });
      $rootScope.recipes=$scope.recipes;
      //console.log($rootScope.recipes)
      $location.path("/createRecipe/"+ 0);
       
      } else {
        Wix.Dashboard.openBillingPage();
      }
    }

function getQueryVariable(variable) {
  var query = $window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
  }
  return(false);
}

function generateUUID(){
    var d = new Date().getTime();
    if(window.performance && typeof window.performance.now === "function"){
        d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}
$scope.gotoDraftRecipe = function () {
      $location.path("/draftRecipes");
    }

$scope.saveChangesDash = function () {

  if ($scope.checkSignedDate(Wix.Utils.getSignDate())) 
  {
        $scope.needSaving = false
        //console.log(Wix.Utils.getInstanceId());
        //console.log("i am in saveChangeDash")
        var array1 = $scope.theTrueDashRecipes
        //console.log($scope.theTrueDashRecipes)
       
        var array2 = $scope.theDraftDashRecipes 
        $scope.recipes = array1.concat(array2)
        //console.log($scope.recipes)
            $http.put("/saveRecipes/" + Wix.Utils.getInstanceId(), $scope.recipes).success(function(response){
            $http.get("/getRecipe/" + Wix.Utils.getInstanceId()).then(function(payload){
                 $timeout(function(){
                  $scope.recipes=payload.data;
                  //console.log($scope.recipes)
                  $rootScope.recipes=payload.data;
                  var theRecipes = $scope.recipes
                  $scope.dashIndex = theRecipes.filter(function(element){return element.showRecipe==false}).length
                  $scope.theTrueDashRecipes = theRecipes.filter(function(element){return element.showRecipe==true})
                  $scope.theDraftDashRecipes = theRecipes.filter(function(element){return element.showRecipe==false})

              },0)
            })
               })
              $location.url("/");
    }
      $scope.needSaving = false
       $http.get("/getRecipe/" + Wix.Utils.getInstanceId()).then(function(payload){
                 $timeout(function(){
                  $scope.recipes=payload.data;
                  //console.log($scope.recipes)
                  $rootScope.recipes=payload.data;
                  var theRecipes = $scope.recipes
                  $scope.dashIndex = theRecipes.filter(function(element){return element.showRecipe==false}).length
                  $scope.theTrueDashRecipes = theRecipes.filter(function(element){return element.showRecipe==true})
                  $scope.theDraftDashRecipes = theRecipes.filter(function(element){return element.showRecipe==false})

              },0)
        })
  }
 
$scope.checkSignedDate = function (NewSignedDate) {
      var d1 = new Date(NewSignedDate);
      var d2 = new Date();
      var day = 1000*60*60*24;
      var diff = Math.floor((d2.getTime()-d1.getTime())/(day));
      //console.log(diff)
      if (diff < 1) {return true;}
      else {
        Wix.Dashboard.openModal("https://radiant-island-16688.herokuapp.com/images/error.png", 629, 180);
        return false;
      }  
    }

$scope.saveChangesDashDraft = function () {
  $scope.needSavingDraft = false
  //console.log(Wix.Utils.getInstanceId());
  //console.log("i am in saveChangeDash")
  var array1 = $scope.theTrueDashRecipes
  //console.log($scope.theTrueDashRecipes)
 
  var array2 = $scope.theDraftDashRecipes 
  $scope.recipes = array1.concat(array2)
  //console.log($scope.recipes)
      $http.put("/saveRecipes/" + Wix.Utils.getInstanceId(), $scope.recipes).success(function(response){
      $http.get("/getRecipe/" + Wix.Utils.getInstanceId()).then(function(payload){
           $timeout(function(){
            $scope.recipes=payload.data;
            //console.log($scope.recipes)
            $rootScope.recipes=payload.data;
            var theRecipes = $scope.recipes
            $scope.dashIndex = theRecipes.filter(function(element){return element.showRecipe==false}).length
            $scope.theTrueDashRecipes = theRecipes.filter(function(element){return element.showRecipe==true})
            $scope.theDraftDashRecipes = theRecipes.filter(function(element){return element.showRecipe==false})

        },0)
      })
         })
        $location.url("/draftRecipes");
    }

    $('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
  })

  const customInit=function(){
    var instanceValue = getQueryVariable('instance');
    var pair = instanceValue.split('.');
    var data = pair[1];
    data = decodeURIComponent(data)
    var base64 = $window.atob(data);
    var base64obj = JSON.parse(base64)
    if (base64obj.vendorProductId != undefined)
    {
      $scope.showAddtagsButton = true;
    }
    else
    {
      $scope.showAddtagsButton = false;
    }
    function getQueryVariable(variable) {
      var query = $window.location.search.substring(1);
      var vars = query.split("&");
      for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
      }
      return(false);
    }
  }
  customInit(); 

});
