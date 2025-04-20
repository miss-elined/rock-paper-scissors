const buttons = document.querySelectorAll("button");
let resultDiv = document.querySelector("#results");
let end = document.querySelector("#end");

function makeButtonsClickable() {
  buttons.forEach((button) => {
    button.addEventListener("click", playRound);
  });
}

makeButtonsClickable();

let computerScore = 0;
let humanScore = 0;
let ties = 0;

function getComputerChoice() {
  let random = Math.round(Math.random() * 2);
  return random === 0 ? "Rock" : random === 1 ? "Paper" : "Scissors";
}

function resetGame() {
  const body = document.querySelector("body");
  const resetButton = document.createElement("button");
  const buttonText = "Reset";
  resetButton.innerText = buttonText;
  resetButton.setAttribute("id", "reset");
  body.appendChild(resetButton);
  resetButton.addEventListener("click", zeroScore);
  resetButton.addEventListener("click", makeButtonsClickable);
  resetButton.addEventListener("click", (e) => e.target.remove());

  function zeroScore() {
    computerScore = 0;
    humanScore = 0;
    ties = 0;
    resultDiv.innerText = "";
    end.innerText = "";
  }
}

function playRound(e) {
  let humanChoice = e.target.innerText;
  let computerChoice = getComputerChoice();
  let result = "";
  makeButtonsClickable();

  if (
      (computerChoice === "Rock" && humanChoice === "Scissors") ||
      (computerChoice === "Paper" && humanChoice === "Rock") ||
      (computerChoice === "Scissors" && humanChoice === "Paper")
    ) {
      computerScore++;
      result = `You lose! ${computerChoice} beats ${humanChoice}
        Computer: ${computerScore}
        Human: ${humanScore}
        Ties: ${ties}`;
    } else if (humanChoice === computerChoice) {
      ties++;
      result = `A tie!
        Computer: ${computerScore}
        Human: ${humanScore}
        Ties: ${ties}`;
    } else {
      humanScore++;
      result = `You win! ${humanChoice} beats ${computerChoice}
        Computer: ${computerScore}
        Human: ${humanScore}
        Ties: ${ties}`;
      }
      
  resultDiv.innerText = result;

  if (computerScore === 5) {
    end.innerText = "Robots won!";
    buttons.forEach((button) => {
      button.removeEventListener("click", playRound);
    });
    resetGame();
  } else if (humanScore === 5) {
    end.innerText = "Humans won!";
    buttons.forEach((button) => {
      button.removeEventListener("click", playRound);
    });
    resetGame();
  }
}
