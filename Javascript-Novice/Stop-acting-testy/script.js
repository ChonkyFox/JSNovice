let timer;
let timeLeft = 60;
let wordCount = 0;
let charCount = 0;
let currentWord = "";

/**
 * Use this function to retrieve a random word.
 *
 * @returns a string containing a random word.
 */
async function getWord() {
    const response = await fetch("https://random-word-bit.vercel.app/word");
    const word = await response.json();
    return word[0].word.toLowerCase();
}

const startButton = document.getElementById('startButton');
const timerElement = document.getElementById('timer');
const wordElement = document.getElementById('word');
const userInput = document.getElementById('userInput');
const resultsElement = document.getElementById('results');

startButton.addEventListener('click', startTest);

async function startTest() {

    wordCount = 0;
    charCount = 0;
    resultsElement.innerText = "";
    userInput.value = "";
    userInput.disabled = false;


    timeLeft = 60;
    timerElement.innerText = formatTime(timeLeft);


    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = formatTime(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(timer);
            endTest();
        }
    }, 1000);


    await showNewWord();
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

async function showNewWord() {
    currentWord = await getWord();
    wordElement.innerText = currentWord;
}

userInput.addEventListener('input', () => {
    if (userInput.value.toLowerCase() === currentWord) {
        wordCount++;
        charCount += currentWord.length;
        userInput.value = "";
        showNewWord();
    }
});

function endTest() {
    userInput.disabled = true;
    resultsElement.innerText = `Je hebt ${wordCount} woorden correct getypt en ${charCount} karakters getypt.`;
    startButton.innerText = "Opnieuw starten";
    startButton.removeEventListener('click', startTest);
    startButton.addEventListener('click', restartTest);
}

function restartTest() {
    startButton.innerText = "Start";
    startButton.removeEventListener('click', restartTest);
    startButton.addEventListener('click', startTest);
    resultsElement.innerText = "";
    userInput.disabled = false;
    userInput.value = "";
    timeLeft = 60;
    timerElement.innerText = formatTime(timeLeft);
    wordCount = 0;
    charCount = 0;
}
