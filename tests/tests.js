describe('shoe Catalogue widget', function(){
  it('should return color, brand and size of a shoe matching a description', function(){
    var shoeCatalogue = Shoe_Catalogue();
    console.log(shoeCatalogue.filter('XO Royalty', 'Blue', 39));
    assert.deepEqual([{color: "Blue", brand: "XO Royalty", price: 2000, size: 39, in_stock: 8}],   shoeCatalogue.filter('XO Royalty', 'Blue', 39));
  });

  it('should be able to filter by color and return all the shoes related to that color', function(){
    assert.deepEqual([])
  });
});
