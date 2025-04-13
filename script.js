function getComputerChoice() {
  let random = Math.random();
  return random < 0.3 ? "Rock" : random < 0.6 ? "Paper" : "Scissors";
}

function getHumanChoice() {
  let userChoice = prompt();
  return userChoice;
}

// console.log(getHumanChoice());
