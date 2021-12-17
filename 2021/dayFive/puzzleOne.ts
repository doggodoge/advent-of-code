import getData from './utils/getData.ts';
import parseLine from './utils/parseLine.ts';
import isHorizontalOrVerticalLine from './utils/isHorizontalOrVerticalLine.ts';
import getMaxNumber from './utils/getMaxNumber.ts';
import Axis from './enums/Axis.ts';
import createBoard from './utils/createBoard.ts';
import printBoard from './utils/printBoard.ts';
import fillLine from './utils/fillLine.ts';

const data = getData('data/sample.txt');
const lines = data.map(lineStr => parseLine(lineStr));

const horizontalAndVerticalLines = lines.filter(isHorizontalOrVerticalLine);

// We want to draw lines, and determine which lines overlap.
function solvePuzzle() {
  const maxX = getMaxNumber(horizontalAndVerticalLines, Axis.X);
  const maxY = getMaxNumber(horizontalAndVerticalLines, Axis.Y);
  let board = createBoard(maxX, maxY);
  horizontalAndVerticalLines.forEach(line => {
    board = fillLine(board, line);
  });
  printBoard(board);
  const total = board
    .reduce((first, second) => [...first, ...second])
    .filter(num => num > 1)
    .length;
  console.log(`total number of overlapping lines: ${total}`);
}

solvePuzzle();
