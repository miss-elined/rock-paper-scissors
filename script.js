function getComputerChoice() {
  let random = Math.random();
  return random < 0.3 ? "Rock" : random < 0.6 ? "Paper" : "Scissors";
}

// console.log(getComputerChoice());

function getHumanChoice() {
  let userChoice = prompt();
  return userChoice;
}

// console.log(getHumanChoice());

// playRound(human, computer);

function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  let ties = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice =
      humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
    // console.log(computerChoice);
    // console.log(humanChoice);
    if (
      (computerChoice === "Rock" && humanChoice === "Scissors") ||
      (computerChoice === "Paper" && humanChoice === "Rock") ||
      (computerChoice === "Sciccors" && humanChoice === "Paper")
    ) {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    } else if (humanChoice === computerChoice) {
      console.log(`A tie!`);
      ties++;
    } else {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    }
  }

  let count = 0;
  while (count < 5) {
    const human = getHumanChoice();
    const computer = getComputerChoice();
    playRound(human, computer);
    count++;
  }
  console.log(
    `Computer: ${computerScore}\nHuman: ${humanScore}\nTies: ${ties}`
  );
}

playGame();
