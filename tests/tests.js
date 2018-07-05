describe('shoe Catalogue widget', function(){
  it('Should add new shoe into shoe data', function(){
    var shoeCatalogue = Shoe_Catalogue();
    shoeCatalogue.newShoe('Nevy', 'XO Royalty', 2500, 41, 4);
    assert.deepEqual(shoeCatalogue.getShoeData(),
    [
        { color: 'Brown', brand: 'Kurt Geiger', price: 1000, size: 39, in_stock: 6 },
        { color: 'Black', brand: 'Europa Art', price: 1500, size: 40, in_stock: 3 },
        { color: 'Blue', brand: 'XO Royalty', price: 2000, size: 39, in_stock: 8 },
        { color: 'Black', brand: 'Aldo', price: 2000, size: 39, in_stock: 2 },
        { color: 'Red', brand: 'XO Royalty', price: 2000, size: 40, in_stock: 10 },
        { color: 'Brown', brand: 'Kurt Geiger', price: 2000, size: 40, in_stock: 8 },
        {color: "Nevy", brand: "XO Royalty", size: 41, price: 2500, in_stock: 4}
    ]);
  });
  it('should to increment the stock if a shoe already exists', function(){
    var shoeCatalogue = Shoe_Catalogue();
    assert.deepEqual(shoeCatalogue.newShoe('Blue', 'XO Royalty', 2000, 39, 10),
    [
      { color: 'Brown', brand: 'Kurt Geiger', price: 1000, size: 39, in_stock: 6 },
      { color: 'Black', brand: 'Europa Art', price: 1500, size: 40, in_stock: 3 },
      { color: 'Blue', brand: 'XO Royalty', price: 2000, size: 39, in_stock: 18 },
      { color: 'Black', brand: 'Aldo', price: 2000, size: 39, in_stock: 2 },
      { color: 'Red', brand: 'XO Royalty', price: 2000, size: 40, in_stock: 10 },
      { color: 'Brown', brand: 'Kurt Geiger', price: 2000, size: 40, in_stock: 8 }
    ]);
  });
  // it('should  be able to find a shoe that is being filtered by color brand and size', function(){
  //   var shoeCatalogue = Shoe_Catalogue();
  //   assert.deepEqual(shoeCatalogue.filter('Brown', 'Kurt Geiger', 39), [
  //     { color: 'Brown', brand: 'Kurt Geiger', price: 1000, size: 39, in_stock: 6 }
  //   ]);
  // });
  // it('should  be able to find a shoe that is being filtered by color only ', function(){
  //   var shoeCatalogue = Shoe_Catalogue();
  //   assert.deepEqual(shoeCatalogue.filter('Black','',''), [
  //     { color: 'Black', brand: 'Europa Art', price: 1500, size: 40, in_stock: 3 },
  //     { color: 'Black', brand: 'Aldo', price: 2000, size: 39, in_stock: 2 }
  //   ]);
  // });
  // it('should  be able to find a shoe that is being filtered by brand only ', function(){
  //   var shoeCatalogue = Shoe_Catalogue();
  //   assert.deepEqual(shoeCatalogue.filter('','Aldo',''), [
  //     { color: 'Black', brand: 'Aldo', price: 2000, size: 39, in_stock: 2 }
  //   ]);
  // });
  // it('should  be able to find a shoe that is being filtered by brand only ', function(){
  //   var shoeCatalogue = Shoe_Catalogue();
  //   assert.deepEqual(shoeCatalogue.filter('',' ', 39), [
  //     { color: 'Brown', brand: 'Kurt Geiger', price: 1000, size: 39, in_stock: 6 },
  //     { color: 'Blue', brand: 'XO Royalty', price: 2000, size: 39, in_stock: 18 },
  //     { color: 'Black', brand: 'Aldo', price: 2000, size: 39, in_stock: 2 },
  //   ]);
  // });
});
