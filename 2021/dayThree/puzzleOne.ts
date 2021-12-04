import getData from './utils/getData.ts';

const data = getData('data/sample.txt');

function getGammaRate(data: string[]): number {
  let gamma = '';
  for (let i = 0; i < data[0].length; i++) {
    const totalOnes = data
      .map(item => [...item][i])
      .map(item => Number(item))
      .reduce((a, b) => a + b);
    totalOnes > 500 ? (gamma += '1') : (gamma += '0');
  }
  return Number.parseInt(gamma, 2);
}

function getEpsilonRate(data: string[]): number {
  return Math.abs(~(getGammaRate(data) >>> 0));
}

const gammaRate = getGammaRate(data);
const epsilonRate = getEpsilonRate(data);
console.log(`gamma rate: ${gammaRate}`);
console.log(`epsilon rate: ${epsilonRate}`);
console.log(`power level: ${gammaRate * epsilonRate}`);
