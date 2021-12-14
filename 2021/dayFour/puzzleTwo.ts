import getData from './utils/getData.ts';
import parseBoards from './utils/parseBoards.ts';
import parseWinningNumbers from './utils/parseWinningNumbers.ts';
import fillScore from './utils/fillScore.ts';
import checkScore from './utils/checkScore.ts';
import getFinalScore from './utils/getFinalScore.ts';

const data = getData('data/data.txt');

const winningNumbers = parseWinningNumbers(data);
let boards = parseBoards(data);

function getFinalWinningBoardScore(): number {
  for (const winningNumber of winningNumbers) {
    const nextBoards = fillScore(boards, winningNumber);
    const winners = nextBoards.filter(board => checkScore(board));
    const losers = nextBoards.filter(board => !checkScore(board));
    if (losers.length === 0) {
      return getFinalScore(winners[0], winningNumber);
    }
    boards = losers;
  }
  return 0;
}

const lastWinningBoardScore = getFinalWinningBoardScore();
console.log(`last winning board final score: ${lastWinningBoardScore}`);
