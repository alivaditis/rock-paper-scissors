// Data Model
var player = createPlayer('Alec', '👴🏻')
var computer = createPlayer('Computer', '🖥️')
var currentGame = createGame(player, computer)
var computerOptions = ['rock', 'paper', 'scissors']

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
    gameType: null
  }
  return game
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function takeTurn(playerChoice, game) {
  if (playerChoice = 'rock') {
    game.player1Choice = 'rock'
    game.player2Choice = computerOptions[getRandomIndex(computerOptions)]
  }
  if (playerChoice = 'paper') {
    game.player1Choice = 'paper'
    game.player2Choice = computerOptions[getRandomIndex(computerOptions)]
  }
  if (playerChoice = 'scissors') {
    game.player1Choice = 'scissors'
    game.player2Choice = computerOptions[getRandomIndex(computerOptions)]
  }
}

function detectDraw() {
  if (game.player1Choice === game.player2Choice) {
    console.log('It\'s a Draw!')
  }
}

function checkWinCondition(game) {
  if (game.player1Choice === 'rock' && game.player2Choice === 'scissors') {
    game.player1.wins ++
    console.log('Player Wins!')
  } else if (game.player1Choice === 'paper' && game.player2Choice === 'rock') {
    game.player1.wins ++
    console.log('Player Wins!')
  } else if (game.player1Choice === 'scissors' && game.player2Choice === 'scissors') {
    game.player1.wins ++
    console.log('Player Wins!')
  } else {
    game.player2.wins ++
    console.log('Computer Wins!')
  }
}


function resetGame() {
  
}

