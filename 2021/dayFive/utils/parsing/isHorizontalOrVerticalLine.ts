import Line from '../../interfaces/Line.ts';

function isHorizontalOrVerticalLine(line: Line): boolean {
  return line.start.x === line.end.x || line.start.y === line.end.y;
}

export default isHorizontalOrVerticalLine;
