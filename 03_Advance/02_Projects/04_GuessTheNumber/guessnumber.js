let randomNumber = Math.floor(Math.random() * 100) + 1;

let submitBtn = document.getElementById("submitBtn");
let guessField = document.getElementById("guessField");
let guesses = document.getElementById("guesses");
let remaining = document.getElementById("remaining");
let message = document.getElementById("message");

let prevGuesses = [];
let attempts = 10;

submitBtn.addEventListener("click", function () {
  let userGuess = Number(guessField.value);

  // Validation
  if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
    message.innerText = "⚠️ Enter a number between 1 and 100";
    return;
  }

  // Store guess
  prevGuesses.push(userGuess);
  guesses.innerText = prevGuesses.join(", ");

  attempts--;
  remaining.innerText = attempts;

  // Check result
  if (userGuess === randomNumber) {
    message.innerText = "🎉 Correct! You won!";
    endGame();
  } else if (attempts === 0) {
    message.innerText = `💀 Game Over! Number was ${randomNumber}`;
    endGame();
  } else {
    if (userGuess < randomNumber) {
      message.innerText = "📉 Too low!";
    } else {
      message.innerText = "📈 Too high!";
    }
  }

  guessField.value = "";
});

function endGame() {
  guessField.disabled = true;
  submitBtn.disabled = true;
}