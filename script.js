function getComputerChoice() {
  let random = Math.random();
  return random < 0.3 ? "rock" : random < 0.6 ? "paper" : "scissors";
}

function getHumanChoice() {
  let userChoice = prompt();
  return userChoice;
}

// console.log(getHumanChoice());

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice =
    humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();

  if (
    (computerChoice === "Rock" && humanChoice === "Scissors") ||
    (computerChoice === "Paper" && humanChoice === "Rock") ||
    (computerChoice === "Sciccors" && humanChoice === "Paper")
  ) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  }
}
