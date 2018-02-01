$(function(){
  $('div').slice(0, 1).show();
  $(".loadMore").on('click', function(event){
    event.preventDefault();
    $('div:hidden').slice(0, 4).show(900);
    
  });
});