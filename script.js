let humanScore = 0;
let computerScore = 0;

// Function to get the human choice
function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:");
    if (choice === null) {
        return null; // User cancelled the prompt
    }
    return choice.toLowerCase();
}
//test
console.log(getHumanChoice());

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
// Test the function
console.log(getComputerChoice());

function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function playRound(humanChoice, computerChoice) {
    const result = determineWinner(humanChoice, computerChoice);
    const resultsDiv = document.getElementById('results');
    resultsDiv.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. ${result}`;

    updateScore(result);
    updateScoreDisplay();
}

function updateScore(result) {
    if (result === "You win!") {
        humanScore++;
    } else if (result === "You lose!") {
        computerScore++;
    }
}

function updateScoreDisplay() {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;

    if (humanScore === 5) {
        announceWinner("You");
    } else if (computerScore === 5) {
        announceWinner("Computer");
    }
}
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
function announceWinner(winner) {
    const winnerDiv = document.getElementById('winner');
    winnerDiv.textContent = `${winner} wins the game!`;
}

document.getElementById('rock').addEventListener('click', function() {
    if (humanScore < 5 && computerScore < 5) {
        playRound('rock', getComputerChoice());
    }
});

document.getElementById('paper').addEventListener('click', function() {
    if (humanScore < 5 && computerScore < 5) {
        playRound('paper', getComputerChoice());
    }
});

document.getElementById('scissors').addEventListener('click', function() {
    if (humanScore < 5 && computerScore < 5) {
        playRound('scissors', getComputerChoice());
    }
});
