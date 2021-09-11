let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// generate random number
const generateTarget = () =>
{
  return Math.floor(Math.random() * 10);
}

//compare random number too two guesses
const compareGuesses = (humanGuess, computerGuess, target) =>
{
  let human = Math.abs(target - humanGuess);
  let computer = Math.abs(target - computerGuess);

  if(human < computer)
  {
    return true;
  }
  else if(human > computer)
  {
    return false;
  }
  else
  {
    return true;
  }
}

//update score
const updateScore = value =>
{
  switch(value)
  {
    case 'human' :
      humanScore++;
      break;
    case 'computer' :
      computerScore++;
      break;
    default:
      break;
  }
}

//next round
const advanceRound = () =>
{
  currentRoundNumber++;
}


// run game
let num1 = generateTarget();
console.log(num1);

let guess = compareGuesses(5, 8, num1);
console.log(guess);
if(guess)
{
  console.log('Human wins');
}
else
{
  console.log('Computer wins')
}