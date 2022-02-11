// --- Day 4: Giant Squid ---
// ---  Puzzle 1          ---
import parseBoards from './utils/parseBoards.ts';
import Board from './types/Board.ts';
import parseWinningNumbers from './utils/parseWinningNumbers.ts';
import fillScore from './utils/fillScore.ts';
import checkScore from './utils/checkScore.ts';
import getFinalScore from './utils/getFinalScore.ts';

// TODO: too complex, consider refactoring
function puzzleOne(data: string): number {
  const winningNumbers: number[] = parseWinningNumbers(data);
  let workingBoards: Board[] = parseBoards(data);
  winningNumbers.forEach((winningNumber) => {
    workingBoards = fillScore(workingBoards, winningNumber);
    workingBoards.forEach((board) => {
      if (checkScore(board)) {
        return getFinalScore(board, winningNumber);
      }
    });
  });
  return 0;
}

export default puzzleOne;
