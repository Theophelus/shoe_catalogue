document.addEventListener('DOMContentLoaded', function() {
  // var shoe_card = document.querySelector('.shop-card');
  // // get reference for template script tags
  // var templateSource = document.querySelector('.shoeCatalogueTemplate').innHTML
  // //Template compiler
  // var userTemplate = Handlebars.compile(templateSource);

  var shoeCatalogue = Shoe_Catalogue;

    document.querySelector('.fa-plus-square').addEventListener('click', function(){
      document.querySelector('.top-bar').style.height = '40%';
    });
    document.querySelector('.fa-window-close').addEventListener('click', function(){
      document.querySelector('.top-bar').style.height = '0%';
    });

    document.querySelector('.closebtn').addEventListener('click', function(){
      document.querySelector('.side-bar').style.width = '0px';
      document.querySelector('.main').style.marginLeft = '0px';

    });
    document.querySelector('.hamburger').addEventListener('click', function(){
      document.querySelector('.side-bar').style.width = '250px';
      document.querySelector('.main').style.marginLeft = '40px';
    });
  // window.addEventListener('load', function(){
  //   var userData = userTemplate({
  //     shoeData: shoeCatalogue.getShoeData()
  //   });
  //   shoe_card.innHTML = userData;
  // });
});
