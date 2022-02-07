import { assertEquals } from 'https://deno.land/std@0.125.0/testing/asserts.ts';
import puzzleOne from '../puzzleOne.ts';
import sampleData from './mocks/sampleData.ts';

Deno.test('Should produce correct answer to sample problem', () => {
  assertEquals(puzzleOne(sampleData), 7);
});
