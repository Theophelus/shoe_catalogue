// var shoeData = [
//     { color: 'Brown', brand: 'Kurt Geiger', price: 1000, size: 39, in_stock: 6 },
//     { color: 'Black', brand: 'Europa Art', price: 1500, size: 40, in_stock: 3 },
//     { color: 'Blue', brand: 'XO Royalty', price: 2000, size: 39, in_stock: 8 },
//     { color: 'Black', brand: 'Aldo', price: 2000, size: 39, in_stock: 2 },
//     { color: 'Red', brand: 'XO Royalty', price: 2000, size: 40, in_stock: 10 },
//     { color: 'Brown', brand: 'Kurt Geiger', price: 2000, size: 40, in_stock: 8 }
// ];

describe('shoe Catalogue widget', function(){
  // it('should return color, brand and size of a shoe matching a description', function(){
  //   var shoeCatalogue = Shoe_Catalogue();
  //   console.log(shoeCatalogue.filter('XO Royalyt', 'Blue', 39));
  //   assert.deepEqual([{color: "Blue", brand: "XO Royalty", price: 2000, size: 39, in_stock: 8}], shoeCatalogue.filter('XO Royalty', 'Blue', 39));
  // });
  //
  // it('should be able to filter by color and return all the shoes related to that color', function(){
  //   var shoeCatalogue = Shoe_Catalogue()
  //   console.log(shoeCatalogue.filter());
  //   assert.deepEqual([{color: 'Brown', brand: 'Kurt Geiger', price: 2000, size: 40, in_stock: 8 }], shoeCatalogue.filter('Kurt Geiger', '', ''));
  // });
  // it('should be able to filter by color and return all the shoes related to that color', function(){
  //   var shoeCatalogue = Shoe_Catalogue()
  //   shoeCatalogue.newShoe('White', 'Nike', 1000, 6, 8);
  //   console.log(shoeCatalogue.getShoeData())
  //   assert.deepEqual('', shoeCatalogue.getShoeData());
  // });
  it('should be able to filter by color and return all the shoes related to that color', function(){
    var shoeCatalogue = Shoe_Catalogue()
    shoeCatalogue.newShoe('Blue', 'XO Royalty', 39);
    console.log(shoeCatalogue.getShoeData())
    assert.deepEqual([
        { color: 'Brown', brand: 'Kurt Geiger', price: 1000, size: 39, in_stock: 6 },
        { color: 'Black', brand: 'Europa Art', price: 1500, size: 40, in_stock: 3 },
        { color: 'Blue', brand: 'XO Royalty', price: 2000, size: 39, in_stock: 18 },
        { color: 'Black', brand: 'Aldo', price: 2000, size: 39, in_stock: 2 },
        { color: 'Red', brand: 'XO Royalty', price: 2000, size: 40, in_stock: 10 },
        { color: 'Brown', brand: 'Kurt Geiger', price: 2000, size: 40, in_stock: 8 }
    ], shoeCatalogue.getShoeData());
  });
});
