describe('shoe Catalogue widget', function(){
  var shoeCatalogue = Shoe_Catalogue();
  it('Should add new shoe into shoe data', function(){
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
  it('Should be able to increment the stock if shoe already exists', function(){
    shoeCatalogue.newShoe('Red', 'XO Royalty', 2000, 40, 2);
    assert.deepEqual(shoeCatalogue.getShoeData(),
    [
        { color: 'Brown', brand: 'Kurt Geiger', price: 1000, size: 39, in_stock: 6 },
        { color: 'Black', brand: 'Europa Art', price: 1500, size: 40, in_stock: 3 },
        { color: 'Blue', brand: 'XO Royalty', price: 2000, size: 39, in_stock: 8 },
        { color: 'Black', brand: 'Aldo', price: 2000, size: 39, in_stock: 2 },
        { color: 'Red', brand: 'XO Royalty', price: 2000, size: 40, in_stock: 12 },
        { color: 'Brown', brand: 'Kurt Geiger', price: 2000, size: 40, in_stock: 8 },
        {color: "Nevy", brand: "XO Royalty", size: 41, price: 2500, in_stock: 4}
    ]);
  });
});

describe('filtering', function(){

  it('should  be able to find a shoe that is being filtered by color brand and size', function(){
    var shoeCatalogue = Shoe_Catalogue();
    assert.deepEqual(shoeCatalogue.filtered('Red', 'XO Royalty', 40), [
      { color: 'Red', brand: 'XO Royalty', price: 2000, size: 40, in_stock: 10 }
    ]);
  });
  it('should  be able to find a shoe that is being filtered by color only ', function(){
    var shoeCatalogue = Shoe_Catalogue();
    // console.log(shoeCatalogue.filtered('Blue','', null));
    assert.deepEqual(shoeCatalogue.filtered('Blue','', null), [
      { color: 'Blue', brand: 'XO Royalty', price: 2000, size: 39, in_stock: 8}
    ]);
  });
  it('should  be able to find a shoe that is being filtered by brand only ', function(){
    var shoeCatalogue = Shoe_Catalogue();
    assert.deepEqual(shoeCatalogue.filtered('','Kurt Geiger', null), [
      { color: 'Brown', brand: 'Kurt Geiger', price: 1000, size: 39, in_stock: 6 },
      { color: 'Brown', brand: 'Kurt Geiger', price: 2000, size: 40, in_stock: 8 },
    ]);
  });
  it('should  be able to find a shoe that is being filtered by size only ', function(){
    var shoeCatalogue = Shoe_Catalogue();
    assert.deepEqual(shoeCatalogue.filtered('','', 39), [
      { color: 'Brown', brand: 'Kurt Geiger', price: 1000, size: 39, in_stock: 6 },
      { color: 'Blue', brand: 'XO Royalty', price: 2000, size: 39, in_stock: 8 },
      { color: 'Black', brand: 'Aldo', price: 2000, size: 39, in_stock: 2 },
    ]);
  });
});

describe('Add Product Items in A Cart', function(){
  var shoeCatalogue = Shoe_Catalogue();
});
