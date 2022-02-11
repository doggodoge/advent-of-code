// --- Day 4: Giant Squid ---
// ---  Puzzle 2          ---
import parseBoards from './utils/parseBoards.ts';
import parseWinningNumbers from './utils/parseWinningNumbers.ts';
import fillScore from './utils/fillScore.ts';
import checkScore from './utils/checkScore.ts';
import getFinalScore from './utils/getFinalScore.ts';
import Board from './types/Board.ts';

// TODO: function is a bit long, consider refactoring
function getFinalWinningBoardScore(
  data: string,
): number {
  let boards: Board[] = parseBoards(data);
  const winningNumbers = parseWinningNumbers(data);
  for (const winningNumber of winningNumbers) {
    const nextBoards = fillScore(boards, winningNumber);
    const winners = nextBoards.filter((board) => checkScore(board));
    const losers = nextBoards.filter((board) => !checkScore(board));
    if (losers.length === 0) {
      return getFinalScore(winners[0], winningNumber);
    }
    boards = losers;
  }
  return 0;
}

function puzzleTwo(data: string): number {
  return getFinalWinningBoardScore(data);
}

export default puzzleTwo;
