import Coordinate from '../../interfaces/Coordinate.ts';
import Line from '../../interfaces/Line.ts';

function parseCoordinate(coordinateStr: string): Coordinate {
  const [x, y] = coordinateStr.split(',');
  return { x: Number(x), y: Number(y) };
}

function parseLine(lineStr: string): Line {
  const [startStr, endStr] = lineStr.split('->').map((line) => line.trim());
  return { start: parseCoordinate(startStr), end: parseCoordinate(endStr) };
}

export default parseLine;
