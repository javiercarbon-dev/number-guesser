let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (userGuess, computerGuess, secret) => {
  if (userGuess > 9) {
    alert('Number must be between 0 and 9.');
  }

  userDifference = calculateDifference(userGuess, secret);
  computerDifference = calculateDifference(computerGuess, secret);

  if (userDifference === computerDifference) return true;
  
  userDifference < computerDifference ? true : false;
};

const calculateDifference = (guess, secret) => Math.abs(secret - guess);

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}