console.log("Linking works")

let playerChoice
let randomPcInput
let roundWinner
let computerScore = 0;
let playerScore = 0;


let printPlayerNumber = document.querySelector('#player-score-num').firstChild;
let printComputerNumber = document.querySelector('#computer-score-num').firstChild;
let printResultText = document.querySelector('#result-text').firstChild;



// Function that first listens for button click, sets the target to match the clicked button, 
// stores value of the button and pushes this value to variable playerChoice
document.querySelector('.buttons')
  .addEventListener('click', event => {
    if (event.target.matches('button')) {
        let value = event.target.innerHTML;
        playerChoice = value;
        console.log(`Player chooses ${playerChoice}`);
    }


    getRandomInt(3);
    console.log(`PC chooses number ${randomPcInput}`)

    choiceEvaluation();
    scoreAddition();

    // console.log(`Player score = ${playerScore}`);
    // console.log(`Computer score = ${computerScore}`);



    if (playerScore == 5) {
      alert("Player wins the game!");
    } else if (computerScore == 5) {
      alert("Oh no! Computer wins the game!")
    } else {
      return
    }

  });

  
/*
  Make machine input RPS random
	> Math random function from 1 to 3, one number RPS option
	> Store output in variable
*/

function getRandomInt (num) {
  randomPcInput = Math.floor(Math.random() * num)
}



/* 
  Make evaluation logic for RPS
	> Make if-else function for win and ties
*/

function choiceEvaluation (player, computer) {
  player = playerChoice;
  computer = randomPcInput;

// If-else statement to evaluate possible outcomes
  if (player == "Rock" && computer == 0) {
    roundWinner = "No one";
  } else if (player == "Rock" && computer == 1) {
    roundWinner = "Computer";
  } else if (player == "Rock" && computer == 2) {
  roundWinner = "Player";
  } else if (player == "Paper" && computer == 0) {
  roundWinner = "Player";
  } else if (player == "Paper" && computer == 1) {
  roundWinner = "No one";
  } else if (player == "Paper" && computer == 2) {
    roundWinner = "Computer";
  } else if (player == "Scissors" && computer == 0) {
    roundWinner = "Computer";
  } else if (player == "Scissors" && computer == 1) {
    roundWinner = "Player";
  } else if (player == "Scissors" && computer == 2) {
    roundWinner = "No one";
  }
}

console.log(choiceEvaluation())
console.log(roundWinner);

/*
Best of 5 counter
	> Variable for human
	> Variable for computer
	> Add 1 to winning variable depending on evaluation result
*/

function scoreAddition () {
  if (roundWinner == "Computer") {
    computerScore = computerScore+1;
    printComputerNumber.textContent = computerScore;
    printResultText.textContent = "Computer wins the round!";
  } else if (roundWinner == "Player"){
    playerScore = playerScore+1;
    printPlayerNumber.textContent = playerScore;
    printResultText.textContent = "Player wins the round!";
  } else if (roundWinner == "No one"){
    printResultText.textContent = "It's a tie!";
  }
}

console.log(scoreAddition());


document.querySelector('.new-game-button')
  .addEventListener('click', () => {
 
console.log("New game button pressed")

gameReset();
  
  })

  function gameReset() {
    computerScore = 0;
    playerScore = 0;
    printPlayerNumber.textContent = 0;
    printComputerNumber.textContent = 0;
    printResultText.textContent = "Who will win this time?";
  }