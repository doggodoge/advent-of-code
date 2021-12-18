import Board from '../../types/Board.ts';
import Line from '../../interfaces/Line.ts';
import range from '../collections/range.ts';

function fillLine(board: Board, line: Line): Board {
  const newBoard: Board = [...board];
  for (const x of range(line.start.x, line.end.x)) {
    for (const y of range(line.start.y, line.end.y)) {
      newBoard[x][y] += 1;
    }
  }
  return newBoard;
}

export default fillLine;
