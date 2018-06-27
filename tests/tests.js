describe('shoe Catalogue widget', function(){
  it('should to increment the stock if a shoe already exists', function(){
    var shoeCatalogue = Shoe_Catalogue();
    assert.deepEqual(
    [
        { color: 'Brown', brand: 'Kurt Geiger', price: 1000, size: 39, in_stock: 6 },
        { color: 'Black', brand: 'Europa Art', price: 1500, size: 40, in_stock: 3 },
        { color: 'Blue', brand: 'XO Royalty', price: 2000, size: 39, in_stock: 8 },
        { color: 'Black', brand: 'Aldo', price: 2000, size: 39, in_stock: 2 },
        { color: 'Red', brand: 'XO Royalty', price: 2000, size: 40, in_stock: 10 },
        { color: 'Brown', brand: 'Kurt Geiger', price: 2000, size: 40, in_stock: 8 }
        // { color: 'Nevy', barnd: 'XO Royalty', price: 2500, size: 39, in_stock: 10 }
    ], shoeCatalogue.newShoe('Blue', 'XO Royalty', 2000, 39, 10));
  });
  // it('should be able to increment the size of a shoe it already axists', function(){
  //   var shoeCatalogue = Shoe_Catalogue();
  //
  // });
});
