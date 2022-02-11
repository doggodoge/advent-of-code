import Board from '../types/Board.ts';

function getFinalScore(board: Board, finalWinningNumber: number): number {
  const sumOfUncheckedScores = board
    .reduce((a, b) => [...a, ...b])
    .filter((score) => score.checked === false)
    .map((score) => score.score)
    .reduce((a, b) => a + b);
  return sumOfUncheckedScores * finalWinningNumber;
}

export default getFinalScore;
