import getData from './utils/getData.ts';
import Direction from './enums/Direction.ts';

const directions = getData('data/data.txt');

function navigateToFloor(directions: Direction[]) {
  let currentFloor = 0;
  directions.forEach((direction) => {
    switch (direction) {
      case Direction.Up:
        currentFloor += 1;
        break;
      case Direction.Down:
        currentFloor -= 1;
    }
  });
  return currentFloor;
}

console.log(`santa's final floor: ${navigateToFloor(directions)}`);
