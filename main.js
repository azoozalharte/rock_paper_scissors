


function computerPlay() {
    let computerChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * ['rock', 'paper', 'scissors'].length)];
    console.log(computerChoice);
    return computerChoice
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Tie'
    } else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || 
    playerSelection == 'scissors' && computerSelection == 'paper') {
        return `You win! ${playerSelection} beats ${computerSelection}` 
    }else {
        return `You lose! ${computerSelection} beats ${playerSelection}` 
    }
}

function game() {
    let computerChoice = computerPlay()

    console.log(playRound(userInput, computerChoice))
}

let i = 0
while (i < 3) {
    game()
    i++
}