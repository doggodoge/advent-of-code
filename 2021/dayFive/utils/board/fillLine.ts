import Board from '../../types/Board.ts';
import Line from '../../interfaces/Line.ts';

function fillLine(board: Board, line: Line): Board {
  const newBoard: Board = [...board];
  for (let x = line.start.x; x <= line.end.x; x++) {
    for (let y = line.start.y; y <= line.end.y; y++) {
      newBoard[x][y] += 1;
    }
  }
  return newBoard;
}

export default fillLine;
