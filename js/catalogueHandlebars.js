document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.fa-plus-square').addEventListener('click', function(){
    document.querySelector('.top-bar').style.height = '65%';
    document.querySelector('.top-bar').style.height = 'transition: all 0.3s ease-in-out';
  });
  document.querySelector('.fa-window-close').addEventListener('click', function(){
    document.querySelector('.top-bar').style.height = '0%';
  });

});
