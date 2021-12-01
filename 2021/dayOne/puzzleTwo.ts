import getData from './utils/getData.ts';
import getNumberOfIncreasingPings from './utils/getNumberOfIncreasingPings.ts';

const submarinePings = getData()
  .map((ping, index, arr) => {
    return [ping, arr[index + 1], arr[index + 2]];
  })
  .map(pingGroup => pingGroup.reduce((a, b) => a + b))
  // Last two numbers here won't work, as there must always be a set of three.
  .slice(0, -2);

const numberOfIncreasingPings = getNumberOfIncreasingPings(submarinePings);

console.log(`Number of increasing pings: ${numberOfIncreasingPings}`);
