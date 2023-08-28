// Function to generate computer's choice
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  // Function to determine the winner
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
  
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }
  
  // Play the game
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Choose rock, paper, or scissors");
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);
  
      const gameResults = document.getElementById("game-results");
      const resultElement = document.createElement("p");
  
      resultElement.textContent = `Round ${i + 1}: ${result}`;
      if (result === "You win!") {
        resultElement.classList.add("win");
        playerScore++;
      } else if (result === "You lose!") {
        resultElement.classList.add("lose");
        computerScore++;
      } else (result === "It's a tie!" {
        resultElement.classList.add("tie");
      }
  
      gameResults.appendChild(resultElement);
    }
  
    const finalScore = document.createElement("p");
    finalScore.textContent = `Final Score: Player ${playerScore} - ${computerScore} Computer`;
    gameResults.appendChild(finalScore);
  }
  
  // Start the game
  game();