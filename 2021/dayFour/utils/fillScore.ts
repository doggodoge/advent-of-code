import Board from '../types/Board.ts';

function fillScore(boards: Board[], winningNumber: number) {
  return boards.map((board) =>
    board.map((row) =>
      row.map((score) =>
        winningNumber === score.score
          ? { ...score, checked: true }
          : { ...score }
      )
    )
  );
}

export default fillScore;
