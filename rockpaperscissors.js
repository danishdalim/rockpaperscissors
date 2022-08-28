

const getComputerChoice = ['rock','paper','scissor'];
//let playerSelection = prompt('Rock, Paper, Scissors GO!');
let playerSelection = '';

//const random = Math.floor(Math.random() * getComputerChoice.length);
//const computerSelection = (getComputerChoice[random]);
//console.log(`Computer: ${computerSelection}`);
//console.log(`Player: ${playerSelection}`);

function winStatus() {
    const container = document.querySelector('#status');
    container.innerHTML = 'You Win!';
    container.style.color = 'green';
    setTimeout(() => {
        container.innerHTML = 'Choose your weapon!';
    },2000);
      
}

function loseStatus() {
    const container = document.querySelector('#status');
    container.innerHTML = 'You Lose!';
    container.style.color = 'red';
    setTimeout(() => {
        container.innerHTML = 'Choose your weapon!';   
    },2000);
         
}

function drawStatus() {
    const container = document.querySelector('#status');
    container.innerHTML = 'It\'s a Draw!';
    setTimeout(() => {
        container.innerHTML = 'Choose your weapon!';    
    },2000);
    container.style.color = 'aliceblue';
    
}

function hideStatus() {
    content.style.display = 'none';
}


function rockPaperScissors(playerSelection, computerSelection) {
    
    if(playerSelection === computerSelection){
        console.log('ITS A DRAW!');
        return drawStatus();
    } else if(playerSelection === 'rock' && computerSelection === 'scissor') {
        console.log('YOU WIN!Rock beats Scissor');
        playerWincount = playerWincount + 1;
        winStatus();
        return endGame();
    } else if(playerSelection === 'scissor' && computerSelection === 'paper') {
        console.log('YOU WIN!Scissor beats Paper');
        playerWincount = playerWincount + 1;
        winStatus();
        return endGame();
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('YOU WIN!Paper beats Rock');
        playerWincount = playerWincount + 1;
        winStatus();
        return endGame();
        
        
    } else {
        console.log(`YOU LOSE! ${computerSelection} beats ${playerSelection}`);
        computerWincount = computerWincount + 1;
        loseStatus();
        return endGame();
        
    }
}



function endGame() {
if (computerWincount > 4) {
    console.log('Player WON!');
    const container = document.querySelector('#status');
    container.innerHTML = 'COMPUTER WON!';
    container.style.color = 'red';
} else if (playerWincount > 4) {
    console.log('Player WON!');
    const container = document.querySelector('#status');
    container.innerHTML = 'PLAYER WON!';
    container.style.color = 'green';
    
}
    else {

    }

}

