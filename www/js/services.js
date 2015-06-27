/*******************************************************/
var List_name = []; /* list name category*/ 
var promociones = [];
var listSupermercado = [];
var promedio = [];
var listNameSupermercado = [];
var Super = [];

var total = 0;


angular.module('starter.services', [])

.factory('Chats', function() {
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


.factory('Categorys', function() {
  // Might use a resource here that returns a JSON array
    
for (a in promociones) {
    console.log(promociones.length)
    var C = promociones.length
     
    
    
}
 // Some fake testing data
  var categorys = [{
    id: 0,
    name: List_name[0],
    cont_promo: C,
    icon: 'E',
    color : "icon_supermercado"
  }, {
    id: 1,
    name:  List_name[1],
    cont_promo: 'Hey, it\'s me....',
    icon: 'F',
      color : "icon_restaurante"
  },{
    id: 2,
    name: List_name[2],
    cont_promo: 'I should buy a boat',
      super: "supermercados",
    icon: 'G',
      color : "icon_moda"
  }, {
    id: 3,
    name:  List_name[3],
    cont_promo: 'Look at my mukluks!',
      super: "supermercados",
    icon: 'H',
      color : "icon_entretenimiento"
  }, {
    id: 4,
    name:  List_name[4],
    cont_promo: 'This is wicked good ice cream.',
      super: "supermercados",
    icon: 'I',
      color : "icon_electronico"
  }, {
    id: 5,
    name:  List_name[5],
    cont_promo: 'Look at my mukluks!',
      super: "supermercados",
    icon: 'J',
      color : "icon_otro"
  }];

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

.factory('Supermercados', function() {
    for (a in promociones) {
    console.log(promociones.length)
    var C = promociones.length
     console.log(name)
    
}
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
});

 
var Code_Review = Parse.Object.extend("AppCategory");
/***************Console log for check the json*************************************/
var Code_Reviews = Parse.Collection.extend({
    model: Code_Review
});

var code_review = new Code_Reviews();

code_review.fetch({
    success: function(code_review) {
        console.log(code_review);
    },
    error: function(code_review, error) {
        console.log(error);
    }
});
/********************************************************/
//i can call data the parse
var query = new Parse.Query('AppCategory');
//query limit hace la llamada de mas elementos
query = query.limit(600);
query.find({
  success: function(results) {
    // cycle through the results
    for ( x in results) {
        
          List_name.push(results[x].attributes.CategoryName)

         name  = results[x].attributes.CategoryName
         //console.log(name)
        //console.log(List_name)
        // print out the results
        //console.log( results[x].attributes.BasePrice + ' - ' + results[x].attributes.CategoryApp + ' - ' + results[x].attributes.CategoryProduct + ' - ' + results[x].attributes.Costumer+ ' - ' + results[x].attributes.EndDate+ ' - ' + results[x].attributes.PhoneNumber);
        //$(".Data").append('<li>' + results[x].attributes.Name + '  -  ' + results[x].attributes.project_type +  '  -  ' + results[x].attributes.Date + '</li>');
    }
  },
  error: function(myObject, error) {
    // Error occured
    console.log( error );
  }
});

/***************call parse promotion*********************************/
var promotion = new Parse.Query('Promotion');
//query limit hace la llamada de mas elementos
promotion = promotion.limit(600);
promotion.find({
  success: function(results) {
    // cycle through the results
      var sumaPrecioBase = 0;
      var sumaPrecioPromo = 0;

    for ( x in results) {
        promociones.push(results[x].attributes.TypeService)
        sumaPrecioBase =  sumaPrecioBase + results[x].attributes.BasePrice
        sumaPrecioPromo = sumaPrecioPromo + results[x].attributes.PromotionalPrice
      
       
        // name  = results[x].attributes.CategoryName
         console.log(results[x].attributes.CategoryApp)
         console.log(results[x].attributes.Costumer)
         console.log(results[x].attributes.CategoryProduct)
    }
      
        resta = sumaPrecioBase-sumaPrecioPromo
        total = resta / promociones.length
        total = total.toFixed(2)
        console.log("--total-----")
        console.log("--total-----")
        console.log(total)
        promedio.push(total)
  },
  error: function(myObject, error) {
    // Error occured
    console.log( error );
  }
});

var customer = new Parse.Query('Customer');
//query limit hace la llamada de mas elementos
customer = customer.limit(600);
customer.find({
  success: function(results) {
    // cycle through the results
    for ( x in results) {
        var C = 0;
        var name = results[x].attributes.Name;
        listSupermercado.push(results[x].attributes.Logo._url)
        listNameSupermercado.push(name.split(" ").join("_"))
       
            for (a in promociones) {

            C = promociones.length
            }

            Super.push({id:x,name: listSupermercado[x], promo: C,promedio:total,
    lastText: "favorite"+x,img_class:listNameSupermercado[x],})
            console.log(Super)

        console.log("-----------*****-------------")
     
        
    }
    
  },
  error: function(myObject, error) {
    // Error occured
    console.log( error );
  }
});





