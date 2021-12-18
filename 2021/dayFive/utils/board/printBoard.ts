import Board from '../../types/Board.ts';

function printBoard(board: Board) {
  board.forEach(row => {
    let line = '';
    row.forEach(number => {
      line += `${number} `;
    })
    console.log(line.trim());
  })
}

export default printBoard;
