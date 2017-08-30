games = []

idN = []

function Game(name, genre, img, screenS) {
  this.name = name
  this.genre = genre
  this.img = img
  this.screenS = screenS
}

var dataBas = function() {
  gta = new Game('grand theft auto', 'rpg', 'img/gta.jpg')
  games.push(gta)
  cod = new Game('Call of duty', 'action', 'img/cod.jpg', ["img/cod3.jpg", "img/cod5.jpg", "img/cod6.jpg"])
  games.push(cod)
  bf4 = new Game('BattleField 4', 'action', 'img/bf4.jpg')
  games.push(bf4)
  fifa = new Game('FIFA 18', 'rpg', 'img/fifa.jpg')
  games.push(fifa)
  ass = new Game('assasins creed', 'rpg', 'img/assasin.jpg')
  games.push(ass)
  gears = new Game('gears of war', 'action', 'img/gears.jpg')
  games.push(gears)
  unchar = new Game('Uncharted 4', 'action', 'img/uncharted.jpg')
  games.push(unchar)
  unchar = new Game('Uncharted 4', 'rpg', 'img/uncharted.jpg')
  games.push(unchar)
}
var genre = function() {

  for (var i = 0; i < 4; i++) {
    // if (games[i].genre === 'action') {
    // actions.push(games[i])
    $('#carddeck').append('<div class="card qwerty" id="' + i + '"><a href="page2.html">' + games[i].name + '</a><img class="card-img-top" id="' + i + '" src="' + games[i].img + '" width="243" alt="Card image cap"></div>')
    idN.push(i)
    //
    //   console.log(games[i].name);
    // } else {
    //   console.log('except' + games[i]);
    // }
  }
}

//description to take us to page 2 and append properties of that particular game
$(document).ready(function() {
  dataBas()
  genre()
  localStorage.setItem('data', JSON.stringify(games))
  var idnu = games.length
  localStorage.setItem('gamesLength', idnu)

  // $('.card-img-top').click(function(event) {
  //   var clickedItem = $(this).attr('id');
  //   localStorage.setItem('clickedItem', clickedItem);
  //   console.log(localStorage.clickedItem);
  // });
  console.log(games);
  $('.qwerty').click(function(event) {
    //when you open the link it goes to page2.html and saves the games array to localStorage
    var clickedItem = $(this).attr('id');

    localStorage.setItem('id', clickedItem)

    console.log(clickedItem);
  });


});
