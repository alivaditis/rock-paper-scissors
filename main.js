// QuerySelectors

gameboard = document.querySelector('.gameboard')
player1Name = document.querySelectorAll('.player1-name')
player2Name = document.querySelectorAll('.player2-name')
player1Win = document.querySelector('.player1-wins')
player2Win = document.querySelector('.player2-wins')

// Data Model
var player = createPlayer('Alec', '👴🏻')
var computer = createPlayer('Computer', '🖥️')
var currentGame = createGame(player, computer)
var weaponOptions = ['rock', 'paper', 'scissors']

// Event Listeners

gameboard.addEventListener('click', function(event){
  console.log(currentGame)
  for (var i = 0; i < weaponOptions.length; i++) {
    if(event.target.id === weaponOptions[i]){
      takeTurn(weaponOptions[i], currentGame)
      detectDraw(currentGame)
    }
  }
  displayWins(currentGame)
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
    gameType: null
  }
  return game
}


function takeTurn(playerChoice, game) {
  for (var i = 0; i < weaponOptions.length; i++) {
    if (playerChoice = weaponOptions[i]) {
      game.player1Choice = weaponOptions[i]
      game.player2Choice = weaponOptions[getRandomIndex(weaponOptions)]
    }
  }
}

function detectDraw(game) {
  if (game.player1Choice === game.player2Choice) {
    console.log('It\'s a Draw!')
  } else checkWinCondition(game)
}

function checkWinCondition(game) {
  if (game.player1Choice === 'rock' && game.player2Choice === 'scissors') {
    game.player1.wins ++
    console.log('Player Wins!')
  } else if (game.player1Choice === 'paper' && game.player2Choice === 'rock') {
    game.player1.wins ++
    console.log('Player Wins!')
  } else if (game.player1Choice === 'scissors' && game.player2Choice === 'paper') {
    game.player1.wins ++
    console.log('Player Wins!')
  } else {
    game.player2.wins ++
    console.log('Computer Wins!')
  }
}

function resetGame() {
  
}

function displayWins(game) {
  player1Win.innerText = `Wins: ${currentGame.player1.wins}`
  player2Win.innerText = `Wins: ${currentGame.player2.wins}`
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}