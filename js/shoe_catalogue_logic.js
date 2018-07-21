// TODO: 1 Create factory function Shoe_Catalogue: Done
// TODO: 2 Define a variable called shoeData, with a list of object: Done
// TODO: 3 give those objects inside that list keys call color, brand, price and in_stock: Done
// TODO: 4 create a function called loop through the list of shoe data: doing: Done
// TODO: 5 Find a way to filter by size,color, and brand: doing and get shoe associated to the description: Done
// TODO: 6 The program must filter by color or brand or size and return all the shoes that contain that color: IN PROGRESS
// TODO: 7 When the search button is being pressed then return the decsription of that partivular shoe
const Shoe_Catalogue = function() {
let cart = [];
// difine and empty array to filtered results
let shoeData = [
    { color: 'Brown', brand: 'Kurt Geiger', price: 1000, size: 39, in_stock: 6 },
    { color: 'Black', brand: 'Europa Art', price: 1500, size: 40, in_stock: 3 },
    { color: 'Blue', brand: 'XO Royalty', price: 2000, size: 39, in_stock: 8 },
    { color: 'Black', brand: 'Aldo', price: 2000, size: 39, in_stock: 2 },
    { color: 'Red',brand: 'XO Royalty', price: 2000, size: 40, in_stock: 10 },
    { color: 'Brown', brand: 'Kurt Geiger', price: 2000, size: 40, in_stock: 8 }
];
console.log(shoeData);
var newShoe = function(newColor, newBrand, newPrice, newSize, newStock) {
  for(let i =0; i <shoeData.length; i++){
    let currentData = shoeData[i];
    if(currentData.color === newColor && currentData.brand === newBrand){
      currentData.in_stock += newStock;
    }
  }
};
console.log(newShoe(0));
// console.log(newShoe(0));
const addToCart = function(){
  //Loop through shoe data and Check if product already exists in the cart if not add

  }
//create afunction to remove items in the cart
const removeItemInTheCart = function(){

}
let getShoeData = function(){
  return shoeData;
}
return {
    // filtered,
    newShoe,
    getShoeData,
    addToCart
}
};
// difine and empty array to filtered results
// let filteredResults = [];
//   for (let i = 0; i < shoeData.length; i++) {
//       let currentData = shoeData[i];
//       if(currentData['color'] === color || currentData['color'] === '' && currentData['brand'] === brand || currentData['brand'] === '' && currentData['size'] == size || currentData['size'] === 0){
//         filteredResults.push(currentData);
//         }
//       }
//   return filteredResults;
