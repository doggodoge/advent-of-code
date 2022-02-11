// --- Day 2: Dive! ---
// ---  Puzzle 1    ---
import MovementInstruction from './interfaces/MovementInstruction.ts';
import Direction from './enums/Direction.ts';
import parseMovement from './utils/parseMovement.ts';

interface Position {
  depth: number;
  horizontal: number;
}

function getFinalPosition(instructions: MovementInstruction[]): Position {
  const currentPosition: Position = { depth: 0, horizontal: 0 };
  instructions.forEach((instruction) => {
    switch (instruction.direction) {
      case Direction.Up:
        currentPosition.depth -= instruction.amount;
        break;
      case Direction.Down:
        currentPosition.depth += instruction.amount;
        break;
      case Direction.Forward:
        currentPosition.horizontal += instruction.amount;
    }
  });
  return currentPosition;
}

function puzzleOne(data: string[]): number {
  const movementInstructions = data.map((x) => parseMovement(x));
  const finalPosition = getFinalPosition(movementInstructions);
  return finalPosition.depth * finalPosition.horizontal;
}

export default puzzleOne;
