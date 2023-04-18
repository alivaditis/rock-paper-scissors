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
  if(playerChoice = 'rock') {
    game.player1Choice = 'rock'
    game.player2Choice = computerOptions[getRandomIndex(computerOptions)]
  }
  if(playerChoice = 'paper') {
    game.player1Choice = 'paper'
    game.player2Choice = computerOptions[getRandomIndex(computerOptions)]
  }
  if(playerChoice = 'scissors') {
    game.player1Choice = 'scissors'
    game.player2Choice = computerOptions[getRandomIndex(computerOptions)]
  }
}

function detectDraw() {
  
}

function checkWinCondition() {
  
}


function resetGame() {
  
}

