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

// Data Model
var player = createPlayer('Alec', '👴🏻')
var computer = createPlayer('Computer', '🖥️')
var currentGame = createGame(player, computer)
var weaponOptions = ['rock', 'paper', 'scissors']
var imgSources = ['assets/cave.png', 'assets/lines-paper.png', 'assets/lines-scissors.png']
var alts = ['a cartoonish graphic representing a cave', 'a cartoon graphic representing paper and a pen', 'a cartoon graphic representing scissors']

// Event Listeners

gameboard.addEventListener('click', function(event){
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
  player2Name.innerText = `${currentGame.player1.playerName}`
  player1Token.innerText = `${currentGame.player1.token}`
  player2Token.innerText = `${currentGame.player2.token}`
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

function displayWins(game) {
  player1Win.innerText = `Wins: ${currentGame.player1.wins}`
  player2Win.innerText = `Wins: ${currentGame.player2.wins}`
}

function resetGame() {
  
}

function showResults(game) {
  chooseSection.classList.toggle('hidden')
  results.innerHTML = ''
  for (var i = 0; i < weaponOptions.length; i++) {
    if (game.player1Choice === weaponOptions[i]) {
      results.innerHTML += 
      `
      <div>
        <img src='${imgSources[i]}' alt='${alts[i]}>' 
      </div>
      `
    }
    if (game.player2Choice === weaponOptions[i]) {
      results.innerHTML += 
      `
      <div>
        <img src='${imgSources[i]}' alt='${alts[i]}>' 
      </div>
      `
    }
  }
  results.classList.toggle('hidden')
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}