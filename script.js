console.log("Linking works")

let playerChoice = "Placeholder";
let randomPcInput
let roundWinner
let computerScore = 0;
let playerScore = 0;




// Function that first listens for button click, sets the target to match the clicked button, 
// stores value of the button and pushes this value to variable playerChoice
document.querySelector('.buttons')
  .addEventListener('click', event => {
    // Commented "let target" is a way of defining the event.target to save for reuse
    // let target = event.target;
    // Now we have to define "event.target" this could be shortened and remove "event" if above "let target" was defined.
    // This is also the case for the "let value" where "event." could be left out of "let target" was defined. 
    if (event.target.matches('button')) {
        let value = event.target.innerHTML;
        playerChoice = value;
        console.log(`Player chooses ${playerChoice}`);
    }


    getRandomInt(3);
    console.log(`PC chooses number ${randomPcInput}`)

    choiceEvaluation();

    scoreAddition();

    console.log(`Player score = ${playerScore}`);
    console.log(`Computer score = ${computerScore}`);

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
    console.log("It's a tie!");
    roundWinner = "No one";
  } else if (player == "Rock" && computer == 1) {
    console.log("Computer wins!");
    roundWinner = "Computer";
  } else if (player == "Rock" && computer == 2) {
  console.log("You win!");
  roundWinner = "Player";
  } else if (player == "Paper" && computer == 0) {
  console.log("You win!");
  roundWinner = "Player";
  } else if (player == "Paper" && computer == 1) {
  console.log("It's a tie!");
  roundWinner = "No one";
  } else if (player == "Paper" && computer == 2) {
    console.log("Computer wins!");
    roundWinner = "Computer";
  } else if (player == "Scissors" && computer == 0) {
    console.log("Computer Wins!");
    roundWinner = "Computer";
  } else if (player == "Scissors" && computer == 1) {
    console.log("You win!");
    roundWinner = "Player";
  } else if (player == "Scissors" && computer == 2) {
      console.log("It's a tie!");
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
  } else if (roundWinner == "Player"){
    playerScore = playerScore+1;
  } else {
    return
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
  }