import getData from './utils/getData.ts';
import puzzleOne from './puzzleOne.ts';
// import puzzleTwo from './puzzleTwo.ts';

const data = getData('./data/data.txt');

console.log(`Puzzle one: ${puzzleOne(data)}`);
// console.log(`Puzzle two: ${puzzleTwo(data)}`);
