
//random number

var randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(randomNumber)

//input
var guess = document.getElementById('guess');


//buttons
var clearButton = document.getElementById('clearButton');
var guessButton = document.getElementById('guessButton');
var resetButton = document.getElementById('resetButton');

//game responses
var lastGuess = document.getElementById('lastGuess');
var response = document.getElementById('response');

var min = 1;
var max = 100;

//event listeners
guess.addEventListener('keyup', function() {
  clearButton.disabled = false;
  guessButton.disabled = false;
  resetButton.disabled = false; 
})

guessButton.addEventListener('click', function() {
  var userInput = guess.value
  lastGuess.innerText = userInput
});

resetButton.addEventListener('click', function() {
  disableButtons();
  randomNumber = Math.floor(Math.random() * 100) +1; 
  console.log(randomNumber) 
  lastGuess.innerText = "#";
  response.innerText = "Guess a number";
 } 
)

clearButton.addEventListener('click', disableButtons);



//Run game  event listener and function
guessButton.addEventListener('click', isNumber);

function isNumber() {
  var parseGuess = parseInt(guess.value);
  if (isNaN(parseGuess)) {
    response.innerText = "Guess a Number!";
    lastGuess.innertext = "That's not a number!";
  } else if (parseGuess > max || parseGuess < min) {
    response.innerText = "Out of range!";
  } else if (parseGuess < randomNumber) {
    response.innerText = "Too Low! Guess again!";
  } else if (parseGuess > randomNumber) {
    response.innerText = "Too high!  Guess again!";
  } else {
    response.innerText = "You win!";
    lastGuess.innerText = "Boom!";
  }
}


//disable buttons function
function disableButtons() {
  clearButton.disabled = true;
  resetButton.disabled = true;
  guessButton.disabled = true;
  guess.value = "";
  guess.focus();
}







