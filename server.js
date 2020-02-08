var express = require("express");
var request = require("request");
var mongojs = require("mongojs");
var mongodb = require('mongodb');
var uuid = require('node-uuid');
var MongoClient=mongodb.MongoClient;
var helper = require('sendgrid').mail;
//This is Test
//var db = mongojs('recipe-db',['recipeCollection']);
//This is Prod
//var db = mongojs('recipeAdmin:R3cip3123@ds033106.mlab.com:33106/recipe-db',['recipeCollection','Tagslist','LanguageList']);
//var TagCollection='Tagslist';
//var langColl='LanguageList';
//this is test
var db = mongojs('recipeAdmin:R3cip3123@ds033106.mlab.com:33106/recipe-db',['recipeCollection','Tagslist','LanguageList']);
var TagCollection='Tagslist';
var langColl='LanguageList';
var app = express();
var bodyParser = require('body-parser');
var wix = require('wix');
var wix = require('openapi-node');
var Authentication = require('./authentication.js');
var path = require("path");
var mongoose = require('mongoose');



app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(require('prerender-node').set('prerenderServiceUrl', 'https://hidden-bayou-16506.herokuapp.com'));

function authenticate(req, res, next) {
    var authentication = new Authentication();
    authentication.authenticate(req, res, next);
}
//define all the routes
app.get('/',authenticate,function(req,res){
  res.sendFile(path.join(__dirname+"/index.html"));
});


///Testing For tag Lang CRUD Operations
const CUDinlangdata=function(data){
  let allReq=[];
   data.forEach(function(val){
     allReq.push(
       new Promise(function(resolve,reject){
        db[langColl].findAndModify({
          query: {Lang:val.Lang},
          update: { $set: { Data:val.Data  } },
          new: true
          }, function (err, doc) {
            if(doc){
              resolve(doc);
            }else{
              reject(err);
            }
            
        })
       })
     )
   });  
   return Promise.all(allReq);
}
app.delete('/delete-lang-data/:langVal',function(req,res){
  var tagToDelete=req.params.langVal;
  db[langColl].find({},function(err,docs){
    if(docs){
        docs.forEach(function(val){
          if(val.Data){
            let temp='TEXT-'+(tagToDelete.toUpperCase());
            if(val.Data.hasOwnProperty(temp)){
              delete val.Data[temp];
            }
          }
        });
        CUDinlangdata(docs).then(function(success){
          res.send(success);
        },function(err){
          res.send(err);
        });   
    }else res.send(err);
  })
});
app.post('/insert-lang-data',function(req,res){
   let reqData=req.body;
   db[langColl].find({},function(err,docs){
    if(docs){
      if(docs!=undefined){
        docs.forEach(function(respVal){
          if(respVal.Lang&&respVal.Data&&reqData.hasOwnProperty(respVal.Lang)){
            respVal.Data["TEXT-"+reqData['en'].toUpperCase()]=reqData[respVal.Lang];
            }
        });
        CUDinlangdata(docs).then(function(success){
          res.send(success);
        },function(err){
          res.send(err);
        })
      }
    }else res.send(err);
   })
});
app.get('/get-lang-data/:lang',function(req,res){
  
  var findQuery={}
  if(req.params.lang!=undefined) findQuery.Lang=req.params.lang;
  db[langColl].find(findQuery,function(err,docs){
    if(docs){
      res.send(docs)
    }else 
    { 
      res.send(err);
    }
  })
});
app.put('/update-lang-data',function(req,res){
  var body=req.body;
  db[langColl].find({},function(err,docs){
    if(docs){
      docs.forEach(function(val){
        if(val.Data){
          let tagToDelete='TEXT-'+(body.old.toUpperCase());
          if(val.Data.hasOwnProperty(tagToDelete)){
            delete val.Data[tagToDelete];
          }
          if(val.Lang&&body.new.hasOwnProperty(val.Lang)){
            val.Data["TEXT-"+body.new['en'].toUpperCase()]=body.new[val.Lang];
          }
        }
      })
      CUDinlangdata(docs).then(function(success){
        res.send(success);
      },function(err){
        res.send(err);
      })
    }else{
      res.send(err);
    }
  })
})



////For Tag Data CRUD Operations
app.post('/insert-tag-data/:instanceId',function(req,res){
  let item={
    Title:req.body.Title,
    ParentId:req.body.ParentId,
    Type:req.body.Type,
    Order:req.body.Order,
    langContent:req.body.langContent,
    instanceId:req.params.instanceId
  }
  
  req.body.instanceId=req.params.instanceId
  db[TagCollection].insert(item,function(err,resp){
    if(err){
      res.send(err);
    }else{
      res.send(resp);
    }
  });
});


app.get("/get-tag-data/:instanceId", function(req,res){
  var instanceId=req.params.instanceId;
  db[TagCollection].find({instanceId:instanceId},function(err,docs){
   if(docs){
    res.json(docs);
   }else{
    res.json(err);
   }
 });
});
app.put('/update-tag-data/:id',function(req,res){
  var tagId=req.params.id;
  var body=req.body;
  db[TagCollection].findAndModify({
    query:{_id:new mongodb.ObjectID(tagId)},
    update:{$set:body},
    new:true
  },function(err,docs){
    if(docs){
     res.send(docs); 
    }else res.send(err);
  });
});




app.delete('/delete-tag-data/:id',function(req,res){
  var id=req.params.id;
  db[TagCollection].remove({_id: new mongodb.ObjectID( id) },function(err,resp){
    if(err){
      res.send(err);
    }else{
      res.send(resp);
    }
  });
});



app.get('/views/:name',authenticate,function(req,res){
  var name = req.params.name;
  res.sendFile(path.join(__dirname+'/public/views/' + name));
});

app.get('/settings',authenticate, function(req,res){
  res.sendFile(path.join(__dirname+"/settings.html"));
});

app.get('/dashboard',authenticate, function(req,res){
  res.sendFile(path.join(__dirname+"/dashboard.html"));
});

app.get('/mobile',authenticate,function(req,res){
  res.sendFile(path.join(__dirname+"/mobile.html"));
});

app.get('/mobile/recipe/:recipeName',authenticate,function(req,res){
  res.sendFile(path.join(__dirname+"/mobile.html"));
});

app.get('/seo',authenticate,function(req,res){
  res.sendFile(path.join(__dirname+"/seo.html"));
});

app.get('/seo/recipe/:recipeName',authenticate,function(req,res){
  res.sendFile(path.join(__dirname+"/recipeSeo.html"));
});

app.get('/demo',function(req,res){
  res.sendFile(path.join(__dirname+"/demo.html"));
});


//internal API calls

app.get("/sendEmail/:fromEmail/:sendMessage",function(req,res){
var userEnteredFromEmail = req.params.fromEmail;
var sendMessage = req.params.sendMessage;

var fromEmail = new helper.Email('noreply@dishait.com');
var toEmail = new helper.Email('disha.it@outlook.com');
var subject = 'Recipes App Support Email';
var content = new helper.Content('text/plain', userEnteredFromEmail+sendMessage);
var mail = new helper.Mail(fromEmail, subject, toEmail, content);


var sg = require('sendgrid')('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');
var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON()
});

  sg.API(request, function (error, response) {
  if (error) {}
  });

  })

app.post("/postRecipe/:instanceId",function(req,res){
var instanceId = req.params.instanceId;
  var recipesAdjusted = adjustIds(req.body);

  db.recipeCollection.findAndModify({
    query: {instanceId:instanceId},
    update: { $set: { recipes: recipesAdjusted } },
    new: true
    }, function (err, doc) {
    res.json(doc);   
    })

  /*db.recipeCollection.insert(req.body, function(err, doc) {
    res.json(doc);
  });*/
  })
app.put("/updateRecipe/:id/:instanceId",function(req,res){
  var id = req.params.id;
   var instanceId = req.params.instanceId;
/*    console.log (id)

  db.recipeCollection.find({},function(err, docs) {
  var myDoc= docs[0]
  var recipes = myDoc.recipes;
  var recipe = findAndReturn(recipes,id)
  console.log (recipe)
})
*/
  var recipesAdjusted = adjustIds(req.body);

  db.recipeCollection.findAndModify({
    query: {instanceId:instanceId},
    update: { $set: { recipes: recipesAdjusted } },
    new: true
    }, function (err, doc) {
    res.json(doc);   
    })


 /* db.recipeCollection.findAndModify({
    query: {},
    update: {$set: {recipeImageSrc: req.body.recipeImageSrc,
                    recipeName: req.body.recipeName,
                    servingSize: req.body.servingSize,
                    preptime: req.body.prepTime,
                    totalTime: req.body.totalTime,
                    shortDescription: req.body.shortDescription,
                    tags: req.body.tags,
                    ingredients:req.body.ingredients,
                    directions: req.body.directions,
                    expertTips: req.body.expertTips
                  }
                   },
    new: true}, function (err, doc) {
      if (err) {console.log(err)}
      else{res.json(doc);}
    }
  );*/

  })

app.put("/updateSettings/:instanceId",function(req,res){
  var id = req.params.id;
   var instanceId = req.params.instanceId;
  db.recipeCollection.findAndModify({
    query: {instanceId:instanceId},
    update: { $set: { settings: req.body } },
    new: true
    }, function (err, doc) {
    res.json(doc);   
    })

  })

  // //Code for Category Setting Starts Here
  
  // app.put("/updateCategorySettings/:instanceId",function(req,res){
  //   var id = req.params.id;
  //    var instanceId = req.params.instanceId;
  //   db.recipeCollection.findAndModify({
  //     query: {instanceId:instanceId},
  //     update: { $set: { category: req.body } },
  //     new: true
  //     }, function (err, doc) {
  //     res.json(doc);   
  //     })
  
  //   })
  // //Code for Category Setting Ends Here


  // //Code for Category Setting Starts Here
  // DYNAMIC CODE


  // app.put("/updateSettingsByKey/:keyValue/:instanceId",function(req,res){
  //   var id = req.params.id;
  //   var keyValue=req.params.keyValue;
  //    var instanceId = req.params.instanceId;
  //   db.recipeCollection.findAndModify({
  //     query: {instanceId:instanceId},
  //     update: { $set: { [keyValue]: req.body } },
  //     new: true
  //     }, function (err, doc) {
  //     res.json(doc);   
  //     })
  
  //   })
  // //Code for Category Setting Ends Here


app.delete('/deleteRecipe/:id/:instanceId', function (req, res) {
  var id = req.params.id;
  var instanceId = req.params.instanceId;
  console.log(req.body)
  db.recipeCollection.find({instanceId:instanceId},function(err, docs) {
    var myDoc= docs[0]
    var recipes = myDoc.recipes;
    findAndRemove(recipes,id );
    

    db.recipeCollection.findAndModify({
    query: {instanceId:instanceId},
    update: { $set: { recipes: recipes } },
    new: true
    }, function (err, doc) {
    res.json(doc);   
    })

    /*docs[0].recipes.remove({$or:[{_id: mongojs.ObjectId(id)},{_id: id}]}, function (err, doc) {
    res.json(doc);
  });*/

  })  
  
});

function findAndRemove(recipes,id) {
  for(var i=0 ; i<recipes.length; i++)
  {
    console.log("Length" + recipes.length)
    console.log(recipes[i].id)
    if(recipes[i].id == id)
    {
      console.log("I am here")
      recipes.splice(i,1);
    }
  }
}

/*function findAndReturn(recipes,id) {
  for(var i=0 ; i<recipes.length; i++)
  {
    if(recipes[i].id == id)
    {
    return recipes[i] 
  }
  }
}*/

app.put("/saveRecipes/:instanceId",function(req,res){
  //if (req.body) {db.recipeCollection.remove({});}
  var instanceId = req.params.instanceId;
  var recipesAdjusted = adjustIds(req.body);

  db.recipeCollection.findAndModify({
    query: {instanceId:instanceId},
    update: { $set: { recipes: recipesAdjusted } },
    new: true
    }, function (err, doc) {
    res.json(doc);   
    })

  /*db.recipeCollection.updateOne({},{$set:{"recipes":recipesAdjusted}},function (err, doc) {
    res.json(doc);
  });*/
  
  })


function adjustIds(recipes){
  var len = recipes.length;
  console.log (len)
  recipes.forEach(function(recipe) { 
    recipe.id = len;
    len--;
  });
  return recipes
  console.log (recipes)
}

app.get("/getSettings/:instanceId",function(req,res){
    var instanceId = req.params.instanceId;
    db.recipeCollection.find({instanceId:instanceId},function(err, docs) {
      if (docs == "")
      {
        var settings =
        { 
          //Code for Category Option Dropdown(hide/show)-setting Start here
              "category":{
                "DISP_INGREDIENTS": true,
                "DISP_CUISINE": true,
                "DISP_COURSE": true,
                "DISP_SEASON": true,
                "DISP_MEALTIME": true,
                "DISP_DIFFICULTY": true
              },
          //Code for Category Option Dropdown(hide/show)-setting Ends here
  
          "disp_RecipePage_SearchBox": true,
          "disp_RecipePage_SearchDrop": true,
          "disp_RecipePage_SocialShare": true,
          "disp_RecipePage_tags": true,
          "disp_RecipeDetail_nutrition":true,
          "_backgroundColor": "#FFFFFF",
          "search_backgroundColor": "#F5F5F5",
          "drop_backgroundColor": "#F5F5F5",
          "recipePage_font": "Raleway",
          "disp_RecipeDetail_SocialShare": true,
          "disp_RecipeDetail_Tags": true,
          "recipeDetPage_font": "Raleway",
          "det_bodyColor": "#FFFFFF",
          "appLangCode":"en",
          "appLang":"English",
          "selectedLayout":"block",
          "selectedDropdown":"searchrecipe",
          "defaultTab":0,
          "det_ingreColor": "#BFBEBE"

      }
       res.json(settings);
      }
      else{
      var settings = docs[0].settings;
      //console.log(recipes);
      res.json(settings);
      }
    })

  })

app.get("/getRecipe/:instanceId",function(req,res){
    var instanceId = req.params.instanceId;
    var initialLoad = {
        "instanceId": instanceId ,
        "recipes" :[
    {
  "id": 1,
  "UUID": uuid.v4(),
  "showRecipe":true,
  "videoURL":"",
  "recipeImageSrc": "images/biryani.jpg",
  "recipeName": "Red Velvet Cupcakes",
  "servingSize": "24",
  "prepTime": "25 min",
  "totalTime": "1 hour",
  "nutrition": {
                "calories": "330",
                "fat": "9",
                "carbohydrate": "10",
                "protien": "3",
                "disclaimer": "Dietary info: May contain nuts."
            },
  "shortDescription": "Delicious red velvet cupcakes with buttercream frosting. An easy, popular dessert.",
            "tags": [
                "American",
                "Dessert",
                "Easy"
            ],
            "ingredients": [
                {
                    "dish": "Cupcakes",
                    "ingredient": [
                        "2.5 cups flour",
                        "1/2 cup unsweetened cocoa powder",
                        "1 teaspoon baking powder",
                        "1 cup butter, softened",
                        "1.5 cups sugar",
                        "4 eggs",
                        "1/2 cup milk",
                        "1 cup sour cream",
                        "2 teaspoon vanilla extract",
                        "1 ounce red food colouring"
                    ]
                },
                {
                    "dish": "Buttercream Frosting",
                    "ingredient": [
                        "4 cups powdered sugar",
                        "1 cup butter, softened",
                        "3 teaspoons vanilla extract",
                        "1-2 tablespoons milk"
                    ]
                }
            ],
            "directions": [
                {
                    "step": "Step 1",
                    "direction": "Preheat oven to 350 degrees F"
                },
                {
                    "step": "Step 2",
                    "direction": "Mix flour, cocoa powder , baking soda and salt in a medium sized bowl; set aside."
                },
                {
                    "step": "Step 3",
                    "direction": "Beat butter and sugar for 5 minutes or until light and fluffy. Beat eggs in one at a time . Mix in milk , sour cream , food colouring and vanilla , beat until just blended."
                },
                {
                    "step": "Step 4",
                    "direction": "Spoon batter into pre-greased muffin pans."
                },
                {
                    "step": "Step 5",
                    "direction": "Bake 20 minutes or untill a toothpick comes out clean."
                },
                {
                    "step": "Step 6",
                    "direction": "Let your cupcakes cool completely . In the meantime , make the frosting."
                },
                {
                    "step": "Step 7",
                    "direction": "Put all frosting ingredients in a mixer bowl."
                },
                {
                    "step": "Step 8",
                    "direction": "Start mixing on your mixer's lowest setting , only raising the speed when the butter and sugar are fully incorporated."
                },
                {
                    "step": "Step 9",
                    "direction": "If your frosting is dry add some milk."
                },
                {
                    "step": "Step 10",
                    "direction": "Frost your cupcakes with teh buttercream frosting. Top with red sprinkles."
                }
               
            ],
            "expertTips": [
                "Make sure to taste your frosting while making it , you may want to add more vanilla or milk to perfect teh taste and consistency." 
            ]
           
        }
    ],
"settings": {

  //Code for Category Option Dropdown(hide/show)-setting Start here
  "category":{
    "DISP_INGREDIENTS": true,
    "DISP_CUISINE": true,
    "DISP_COURSE": true,
    "DISP_SEASON": true,
    "DISP_MEALTIME": true,
    "DISP_DIFFICULTY": true
  },
  //Code for Category Option Dropdown(hide/show)-setting Ends here

   "disp_RecipePage_SearchBox": true,
    "disp_RecipePage_SearchDrop": true,
    "disp_RecipePage_SocialShare": true,
    "disp_RecipePage_tags": true,
    "disp_RecipeDetail_nutrition": true,
    "_backgroundColor": "#FFFFFF",
    "search_backgroundColor": "#F5F5F5",
    "drop_backgroundColor": "#F5F5F5",
    "recipePage_font": "Raleway",
    "disp_RecipeDetail_SocialShare": true,
    "disp_RecipeDetail_Tags": true,
    "recipeDetPage_font": "Raleway",
    "det_bodyColor": "#FFFFFF",
    "appLangCode":"en",
    "appLang":"English",
    "selectedLayout":"block",
    "selectedDropdown":"searchrecipe",
    "defaultTab":0,
    "det_ingreColor": "#BFBEBE"
    
          }
 }


  db.recipeCollection.find({instanceId:instanceId},function(err, docs) {

    if (docs == "")
    {
      db.recipeCollection.insert(initialLoad, function(err, doc) {
            console.log(doc.recipes)

        res.json(doc.recipes)

      });

    }  
    else {
    var recipes = docs[0].recipes;
    //console.log(recipes);
    recipes = sortJSON(recipes,'id', 'DESC');
    res.json(recipes);
        }
  })

})


function sortJSON(data, key, way) {
    return data.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        if (way === 'ASC' ) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
        if (way === 'DESC') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
    });
}

app.get('*', function (req, res){
  res.sendFile(path.join(__dirname+"/index.html"));
});

app.listen(process.env.PORT || 8080);
console.log( "server running on port 8080")