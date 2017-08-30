jQuery(document).ready(function($) {
  var localObj=JSON.parse(localStorage.getItem('data'))
  var page1=JSON.parse(localStorage.getItem('id'))

  console.log(localObj[page1]);
  $("#gamesHeaders").append(localObj[page1].name)//changes  game headers for page 2
  $("#intro").css('background-image',"url('"+localObj[page1].img+"')")//changes background for section page 2
  $(".sc").append('<img src="'+localObj[page1].img+'" id="thumb" alt="">')//changes page 2 thumbnail
});
