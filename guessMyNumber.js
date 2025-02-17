//Save the buttons as constants
//input
const inputField = document.querySelector("#userGuess");
//buttons
const guessButton = document.querySelector("#guess-button");
const resetButton = document.querySelector("#reset-button");
//message
const messageElement = document.querySelector("#message");

//Add an eventListener that takes input from the input field
//check if the user's guess is correct
guessButton.addEventListener("click", () => {
    //document.querySelector("#userGuess").innerText
    const userGuess = parseInt(document.querySelector("#userGuess").value, 10);
    if(userGuess === randomNumber){
        messageElement.innerText="You guessed right!!!"
    }
    if(userGuess > randomNumber){
        messageElement.innerText="Too high"
    }
    if(userGuess < randomNumber){
        messageElement.innerText="Too low"
    }
})

//Make a random number between 1-5
let randomNumber = generateNumber();
console.log(randomNumber);

//Returns a random number between 1-5
function generateNumber(){
    return Math.floor(Math.random() * 5) + 1;
}

// Reset button event listener
resetButton.addEventListener("click", () => {
    randomNumber = generateNumber(); // Generate new random number
    console.log(randomNumber);

    inputField.value = ""; // Clear input field
    messageElement.innerText = ""; // Clear message
})
