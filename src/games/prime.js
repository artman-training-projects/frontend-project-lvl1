import startGame from '../index.js';
import getRandomNumber from '../utils.js';
import Answers from '../constants.js';

const RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const getGameData = () => {
  const number = getRandomNumber();

  const result = isPrime(number) ? Answers.YES : Answers.NO;
  const question = number;
  return [question, result];
};

export default startGame(RULES, getGameData);
