import Board from '../types/Board.ts';

// Why do I have to do this terrible stuff just to create
// a multidimensional array in JavaScript? Hideous.
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
