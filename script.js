/*

1. rock paper scissors

2. Function getHumanChoice:
   a. Prompt user to input "rock", "paper", or "scissors".
   b. Convert input to lowercase.
   c. Return the choice.

3. Function getComputerChoice:
   a. Generate a random choice of "rock", "paper", or "scissors".
   b. Return the choice.

4. Initialize humanScore and computerScore to 0.

5. Function playRound:
   a. Get humanChoice using getHumanChoice.
   b. Get computerChoice using getComputerChoice.
   c. Compare choices to determine winner.
   d. Increment the score of the winner.
   e. Return result of the round.

6. Function playGame:
   a. Play 5 rounds:
      i. Play a round using playRound.
   b. Determine winner based on scores.
   c. Print final scores and winner.

7. Call playGame to start the game.
*/

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
// Test the function
console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:");
    choice = choice.toLowerCase();
    return choice;
}
//test
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}
// Test the function
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));

function playGame() {
    humanScore = 0;
    computerScore = 0;

 /*  for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        if (humanSelection === null) {
            console.log("Game cancelled by user.");
            return;
        }
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
    */
    if (humanScore > computerScore) {
        console.log(`You win the game! Final score: Human ${humanScore} - Computer ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose the game! Final score: Human ${humanScore} - Computer ${computerScore}`);
    } else {
        console.log(`The game is a tie! Final score: Human ${humanScore} - Computer ${computerScore}`);
    }
}

playGame();

document.getElementById('rock').addEventListener('click', function() {
    playRound('rock', getComputerChoice());
});

document.getElementById('paper').addEventListener('click', function() {
    playRound('paper', getComputerChoice());
});
