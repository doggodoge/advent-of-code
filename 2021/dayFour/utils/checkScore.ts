import Score from '../interfaces/Score.ts';
import Board from '../types/Board.ts';

function checkRow(row: Score[]): boolean {
  return row.map(x => x.checked).reduce((a, b) => a && b);
}

function getBoardColumns(board: Board): Board {
  let boardColumns: Board = [];
  for (let index = 0; index < board.length; index++) {
    let row: Score[] = [];
    board.forEach((scoreList) => {
      row = [...row, scoreList[index]];
    });
    boardColumns = [...boardColumns, row];
  }
  return boardColumns;
}

function checkScore(board: Board): boolean {
  const isAnyRowAWinner = board.map(checkRow).reduce((a, b) => a || b);
  const boardColumns: Board = getBoardColumns(board);
  const isAnyColumnAWinner = boardColumns
    .map(checkRow)
    .reduce((a, b) => a || b);
  return isAnyRowAWinner || isAnyColumnAWinner;
}

export default checkScore;
