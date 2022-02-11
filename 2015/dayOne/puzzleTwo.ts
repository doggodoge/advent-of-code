import getData from './utils/getData.ts';
import Direction from './enums/Direction.ts';

const directions = getData('data/data.txt');

function getBasementIndex(
  directions: Direction[],
): number {
  let currentLevel = 0;
  for (let index = 0; index < directions.length; index++) {
    switch (directions[index]) {
      case Direction.Up:
        currentLevel += 1;
        break;
      case Direction.Down:
        currentLevel -= 1;
    }
    if (currentLevel < 0) {
      return index + 1;
    }
  }
  console.error('failed to enter basement');
  Deno.exit(1);
}

const basementIndex = getBasementIndex(directions);

console.log(
  `index causing santa to enter basement: ${basementIndex}`,
);
