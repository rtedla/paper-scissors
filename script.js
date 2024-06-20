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
    humanchoice = humanChoice.toLowerCase();
    if (humanChoice === compuerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "soccors" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
   
