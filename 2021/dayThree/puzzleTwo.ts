// --- Day 3: Binary Diagnostic ---
// ---  Puzzle 2                ---

import PuzzleTwoResult from './interfaces/PuzzleTwoResult.ts';

function getOxygenGeneratorRating(data: string[]): number {
  let workingData = [...data];
  for (let index = 0; index < data[0].length; index++) {
    if (workingData.length === 1) {
      break;
    }
    const numberOfOnes = workingData
      .map(item => [...item][index])
      .map(item => Number(item))
      .reduce((first, second) => first + second);
    const numberOfZeroes = workingData.length - numberOfOnes;
    if (numberOfOnes >= numberOfZeroes) {
      workingData = workingData.filter(item => [...item][index] === '1');
    } else {
      workingData = workingData.filter(item => [...item][index] === '0');
    }
  }
  return Number.parseInt(workingData[0], 2);
}

function getCO2ScrubberRating(data: string[]): number {
  let workingData = [...data];
  for (let index = 0; index < data[0].length; index++) {
    if (workingData.length === 1) {
      break;
    }
    const numberOfOnes = workingData
      .map(item => [...item][index])
      .map(item => Number(item))
      .reduce((first, second) => first + second);
    const numberOfZeroes = workingData.length - numberOfOnes;
    if (numberOfZeroes > numberOfOnes) {
      workingData = workingData.filter(item => [...item][index] === '1');
    } else {
      workingData = workingData.filter(item => [...item][index] === '0');
    }
  }
  return Number.parseInt(workingData[0], 2);
}

function puzzleTwo(data: string[]): PuzzleTwoResult {
  const oxygenGeneratorRating = getOxygenGeneratorRating(data);
  const CO2GeneratorRating = getCO2ScrubberRating(data);
  const lifeSupportRating = oxygenGeneratorRating * CO2GeneratorRating;
  return { oxygenGeneratorRating, CO2GeneratorRating, lifeSupportRating };
}

export default puzzleTwo;
