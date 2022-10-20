//Computer Choice
function computerChoice() {
  choices = ['rock', 'paper', 'scissors'];
  randomChoice = choices[Math.floor(Math.random() * 3)];
  return randomChoice.toLowerCase();
}

//Player Choice
function playerChoice() {
  let playerChoice = prompt('Choose rock, papers or scissors').toLowerCase();
  return playerChoice;
}

//Playing the Round
function playRound() {
  const computerSelection = computerChoice();
  const playerSelection = playerChoice();
  console.log('Computer chooses: ' + computerSelection);
  console.log('Player chooses: ' + playerSelection);
  checkWinner(playerSelection, computerSelection);
}

//Checking the winner
function checkWinner(playChoice, compChoice) {
  if (playChoice === compChoice) {
    winner = 'It is a tie';
    return 'Tie';
  } else if (
    (playChoice === 'rock' && compChoice === 'scissors') ||
    (playChoice === 'paper' && compChoice === 'rock') ||
    (playChoice === 'scissors' && compChoice === 'rock')
  ) {
    winner = 'Player wins';
    playerScore++;
    return 'Player';
  } else {
    winner = 'The computer wins';
    computerScore++;
    return 'Computer';
  }
}

//
let playerScore = 0;
let computerScore = 0;
let winner = '';

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
    console.log(winner);
    console.log('Player score: ' + playerScore);
    console.log('Computer score: ' + computerScore);
  }
}

game();
