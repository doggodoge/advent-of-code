import _ from 'https://deno.land/x/lodash@4.17.19/lodash.js';
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

const parsedData = _.uniq(data.map(parseGroundLine));

console.log();
