import getData from './utils/getData.ts';
import { getTwoEntriesThatSumUpTo2020 } from './utils/getEntriesThatSumUpTo2020.ts';

const data = getData('data/data.txt');
const result = getTwoEntriesThatSumUpTo2020(data);

console.log(`The two offending numbers are ${result[0]}, and ${result[1]}.`);
console.log(
  `Multiplying these numbers together gets us: ${result[0] * result[1]}.`
);
