// --- Day 1: Sonar Sweep ---
// ---  Puzzle 1          ---
import getData from './utils/getData.ts';
import getNumberOfIncreasingPings from './utils/getNumberOfIncreasingPings.ts';

function puzzleOne() {
    const submarinePings = getData();
    console.log(`Number of increased pings: ${getNumberOfIncreasingPings(submarinePings)}`);
}

puzzleOne();
