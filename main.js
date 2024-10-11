'use strict';
// Making the random number between 1-20
let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

// Declare DOM elements
const buttonCheck = document.querySelector(".btnCheck");
const guessInput = document.querySelector(".guess");
const scoreDisplay = document.querySelector(".score");
const highscoreDisplay = document.querySelector(".highscore");
const againButton = document.querySelector(".again");
const guessesHistoryDisplay = document.querySelector(".guessesHistory"); // Ensure this matches your HTML

// Declare variables
let scoreValue = 0;
let highscore = Infinity;
let guesses = [];

// Function to update guesses history
function updateGuessesHistory() {
    // Update the display with the current guesses or "None" if empty
    guessesHistoryDisplay.textContent = `Guesses so far: ${guesses.length > 0 ? guesses.join(', ') : 'None'}`;
}

// Function to display messages as alerts
function displayMessage(message) {
    alert(message); // Use alert for messages
}

// Check if numbers match and validate input
function checkInputMatchesNumber() {
    const userGuess = Number(guessInput.value);

    // Validate if the input is not a number or not between 1-20
    if (!userGuess || userGuess < 1 || userGuess > 20) {
        displayMessage("Please enter a valid number between 1 and 20!");
        return;
    }
    // Add the guess to the history array
    guesses.push(userGuess);
    updateGuessesHistory();

    // added this feature if u guess more then 19 times u will get redirected to this link
    if (scoreValue >= 19) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Redirect to the URL
        return;
    }


        if (userGuess === randomNumber) {
        console.log("true");
        displayMessage("Correct! You guessed the number!");

        if (scoreValue < highscore) {
            highscore = scoreValue;
            highscoreDisplay.textContent = highscore;
        }
        guessInput.value = '';
        return true;

    } else {
        console.log("false");
        scoreValue++;
        guessInput.value = '';
        scoreDisplay.textContent = scoreValue;
        return false;
    }
}


buttonCheck.addEventListener("click", checkInputMatchesNumber);

// Reset the game when the again button is clicked
function resetGame() {
    randomNumber = Math.floor(Math.random() * 20) + 1; // Reset random number
    console.log(randomNumber);
    scoreValue = 0; // Reset score
    scoreDisplay.textContent = 0; // Clear score display
    guessInput.value = ''; // Clear input field
    guesses = []; // Clear guesses history
    updateGuessesHistory(); // Clear history display
    displayMessage("Game has been reset. Start guessing...");
}

againButton.addEventListener("click", resetGame);