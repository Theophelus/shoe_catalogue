// TODO: 1 Create factory function Shoe_Catalogue: Done
// TODO: 2 Define a variable called shoeData, with a list of object: Done
// TODO: 3 give those objects inside that list keys call color, brand, price and in_stock: Done
// TODO: 4 create a function called loop through the list of shoe data: doing: Done
// TODO: 5 Find a way to filter by size,color, and brand: doing and get shoe associated to the description: Done
// TODO: 6 The program must filter by color or brand or size and return all the shoes that contain that color: IN PROGRESS
// TODO: 7 When the search button is being pressed then return the decsription of that partivular shoe
const Shoe_Catalogue = function() {
// difine and empty array to filtered results
let shoeData = [
    { color: 'Brown', brand: 'Kurt Geiger', price: 1000, size: 39, in_stock: 6 },
    { color: 'Black', brand: 'Europa Art', price: 1500, size: 40, in_stock: 3 },
    { color: 'Blue', brand: 'XO Royalty', price: 2000, size: 39, in_stock: 8 },
    { color: 'Black', brand: 'Aldo', price: 2000, size: 39, in_stock: 2 },
    { color: 'Red',brand: 'XO Royalty', price: 2000, size: 40, in_stock: 10 },
    { color: 'Brown', brand: 'Kurt Geiger', price: 2000, size: 40, in_stock: 8 }
];
let cart = [];
let filteredResults = [];
console.log(shoeData);
const newShoe = function(newColor, newBrand, newPrice, newSize, newStock) {
  let product_item = false;
  for(let i=0; i <shoeData.length; i++){
    let currentData = shoeData[i];
    //When  product item is true udate shoe stock
    if(newColor == currentData.color && newBrand == currentData.brand && newPrice == currentData.price && newSize == currentData.size ){
      currentData.in_stock += newStock;
      product_item = true;
      // return false;
    }
  }
  //If product item is false push new shoe to shoe shoeData
  if (!product_item) {
    shoeData.push({
      color: newColor,
      brand: newBrand,
      price: newPrice,
      size: newSize,
      in_stock: newStock
    });
  }
};

//define a filtering function
const filtered = function(color, brand, size){
//loop through the list
for(let i=0; i<shoeData.length; i++){
  let currentData = shoeData[i];
  if(color == currentData.color || currentData.color === '' && brand == currentData.brand || currentData.brand === '' && size == currentData.size || currentData.size === 0){
    filteredResults.push(currentData);
  }
  if(color == currentData.color || currentData.color === '' ){
    filteredResults.push(currentData);
  }else if (brand == currentData.brand || currentData.brand == '') {
    filteredResults.push(currentData);
  }else if (size == currentData.size || currentData.size == 0) {
    filteredResults.push(currentData);
  }
}
return filteredResults;
}

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
    filtered,
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
// for(let i =0; i <shoeData.length; i++){
//   let currentData = shoeData[i];
//   if(currentData.color === newColor && currentData.brand === newBrand){
//     currentData.in_stock += newStock;
//   }
// }
