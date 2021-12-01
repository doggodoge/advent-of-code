import getData from './utils/getData.ts';
import getNumberOfIncreasingPings from './utils/getNumberOfIncreasingPings.ts';

const submarinePings = getData();
const numOfPingDistanceIncreases = getNumberOfIncreasingPings(submarinePings);

console.log(`Number of increased pings: ${numOfPingDistanceIncreases}`);
