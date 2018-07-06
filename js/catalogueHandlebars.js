document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.fa-plus-square').addEventListener('click', function(){
    document.querySelector('.top-bar').style.height = '65%';
  });
  document.querySelector('.fa-window-close').addEventListener('click', function(){
    document.querySelector('.top-bar').style.height = '0%';
  });

  document.querySelector('.closebtn').addEventListener('click', function(){
    document.querySelector('.side-bar').style.width = '0px';
    document.querySelector('.main').style.width = '250px';
  });
  document.querySelector('.hamburger').addEventListener('click', function(){
    document.querySelector('.side-bar').style.width = '250px';
    document.querySelector('.main').style.width = '250px';
  });

});
