/*******************************************************/
var List_name = []; /* list name category*/ 
var promociones = [];
var listSupermercado = [];
var listRestaurantes = [];
var promedio = [];
var listNameSupermercado = [];
var listNameRestaurantes = [];
var Super = [];
var Restaurantes = [];
var Modas = [];
var Entretenimientos = [];
var Electronico = [];
var listPromoSuper = [];
var name = "";
var nameRestaurantes = "";
var listaNameSuperComparar = [];
var listaNameSuperConteo = [];
/************************************************/
var conteoPromociones = [];
 var conteoPromo = {};


var total = 0;
/***************************************** tamayo  *****************************/
///////Photos
var PhotoPaiz = [];

var Category = [];
/***************************/
var IdCategory;
/*************************/
var Categorys= [];

/******************************/
var contt = 0;
/********************************/
var AllFavorite = [];
/**********************************/
var AllPromotion = [];
/*************************************/
var InfoShop = [];

var app = angular.module('starter.services', [])

app.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    icon:'A',
    name: 'La Torre',
    face: 'http://upload.wikimedia.org/wikipedia/commons/thumb/8/84/EAN13.svg/220px-EAN13.svg.png',
    producto: "https://quesaber.files.wordpress.com/2013/11/pollo.jpg",
    oferta: "2x1",
      
      terminos: "Terminos y condiciones"
  }, {
    id: 1,
    icon:'B',  
    name: 'La Torre',
      oferta: "-20%",
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    icon:'C',  
    name: 'La Torre',

    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  ,
oferta: "Segundo Plato 1/2"
  
  },
    {
    id: 3,
    name: 'La Torre',
       oferta: "gratis en compra de",
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 4,
    name: 'La Torre',
   oferta: "-10%",
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

app.factory('Categorys', function() {
  // Might use a resource here that returns a JSON array
    
for (a in promociones) {
    console.log(promociones.length)
    var C = promociones.length
     
    
    
}
    console.log(IdUsuario)
 // Some fake testing data
  var categorys = CategoryListName
      /*[{
    id: 0,
    name: List_name[0],
    cont_promo: C,
    icon: 'E',
    color : "icon_supermercado",
    direc: List_name[0],
    Facebook: IdUsuario,
    face: "si"
}, {
    id: 1,
    name:  List_name[1],
    cont_promo: 'Hey, it\'s me....',
    icon: 'F',
      color : "icon_restaurante",
      direc: List_name[1]
  },{
    id: 2,
    name: List_name[2],
    cont_promo: 'I should buy a boat',
      super: "supermercados",
    icon: 'G',
      color : "icon_moda",
      direc: List_name[2]
  }, {
    id: 3,
    name:  List_name[3],
    cont_promo: 'Look at my mukluks!',
      super: "supermercados",
    icon: 'H',
      color : "icon_entretenimiento",
      direc: List_name[3]
  }, {
    id: 4,
    name:  List_name[4],
    cont_promo: 'This is wicked good ice cream.',
      super: "supermercados",
    icon: 'I',
      color : "icon_electronico",
      direc: List_name[4]
  }, {
    id: 5,
    name:  List_name[5],
    cont_promo: 'Look at my mukluks!',
      super: "supermercados",
    icon: 'J',
      color : "icon_otro",
      direc: List_name[4]
  }];
*/
  return {
    all: function() {
      return categorys;
    },
    get: function(chatId) {
      for (var i = 0; i < categorys.length; i++) {
        if (categorys[i].id === parseInt(chatId)) {
          return categorys[i];
        }
      }
      return null;
    }
  };
})

app.factory('Supermercados', function() {

  // Might use a resource here that returns a JSON array
    
  // Some fake testing data
  var supermercados = Super;

  return {
    all: function() {
      return supermercados;
    },
    get: function(chatId) {
      for (var i = 0; i < chsupermercadosats.length; i++) {
        if (supermercados[i].id === parseInt(chatId)) {
          return supermercados[i];
        }
      }
      return null;
    }
  };
})

app.factory('Entretenimiento', function() {

  // Might use a resource here that returns a JSON array
    
  // Some fake testing data
  var entretenimiento = Entretenimientos;

  return {
    all: function() {
      return entretenimiento;
    },
    get: function(chatId) {
      for (var i = 0; i < entretenimiento.length; i++) {
        if (entretenimiento[i].id === parseInt(chatId)) {
          return entretenimiento[i];
        }
      }
      return null;
    }
  };
})

app.factory('Moda', function() {
    for (a in promociones) {
    console.log(promociones.length)
    var C = promociones.length
     console.log(name)
    
}
  // Might use a resource here that returns a JSON array
    
  // Some fake testing data
  var moda = Modas;

  return {
    all: function() {
      return moda;
    },
    get: function(chatId) {
      for (var i = 0; i < moda.length; i++) {
        if (moda[i].id === parseInt(chatId)) {
          return moda[i];
        }
      }
      return null;
    }
  };
})

app.factory('Electronicos', function() {

  // Might use a resource here that returns a JSON array
    
  // Some fake testing data
  var electronicos = Electronico;

  return {
    all: function() {
      return electronicos;
    },
    get: function(chatId) {
      for (var i = 0; i < electronicos.length; i++) {
        if (electronicos[i].id === parseInt(chatId)) {
          return electronicos[i];
        }
      }
      return null;
    }
  };
})


app.factory('Restaurantes', function() {
/*    for (a in promociones) {
    console.log(promociones.length)
    var C = promociones.length
     console.log(name)
    
}*/
  // Might use a resource here that returns a JSON array
    
  // Some fake testing data
  var restaurantes = Restaurantes;

  return {
    all: function() {
      return restaurantes;
    },
    get: function(chatId) {
      for (var i = 0; i < restaurantes.length; i++) {
        if (restaurantes[i].id === parseInt(chatId)) {
          return restaurantes[i];
        }
      }
      return null;
    }
  };
});

var dato = [];
app.factory('Paiz', function() {
//console.log("called Paiz");
  var paiz = Category;
    //console.log(paiz);
  return {
    all: function(superId) {
    
 
    
      
    },
    get: function(superId) {
        ALL = []
        Category = [];
         dato = [];
        IdCategory = superId
        for (c in PhotoPaiz){
            // console.log(PhotoPaiz[c].Category)
            if (superId === PhotoPaiz[c].Category){
                Category.push(PhotoPaiz[c])
                
            }
        }
        if (Category.length == 0){
            
                Category.push({oferta:"noHay"})
           
        }
        console.log(Category,"asdasd")
       
        for (z in InfoShop){
            if (superId === InfoShop[z].name){
                dato.push(InfoShop[z])
            }
            
        }
     console.log(dato , "s")
        console.log(Category,"dato")
        if (PhotoPaiz){
            ALL.push(Category)
            ALL.push(dato)
            console.log(ALL,"all")
            return ALL;
        } 
        
      return null;
    }
  };
});

app.factory('AllFavorite', function() {
console.log("called Favorite");
var favorites = AllFavorite;
  return {
    all: function() {
        favorites = AllFavorite;
        console.log("in favorite",favorites);
        return favorites;
    },
    get: function() {

          return favorites;
     
    }
  };
});

app.factory('AllPromotion', function() {
console.log("called promotion");
console.log(AllPromotion);
var promotio = AllPromotion;
  return {
    all: function(salvadosId) {
        promotio = AllPromotion;
        console.log("in promotion",promotio);
        
        return promotio;
        
    },
    get: function() {

          return promotio;
     
    }
  };
});

var Barra = []
app.factory('Barra', function() {
console.log("called Barra");
     
       console.log(IdUsuario)
       
       var Barras = {id:98789456};
    console.log('asdasdasd',Barras)
  return {
    all: function() {
        
        Barras = {id:98789456}
        console.log("in Barra",Barras);
        return Barras;
    },get: function(){
         Barras = {id:98789456}
        console.log("in Barra",Barras);
        return Barras;
        
        
    }
      
  };
       

    

});

 
 
    
/************************** final tamayo  **************************************************/

/********************************************************/


/***************call parse promotion*********************************/
var promotion = new Parse.Query('Promotion');
var customer = new Parse.Query('Customer');
var favorite = new Parse.Query('Favorite');
var PromoSave = new Parse.Query('PromotionSaved')



//i can call data the parse
var query = new Parse.Query('AppCategory');
//query limit hace la llamada de mas elementos


//query limit hace la llamada de mas elementos
//////////////////////////////////////////////////////////////////////////promotion
promotion = promotion.limit(100);
customer = customer.limit(100);
     
///////////////////////////////////////////////////////////////////////////////////////////Customer
//query limit hace la llamada de mas elementos

promotion.find({
        success: function(results) {
            for (x in results) {
               promociones.push(results[x])
                listPromoSuper.push(results[x].attributes.Customer)
                for (i in results[x].attributes.Customer){
                        //console.log(results[x].attributes.Customer[i]);
                        if (true === results[x].attributes.Status){
                            
                            //console.log("esta disponible",results[x].attributes.Status)
                            if (results[x].attributes.Photo === null || results[x].attributes.Photo === undefined){
                                    
                                     PhotoPaiz.push({nul:"sin",name:results[x].attributes.CategoryProduct,
                                                    presentation:results[x].attributes.Presentation,
                                                    description:results[x].attributes.PromotionDescription,
                                                    basePrice:results[x].attributes.BasePrice,
                                                    promotionalPrice:results[x].attributes.PromotionalPrice,
                                                    ahorro:results[x].attributes.BasePrice - results[x].attributes.PromotionalPrice
                                                    ,Category:results[x].attributes.Customer[i],
                                                     ID:"pinOffertsWithoutImage"+x,IDpromotion: results[x].id

                                                                     });
                                //console.log("iamgen no dispobible")    
                            }else{
                               
                                   PhotoPaiz.push({nul:"con",photo:results[x].attributes.Photo._url,
                                                    name:results[x].attributes.CategoryProduct,
                                                presentation:results[x].attributes.Presentation,
                                                description:results[x].attributes.PromotionDescription,
                                                basePrice:results[x].attributes.BasePrice,
                                                promotionalPrice:results[x].attributes.PromotionalPrice,
                                                ahorro:results[x].attributes.BasePrice - results[x].attributes.PromotionalPrice
                                                , Category:results[x].attributes.Customer[i],
                                                ID:"pinOfferts"+x,IDpromotion: results[x].id

                                                                     });
                            } 



                        }
            
                              
                }
            }
            console.log(promociones,"promocines")
            return PhotoPaiz;
      },
      error: function(myObject, error) {
        // Error occureds
        console.log( error );
      }
    });


/* ----------************************************************************************************************-----*/
var CategoryListName = [];
var CategoryListNameConteo = [];
query = query.limit(100);
query.find({
  success: function(results) {
    // cycle through the results
    var PromotionS = Parse.Object.extend("Promotion");
    var q = new Parse.Query(PromotionS);
    for ( x in results) {
        List_name.push(results[x].attributes.CategoryName)
        q.equalTo("CategoryApp", results[x].attributes.CategoryName);
     
            var pro = q.find({
                success: function(results) {
                    for (a in results){
                        console.log(results[a].attributes.CategoryApp,"resultados")
                        CategoryListNameConteo.push({cont:results[a].attributes.CategoryApp})
                    }
                    // console.log(CategoryListNameConteo, "Category cont    ")
                },
                error: function(error) {
                    // Error occureds
                    console.log(error);
                }
            });
        CategoryListName.push({name: results[x].attributes.CategoryName,direc:results[x].attributes.CategoryName,cont_promo:0,icon: results[x].attributes.IconCategory,
    color : results[x].attributes.ColorCategory})
         name  = results[x].attributes.CategoryName
    }
        pro.then(function(){
            for (w in CategoryListName){
                for(s in CategoryListNameConteo){
                    if(CategoryListName[w].name == CategoryListNameConteo[s].cont){
                        console.log("lo encontro",CategoryListName[w].name)
                        CategoryListName[w].cont_promo = CategoryListName[w].cont_promo + 1
                        console.log(    s, "Category names")
                    }
                }
            }
        });
    
          
     
     // console.log(CategoryListNameConteo, "Category cont  zxzxc  ")
  },
  error: function(myObject, error) {
    // Error occured
    console.log( error );
  }
});
/* Call GetPromotions function in Parse Cloud Code */
Parse.Cloud.run('GetPromotions', {}, {
    success: function(result) {
        /* Call GetQuantityPromotions function in Parse Cloud Code and
        send result like parameter */
        Parse.Cloud.run('GetQuantityPromotions', {"Array":result}, {
            success: function(result) {
                /* Call GetAverageSavings function in Parse Cloud Code and
                send result like parameter */
                Parse.Cloud.run('GetAverageSavings', {"Array":result}, {
                    success: function(result) {
                        /* Call AddPromotions function and send result like parameter */
                        AddPromotions(result);
                    },
                    error: function(error) {
                        /* Show error if call failed */
                        console.log(error);
                    }
                });
            },
            error: function(error) {
                /* Show error if call failed */
                console.log(error);
            }
        });
    },
    error: function(error) {
        /* Show error if call failed */
        console.log(error);
    }
});


var GameScore = Parse.Object.extend("Promotion");
var query = new Parse.Query(GameScore);

function AddPromotions(Array) {
    customer.find().then(function(results) {
        for (x in results) {
            var CountPromotions = 0;
            listaNameSuperConteo.push(results[x].attributes.Name)
            InfoShop.push({cel:results[x].attributes.PhoneNumber,name:results[x].attributes.Name,url:results[x].attributes.URL,id:"favorite"+x});
            
            
            if (results[x].attributes.Name in Array.Quantities[0]) {
                CountPromotions =  Array.Quantities[0][results[x].attributes.Name];
                average = Array.averageSavingscustomer[results[x].attributes.Name];
            } else {
                CountPromotions = 0;
                average = 0;
            };
            
            
            if ("Supermercado" ==  results[x].attributes.CategoryApp){
                name = results[x].attributes.Name;
                listaNameSuperComparar.push(results[x].attributes.Name);
                listSupermercado.push(results[x].attributes.Logo._url);
                listNameSupermercado.push(name.split(" ").join("_"));
                Categorys.push({nameCategory:results[x].attributes.Name,ID:"favorite"+x,names:results[x].attributes.CategoryApp})

                Super.push({id:x, name: listSupermercado[x], promo: CountPromotions,promedio:average,
                            lastText: "favorite"+x,img_class:listNameSupermercado[x], NameCategory: results[x].attributes.Name});
                
              

            }else if("Restaurantes" == results[x].attributes.CategoryApp){
                name = results[x].attributes.Name;
                listSupermercado.push(results[x].attributes.Logo._url);
                listNameSupermercado.push(name.split(" ").join("_"));
Categorys.push({nameCategory:results[x].attributes.Name,ID:"favorite"+x,names:results[x].attributes.CategoryApp})
                Restaurantes.push({id:x,name: listSupermercado[x], promo: CountPromotions,promedio:average,
                                    lastText: "favorite"+x,img_class:listNameSupermercado[x], NameCategory: results[x].attributes.Name});

            }else if ("Moda" == results[x].attributes.CategoryApp){
                name = results[x].attributes.Name;
                listSupermercado.push(results[x].attributes.Logo._url);
                listNameSupermercado.push(name.split(" ").join("_"));
                Categorys.push({nameCategory:results[x].attributes.Name,ID:"favorite"+x,names:results[x].attributes.CategoryApp})
                Modas.push({id:x,name: listSupermercado[x], promo: CountPromotions,promedio:average,
                            lastText: "favorite"+x,img_class:listNameSupermercado[x], NameCategory: results[x].attributes.Name});
                
            }else if ("Entretenimiento" == results[x].attributes.CategoryApp){
                name = results[x].attributes.Name;
                listSupermercado.push(results[x].attributes.Logo._url);
                listNameSupermercado.push(name.split(" ").join("_"));
                Categorys.push({nameCategory:results[x].attributes.Name,ID:"favorite"+x,names:results[x].attributes.CategoryApp})
                Entretenimientos.push({id:x,name: listSupermercado[x], promo: CountPromotions,promedio:average,
                                       lastText: "favorite"+x,img_class:listNameSupermercado[x], NameCategory: results[x].attributes.Name});
            
            }else if ("Electrónicos" == results[x].attributes.CategoryApp){
                name = results[x].attributes.Name;
                listSupermercado.push(results[x].attributes.Logo._url);
                listNameSupermercado.push(name.split(" ").join("_"));
Categorys.push({nameCategory:results[x].attributes.Name,ID:"favorite"+x,names:results[x].attributes.CategoryApp})
                Electronico.push({id:x,name: listSupermercado[x], promo: CountPromotions,promedio:average,
                                  lastText: "favorite"+x,img_class:listNameSupermercado[x], NameCategory: results[x].attributes.Name});
            };
        };
       console.log(InfoShop)
        //console.log(Super)

    });
};
function Promotions(id){
    console.log(":DD",id)
    console.log(PhotoPaiz)
        PromoSave.find({
        success: function(results) {
          
            for (x in results) {
                  //console.log(results[x].attributes)
                  if (results[x].attributes.UserID === IdUsuario){
                      //console.log("user find",results[x].attributes.PromotionID)
                      for (a in results[x].attributes.PromotionID){
                            for (b in PhotoPaiz){
                                if (results[x].attributes.PromotionID[a] === PhotoPaiz[b].IDpromotion && id === PhotoPaiz[b].Category){
                                    console.log("Encontrado")
                                     console.log(PhotoPaiz[b].ID)
                                     console.log("-----------------")
                                     console.log( results[x].attributes.PromotionID[a])
                                     var cssColorpinOffer = document.getElementById(PhotoPaiz[b].ID+" "+results[x].attributes.PromotionID[a]).style.color;
                                          if (cssColorpinOffer=="silver"){
                                document.getElementById(PhotoPaiz[b].ID+" "+results[x].attributes.PromotionID[a]).style.color="purple";
                                               }
                                    }
                            }
                      }
                    
                  }
            }
            //console.log(PhotoPaiz)

      },
      error: function(myObject, error) {
        // Error occureds
        console.log( error );
      }
    });
}
var HeartPopover = [];
function Heart(id){
    favorite.find({
        success: function(results) {
            
            for (x in results) {
                //console.log(results[x].attributes.CustomerID)
                //console.log(results[x].attributes.UserID)
    
                    if (results[x].attributes.UserID===IdUsuario){
                       // console.log("find user")
                        for (a in Categorys){
                           //console.log(Categorys[a].names)
                            //console.log("a",Categorys[a].nameCategory)
                            for(b in results[x].attributes.CustomerID){
                                //console.log("s",results[x].attributes.CustomerID[b])
                                if(Categorys[a].nameCategory ===results[x].attributes.CustomerID[b]){
                                    //console.log(":D",Categorys[a].ID,":DD",Categorys[a].nameCategory, "--",Categorys[a].names)
                                     //console.log("s",id,"---",Categorys[a].names)
                                    if (id === Categorys[a].names){
                                        //console.log("se guardo",id,"---",Categorys[a])
                                         document.getElementById(Categorys[a].ID+" "+Categorys[a].nameCategory).style.color="red";
                                        console.log(Categorys[a].ID,Categorys[a].nameCategory)
                                        //HeartPopover.push({id:Categorys[a].ID,name:Categorys[a].nameCategory})
                                    }
                                }
                            }
                        }
                }else{
                    console.log("the user no found")
                }
            }
            //console.log(PhotoPaiz)

      },
      error: function(myObject, error) {
        // Error occureds
        console.log( error );
      }
    });

}


function viewFavorite(){
     AllFavorite = [];
  favorite.each(function(results) {
           
                for(b in results.attributes.CustomerID){
                    if(results.attributes.UserID===IdUsuario){
                        //console.log(results[x].attributes.CustomerID[b])
                        for (c in PhotoPaiz){
                            //console.log(PhotoPaiz[c])
                            if (PhotoPaiz[c].Category === results.attributes.CustomerID[b]){
                                //console.log("find",results.attributes.CustomerID[b])
                                AllFavorite.push(PhotoPaiz[c])
                                //delete AllFavorite[c].Category
                               
                                 
                            }
                        }
                    }

                }
           console.log(AllFavorite, "aqui estoy 2")
      }
    );  
    
}


function viewPromotion(){
    AllPromotion = [];
    var con = 0;
    var promotionSavedData = Parse.Object.extend("PromotionSaved");
    var query = new Parse.Query(promotionSavedData);
    
    query.equalTo("UserID", IdUsuario);

    query.find({
        success: function(results) {
            for (var i = 0; i < results[0].attributes.PromotionID.length; i++){
                for(x in promociones) {
                    if (results[0].attributes.PromotionID[i] === promociones[x].id) {
                        AllPromotion.push(promociones[x].attributes);
                        AllPromotion[con]["PromotionId"] = promociones[x].id;
                        con = con + 1;
                    };
                };
            };
        },
        error: function(error) {
            // Error occureds
            console.log(error);
        }
    });
    
    
}


function llamar(cell){
    a = cell.toString();
    
    b = 'tel:'
    window.open(b+a);
}
function tiendaUrl(Url){
    z = Url
    window.open(z,'_blank')
}
function heartPopover(id){
    console.log("exitoso", HeartPopover)
    console.log("id",id)
    console.log(dato)
 
    
    favorite.find({
        success: function(results) {            
            for (x in results) {
                //console.log(results[x].attributes.CustomerID)
                //console.log(results[x].attributes.UserID)    
                if (results[x].attributes.UserID===IdUsuario){
                        console.log("find user")   
                        for (c in results[x].attributes.CustomerID){
                               for (s in dato){
                                        if (dato[s].name == results[x].attributes.CustomerID[c]){
                                            console.log("oli","Dato",dato[s].name,"ID",id)
                                              var cssHeart = document.getElementById(dato[s].id).style.color
                                                    if (cssHeart == "silver"){
                                                        document.getElementById(dato[s].id).style.color="red";
                                                    }

                                                

                                        }
                                    }

                        }
                }else{
                
                    console.log("the user no found")
                }                 
            }


      },
      error: function(myObject, error) {
        // Error occureds
        console.log( error );
      }
    });
    
    /*
    favorite.find({
        success: function(results) {            
            for (x in results) {
                //console.log(results[x].attributes.CustomerID)
                //console.log(results[x].attributes.UserID)    
                    if (results[x].attributes.UserID===IdUsuario){
                        console.log("find user")                        
                }else{
                
                    console.log("the user no found")
                }                 
            }


      },
      error: function(myObject, error) {
        // Error occureds
        console.log( error );
      }
    });*/
}


function SaveFavorite(UserId, CustomerId) {
    /* This function save favorite customer selected by user in Favorite class
    in parse */
   result = {
       'UserID':UserId,
       'CustomerID':CustomerId
   };
   
   Parse.Cloud.run('SaveFavorite', {"Array":result});
};

function DeleteFavorite(UserId, CustomerId) {
    /* This function delete favorite customer selected by user in Favorite class
    in parse */
   result = {
       'UserID':UserId,
       'CustomerID':CustomerId
   };
   
   Parse.Cloud.run('DeleteFavorite', {"Array":result});
};

function SavePromotion(UserId, PromotionId) {
    /* This function save favorite promotion selected by user in PromotionSaved class
    in parse */
   result = {
       'UserID':UserId,
       'PromotionID': PromotionId
   };
   
   Parse.Cloud.run('SavePromotion', {"Array":result});
};

function DeletePromotion(UserId, PromotionId) {
    /* This function delete favorite promotion selected by user in PromotionSaved class
    in parse */
   result = {
       'UserID':UserId,
       'PromotionId':PromotionId
   };
   
   Parse.Cloud.run('DeletePromotion', {"Array":result});
};