for(let i = 0; i < 5 ; i++) {

const getComputerChoice = ['rock','paper','scissor'];
let playerSelection = prompt('Rock, Paper, Scissors GO!');



const random = Math.floor(Math.random(-1,2) * getComputerChoice.length);
const computerSelection = (random, getComputerChoice[random]);
console.log(`Computer: ${computerSelection}`);
console.log(`Player: ${playerSelection}`);

function rockPaperScissors(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        console.log('ITS A DRAW!');
        return i+1;
    } else if(playerSelection === 'rock' && computerSelection === 'scissor') {
        console.log('YOU WIN!Rock beats Scissor');
        return i+1;
    } else if(playerSelection === 'scissor' && computerSelection === 'paper') {
        console.log('YOU WIN!Scissor beats Paper');
        return i+1;
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('YOU WIN!Paper beats Rock');
        return i+1;
    } else {
        console.log(`YOU LOSE! ${computerSelection} beats ${playerSelection}`);
        return i+1;
    }
}

rockPaperScissors(playerSelection, computerSelection);

}