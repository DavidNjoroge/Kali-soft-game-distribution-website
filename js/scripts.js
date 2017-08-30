games = []
actions = []

function Game(name, genre, img) {
  this.name = name
  this.genre = genre
  this.img = img
}

var dataBas = function() {
  gta = new Game('grand theft auto', 'action', 'img/gta.jpg')
  games.push(gta)
  cod = new Game('Call of duty', 'action', 'img/cod.jpg')
  games.push(cod)
  bf4 = new Game('BattleField 4', 'action', 'img/bf4.jpg')
  games.push(bf4)
  far = new Game('FarCry', 'action', 'img/gta.jpg')
  games.push(far)
  fifa = new Game('FIFA 18', 'action', 'img/fifa.jpg')
  games.push(fifa)
  ass = new Game('assasins creed', ['drama', 'action'], 'img/assasin.jpg')
  games.push(ass)
  gears = new Game('gears of war', 'action', 'img/gears.jpg')
  games.push(gears)
  unchar = new Game('Uncharted 4', 'action', 'img/uncharted.jpg')
  games.push(unchar)
}
var genre = function() {

  for (var i = 0; i < 4; i++) {
    if (games[i].genre === 'action') {
      // actions.push(games[i])
      $('#carddeck').append('<div class="card"><img class="card-img-top" src="' + games[i].img + '" width="243" alt="Card image cap"></div>')


      console.log(games[i].name);
    } else {
      console.log('except' + games[i]);
    }
  }
}


$(document).ready(function() {
  dataBas()
  genre()

});
