function computerPlay() {
  const results = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * results.length);

  return results[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  if (playerSelection === 'rock' && computerSelection === 'paper') {
    return "You lose! Paper beats Rock";
  }

  if (playerSelection === 'paper' && computerSelection === 'rock') {
    return "You win! Paper beats Rock";
  }

  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return "You win! Rock beats Scissors";
  }

  if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return "You lose! Rock beats Scissors";
  }

  if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return "You lose! Scissors beats Paper";
  }

  if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return "You win! Scissors beats Paper";
  }

}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const result = playRound(e.target.id, computerPlay());
    if (result.includes('win')) {
      playerScore++;
    } else if (result.includes('lose')) {
      computerScore++;
    }
    const div = document.querySelector('#result');
    div.innerHTML = `${result}<br>Player: ${playerScore}<br>Computer: ${computerScore}`;

    if (playerScore === 5) {
      div.innerHTML = "You win!"
      playerScore = 0;
      computerScore = 0;
    } else if (computerScore === 5) {
      div.innerHTML = "Computer wins!";
      playerScore = 0;
      computerScore = 0;
    }
  });
});
