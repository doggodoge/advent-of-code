import { assertEquals } from 'https://deno.land/std@0.125.0/testing/asserts.ts';
import sample from './mocks/sample.ts';
import puzzleTwo from '../puzzleTwo.ts';

Deno.test('Should match answer on AoC based on sample input', () => {
  assertEquals(puzzleTwo(sample).lifeSupportRating, 230);
});
