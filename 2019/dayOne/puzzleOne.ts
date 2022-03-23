import getFuelRequirement from './utils/getFuelRequirement.ts';
import sum from './utils/sum.ts';

function puzzleOne(data: number[]): number {
  return data
    .map((mass) => getFuelRequirement(mass))
    .reduce(sum);
}

export default puzzleOne;
