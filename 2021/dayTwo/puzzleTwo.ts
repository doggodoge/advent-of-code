// --- Day 2: Dive! ---
// ---  Puzzle 2    ---
import MovementInstruction from './interfaces/MovementInstruction.ts';
import Direction from './enums/Direction.ts';
import parseMovement from './utils/parseMovement.ts';

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

function puzzleTwo(data: string[]): number {
  const movementInstructions = data.map(x => parseMovement(x));
  const finalPosition = getFinalPosition(movementInstructions);
  return finalPosition.depth * finalPosition.horizontal;
}

export default puzzleTwo;
