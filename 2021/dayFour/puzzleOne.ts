import getData from './utils/getData.ts';
import parseBoards from './utils/parseBoards.ts';
import Board from './types/Board.ts';
import parseWinningNumbers from './utils/parseWinningNumbers.ts';
import fillScore from './utils/fillScore.ts';
import checkScore from './utils/checkScore.ts';
import getFinalScore from './utils/getFinalScore.ts';

const data = getData('data/data.txt');

const winningNumbers: number[] = parseWinningNumbers(data);
const boards: Board[] = parseBoards(data);

function playBingo() {
  let workingBoards: Board[] = boards;
  winningNumbers.forEach(winningNumber => {
    workingBoards = fillScore(workingBoards, winningNumber);
    workingBoards.forEach(board => {
      if (checkScore(board)) {
        console.log(
          `a board won! score: ${getFinalScore(board, winningNumber)}`
        );
        Deno.exit(0);
      }
    });
  });
}

playBingo();
