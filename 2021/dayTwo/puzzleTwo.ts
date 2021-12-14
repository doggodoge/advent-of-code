// --- Day 2: Dive! ---
// ---  Puzzle 2    ---
import getData from './utils/getData.ts';
import MovementInstruction from './interfaces/MovementInstruction.ts';
import Direction from './enums/Direction.ts';
import parseMovement from './utils/parseMovement.ts';

const data = getData('data/data.txt');

interface Position {
  depth: number;
  horizontal: number;
  aim: number;
}

function getFinalPosition(instructions: MovementInstruction[]): Position {
  const currentPosition: Position = { depth: 0, horizontal: 0, aim: 0 };
  instructions.forEach(instruction => {
    switch (instruction.direction) {
      case Direction.Up:
        currentPosition.aim -= instruction.amount;
        break;
      case Direction.Down:
        currentPosition.aim += instruction.amount;
        break;
      case Direction.Forward:
        currentPosition.horizontal += instruction.amount;
        currentPosition.depth += currentPosition.aim * instruction.amount;
    }
  });
  return currentPosition;
}

const movementInstructions = data.map(x => parseMovement(x));
const finalPosition = getFinalPosition(movementInstructions);

console.log(`answer: ${finalPosition.depth * finalPosition.horizontal}`);
