// QuerySelectors

gameboard = document.querySelector('.gameboard')
player1Token = document.querySelector('.player1-token')
player2Token = document.querySelector('.player2-token')
player1Name = document.querySelector('.player1-name')
player2Name = document.querySelector('.player2-name')
player1Win = document.querySelector('.player1-wins')
player2Win = document.querySelector('.player2-wins')
chooseSection = document.querySelector('.choose-section')
results = document.querySelector('.results')
choiceColumn1 = document.querySelector('.choice-column1')
choiceColumn2 = document.querySelector('.choice-column2')
message = document.querySelector('.message')
alien = document.querySelector('#alien')
lizard = document.querySelector('#lizard')

// Data Model
var player = createPlayer('Alec', '👴🏻')
var computer = createPlayer('Computer', '🖥️')
var currentGame = createGame(player, computer)
var weaponOptions = ['rock', 'paper', 'scissors']
var imgSources = ['assets/cave.png', 'assets/lines-paper.png', 'assets/lines-scissors.png']
var alts =
  [
    'a cartoonish graphic representing a cave',
    'a cartoon graphic representing paper and a pen',
    'a cartoon graphic representing scissors'
  ]

// Event Listeners

gameboard.addEventListener('click', function(event){
  console.log(event.target.id)
  for (var i = 0; i < weaponOptions.length; i++) {
    if(event.target.id === weaponOptions[i]){
      takeTurn(weaponOptions[i], currentGame)
      detectDraw(currentGame)
      displayWins(currentGame)
      showResults(currentGame)
    }
  }
})

window.addEventListener('load', function() {
  player1Name.innerText = `${currentGame.player1.playerName}`
  player2Name.innerText = `${currentGame.player2.playerName}`
  player1Token.innerText = `${currentGame.player1.token}`
  player2Token.innerText = `${currentGame.player2.token}`
  // updateGameType(currentGame)
  // detectGameType(currentGame)
})

// Functions

function createPlayer(playerName, token) {
  var player = {
    playerName,
    token,
    wins: 0
  }
  return player
}

function createGame(player1, player2) {
  var game = {
    player1,
    player2,
    player1Choice: null,
    player2Choice: null,
    gameType: 'classic'
  }
  return game
}

function updateGameType(game) {
  game.gameType = 'ultimate'
}

function detectGameType(game) {
  if (game.gameType === 'ultimate') {
    alien.classList.remove('hidden')
    lizard.classList.remove('hidden')
    message.innerText = 'Choose Rock, Paper, Scissors, Alien, or Lizard'
    weaponOptions = ['rock', 'paper', 'scissors', 'alien', 'lizard']
    imgSources = 
      [
        'assets/cave.png',
        'assets/lines-paper.png',
        'assets/lines-scissors.png', 
        'assets/lines-alien.png', 
        'assets/lizard.png',
      ]
    alts =
      [
        'a cartoon graphic representing a cave',
        'a cartoon graphic representing paper and a pen',
        'a cartoon graphic representing scissors',
        'a cartoon graphic representing a purple alien with four arms',
        'a cartoon graphic representing a green lizard'
      ]
  }
  if (game.gameType === 'classic') {
    alien.classList.add('hidden')
    lizard.classList.add('hidden')
    message.innerText = 'Choose Rock, Paper, or Scissors'
    weaponOptions = ['rock', 'paper', 'scissors']
    imgSources = 
      [
        'assets/cave.png',
        'assets/lines-paper.png',
        'assets/lines-scissors.png', 
      ]
    alts =
      [
        'a cartoon graphic representing a cave',
        'a cartoon graphic representing paper and a pen',
        'a cartoon graphic representing scissors',
      ]
  }
}

function takeTurn(playerChoice, game) {
  for (var i = 0; i < weaponOptions.length; i++) {
    if (playerChoice === weaponOptions[i]) {
      game.player1Choice = weaponOptions[i]
      game.player2Choice = weaponOptions[getRandomIndex(weaponOptions)]
    }
  }
}

function detectDraw(game) {
  if (game.player1Choice === game.player2Choice) {
    message.innerText =`Draw!`
    } else checkWinCondition(game)
}

function checkWinCondition(game) {
  if (game.player1Choice === 'rock' && (game.player2Choice === 'scissors' || game.player2Choice === 'lizard')) {
    game.player1.wins ++
    message.innerText =`${game.player1.playerName} Wins This Round!`
  } else if (game.player1Choice === 'paper' && (game.player2Choice === 'rock' || game.player2Choice === 'alien')) {
    game.player1.wins ++
    message.innerText =`${game.player1.playerName} Wins This Round!`
  } else if (game.player1Choice === 'scissors' && (game.player2Choice === 'paper' || game.player2Choice === 'lizard')) {
    game.player1.wins ++
    message.innerText =`${game.player1.playerName} Wins This Round!`
  } else if (game.player1Choice === 'lizard' && (game.player2Choice === 'paper' || game.player2Choice === 'alien')) {
    game.player1.wins ++
    message.innerText =`${game.player1.playerName} Wins This Round!`
  } else if (game.player1Choice === 'aliean' && (game.player2Choice === 'scissors' || game.player2Choice === 'rock')) {
    game.player1.wins ++
    message.innerText =`${game.player1.playerName} Wins This Round!`
  } else {
    game.player2.wins ++
    message.innerText =`${game.player2.playerName} Wins This Round!`
  }
}

function displayWins(game) {
  player1Win.innerText = `Wins: ${currentGame.player1.wins}`
  player2Win.innerText = `Wins: ${currentGame.player2.wins}`
}

function showResults(game) {
  chooseSection.classList.toggle('hidden')
  choiceColumn1.innerHTML = ''
  choiceColumn2.innerHTML = ''
  for (var i = 0; i < weaponOptions.length; i++) {
    if (game.player1Choice === weaponOptions[i]) {
      choiceColumn1.innerHTML += 
      `
      <img src='${imgSources[i]}' alt='${alts[i]}'>
      <p>
      ${game.player1.token}
      </p>
      `
    }
    if (game.player2Choice === weaponOptions[i]) {
      choiceColumn2.innerHTML += 
      `
        <img src='${imgSources[i]}' alt='${alts[i]}'>
        <p>
        ${game.player2.token}
        </p>
      `
    }
  }
  results.classList.toggle('hidden')
  setTimeout(reset, 1500)
}

function reset() {
  detectGameType(currentGame)
  chooseSection.classList.toggle('hidden')
  results.classList.toggle('hidden')
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}