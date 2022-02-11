import Board from '../../types/Board.ts';

function formatBoard(board: Board): string {
  let boardStr = '';
  board.forEach((row) => {
    let line = '';
    row.forEach((number) => {
      line += `${number === 0 ? '.' : number} `;
    });
    boardStr += `${line.trim()}\n`;
  });
  return boardStr;
}

export default formatBoard;
