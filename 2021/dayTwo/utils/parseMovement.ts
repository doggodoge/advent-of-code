import MovementInstruction from '../interfaces/MovementInstruction.ts';
import Direction from '../enums/Direction.ts';

function parseDirection(directionStr: string): Direction {
  if (directionStr === 'up') {
    return Direction.Up;
  } else if (directionStr === 'down') {
    return Direction.Down;
  }
  return Direction.Forward;
}

function parseMovement(movementStr: string): MovementInstruction {
  const [directionStr, amountStr] = movementStr.split(' ');
  return {
    direction: parseDirection(directionStr),
    amount: Number(amountStr),
  };
}

export default parseMovement;
