console.log("Linking works")

let playerChoice = "Placeholder";



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
        console.log(playerChoice);
    }
  });

