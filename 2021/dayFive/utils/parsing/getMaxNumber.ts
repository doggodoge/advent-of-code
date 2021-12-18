import Line from '../../interfaces/Line.ts';
import Axis from '../../enums/Axis.ts';

function joinArrays<Type>(a: Type[], b: Type[]): Type[] {
  return [...a, ...b];
}

function getMaxNumberXAxis(lines: Line[]): number {
  return lines
    .map(line => [line.start.x, line.end.x])
    .reduce(joinArrays)
    .reduce((a, b) => Math.max(a, b));
}

function getMaxNumberYAxis(lines: Line[]): number {
  return lines
    .map(line => [line.start.y, line.end.y])
    .reduce(joinArrays)
    .reduce((a, b) => Math.max(a, b));
}

function getMaxNumber(lines: Line[], axis: Axis): number {
  return axis === Axis.X ? getMaxNumberXAxis(lines) : getMaxNumberYAxis(lines);
}

export default getMaxNumber;
