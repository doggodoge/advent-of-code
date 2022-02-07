// --- Day 1: Sonar Sweep ---
// ---  Puzzle 2          ---
import { slidingWindows } from 'https://deno.land/std@0.125.0/collections/mod.ts';
import getNumberOfIncreasingPings from './utils/getNumberOfIncreasingPings.ts';

function puzzleTwo(data: number[]) {
  const pings = slidingWindows(data, 3).map(pingWindow =>
    pingWindow.reduce((a, b) => a + b)
  );
  return getNumberOfIncreasingPings(pings);
}

export default puzzleTwo;
