// Tạo các giá trị cho trò chơi 
const words = ["javascript", "programming", "interface", "developer", "function"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let remainingGuesses = 5;

const wordDisplay = document.getElementById("word-display");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const message = document.getElementById("message");
const remainingGuessesDisplay = document.getElementById("remaining-guesses");
const playAgainButton = document.getElementById("play-again-button");

function updateWordDisplay() {
    const displayWord = selectedWord.split('').map(letter => guessedLetters.includes(letter) ? letter : '*').join(' ');
    wordDisplay.textContent = `The word is: ${displayWord}`;
}

function checkGuess() {
    const guess = guessInput.value.toLowerCase();
    guessInput.value = '';

    if (!guess || guessedLetters.includes(guess) || guess.length !== 1) {
        message.textContent = "Please enter a valid letter.";
        return;
    }

    guessedLetters.push(guess);

    if (selectedWord.includes(guess)) {
        message.textContent = `Good job! The letter "${guess}" is in the word.`;
    } else {
        remainingGuesses--;
        message.textContent = `Sorry, the letter "${guess}" is not in the word.`;
    }

    updateWordDisplay();
    remainingGuessesDisplay.textContent = `Remaining guesses: ${remainingGuesses}`;

    if (!wordDisplay.textContent.includes('*')) {
        message.textContent = "Congratulations! You've guessed the word.";
        endGame();
    } else if (remainingGuesses === 0) {
        message.textContent = `Game over! The word was "${selectedWord}".`;
        endGame();
    }
}

function endGame() {
    guessInput.disabled = true;
    guessButton.disabled = true;
    playAgainButton.style.display = "block";
}

function resetGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    remainingGuesses = 5;
    guessInput.disabled = false;
    guessButton.disabled = false;
    playAgainButton.style.display = "none";
    message.textContent = '';
    updateWordDisplay();
    remainingGuessesDisplay.textContent = `Remaining guesses: ${remainingGuesses}`;
}

// Gán các sự kiện
guessButton.addEventListener("click", checkGuess);
guessInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        checkGuess();
    }
});
playAgainButton.addEventListener("click", resetGame);

// Khởi tạo giao diện ban đầu
updateWordDisplay();
