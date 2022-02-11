// --- Day 3: Binary Diagnostic ---
// ---  Puzzle 1                ---
import PuzzleOneResult from './interfaces/PuzzleOneResult.ts';

// TODO: This is very messy, try and clean it up at some point.
function getGammaRate(data: string[]): number {
  let gamma = '';
  for (let index = 0; index < data[0].length; index++) {
    const numberOfOnes = data
      .map((item) => [...item][index])
      .map((item) => Number.parseInt(item, 2))
      .reduce((first, second) => first + second);
    const numberOfZeroes = data.length - numberOfOnes;
    numberOfOnes > numberOfZeroes ? (gamma += 1) : (gamma += 0);
  }
  return Number.parseInt(gamma, 2);
}

function getEpsilonRate(data: string[]): number {
  let epsilon = '';
  for (let index = 0; index < data[0].length; index++) {
    const numberOfOnes = data
      .map((item) => [...item][index])
      .map((item) => Number.parseInt(item, 2))
      .reduce((first, second) => first + second);
    const numberOfZeroes = data.length - numberOfOnes;
    numberOfOnes < numberOfZeroes ? (epsilon += 1) : (epsilon += 0);
  }
  return Number.parseInt(epsilon, 2);
}

function puzzleOne(data: string[]): PuzzleOneResult {
  const gammaRate = getGammaRate(data);
  const epsilonRate = getEpsilonRate(data);
  const powerLevel = gammaRate * epsilonRate;
  return { gammaRate, epsilonRate, powerLevel };
}

export default puzzleOne;
