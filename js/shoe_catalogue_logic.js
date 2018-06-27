// TODO: 1 Create factory function Shoe_Catalogue: Done
// TODO: 2 Define a variable called shoeData, with a list of object: Done
// TODO: 3 give those objects inside that list keys call color, brand, price and in_stock: Done
// TODO: 4 create a function called loop through the list of shoe data: doing: Done
// TODO: 5 Find a way to filter by size,color, and brand: doing and get shoe associated to the description: Done
// TODO: 6 The program must filter by color or brand or size and return all the shoes that contain that color: IN PROGRESS
// TODO: 7 When the search button is being pressed then return the decsription of that partivular shoe
var Shoe_Catalogue = function() {
var shoeData = [
    { color: 'Brown', brand: 'Kurt Geiger', price: 1000, size: 39, in_stock: 6 },
    { color: 'Black', brand: 'Europa Art', price: 1500, size: 40, in_stock: 3 },
    { color: 'Blue', brand: 'XO Royalty', price: 2000, size: 39, in_stock: 8 },
    { color: 'Black', brand: 'Aldo', price: 2000, size: 39, in_stock: 2 },
    { color: 'Red', brand: 'XO Royalty', price: 2000, size: 40, in_stock: 10 },
    { color: 'Brown', brand: 'Kurt Geiger', price: 2000, size: 40, in_stock: 8 }
];
console.log(shoeData);
var filter = function(brand, color, size) {
    // difine and empty array to filtered results
    var filteredResults = [];
    for (var i = 0; i < shoeData.length; i++) {
        var currentData = shoeData[i];
        if (currentData.color == color && currentData.brand == brand && currentData.size == size) {
            filteredResults.push(currentData);
            console.log(currentData);
            console.log(filteredResults);
        }

        // if(brand == currentData.brand && color== '' && size == ''){
        //   if (brand == '' && color == currentData.color && size == '') {
        //     if (brand == '' && color == '' && size == currentData.size) {
        //         filteredResults.push(currentData);
        //           //console.log(filteredResults);
        //     }
        //     else {
        //       return false;
        //     }
        //   }
        // }
        // if (brand == currentData.brand && color == '' && size == currentData.size) {
        //     filteredResults.push(current)
        // }
        return filteredResults;
    }
};
// Create a function to add new shoes in an shoe shoeData
var newShoe = function(newColor, newBrand, newPrice, newSize, newStock) {
    for (var i = 0; i < shoeData.length; i++) {
        var currentData = shoeData[i];
        //Check if shoe aready exists if it does increment only the count
        if (currentData.color == newColor && currentData.brand == newBrand) {
            currentData.in_stock += newStock;
            return;
        }
    }
    //If shoe doesn't exists inside the map then add new shoe
    shoeData.push({
        color: newColor,
        brand: newBrand,
        size: newSize,
        price: newPrice,
        in_stock: newStock
    });
    return currentData;
};
//Checkig if shoe exist, if exist increment in_stock
newShoe('Blue', 'XO Royalty', 2000, 39, 10);
//adding new shoe
// newShoe('Nevy', 'XO Royalty', 2500, 41, 4);
// newShoe('Black', 'Adidas', 300, 40, 2);
console.log(shoeData[2]);
// console.log(shoeData[4]);
console.log(shoeData);
return {
    // filter,
    newShoe,
    // getNewShoe
};
}
