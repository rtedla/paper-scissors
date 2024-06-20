console.log("Hello World");
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
