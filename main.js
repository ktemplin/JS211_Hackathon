let hangmanWord = ''
let guessedLetters = new Set();
let incorrectGuesses = 0;

const maxIncorrectGuesses = 7;

const wordDisplayElement = document.getElementById('wordDisplay');
const feedbackElement = document.getElementById('feedback');
const guessInputElement = document.getElementById('guessInput');
const hangmanStageElement = document.getElementById('hangmanStage');


const wordChoice = async () => {
    try{
    const response = await fetch('https://api.api-ninjas.com/v1/randomword/', {
        method: "GET", 
        headers: {
            'X-Api-Key': 'YibgIotsYasSGOUR6SFagi7NTuTCdx9P0zQD37dT'},
        contentType: 'application/json'
            });
            if(response.ok){
                const jsonResponse = await response.json()
                // console.log(jsonResponse)
                hangmanWord = jsonResponse.word.toLowerCase();
                console.log(hangmanWord);
                displayWord()         
            }
          }
          catch(error){
            console.log(error)
          }
        }

const displayWord = () => {
    const wordDisplay = hangmanWord
        .split('')
        .map(letter => (guessedLetters.has(letter) ? letter : '_'))
        .join(' ');
    wordDisplayElement.textContent = wordDisplay;

    checkWin()
    }

    const makeGuess = () => {
        const guess = guessInputElement.value.toLowerCase();
      
        if (guess.length !== 1 || !/[a-z]/.test(guess)) {
          feedbackElement.textContent = 'Please enter a valid single letter.';
          return;
        }
      
        if (guessedLetters.has(guess)) {
          feedbackElement.textContent = 'You already guessed that letter. Try again.';
          return;
        }
      
        guessedLetters.add(guess);
      
        if (hangmanWord.includes(guess)) {
          feedbackElement.textContent = 'Good guess!';
        } else {
          feedbackElement.textContent = 'Incorrect guess. Try again.';
          incorrectGuesses++;
          updateHangmanStage();
        }
      
        displayWord();
        guessInputElement.value = '';
      
        checkLose();
      }

      const generateHangmanStage = () => {
        const hangmanParts = ['rope', 'head', 'body', 'left-arm', 'right-arm', 'left-leg', 'right-leg'];
      
        hangmanParts.forEach(part => {
          const partElement = document.createElement('div');
          partElement.classList.add('hangman-part', part);
          hangmanStageElement.appendChild(partElement);
        });
      }
      
      const updateHangmanStage = () => {
        const hangmanParts = document.querySelectorAll('.hangman-part');
      
        if (incorrectGuesses <= maxIncorrectGuesses) {
          hangmanParts[incorrectGuesses - 1]?.classList.add('visible');
        }
      }
      
      const checkWin = () => {
        if (!wordDisplayElement.textContent.includes('_')) {
          feedbackElement.textContent = 'Congratulations! You won!';
          disableInput();
        }
      }
      
      const checkLose = () => {
        if (incorrectGuesses === maxIncorrectGuesses) {
          feedbackElement.textContent = `Sorry, you lost. The correct word was "${hangmanWord}".`;
          disableInput();
        }
      }
      
      const disableInput = () => {
        guessInputElement.disabled = true;
      }
      
      wordChoice()
      generateHangmanStage()