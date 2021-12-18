import getData from './utils/data/getData.ts';
import parseLine from './utils/parsing/parseLine.ts';
import isHorizontalOrVerticalLine from './utils/parsing/isHorizontalOrVerticalLine.ts';
import getMaxNumber from './utils/parsing/getMaxNumber.ts';
import Axis from './enums/Axis.ts';
import createBoard from './utils/board/createBoard.ts';
import printBoard from './utils/board/printBoard.ts';
import fillLine from './utils/board/fillLine.ts';
import getTotalOverlaps from './utils/board/getTotalOverlaps.ts';

const data = getData('data/sample.txt');
const lines = data.map(lineStr => parseLine(lineStr));

const horizontalAndVerticalLines = lines.filter(isHorizontalOrVerticalLine);

// We want to draw lines, and determine which lines overlap.
function solvePuzzleOne() {
  const maxX = getMaxNumber(horizontalAndVerticalLines, Axis.X);
  const maxY = getMaxNumber(horizontalAndVerticalLines, Axis.Y);
  let board = createBoard(maxX, maxY);
  horizontalAndVerticalLines.forEach(line => {
    board = fillLine(board, line);
  });
  printBoard(board);
  const totalOverlaps = getTotalOverlaps(board);
  console.log(`total number of overlapping lines: ${totalOverlaps}`);
}

solvePuzzleOne();
