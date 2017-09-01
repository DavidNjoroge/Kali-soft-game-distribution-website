genre = []
actionCipher = []
indieCipher = []
casualCipher = []
adventureCipher = []
sportsCipher = []
racingCipher = []


var genreCipher = function() {
  for (var i = 0; i < games.length; i++) {
    if (games[i].genre === "Action") {
      actionCipher.push(games[i])
    } else if (games[i].genre === "Indie Games") {
      indieCipher.push(games[i])
    } else if (games[i].genre === "Racing") {
      racingCipher.push(games[i])

    } else if (games[i].genre === "Sports") {
      sportsCipher.push(games[i])

    } else if (games[i].genre === "Adventure") {
      adventureCipher.push(games[i])

    } else if (games[i].genre === "Casual") {
      casualCipher.push(games[i])

    }
  }
}



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
      $('#carddeck').append('<div class="card qwerty" id="' + i + '"><a href="page2.html">' + localObj[i].name + '</a><img class="card-img-top" id="' + i + '" src="' + localObj[i].img + '" width="243" alt="Card image cap"></div>')

    }
  }
}

// function appender2() {
//   for (var i = 0; i < games.length; i++) {
//     if (games[i].genre === "Indie Games") {
//       $('#carddeck-indie').append('<div class="card qwertyIndie" id="' + i + '"><a href="page2.html">' + games[i].name + '</a><img class="card-img-top" id="' + i + '" src="' + games[i].img + '" width="243" alt="Card image cap"></div>')
//
//     }
//   }
// }




jQuery(document).ready(function($) {
  localObj = JSON.parse(localStorage.getItem('data'))
  page1 = JSON.parse(localStorage.getItem('id'))
  console.log(localObj);
  games = localObj
  genreCipher()
  console.log(indieCipher);
  $("#gamesHeaders").append(localObj[page1].name) //changes  game headers for page 2
  $("#intro,#description").css('background-image', "url('" + localObj[page1].img + "')") //changes background for section page 2
  $(".sc").append('<img src="' + localObj[page1].img + '" id="thumb" alt="">') //changes page 2 thumbnail
  screenShots()
  others()
  $('.qwerty').click(function(event) {
    /* Act on the event */
    var clickedItem = $(this).attr('id');

    localStorage.setItem('id', clickedItem)
  });
});
