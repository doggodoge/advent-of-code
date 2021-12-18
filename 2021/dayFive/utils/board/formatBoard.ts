import Board from '../../types/Board.ts';

function formatBoard(board: Board): String {
  let boardStr = '';
  board.forEach(row => {
    let line = '';
    row.forEach(number => {
      line += `${number} `;
    });
    boardStr += `${line.trim()}\n`;
  });
  return boardStr;
}

export default formatBoard;
