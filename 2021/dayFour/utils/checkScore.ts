import Score from '../interfaces/Score.ts';
import Board from '../types/Board.ts';

function checkRow(row: Score[]): boolean {
  return row.map(x => x.checked).reduce((a, b) => a && b);
}

function checkScore(board: Board): boolean {
  let isAnyRowAWinner = board.map(checkRow).reduce((a, b) => a || b);
  let boardColumns: Board = [];
  for (let index = 0; index < board.length; index++) {
    let row: Score[] = [];
    board.forEach((scoreList, scoreIndex) => {
      row = [...row, scoreList[scoreIndex]];
    });
    boardColumns = [...boardColumns, row];
  }
  let isAnyColumnAWinner = boardColumns.map(checkRow).reduce((a, b) => a || b);
  return isAnyRowAWinner || isAnyColumnAWinner;
}

export default checkScore;
