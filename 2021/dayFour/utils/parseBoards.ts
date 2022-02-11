import Board from '../types/Board.ts';
import Score from '../interfaces/Score.ts';

function getBoardStrings(data: string): string[] {
  return data.split('\n'.repeat(2)).slice(1);
}

function parseBoard(boardStr: string): Board {
  return boardStr.split('\n').map(parseRow);
}

function parseRow(rowStr: string): Score[] {
  return rowStr
    .trim()
    .split(/ +/)
    .map((numStr) => {
      return { score: Number(numStr.trim()), checked: false };
    });
}

function parseBoards(data: string): Board[] {
  return getBoardStrings(data).map(parseBoard);
}

export default parseBoards;
