import getData from './utils/getData.ts';
import getFuelRequirement from './utils/getFuelRequirement.ts';
import sum from './utils/sum.ts';

const data = getData('data/data.txt');

const totalRequiredFuel = data
  .map((mass) => getFuelRequirement(mass))
  .reduce(sum);

console.log(`total required fuel: ${totalRequiredFuel}`);
