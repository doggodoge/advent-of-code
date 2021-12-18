// --- Day 1: Sonar Sweep ---
// ---  Puzzle 2          ---
import getData from './utils/getData.ts';
import getNumberOfIncreasingPings from './utils/getNumberOfIncreasingPings.ts';

// TODO: complicated logic can be replaced with Deno window function
//  from it's stdlib
function puzzleTwo() {
  const submarinePings = getData()
    .map((ping, index, arr) => {
      return [ping, arr[index + 1], arr[index + 2]];
    })
    .map(pingWindow => pingWindow.reduce((a, b) => a + b))
    // Last two numbers here won't work, as there must always be a set of three.
    .slice(0, -2);
  const numberOfIncreasingPings = getNumberOfIncreasingPings(submarinePings);
  console.log(`Number of increasing pings: ${numberOfIncreasingPings}`);
}

puzzleTwo();
