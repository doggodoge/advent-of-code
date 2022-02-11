import getData from './utils/getData.ts';
import { getThreeEntriesThatSumTo2020 } from './utils/getEntriesThatSumUpTo2020.ts';

const data = getData('data/data.txt');
const result = getThreeEntriesThatSumTo2020(data);

console.log(
  `The three offending numbers are ${result[0]}, ${result[1]}, and ${
    result[2]
  }`,
);
console.log(
  `Multiplying these numbers together gets us: ${
    result[0] * result[1] * result[2]
  }.`,
);
