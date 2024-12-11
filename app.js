// Function to handle user choice
function handleUserChoice(choice) {
    console.log("User chose:", choice); // Log the user's choice
  }
  
  // Add event listeners to buttons
  document.getElementById("rock").addEventListener("click", () => handleUserChoice("Rock"));
  document.getElementById("paper").addEventListener("click", () => handleUserChoice("Paper"));
  document.getElementById("scissors").addEventListener("click", () => handleUserChoice("Scissors"));
 // Function to handle user choice
function handleUserChoice(userChoice) {
    // Display user's choice
    document.getElementById("user-choice").textContent = `Your choice: ${userChoice}`;
  
    // Get computer's random choice
    const computerChoice = getComputerChoice();
    document.getElementById("computer-choice").textContent = `Computer choice: ${computerChoice}`;
  
    // Determine the result
    const result = getGameResult(userChoice, computerChoice);
    document.getElementById("game-result").textContent = `Result: ${result}`;
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
  
  // Add event listeners to buttons
  document.getElementById("rock").addEventListener("click", () => handleUserChoice("Rock"));
  document.getElementById("paper").addEventListener("click", () => handleUserChoice("Paper"));
  document.getElementById("scissors").addEventListener("click", () => handleUserChoice("Scissors"));
  