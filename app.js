$(document).ready(function(){

  $('#toggleButton').click(function(){
    $('.card').toggleClass('darkCard');
    $('body').toggleClass('darkBody');
    $('h6').toggleClass('textgray');
    $('h1, h2, h5').toggleClass('textlight');
  })

})
