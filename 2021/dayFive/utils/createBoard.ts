import Board from '../types/Board.ts';

// TODO: Figure out an alternative to this hideous workaround. Array(x).fill()
//  doesn't work because for whatever reason it uses the same row reference for
//  all rows.
function createBoard(x: number, y: number): Board {
  const board: Board = Array(y);
  for (let i = 0; i <= x; i++) {
    const row = Array(x);
    for (let j = 0; j <= y; j++) {
      row[j] = 0;
    }
    board[i] = row;
  }
  return board;
}

export default createBoard;
