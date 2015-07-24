

function foo(arr) {
    var totalPromotion = {};
    var a = [], b = [], prev;

    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            totalPromotion[arr[i]] = 1;
        } else {
            totalPromotion[arr[i]] += 1;
        }
        prev = arr[i];

    };
    return totalPromotion
};


/*This functions returns an array with the name of promotions and customers*/
Parse.Cloud.define("GetPromotions", function(request, response) {
    var promotion = new Parse.Query('Promotion');
    var promotions = {};
    
    promotion.find().then(function(results) {
        for (x in results) {
            var key = results[x].attributes.CategoryProduct;
            var value = results[x].attributes.Costumer;
            promotions[key] = value;
        };
        response.success(promotions);
    })
});

/*Sort the data of an array and get customers and your quantity promotions*/
Parse.Cloud.define("GetQuantityPromotions", function(request, response) {
    promotions = request.params.Array
    var clientsArray = new Array;
    var clientList = [];
    var QuantityClientPromotion;
   
    for (i in promotions){
        clientsArray.push(promotions[i]);
    };
    
    
    for (var i = 0; i<clientsArray.length; i++) {
        var Data;
        Data = clientsArray[i];
        for (var x = 0; x<Data.length; x++) {
            clientList.push(Data[x]);
        };
    };
    
    response.success(foo(clientList));
});