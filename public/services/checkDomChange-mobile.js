angular.module("recipeAppMobile").service('checkDomChange', function($timeout,$document) {
    this.checkDomChange = function () {

    	var target = document.querySelector('#mydiv');
    	

		var observer = new MutationObserver(function(mutations) {
		  
		  mutations.forEach(function(mutation) {
		       console.log(mutation.type);
		       
		       $timeout(function () {
		       Wix.setHeight(500);
		       $timeout(function () {
		        //console.log("this gets executed from checkDomChange")
	              var height1 = $document.height();
	              Wix.setHeight(height1);
	              //observer.disconnect();
       },0);

		  },0);
		  observer.disconnect();      
		  });
		});

		var config = {
		  childList:true,
		  subtree: true
		};
		observer.observe(target, config);
    }
    this.checkDomChangeAttr = function () {

    	var target = document.querySelector('#theDropDown');
    	

		var observer = new MutationObserver(function(mutations) {
		  
		  mutations.forEach(function(mutation) {
		       console.log(mutation.type);
		       
		       $timeout(function () {
		       Wix.setHeight(500);
		       $timeout(function () {
		        //console.log("this gets executed from checkDomChange")
	              var height1 = $document.height();
	              Wix.setHeight(height1);
	              //observer.disconnect();
       },0);

		  },0);
		  observer.disconnect();   
		  });

		});

		var config = {
		  attributes: true,	
		  childList:true,
		  subtree: true
		};
		observer.observe(target, config);
    }
});