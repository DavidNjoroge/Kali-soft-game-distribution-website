games = []
actions = []
actionCipher = []
indieCipher = []
casualCipher = []
adventureCipher = []
sportsCipher = []
racingCipher = []



function Game(name, genre, img, screenS) {
  this.name = name
  this.genre = genre
  this.img = img
  this.screenS = screenS
}


var dataBas = function() {
  gta = new Game('Grand Theft Auto', 'Action', 'img/gta1.jpg', ['img/gtasc1.jpg', 'img/gtasc2.jpg', 'img/gtasc3.jpg', 'img/gtasc4.jpg'])
  games.push(gta)
  cod = new Game('Call Of Duty', 'Action', 'img/cod1.jpg', ['img/codsc1.jpg', 'img/codsc2.jpg', 'img/codsc3.jpg', 'img/codsc4.jpg'])
  games.push(cod)
  bat = new Game('BattleField 1', 'Action', 'img/bat1.jpg', ['img/batsc1.png', 'img/batsc2.jpg', 'img/batsc3.jpg', 'img/batsc4.jpg'])
  games.push(bat)
  fifa = new Game('FIFA 16', 'Sports', 'img/fifa1.jpg', ['img/fifasc1.jpg', 'img/fifasc2.jpg', 'img/fifasc3.jpg', 'img/fifasc4.jpg'])
  games.push(fifa)
  star = new Game('Star Wars Battlefront', 'Action', 'img/star1.jpg', ['img/starsc1.jpg', 'img/starsc2.jpg', 'img/starsc3.jpg', 'img/starsc4.jpg'])
  games.push(star)
  tomb = new Game('Rise Of The Tomb Raider', 'Action', 'img/tomb1.jpg', ['img/tombsc1.jpg', 'img/tombsc2.jpg', 'img/tombsc3.jpg', 'img/tombsc4.jpg'])
  games.push(tomb)
  abs = new Game('Absolver', 'Adventure', 'img/abs1.jpg', ['img/absc1.jpg', 'img/absc2.jpg', 'img/absc3.jpg', 'img/absc4.jpg'])
  games.push(abs)
  prey = new Game('Prey', 'Adventure', 'img/prey1.jpg', ['img/preysc1.jpg', 'img/preysc2.jpg', 'img/preysc3.jpg', 'img/preysc4.jpg'])
  games.push(prey)
  fall = new Game('Fallout 4', 'Adventure', 'img/fall1.jpg', ['img/fallsc1.jpg', 'img/fallsc2.jpg', 'img/fallsc3.jpg', 'img/fallsc4.jpg'])
  games.push(fall)
  hell = new Game('Hellblade', 'Adventure', 'img/hell1.jpg', ['img/hellsc1.jpg', 'img/hellsc2.jpg', 'img/hellsc3.jpg', 'img/hellsc4.jpg'])
  games.push(hell)
  soma = new Game('SOMA', 'Adventure', 'img/soma1.jpg', ['img/somasc1.jpg', 'img/somasc2.jpg', 'img/somasc3.jpg', 'img/somasc4.jpg'])
  games.push(soma)
  son = new Game('Sonic Mania', 'Casual', 'img/son1.jpg', ['img/sonsc1.jpg', 'img/sonsc2.jpg', 'img/sonsc3.jpg', 'img/sonsc4.jpg'])
  games.push(son)
  plan = new Game('Planet Coaster', 'Casual', 'img/plan1.jpg', ['img/plansc1.jpg', 'img/plansc2.jpg', 'img/plansc3.jpg', 'img/plansc4.jpg'])
  games.push(plan)
  shell = new Game('ShellShock Live', 'Casual', 'img/shell1.jpg', ['img/shellsc1.jpg', 'img/shellsc2.jpg', 'img/shellsc3.jpg', 'img/shellsc4.jpg'])
  games.push(shell)
  stard = new Game('Stardew Valley', 'Casual', 'img/stard1.png', ['img/stardsc1.jpg', 'img/stardsc2.jpg', 'img/stardsc3.jpg', 'img/stardsc4.jpg'])
  games.push(stard)
  sims = new Game('The Sims 3', 'Casual', 'img/sim1.jpg', ['img/simsc1.jpg', 'img/simsc2.jpg', 'img/simsc3.jpg', 'img/simsc4.jpg'])
  games.push(sims)
  ages = new Game('Rock Of Ages 2', 'Indie Games', 'img/rock1.png', ['img/agesc1.jpg', 'img/agesc2.jpg', 'img/agesc3.jpg', 'img/agesc4.jpg'])
  games.push(ages)
  dark = new Game('Darkwood', 'Indie Games', 'img/dark1.jpg', ['img/darksc1.jpg', 'img/darksc2.jpg', 'img/darksc3.jpg', 'img/darksc4.jpg'])
  games.push(dark)
  esc = new Game('The Escapists 2', 'Indie Games', 'img/esc1.jpg', ['img/escsc1.jpg', 'img/escsc2.jpg', 'img/escsc3.jpg', 'img/escsc4.jpg'])
  games.push(esc)
  long = new Game('The Long Dark', 'Indie Games', 'img/long1.jpg', ['img/longsc1.jpg', 'img/longsc2.jpg', 'img/longsc3.jpg', 'img/longsc4.jpg'])
  games.push(long)
  slime = new Game('Slime Rancher', 'Indie Games', 'img/slime1.jpg', ['img/slimesc1.jpg', 'img/slimesc2.jpg', 'img/slimesc3.png', 'img/slimesc4.jpg'])
  games.push(slime)
  f1 = new Game('F1 2017', 'Racing', 'img/f1.jpg', ['img/f1sc1.jpg', 'img/f1sc2.jpg', 'img/f1sc3.jpg', 'img/f1sc4.jpg'])
  games.push(f1)
  rock = new Game('Rocket League Supersonic Fury', 'Racing', 'img/rock1.jpg', ['img/rocksc1.jpg', 'img/rocksc2.jpg', 'img/rocksc3.jpg', 'img/rocksc4.jpg'])
  games.push(rock)
  beam = new Game('BeamNG.drive', 'Racing', 'img/beam1.jpg', ['img/beamsc1.jpg', 'img/beamsc2.jpg', 'img/beamsc3.jpg', 'img/beamsc4.jpg'])
  games.push(beam)
  need = new Game('Need For Speed', 'Racing', 'img/need1.jpg', ['img/needsc1.jpg', 'img/needsc2.jpg', 'img/needsc3.jpg', 'img/needsc4.jpg'])
  games.push(need)
  crew = new Game('The Crew 2', 'Racing', 'img/crew1.jpg', ['img/crewsc1.jpg', 'img/crewsc2.jpg', 'img/crewsc3.jpg', 'img/crewsc4.jpg'])
  games.push(crew)
  tek = new Game('Tekken 7', 'Sports', 'img/tek1.png', ['img/teksc1.jpg', 'img/teksc2.jpg', 'img/teksc3.jpg', 'img/teksc4.jpg'])
  games.push(tek)
  pyre = new Game('Pyre', 'Sports', 'img/pyre1.jpg', ['img/pyresc1.jpg', 'img/pyresc2.jpg', 'img/pyresc3.jpg', 'img/pyresc4.jpg'])
  games.push(pyre)
  pes = new Game('Pro Evolution Soccer', 'Sports', 'img/pes1.jpg', ['img/pesc1.jpg', 'img/pesc2.png', 'img/pesc3.jpg', 'img/pesc4.jpg'])
  games.push(pes)
  dirt = new Game('DiRT Rally', 'Sports', 'img/dirt1.jpg', ['img/dirtsc1.png', 'img/dirtsc2.jpg', 'img/dirtsc3.png', 'img/dirtsc4.jpg'])
  games.push(dirt)
}


//sorts games to categories
var genreCipher = function() {
  for (var i = 0; i < games.length; i++) {
    if (games[i].genre === "Action") {
      actionCipher.push(games[i])
      console.log(actionCipher);
    } else if (games[i].genre === "Indie Games") {
      indieCipher.push(games[i])
      console.log("boom");
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


//appends games 4 games for selected arrays to page1

function page1Appender() {
  for (var i = 0; i < 4; i++) {
    $('#carddeck').append('<div class="card qwerty" id="' + i + '"><a href="page2.html">' + actionCipher[i].name + '</a><img class="card-img-top" id="' + i + '" src="' + actionCipher[i].img + '" width="243" alt="Card image cap"></div>')
    //appends to the trending games
    $('#carddeck-indie').append('<div class="card qwertyIndie" id="' + i + '"><a href="page2.html">' + indieCipher[i].name + '</a><img class="card-img-top" id="' + i + '" src="' + indieCipher[i].img + '" width="243" alt="Card image cap"></div>')
  }

}




// var genre = function() {
//
//   for (var i = 0; i < 5; i++) {
//     if (games[i].genre === 'Action') {
//       // actions.push(games[i])
//       $('#carddeck').append('<div class="card qwerty" id="' + i + '"><a href="page2.html">' + games[i].name + '</a><img class="card-img-top" id="' + i + '" src="' + games[i].img + '" width="243" alt="Card image cap"></div>')
//
//
//       console.log(games[i].name);
//     } else {
//       console.log('except' + games[i]);
//     }
//   }
// }

//description to take us to page 2 and append properties of that particular game
$(document).ready(function() {
  dataBas()

  genreCipher()
  page1Appender()
  console.log(games);
  $('#asdf').click(function(event) {
    localStorage.setItem('data', JSON.stringify(games))
    var loca = JSON.parse(localStorage.getItem('data'))
    alert(loca[0].name);
  });

  // $('.card-img-top').click(function(event) {
  //   var clickedItem = $(this).attr('id');
  //   localStorage.setItem('clickedItem', clickedItem);
  //   console.log(localStorage.clickedItem);
  // });
  $('.qwerty').click(function(event) {
    //when you open the link it goes to page2.html and saves the games array to localStorage
    localStorage.setItem('data', JSON.stringify(games))
    var loca = JSON.parse(localStorage.getItem('data'))
    var clickedItem = $(this).attr('id');

    localStorage.setItem('id', clickedItem)

  });


  //
  $('.qwertyIndie').click(function(event) {
    //when you open the link it goes to page2.html and saves the games array to localStorage
    localStorage.setItem('data', JSON.stringify(games))
    var loca = JSON.parse(localStorage.getItem('data'))
    var clickedItem = $(this).attr('id');

    localStorage.setItem('id', clickedItem)

    console.log(clickedItem);
  });


  $('#finya').click(function(event) {
    //when you open the link it goes to page2.html and saves the games array to localStorage
    localStorage.setItem('data', JSON.stringify(games))
    var loca = JSON.parse(localStorage.getItem('data'))
    var clickedItem = $(this).attr('id');

    localStorage.setItem('id', clickedItem)

    console.log(clickedItem);
  });

});
