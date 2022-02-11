import getData from './utils/data/getData.ts';
import parseLine from './utils/parsing/parseLine.ts';
import isHorizontalOrVerticalLine from './utils/parsing/isHorizontalOrVerticalLine.ts';
import getMaxNumber from './utils/parsing/getMaxNumber.ts';
import Axis from './enums/Axis.ts';
import createBoard from './utils/board/createBoard.ts';
import fillLine from './utils/board/fillLine.ts';
import getTotalOverlaps from './utils/board/getTotalOverlaps.ts';

const data = getData('data/data.txt');
const lines = data.map((lineStr) => parseLine(lineStr));

const horizontalAndVerticalLines = lines.filter(isHorizontalOrVerticalLine);

function puzzleOne() {
  const maxX = getMaxNumber(horizontalAndVerticalLines, Axis.X);
  const maxY = getMaxNumber(horizontalAndVerticalLines, Axis.Y);
  let board = createBoard(maxX, maxY);
  horizontalAndVerticalLines.forEach((line) => {
    board = fillLine(board, line);
  });
  const totalOverlaps = getTotalOverlaps(board);
  console.log(`total number of overlapping lines: ${totalOverlaps}`);
}

puzzleOne();
