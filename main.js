'use strict';
// making the random number between 1-20
let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

// declare DOM elements
const buttonCheck = document.querySelector(".btnCheck");
const guessInput = document.querySelector(".guess");
const scoreDisplay = document.querySelector(".score");
const highscoreDisplay = document.querySelector(".highscore");
const againButton = document.querySelector(".again");

// declare variables
let scoreValue = 0;
let highscore = Infinity;

// Function to display messages as alerts
function displayMessage(message) {
    alert(message); // Use alert for messages
}

// check if numbers match and validate input
function checkInputMatchesNumber() {
    const userGuess = Number(guessInput.value);

    // Validate if the input is not a number or not between 1-20
    if (!userGuess || userGuess < 1 || userGuess > 20) {
        displayMessage("Please enter a valid number between 1 and 20!");
        return;
    }

    if (userGuess === randomNumber) {
        console.log("true");
        displayMessage("Correct! You guessed the number!");

        if (scoreValue < highscore) {
            highscore = scoreValue;
            highscoreDisplay.textContent = highscore; // Update highscore
        }
        guessInput.value = ''; // Clear input field
        return true;

    } else {
        console.log("false");
        displayMessage(userGuess > randomNumber ? "Too high!" : "Too low!");
        scoreValue++;
        guessInput.value = '';
        scoreDisplay.textContent = scoreValue;
        return false;
    }
}

// Now that the function is defined, attach the event listener
buttonCheck.addEventListener("click", checkInputMatchesNumber);

// Reset the game when the again button is clicked
function resetGame() {
    randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber);
    scoreValue = 0; // Reset score
    scoreDisplay.textContent = 0; // Clear score display
    guessInput.value = ''; // Clear input field
    displayMessage("Game has been reset. Start guessing...");
}

againButton.addEventListener("click", resetGame);