// TODO: 1 Create factory function Shoe_Catalogue: Done
// TODO: 2 Define a variable called shoeData, with a list of object: Done
// TODO: 3 give those objects inside that list keys call color, brand, price and in_stock: Done
// TODO: 4 create a function called loop through the list of shoe data: doing: Done
// TODO: 5 Find a way to filter by size,color, and brand: doing and get shoe associated to the description: Done
// TODO:
// TODO: 6 When the search button is being pressed then return the decsription of that partivular shoe
var Shoe_Catalogue = function() {
    var shoeData = [
        { color: 'Brown', brand: 'Kurt Geiger', price: 1000, size: 39, in_stock: 6 },
        { color: 'Black', brand: 'Europa Art', price: 1500, size: 40, in_stock: 3 },
        { color: 'Blue', brand: 'XO Royalty', price: 2000, size: 39, in_stock: 8 }
    ];
    var filter = function(brand, color, size) {
        // difine and empty array to filtered results
        var filteredResults = [];
        for (var i = 0; i < shoeData.length; i++) {
            var currentData = shoeData[i];
            if (brand === currentData.brand && color === currentData.color && size === currentData.size) {
                filteredResults.push(currentData);
                console.log(filteredResults);
            }
        }
        return filteredResults;
    }
    // const filter = shoeData.filter(function(shoes){
    //   if(shoes.brand == 'XO Royalty'){
    //     return true;
    //   }
    //   // if(shoes.brand =='Kurt Geiger' && shoes.color == 'Brown'){
    //   //   return true;
    //   // }


    return {
        filter
    };
}
