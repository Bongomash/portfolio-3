'use strict';
//check if user input matches random number

//makeing the random number between 1-20

const randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

// check if the random number and the input matches

//declare var
const buttonCheck = document.querySelector(".btnCheck")
const guessInput = document.querySelector(".guess");
const scoreDisplay = document.querySelector(".score");
const highscoreDisplay = document.querySelector(".highscore");
let scoreValue = 0;
let highscore = Infinity;
function checkInputMatchesNumber () {
    const userGuess = Number(guessInput.value);

    if (userGuess === randomNumber){
        console.log("true");
        if (scoreValue < highscore) {
            highscore = scoreValue; //
            highscoreDisplay.textContent = highscore;
        }
        guessInput.value = '';
        return true;

    }
else  {
    console.log("false");
        scoreValue++;
        guessInput.value = '';
        scoreDisplay.textContent = scoreValue;
        return false;

    }
}
// eventlistener to execute the code
buttonCheck.addEventListener("click", checkInputMatchesNumber);




