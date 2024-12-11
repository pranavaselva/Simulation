let playerScore = 0;
let computerScore = 0;

// Function to handle user choice
function handleUserChoice(userChoice) {
  const validChoices = ["Rock", "Paper", "Scissors"];
  if (!validChoices.includes(userChoice)) {
    console.error("Invalid choice:", userChoice);
    return;
  }

  // Get computer's random choice
  const computerChoice = getComputerChoice();

  // Determine the result
  const result = getGameResult(userChoice, computerChoice);

  // Update scores based on the result
  if (result === "You win!") {
    playerScore++;
  } else if (result === "Computer wins!") {
    computerScore++;
  }

  // Update the UI with the results
  updateUI(userChoice, computerChoice, result);
}

// Function to generate computer's random choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function getGameResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }
  if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return "You win!";
  }
  return "Computer wins!";
}

// Function to update the UI
function updateUI(userChoice, computerChoice, result) {
  // Reset highlights
  document.getElementById("rock").classList.remove("winner");
  document.getElementById("paper").classList.remove("winner");
  document.getElementById("scissors").classList.remove("winner");

  // Highlight winning choice
  if (result === "You win!") {
    document.getElementById(userChoice.toLowerCase()).classList.add("winner");
  } else if (result === "Computer wins!") {
    document.getElementById(computerChoice.toLowerCase()).classList.add("winner");
  }

  // Update other UI elements
  document.getElementById("user-choice").textContent = `Your choice: ${userChoice}`;
  document.getElementById("computer-choice").textContent = `Computer choice: ${computerChoice}`;
  document.getElementById("game-result").textContent = `Result: ${result}`;
  document.getElementById("score").textContent = `Score - You: ${playerScore} | Computer: ${computerScore}`;
}

// Reset game and scores
document.getElementById("reset").addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("score").textContent = `Score - You: 0 | Computer: 0`;
  document.getElementById("user-choice").textContent = "Your choice: ";
  document.getElementById("computer-choice").textContent = "Computer choice: ";
  document.getElementById("game-result").textContent = "Result: ";
});

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => handleUserChoice("Rock"));
document.getElementById("paper").addEventListener("click", () => handleUserChoice("Paper"));
document.getElementById("scissors").addEventListener("click", () => handleUserChoice("Scissors"));
