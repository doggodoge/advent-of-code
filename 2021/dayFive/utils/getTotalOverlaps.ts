import Board from '../types/Board.ts';

function getTotalOverlaps(board: Board): number {
  return board
    .reduce((first, second) => [...first, ...second])
    .filter(num => num > 1).length;
}

export default getTotalOverlaps;
