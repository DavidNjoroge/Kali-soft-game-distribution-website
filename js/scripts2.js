genre = []
var screenShots = function() {
  for (var i = 0; i < localObj[page1].screenS.length; i++) {
    // localObj[page1].screenS.[i]
    $('#wekaScreenShots').append('<img class="card-img-top" src="' + localObj[page1].screenS[i] + '" width="243" alt="Card image cap"></div>')
  }

}
var others = function() {
  for (var i = 0; i < 30; i++) {
    if (localObj[i].genre === localObj[page1].genre) {
      //   $('#carddeck').append('<div class="card qwerty" id="' + i + '"><a href="page2.html">' + localObj[i].name + '</a><img class="card-img-top" id="' + i + '" src="' + localObj[i].img + '" width="243" alt="Card image cap"></div>')
      genre.push(localObj[i])
      console.log(genre);
    }
  }
  for (var i = 0; i < 3; i++) {
    $('#carddeck').append('<div class="card qwerty" id="' + i + '"><a href="page2.html">' + genre[i].name + '</a><img class="card-img-top" id="' + i + '" src="' + genre[i].img + '" width="243" alt="Card image cap"></div>')
  }
}






jQuery(document).ready(function($) {
  localObj = JSON.parse(localStorage.getItem('data'))
  page1 = JSON.parse(localStorage.getItem('id'))
  console.log(genre);
  console.log(localObj[page1]);
  $("#gamesHeaders").append(localObj[page1].name) //changes  game headers for page 2
  $("#intro,#description").css('background-image', "url('" + localObj[page1].img + "')") //changes background for section page 2
  $(".sc").append('<img src="' + localObj[page1].img + '" id="thumb" alt="">') //changes page 2 thumbnail
  screenShots()
  others()
});
