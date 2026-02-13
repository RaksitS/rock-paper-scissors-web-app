// scripts.js 
const humanScoreElement = document.getElementById("player-score"); 
const computerScoreElement = document.getElementById("bot-score"); 
const roundCountElement = document.getElementById("round-count");
const resultElement = document.getElementById("result");
const rockBtn = document.getElementById("rock"); 
const paperBtn = document.getElementById("paper"); 
const scissorsBtn = document.getElementById("scissors"); 
const replayBtn = document.getElementById("replay"); 
const humanOutput = document.getElementById("player-output");
const computerOutput = document.getElementById("bot-output");

let humanChoice = "";
let computerChoice = "";
let humanScore = 0; 
let computerScore = 0; 
let roundCount = 1;
const choices = ["Rock", "Paper", "Scissors"];

//Get computer choice 
function getComputerChoice() {
const randomIndex = Math.floor(Math.random() * 3);
return choices[randomIndex];
}

// playround Function
function playRound(humanChoice, computerChoice) {
    roundCountElement.textContent = `Round: ${roundCount}`;
    
    if (humanChoice === computerChoice) {
    resultElement.textContent = "Draw !";
} else if (humanChoice === "Rock" && computerChoice === "Scissors" ||
           humanChoice === "Scissors" && computerChoice === "Paper" ||
           humanChoice === "Paper" && computerChoice === "Rock") {
    humanScore++
    resultElement.textContent = "Human Win !";
} else {
    computerScore++
    resultElement.textContent = "Computer Win !";
}

humanScoreElement.textContent = `Score: ${humanScore}`;
computerScoreElement.textContent = `Score: ${computerScore}`;

if (roundCount === 5) {
    declareFinalWinner();
} else {
    roundCount++; 
}
};

//Final Winner

function declareFinalWinner() {
    let finalResult = "";

    if (humanScore > computerScore) {
        finalResult = "GAME OVER ! You Won this match!";
    } else if (humanScore < computerScore) {
        finalResult = "GAME OVER ! Computer Won this match!";
    } else {
        finalResult = "GAME OVER ! It's a total stalemate";
    }

    resultElement.textContent = finalResult;
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

// Player choosing rock
rockBtn.addEventListener("click", () => { 
    humanChoice = "Rock";
    computerChoice = getComputerChoice();

    humanOutput.textContent = `Human Choice: ${humanChoice}`
    computerOutput.textContent = `Computer Choice: ${computerChoice}`
    playRound(humanChoice, computerChoice);
});

//Player choosing paper
paperBtn.addEventListener("click", () => { 
    humanChoice = "Paper";
    computerChoice = choices[Math.floor(Math.random() * 3)];

    humanOutput.textContent = `Human Choice: ${humanChoice}`
    computerOutput.textContent = `Computer Choice: ${computerChoice}`
    playRound(humanChoice, computerChoice);
});

//Player choosing scissors
scissorsBtn.addEventListener("click", () => { 
    humanChoice = "Scissors";
    computerChoice = choices[Math.floor(Math.random() * 3)];

    humanOutput.textContent = `Human Choice: ${humanChoice}`;
    computerOutput.textContent = `Computer Choice: ${computerChoice}`;
    playRound(humanChoice, computerChoice);
});

// Replay resets scores 
replayBtn.addEventListener("click", () => { 
humanScore = 0; 
computerScore = 0; 
roundCount = 0;

//Reset the text
roundCountElement.textContent = "";
humanScoreElement.textContent = "Score: 0"; 
computerScoreElement.textContent = "Score: 0"; 
resultElement.textContent = "Game Reset!";
humanOutput.textContent = "Human choice: ";
computerOutput.textContent = "Computer choice: ";

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
});

