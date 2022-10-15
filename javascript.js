const playerRock = "You Win! Rock beats Scissors!";
const playerPaper = "You Win! Paper beats Rock!";
const playerScissors = "You Win! Scissors beat Paper!";
const computerRock = "You Lose! Rock beats Scissors!";
const computerPaper = "You Lose! Paper beats Rock!";
const computerScissors = "You Lose! Scissors beat Paper!";
const playerComputerTie = "Tie!";
const playerWin = "Winner! Play Again?";
const computerWin = "Loser! Play Again?";

let scorePlayer = 0;
let scoreComputer = 0;

const selection = document.querySelector('.optionSelect', 'button');

selection.addEventListener('click', (event) => {
    document.getElementById("startText").innerHTML = '';
    game(playRound(event.target.id));
})

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    return playerSelection == 1 && computerSelection == 3 ? playerRock
    : playerSelection == 2 && computerSelection == 1 ? playerPaper
    : playerSelection == 3 && computerSelection == 2 ? playerScissors
    : playerSelection == 3 && computerSelection == 1 ? computerRock
    : playerSelection == 1 && computerSelection == 2 ? computerPaper
    : playerSelection == 2 && computerSelection == 3 ? computerScissors
    : playerComputerTie;
}

function game(outcome) {
    if (scorePlayer == 5 || scoreComputer == 5) {
        scorePlayer = 0;
        scoreComputer = 0;
        document.getElementById("scoresP").innerHTML = scorePlayer;
        document.getElementById("scoresC").innerHTML = scoreComputer;
        document.getElementById("outcomeText").innerHTML = '';
        document.getElementById("endText").innerHTML = '';
    }

    if (outcome == playerRock || outcome == playerPaper || outcome == playerScissors) {
        scorePlayer++;
        document.getElementById("scoresP").innerHTML = scorePlayer;
    }
    else if (outcome == computerRock || outcome == computerPaper || outcome == computerScissors) {
        scoreComputer++;
        document.getElementById("scoresC").innerHTML = scoreComputer;
    }
    document.getElementById("outcomeText").innerHTML = outcome;
    if (scorePlayer == 5) {
        document.getElementById("endText").setAttribute('style', 'color: green');
        document.getElementById("endText").innerHTML = playerWin;
    }
    else if (scoreComputer == 5) {
        document.getElementById("endText").setAttribute('style', 'color: red');
        document.getElementById("endText").innerHTML = computerWin;
    }
}