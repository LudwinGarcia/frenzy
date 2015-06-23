/*******************************************************/
var List_name = []; /* list name category*/ 
var promociones = [];
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
    for ( x in results) {
        promociones.push(results[x].attributes.TypeService)
        // name  = results[x].attributes.CategoryName
         console.log(results[x].attributes.CategoryApp)
         console.log(results[x].attributes.Costumer)
         console.log(results[x].attributes.CategoryProduct)
    }
  },
  error: function(myObject, error) {
    // Error occured
    console.log( error );
  }
});


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
     console.log(name)
    
}
 // Some fake testing data
  var categorys = [{
    id: 0,
    name: List_name[0],
    lastText: C,
    face: 'E',
      color : "icon_supermercado"
  }, {
    id: 1,
    name:  List_name[1],
    lastText: 'Hey, it\'s me....',
    face: 'F',
      color : "icon_restaurante"
  },{
    id: 2,
    name: List_name[2],
    lastText: 'I should buy a boat',
      super: "supermercados",
    face: 'G',
      color : "icon_moda"
  }, {
    id: 3,
    name:  List_name[3],
    lastText: 'Look at my mukluks!',
      super: "supermercados",
    face: 'H',
      color : "icon_entretenimiento"
  }, {
    id: 4,
    name:  List_name[4],
    lastText: 'This is wicked good ice cream.',
      super: "supermercados",
    face: 'I',
      color : "icon_electronico"
  }, {
    id: 5,
    name:  List_name[5],
    lastText: 'Look at my mukluks!',
      super: "supermercados",
    face: 'J',
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
  // Might use a resource here that returns a JSON array
    
  // Some fake testing data
  var supermercados = [{
    id: 0,
    name: "Wallmark",
    lastText: "s",
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 1,
    name:  "Paiz",
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: "Hiper paiz",
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name:  "La Torre",
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }];

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
