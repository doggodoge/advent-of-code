// deno-lint-ignore-file
import getData from './utils/getData.ts';

const data = getData('data/data.txt');

enum EnvironmentItem {
  Empty,
  Tree,
}

function parseGroundLine(line: string): EnvironmentItem[] {
  return [...line].map(char =>
    char === '#' ? EnvironmentItem.Tree : EnvironmentItem.Empty
  );
}

console.log('This is a test.');
