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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Rock, Paper, Scissors: ');
    const computerSelection = computerPlay();

    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes('win')) {
      playerScore++;
    } else if (result.includes('lose')) {
      computerScore++;
    }
  }

  console.log(`Player: ${playerScore}\nComputer: ${computerScore}`);
  if (playerScore > computerScore) {
    console.log('Player wins!');
  } else if (playerScore < computerScore) {
    console.log('Computer wins!');
  } else {
    console.log("It's a tie!");
  }
}

game();
