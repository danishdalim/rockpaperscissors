let playerWincount = 0;
let computerWincount = 0;

const btnrock = document.querySelector('#btnrock');
btnrock.addEventListener('click', () => {
  const random = Math.floor(Math.random() * getComputerChoice.length);
  const computerSelection = (getComputerChoice[random]);
  rockPaperScissors('rock', computerSelection);
  console.log(`Computer: ${computerSelection}`);
  console.log(`Player: rock`);
  console.log(`Computer Score: ${computerWincount}`);
  console.log(`Player Score: ${playerWincount}`);
  document.getElementById("win").innerHTML = playerWincount;
  document.getElementById("lose").innerHTML = computerWincount;
});

const btnpaper = document.querySelector('#btnpaper');
btnpaper.addEventListener('click', () => {
  const random = Math.floor(Math.random() * getComputerChoice.length);
  const computerSelection = (getComputerChoice[random]);
  rockPaperScissors('paper', computerSelection);
  console.log(`Computer: ${computerSelection}`);
  console.log(`Player: paper`);
  console.log(`Computer Score: ${computerWincount}`);
  console.log(`Player Score: ${playerWincount}`);
  document.getElementById("win").innerHTML = playerWincount;
  document.getElementById("lose").innerHTML = computerWincount;
  
});

const btnscissor = document.querySelector('#btnscissor');
btnscissor.addEventListener('click', () => {
  const random = Math.floor(Math.random() * getComputerChoice.length);
  const computerSelection = (getComputerChoice[random]);
  rockPaperScissors('scissor', computerSelection);
  console.log(`Computer: ${computerSelection}`);
  console.log(`Player: scissor`);
  console.log(`Computer Score: ${computerWincount}`);
  console.log(`Player Score: ${playerWincount}`);
  document.getElementById("win").innerHTML = playerWincount;
  document.getElementById("lose").innerHTML = computerWincount;
});


