const h1 = document.querySelector('h1')
const htmlCumputerScore = document.querySelector('#cumputer_score')
const htmlUserScore = document.querySelector('#user_score')
const cumputerSelected = document.querySelector('#cumputer_selected')
const userSelected = document.querySelector('#user_selected')
const buttons = document.querySelectorAll('.btns');
const h4 = document.querySelector('h4')

let userScore = 0
let cumputerScore = 0


function startGame() {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let cumputerPick = ["rock", 'paper', 'scissors'][Math.floor(Math.random()*["rock", 'paper', 'scissors'].length)]
            userSelected.innerHTML = button.getAttribute('id')
            cumputerSelected.innerHTML = cumputerPick

            playRound(cumputerPick, button.getAttribute('id'))
        })
    });
}

function stopGame() {
    buttons.forEach(button => {
        button.setAttribute('disabled', 'disabled')
        button.classList.remove('active')
    });
    let btn = document.createElement('button');
    btn.textContent = 'New Game'
    btn.setAttribute('id', 'new_game')
    document.body.appendChild(btn)
    btn.addEventListener('click', () => {
        location.reload(true)
    })
}

function playRound(cumputerPick, userPick) {

    if (userPick == cumputerPick) {
        h1.innerHTML = 'Tie'
    }else if (userPick == 'rock' && cumputerPick == 'scissors' ||  userPick == 'paper' && cumputerPick == 'rock' 
    || userPick == 'scissors' && cumputerPick == 'paper' ) {
        userScore += 1;
        if (userScore == 4) {
            h4.innerHTML = 'You have won congrats'
            stopGame();
        }
        htmlUserScore.innerHTML = userScore.toString()
        console.log(userScore);
        h1.innerHTML = 'Win'
    }else {
        cumputerScore += 1;
        if (cumputerScore == 4) {
            h4.innerHTML = 'Computer Won you are a loser :)'
            stopGame();
        }
        htmlCumputerScore.innerHTML = cumputerScore.toString()

        h1.innerHTML = 'Lose'
    }
}

startGame()