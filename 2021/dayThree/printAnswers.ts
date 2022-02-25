import getData from './utils/getData.ts';
import puzzleOne from './puzzleOne.ts';
import puzzleTwo from './puzzleTwo.ts';

const data = getData('data/data.txt');
const puzzleOneResult = puzzleOne(data);
const puzzleTwoResult = puzzleTwo(data);

console.log(`Power level [${puzzleOneResult.powerLevel}]:`);
console.log(`\tGamma rate [${puzzleOneResult.gammaRate}]`);
console.log(`\tEpsilon rate [${puzzleOneResult.epsilonRate}]\n`);

console.log(`Life support rating [${puzzleTwoResult.lifeSupportRating}]:`);
console.log(
  `\tOxygen generator rating [${puzzleTwoResult.oxygenGeneratorRating}]`,
);
console.log(`\tCO2 generator rating [${puzzleTwoResult.CO2GeneratorRating}]`);
