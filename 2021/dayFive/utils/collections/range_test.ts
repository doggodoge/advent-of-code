import range from './range.ts';
import { assertEquals } from 'https://deno.land/std@0.118.0/testing/asserts.ts';

Deno.test('range from 1 to 5 ascending', () => {
  const actual = range(1, 5);
  const expected = [1, 2, 3, 4, 5];
  assertEquals(actual, expected);
});

Deno.test('range from 5 to 1 descending', () => {
  const actual = range(5, 1);
  const expected = [5, 4, 3, 2, 1];
  assertEquals(actual, expected);
});
