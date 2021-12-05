import getData from './utils/getData.ts';

const data = getData('data/data.txt');

// TODO: This is very messy, try and clean it up at some point.
function getGammaRate(data: string[]): number {
  let gamma = '';
  for (let index = 0; index < data[0].length; index++) {
    const numberOfOnes = data
      .map(item => [...item][index])
      .map(item => Number.parseInt(item, 2))
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
      .map(item => [...item][index])
      .map(item => Number.parseInt(item, 2))
      .reduce((first, second) => first + second);
    const numberOfZeroes = data.length - numberOfOnes;
    numberOfOnes < numberOfZeroes ? (epsilon += 1) : (epsilon += 0);
  }
  return Number.parseInt(epsilon, 2);
}

function run() {
  const gammaRate = getGammaRate(data);
  const epsilonRate = getEpsilonRate(data);
  console.log(`gamma rate: ${gammaRate}`);
  console.log(`epsilon rate: ${epsilonRate}`);
  console.log(`power level: ${gammaRate * epsilonRate}`);
}

run();
