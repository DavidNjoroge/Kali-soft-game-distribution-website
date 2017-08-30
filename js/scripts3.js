action = []
rpg = []

var genre = function() {
  for (var i = 0; i < lengt; i++) {
    if (localObj[i].genre === 'action') {
      action.push(localObj[i])
      //  $('#carddeck').append('<div class="card qwerty" id="' + i + '"><a href="page2.html">' + localObj[i].name + '</a><img class="card-img-top" id="' + i + '" src="' + localObj[i].img + '" width="243" alt="Card image cap"></div>')
      console.log('true');
    } else {


      //  $('#carddeck2').append('<div class="card qwerty" id="' + i + '"><a href="page2.html">' + localObj[i].name + '</a><img class="card-img-top" id="' + i + '" src="' + localObj[i].img + '" width="243" alt="Card image cap"></div>')

      rpg.push(localObj[i])
      console.log('false');
    }
  }
}
var rpG = function() {
  for (var i = 0; i < action.length; i++) {
    $('#carddeck').append('<div class="card qwerty" id="' + i + '"><a href="page2.html">' + action[i].name + '</a><img class="card-img-top" id="' + i + '" src="' + localObj[i].img + '" width="243" alt="Card image cap"></div>')

  }
}






$(document).ready(function() {
  localObj = JSON.parse(localStorage.getItem('data'))
  lengt = JSON.parse(localStorage.getItem('gamesLength'))
  console.log(localObj);

  genre()
  rpG()
  console.log(action);
  console.log(rpg);
});
