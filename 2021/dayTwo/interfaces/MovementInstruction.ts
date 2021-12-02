import Direction from '../enums/Direction.ts';

interface MovementInstruction {
  direction: Direction;
  amount: number;
}

export default MovementInstruction;
