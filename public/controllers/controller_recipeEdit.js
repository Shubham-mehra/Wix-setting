angular.module('dashboardApp').controller("recipeDetailCtrl", function ($scope,$sce,$route,$translate,$rootScope,$http,$routeParams,$location,$window,$document,$timeout) {
  $scope.index = $routeParams.index ;
  $http.get('../data/tags.json')
        .then(function(res){
        $scope.tagList = res.data;
        var theLang = Wix.Utils.getLocale()
        $rootScope.recipes = getmeRecipesAfterTagsMod($rootScope.recipes,theLang,$scope.tagList);
        });
$scope.recipes = $rootScope.recipes;
// edit data for recipe desc
$scope.desc=($location.path().includes('/createRecipe/'))?"":$scope.recipes[$scope.index].shortDescription;
$scope.tempDietInfo=($location.path().includes('/createRecipe/'))?"":$scope.recipes[$scope.index].nutrition.disclaimer;
$scope.RecipeNameError=true;
$scope.DescError=true;
// end of code 
// console.log($location.path())
if ($location.path() != "/checkBack")
{changeVideotoOrig($scope.index);}
$translate.use(Wix.Utils.getLocale() || 'en')

$timeout(function(){
   /* var urlParams = new URLSearchParams($window.location.search);
    var instanceValue = urlParams.get('instance')*/
    var instanceValue = getQueryVariable('instance');
   /* console.log(instanceValue)*/
    var pair = instanceValue.split('.');
    var data = pair[1];
  /*  console.log(data)*/
    data = decodeURIComponent(data)
    var base64 = $window.atob(data);
    var base64obj = JSON.parse(base64)
    // console.log("The base is "+base64obj)
   /* console.log("This is the vendor product ID from code " +base64obj.vendorProductId)*/
    if (base64obj.vendorProductId == 'recipe_001')
    {
      $scope.showUpgradeButton = false;
    }
    else
    {
      $scope.showUpgradeButton = true;
    }
},0)

 $scope.gotoDash = function(){
    $location.path("/");
  };
  $scope.gotoDraftDash = function(){
    $location.path("/draftRecipes");
  };

 $scope.openMediaDialog = function(index){
    Wix.Dashboard.openMediaDialog(Wix.Settings.MediaType.IMAGE, false, function(data) {
          $timeout(function() {
      $scope.recipes[index].recipeImageSrc = Wix.Utils.Media.getImageUrl(data.relativeUri) ;
          }, 10);
    });
  }
$scope.clickBackYes = function(){
  Wix.closeWindow({"reason": true});
}
$scope.clickBackNo = function(){
  Wix.closeWindow({"reason": false});
}

$scope.checkBack = function() {
/*  console.log($window.location.origin)
  console.log($window.location.search)*/

     /* Wix.openModal($window.location.origin +"/dashboard#/checkBack"+ $window.location.search, 400, 200, function(message)
   { 
  if (message.message.reason == true)
  {

    $timeout(function() {
      $scope.gotoDash(); 
    },0)
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
modal.setContent('<h1>Go Back</h1><p>Sure you want to exit? You may lose unsaved changes.</p>');

// add another button
modal.addFooterBtn('Continue Editing', 'tingle-btn tingle-btn--primary tingle-btn--pull-right', function() {
    // here goes some logic
    modal.close();
});
// add a button
modal.addFooterBtn('Back to Home', 'tingle-btn tingle-btn--default tingle-btn--pull-right', function() {
    // here goes some logic
    modal.close();
    $timeout(function() {
      $scope.gotoDash(); 
    },0)
});



modal.open();

  };
 
$scope.checkBackDraft = function() {
/*  console.log($window.location.origin)
  console.log($window.location.search)

      Wix.openModal($window.location.origin +"/dashboard#/checkBack"+ $window.location.search, 400, 200, function(message)
   { 
  if (message.message.reason == true)
  {

    $timeout(function() {
      $scope.gotoDraftDash(); 
    },0)
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
modal.setContent('<h1>Go Back</h1><p>Sure you want to exit? You may lose unsaved changes.</p>');

// add another button
modal.addFooterBtn('Continue Editing', 'tingle-btn tingle-btn--primary tingle-btn--pull-right', function() {
    // here goes some logic
    modal.close();
});
// add a button
modal.addFooterBtn('Back to Home', 'tingle-btn tingle-btn--default tingle-btn--pull-right', function() {
    // here goes some logic
    modal.close();
    $timeout(function() {
      $scope.gotoDraftDash(); 
    },0)
});



modal.open();



  };
$scope.showVideo = function(url,index) {
  $scope.videoP = "("+url+")";
    var regExp1 = /^(http|https):\/\/www\.youtube\.com\/embed\/\S*$/;
    var match = url.match(regExp1);
    var regExp2 = /^(http|https):\/\/player\.vimeo\.com\/video\/\S*$/;
    var match2 = url.match(regExp2);
    var regExp3 = /\/\/www\.dailymotion\.com\/embed\/video\/\S*$/;
    var match3 = url.match(regExp3);
    var regExp4 = /^(http|https):\/\/www\.youtube\.com\/watch\?v=\S*$/;
    var match4 = url.match(regExp4);
    var regExp5 = /^(http|https):\/\/vimeo\.com\/\S*$/;
    var match5 = url.match(regExp5);
    var regExp6 = /^(http|https):\/\/www\.dailymotion\.com\/video\/\S*$/;
    var match6 = url.match(regExp6);
    

    if (match || match2 || match3)
    {
      $scope.urlIsInvalid = false
      $scope.trustedVideo = $sce.trustAsResourceUrl(url);
    }
    else if (match4)
    {
      $scope.urlIsInvalid = false
      var newURL = "https://www.youtube.com/embed/"+url.split("?v=")[1];
      $scope.trustedVideo = $sce.trustAsResourceUrl(newURL);
    }
    else if (match5)
    {
      $scope.urlIsInvalid = false
      var newURL = "https://player.vimeo.com/video/"+url.split("/").slice(-1)[0];
      $scope.trustedVideo = $sce.trustAsResourceUrl(newURL);
    }
    else if (match6)
    {
      $scope.urlIsInvalid = false
      var newURL = "//www.dailymotion.com/embed/video/"+url.split("/").slice(-1)[0].split("_")[0];
      $scope.trustedVideo = $sce.trustAsResourceUrl(newURL);
    }
    else {      
      $scope.urlIsInvalid = true
      $scope.trustedVideo = $sce.trustAsResourceUrl('https://www.youtube.com/embe/dasffd');
      $scope.recipes[index].videoURL=""
    }

}

function changeVideotoOrig(index){
    var url = $scope.recipes[index].videoURL
    var regExp1 = /^(http|https):\/\/www\.youtube\.com\/embed\/\S*$/;
    var match = url.match(regExp1);
    var regExp2 = /^(http|https):\/\/player\.vimeo\.com\/video\/\S*$/;
    var match2 = url.match(regExp2);
    var regExp3 = /\/\/www\.dailymotion\.com\/embed\/video\/\S*$/;
    var match3 = url.match(regExp3);
    var regExp4 = /^(http|https):\/\/www\.youtube\.com\/watch\?v=\S*$/;
    var match4 = url.match(regExp4);
    var regExp5 = /^(http|https):\/\/vimeo\.com\/\S*$/;
    var match5 = url.match(regExp5);
    var regExp6 = /^(http|https):\/\/www\.dailymotion\.com\/video\/\S*$/;
    var match6 = url.match(regExp6);
    

    if (match)
    {
      $timeout(function() {
        $scope.recipes[index].videoURL = "https://www.youtube.com/watch?v="+url.split("embed/")[1];
      },0);
    }
    if (match2)
    {
      $timeout(function() {
        $scope.recipes[index].videoURL = "https://vimeo.com/"+url.split("/").slice(-1)[0];
      },0);
    }
    if (match3)
    {
      $timeout(function() {
        $scope.recipes[index].videoURL = "https://www.dailymotion.com/video/"+url.slice(-1)[0];
      },0);  
    }
    else if (match4 || match5 || match6)
    {
  
    }
    else {      
      $scope.recipes[index].videoURL=""
    }

}

$scope.changeVideo = function(url,index) {
    var regExp1 = /^(http|https):\/\/www\.youtube\.com\/embed\/\S*$/;
    var match = url.match(regExp1);
    var regExp2 = /^(http|https):\/\/player\.vimeo\.com\/video\/\S*$/;
    var match2 = url.match(regExp2);
    var regExp3 = /\/\/www\.dailymotion\.com\/embed\/video\/\S*$/;
    var match3 = url.match(regExp3);
    var regExp4 = /^(http|https):\/\/www\.youtube\.com\/watch\?v=\S*$/;
    var match4 = url.match(regExp4);
    var regExp5 = /^(http|https):\/\/vimeo\.com\/\S*$/;
    var match5 = url.match(regExp5);
    var regExp6 = /^(http|https):\/\/www\.dailymotion\.com\/video\/\S*$/;
    var match6 = url.match(regExp6);
    

    if (match || match2 || match3)
    {
      $scope.recipes[index].videoURL = url
    }
    else if (match4)
    {
      var newURL = "https://www.youtube.com/embed/"+url.split("?v=")[1];
      $scope.recipes[index].videoURL = newURL
    }
    else if (match5)
    {
      var newURL = "https://player.vimeo.com/video/"+url.split("/").slice(-1)[0];
      $scope.recipes[index].videoURL = newURL
    }
    else if (match6)
    {
      var newURL = "//www.dailymotion.com/embed/video/"+url.split("/").slice(-1)[0].split("_")[0];
      $scope.recipes[index].videoURL = newURL
    }
    else {      
      $scope.recipes[index].videoURL=""
    }

}

$scope.checkVideoURL = function(url,index) {
  
    var regExp1 = /^(http|https):\/\/www\.youtube\.com\/embed\/\S*$/;
    var match = url.match(regExp1);
    var regExp2 = /^(http|https):\/\/player\.vimeo\.com\/video\/\S*$/;
    var match2 = url.match(regExp2);
    var regExp3 = /\/\/www\.dailymotion\.com\/embed\/video\/\S*$/;
    var match3 = url.match(regExp3);
    var regExp4 = /^(http|https):\/\/www\.youtube\.com\/watch\?v=\S*$/;
    var match4 = url.match(regExp4);
    var regExp5 = /^(http|https):\/\/vimeo\.com\/\S*$/;
    var match5 = url.match(regExp5);
    var regExp6 = /^(http|https):\/\/www\.dailymotion\.com\/video\/\S*$/;
    var match6 = url.match(regExp6);

    if (match || match2 || match3 || match4 || match5 || match6){}
    else {$scope.recipes[index].videoURL=""}
}


 $scope.addNewExpertTip= function(index) {
     $scope.recipes[index].expertTips.push("");
     //angular.element('#pExpertTip.ng-pristine').focus()
     $timeout(function() {
      $('#pExpertTip.ng-pristine').focus()
     }, 10);
  };
    
 $scope.removeExpertTip = function(recipeIndex,expertIndex) {
    $scope.recipes[recipeIndex].expertTips.splice(expertIndex,1);
  };

  // $scope.addNewDirectionValidation=function(index)
  // {
  //   var len=$scope.recipes[index].directions.length;
  //   if(len==0)
  //   {
  //     $scope.addNewDirection(index);
  //   }
  //   else if($scope.recipes[index].directions[len-1].direction.trim()!=""||$scope.recipes[index].directions[len-1].direction==undefined){
  //   $scope.addNewDirection(index);
  //  }
  //  else{
  //   //  console.log("not Add")
  //  }
  // }
 $scope.addNewDirection = function(index) {
	var stepNum= $scope.recipes[index].directions.length;
	stepNum++;
     $scope.recipes[index].directions.push({"step": "Step " + stepNum,
     										"direction" : ""
     										});
     $timeout(function() {
      $('#pDirection.ng-pristine').focus()
     }, 10);
  };
    
 $scope.removeDirection = function(recipeIndex,direcIndex) {
    $scope.recipes[recipeIndex].directions.splice(direcIndex,1);
   sortStepNum(recipeIndex); 
  };

  function sortStepNum(index){
  	for (i = 0; i < $scope.recipes[index].directions.length; i++) { 
    	$scope.recipes[index].directions[i].step = "Step "+ (parseInt(i)+1);
	}

  }

 $scope.addNewDishComponent = function(index) {
    $scope.recipes[index].ingredients.push({"dish": "",
     										"ingredient" : [""]
     										});
  };
    
 $scope.removeDishComponent = function(index,compoIndex) {
    $scope.recipes[index].ingredients.splice(compoIndex,1);
  };

   $scope.addIngredient  = function(index,ingreIndex) {
    $scope.recipes[index].ingredients[ingreIndex].ingredient.push("");
    $timeout(function() {
      $('#pIngredient.ng-pristine').focus()
     }, 10);   										
  };

  $scope.removeIngredient = function(index,compoIndex,ingreIndex) {
    $scope.recipes[index].ingredients[compoIndex].ingredient.splice(ingreIndex,1);
  };

  $scope.gotoDash = function(){
  	$location.path("/");
  };
// quill code start here
$scope.addIngredientId=function(data)
  {
    // console.log(data)
    $timeout(function(){
      EditorFunction.renderQuill(data);
    })
   
  }
const EditorFunction=function()
{
   var editorNameArrayCreateRecipe=["shortDescription","nutrition_disclaimer"];//Write the id of the Div,Which you want to make the Editor
   for(let i =0;i<editorNameArrayCreateRecipe.length;i++)
   {
      renderQuill(editorNameArrayCreateRecipe[i])
   }
   function renderQuill(instanceId){
    let quill = new Quill('#'+instanceId, {
      modules: {
        toolbar: [
          // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          ['bold', 'italic', 'underline'],
          // [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          // [{ 'align': [] }],
          // ['clean'],                                         // remove formatting button
          // [{ 'list': 'ordered'}, { 'list': 'bullet' }]
        ]
      },
      placeholder: 'Enter your data...',
      theme: 'snow'  // or 'bubble'
    });
    if(!$location.path().includes("/createRecipe/"))
      {
        if(instanceId.includes('directions'))
        {
          quill.clipboard.dangerouslyPasteHTML($scope.recipes[$scope.index][instanceId.split('_')[0]][instanceId.split('_')[1]][instanceId.split('_')[2]])
        }
        else if(instanceId.includes('_')){
          quill.clipboard.dangerouslyPasteHTML($scope.recipes[$scope.index][instanceId.split('_')[0]][instanceId.split('_')[1]])
        }else{
          quill.clipboard.dangerouslyPasteHTML($scope.recipes[$scope.index][instanceId])
        }
      }  
      quill.on('text-change', function() {
          if(quill.getText().trim()==""||quill.getText()==undefined){
            $scope.DescError=true;
            alert("Desc will not be empty");
            //disable button code goes here
          }
          else{
            $scope.DescError=false;
           if(instanceId.split('_')[2]=='dish'){
              $scope.recipes[$scope.index][instanceId.split('_')[0]][instanceId.split('_')[1]][instanceId.split('_')[2]]=quill.root.innerHTML;
            }
            else if(instanceId.split('_')[2]=='ingredient'){
              $scope.recipes[$scope.index][instanceId.split('_')[0]][instanceId.split('_')[1]][instanceId.split('_')[2]]=quill.root.innerHTML;
            }
            else if(instanceId.split('_')[2]=='direction'){
              $scope.recipes[$scope.index][instanceId.split('_')[0]][instanceId.split('_')[1]][instanceId.split('_')[2]]=quill.root.innerHTML;
            }
            else{ 
              if(instanceId.includes('_')){
                $scope.recipes[$scope.index][instanceId.split('_')[0]][instanceId.split('_')[1]]=quill.root.innerHTML;
                }
                else{
                  $scope.recipes[$scope.index][instanceId]=quill.root.innerHTML;
                }
            }
                      
          }
        });
   }
   EditorFunction.renderQuill=renderQuill;
  }
//quill editor code end here 

  $scope.saveRecipeToDb = function(index,id){
    var index= getIndexOfId($scope.recipes, id);
    //edit for desc recipe test
    // $scope.recipes[index].shortDescription=$scope.desc;
    // $scope.desc="";
    // end of desc recipe test code
    //Logic for Tags Switching to English
          var tagList = $scope.tagList;
          var theTags = $scope.recipes[index].tags
          var theLang = Wix.Utils.getLocale()
          $scope.recipes = getmeRecipesForSaving($scope.recipes,theLang,tagList)
    

    $scope.recipes[index].showRecipe=true;
    if($scope.recipes[index].videoURL != "")
    {
      $scope.changeVideo($scope.recipes[index].videoURL,index)
    }

    if($scope.recipes[index].recipeImageSrc == "")
    {
      $scope.recipes[index].recipeImageSrc = "../images/ip.png"
    }

    $http.post("/postRecipe/" + Wix.Utils.getInstanceId(),$scope.recipes).success(function(response){
      $location.path("/");
    })

  }
    $scope.saveRecipeToDrafts = function(index,id){
    var index= getIndexOfId($scope.recipes, id)
    //Logic for Tags Switching to English
          var tagList = $scope.tagList;
          var theTags = $scope.recipes[index].tags
          var theLang = Wix.Utils.getLocale()
          $scope.recipes = getmeRecipesForSaving($scope.recipes,theLang,tagList)
          $scope.desc="";
    $scope.recipes[index].showRecipe=false;
    if($scope.recipes[index].videoURL != "")
    {
      $scope.changeVideo($scope.recipes[index].videoURL,index)
    }
    if($scope.recipes[index].recipeImageSrc == "")
    {
      $scope.recipes[index].recipeImageSrc = "../images/ip.png"
    }
    $http.post("/postRecipe/" + Wix.Utils.getInstanceId(),$scope.recipes).success(function(response){
          $http.get("/getRecipe/" + Wix.Utils.getInstanceId()).then(function(payload){
      //Logic for Tags Switching from English to Whatever
                  var tagList = $scope.tagList;
                  var theLang = Wix.Utils.getLocale()
                  payload.data = getmeRecipesAfterTagsMod(payload.data,theLang,tagList);
        
           //$timeout(function(){
            $scope.recipes=payload.data;
            $rootScope.recipes=payload.data;
            var theRecipes = $scope.recipes
            $scope.dashIndex = theRecipes.filter(function(element){return element.showRecipe==false}).length
            $scope.theTrueDashRecipes = theRecipes.filter(function(element){return element.showRecipe==true})
            $scope.theDraftDashRecipes = theRecipes.filter(function(element){return element.showRecipe==false})
        //},0)
 
        })
          $location.path("/draftRecipes");
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
        arr[x].tags[y] = (getkeyForValue(tagList,arr[x].tags[y]) || "").split("#")[0]
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
$scope.updateRecipeToDbFromMain = function (index,id){
    var index= getIndexOfId($scope.recipes, id)
    //Logic for Tags Switching to English
          var tagList = $scope.tagList;
          var theTags = $scope.recipes[index].tags
          var theLang = Wix.Utils.getLocale()
          $scope.recipes = getmeRecipesForSaving($scope.recipes,theLang,tagList)
          $scope.desc="";
    
    $scope.recipes[index].showRecipe=true;
    if($scope.recipes[index].videoURL != "")
    {
      $scope.changeVideo($scope.recipes[index].videoURL,index)
    }

    if($scope.recipes[index].recipeImageSrc == "")
    {
      $scope.recipes[index].recipeImageSrc = "../images/ip.png"
    }

    $http.put("/updateRecipe/" + id +"/"+ Wix.Utils.getInstanceId(), $scope.recipes).success(function(response){
      $location.path("/");
    });
  }
  
  $scope.updateRecipeToDbDraft = function(index,id){
    var index= getIndexOfId($scope.recipes, id)
    //Logic for Tags Switching to English
          var tagList = $scope.tagList;
          var theTags = $scope.recipes[index].tags
          var theLang = Wix.Utils.getLocale()
          $scope.recipes = getmeRecipesForSaving($scope.recipes,theLang,tagList) 
        
     if($scope.recipes[index].videoURL != "")
    {
      $scope.changeVideo($scope.recipes[index].videoURL,index)
    }
    var theRecipes = $scope.recipes
    var trueIndex =  theRecipes.filter(function(element){return element.showRecipe==true}).length
    /*var urlParams = new URLSearchParams($window.location.search);
    var instanceValue = urlParams.get('instance')*/
    var instanceValue = getQueryVariable('instance');
    var pair = instanceValue.split('.');
    var data = pair[1];
    data = decodeURIComponent(data)
    var base64 = $window.atob(data);
    var base64obj = JSON.parse(base64)

  if (trueIndex < 2 || base64obj.vendorProductId=='recipe_001') 
  {
    $scope.recipes[index].showRecipe=true;

    theRecipe = $scope.recipes[index]
    $scope.recipes.splice(index, 1)
    $scope.recipes.unshift(theRecipe)

    $http.put("/updateRecipe/" + id +"/"+ Wix.Utils.getInstanceId(), $scope.recipes).success(function(response){
      $location.path("/");
    })
  } else {
       Wix.Dashboard.openBillingPage();
   }
  }
  
  $scope.openBilling = function(){

  //Wix.closeWindow({"reason": "this was clicked in the modal"});
    Wix.Settings.openBillingPage();

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


  $scope.deleteRecipeFromDb = function(index,id){

/*    Wix.openModal($window.location.origin +"/dashboard#/deleteConfirm"+ $window.location.search, 400, 200, function(message)
   { 
  if (message.message.reason == true)
  {
    $http.delete('/deleteRecipe/' + id +"/"+Wix.Utils.getInstanceId()).success(function(response) {
    var promiseGetData = $http.get("/getRecipe");
    promiseGetData.then(function(payload){
                  var tagList = $scope.tagList;
                  var theLang = Wix.Utils.getLocale()
                  payload.data = getmeRecipesAfterTagsMod(payload.data,theLang,tagList);

    $http.put("/saveRecipes/" + Wix.Utils.getInstanceId(), payload.data).success(function(response){
      $scope.recipes=response;
      $rootScope.recipes=response;
      })
    })  
    $location.path("/");
    });
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
    $http.delete('/deleteRecipe/' + id +"/"+Wix.Utils.getInstanceId()).success(function(response) {
    var promiseGetData = $http.get("/getRecipe");
    promiseGetData.then(function(payload){
                  var tagList = $scope.tagList;
                  var theLang = Wix.Utils.getLocale()
                  payload.data = getmeRecipesAfterTagsMod(payload.data,theLang,tagList);

    $http.put("/saveRecipes/" + Wix.Utils.getInstanceId(), payload.data).success(function(response){
      $scope.recipes=response;
      $rootScope.recipes=response;
      })
    })  
    $location.path("/");
    });
});
// add a button
modal.addFooterBtn('Not Now', 'tingle-btn tingle-btn--default tingle-btn--pull-right', function() {
    // here goes some logic
    modal.close();
});



modal.open();


  }
$scope.deleteRecipeFromDbFromDraft = function(index,id){


/*    Wix.openModal($window.location.origin +"/dashboard#/deleteConfirm"+ $window.location.search, 400, 200, function(message)
   { 
  if (message.message.reason == true)
  {
   $http.delete('/deleteRecipe/' + id +"/"+Wix.Utils.getInstanceId()).success(function(response) {
    var promiseGetData = $http.get("/getRecipe");
    promiseGetData.then(function(payload){
                  var tagList = $scope.tagList;
                  var theLang = Wix.Utils.getLocale()
                  payload.data = getmeRecipesAfterTagsMod(payload.data,theLang,tagList);
    $http.put("/saveRecipes/" + Wix.Utils.getInstanceId(), payload.data).success(function(response){
      $scope.recipes=response;
      $rootScope.recipes=response;
      })
    })  
    $location.path("/draftRecipes");
    });
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
    $http.delete('/deleteRecipe/' + id +"/"+Wix.Utils.getInstanceId()).success(function(response) {
    var promiseGetData = $http.get("/getRecipe");
    promiseGetData.then(function(payload){
                  var tagList = $scope.tagList;
                  var theLang = Wix.Utils.getLocale()
                  payload.data = getmeRecipesAfterTagsMod(payload.data,theLang,tagList);
    $http.put("/saveRecipes/" + Wix.Utils.getInstanceId(), payload.data).success(function(response){
      $scope.recipes=response;
      $rootScope.recipes=response;
      })
    })  
    $location.path("/draftRecipes");
    });
});
// add a button
modal.addFooterBtn('Not Now', 'tingle-btn tingle-btn--default tingle-btn--pull-right', function() {
    // here goes some logic
    modal.close();
});



modal.open();

 
  }

  $scope.checkAvialability = function(recipeFromModel){

    for (var index = 1; index < $scope.recipes.length; index++) {
        if ($scope.recipes[index].recipeName == recipeFromModel)
        {
          return true;
          break;
        }
        else
        {

        }
    }
 
  }


  var navListItems = $('div.setup-panel div div a'),
          allWells = $('.setup-content'),
          allNextBtn = $('.nextBtn');

  allWells.hide();

  navListItems.click(function (e) {
       //e.preventDefault();
       e.preventDefault ? e.preventDefault() : e.returnValue = false;
       //e.returnValue = false;
     /* e.stopPropagation();*/
      var $target = $($(this).attr('href')),
              $item = $(this);    
      //if (!$item.hasClass('disabled')) {
          navListItems.removeClass('btn-primary').addClass('btn-default');
          $item.addClass('btn-primary');
          allWells.hide();
          $target.show();
          $target.find('textarea:eq(0)').focus();
          $target.find('input:eq(0)').focus();
      //}

  });

  allNextBtn.click(function(){
      var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          nextStepWizard = $('div.setup-panel div div a[href="#' + curStepBtn + '"]').parent().parent().next().children("div").children("a"),
          isValid = true;

      /*$(".form-group").removeClass("has-error");
      for(var i=0; i<curInputs.length; i++){
          if (!curInputs[i].validity.valid){
              isValid = false;
              $(curInputs[i]).closest(".form-group").addClass("has-error");
          }
      }*/

      if (isValid)
          nextStepWizard.removeAttr('disabled').trigger('click');
  });

  $('div.setup-panel div div a.btn-primary').trigger('click');
  

  $timeout(function(){
  if ($scope.showUpgradeButton == false)
  {  
    $('#tagss').dropdown({
/*      onNoResults: function(searchValue) {

      Wix.openModal($window.location.origin +"/dashboard#/upgradeConfirm"+ $window.location.search, 400, 200, function(message)
      { 
      if (message.message.reason == true)
      {
        Wix.Dashboard.openBillingPage();
      }
      else
      {
        //$('#tagss').dropdown('clear');
        $('#tagss').dropdown('set text','');
      }
      });


      },*/
        forceSelection:false,
        maxSelections: 6,
        message: {
           noResults: "Could not find the tag you need? Contact us at <span style='user-select:initial;color:blue;'>disha.it@outlook.com</span> with the requested tags , and it will be up within 2 days."
        }

    });
  }
  else
  {
    $('#tagss').dropdown({
/*      onNoResults: function(searchValue) {

      Wix.openModal($window.location.origin +"/dashboard#/upgradeConfirm"+ $window.location.search, 400, 200, function(message)
      { 
      if (message.message.reason == true)
      {
        Wix.Dashboard.openBillingPage();
      }
      else
      {
        //$('#tagss').dropdown('clear');
        $('#tagss').dropdown('set text','');
      }
      });


      },*/
        forceSelection:false,
        maxSelections: 6

    });
  }

    },0)
  
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
modal.setContent('<h1>Contact App Developer</h1><p>Email : disha.it@outlook.com</p>');

// add another button
modal.open();
     
 };
 
$scope.clickUpgradeYes = function(){
  Wix.closeWindow({"reason": true});
}
$scope.clickUpgradeNo = function(){
  Wix.closeWindow({"reason": false});
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

  $('[data-toggle="tooltip"]').tooltip()

  EditorFunction();
});