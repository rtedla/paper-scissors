let humanScore = 0;
let computerScore = 0;

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

// Test the function
console.log(getHumanChoice());


function playRound(humanChoice, computerChoice) {
    humanChoice  = humanChoice.toLowerCase();
    if (humanChoice === compuerChoice) {
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
