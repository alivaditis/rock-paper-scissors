// Data Model
player = createPlayer('Alec', '👴🏻')
computer = createPlayer('Computer', '🖥️')
game = createGame(player, computer)

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

function takeTurn() {
  
}

function checkWinCondition() {
  
}

function detectDraw() {
  
}

function resetGame() {
  
}

