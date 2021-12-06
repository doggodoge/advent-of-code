import Direction from '../enums/Direction.ts';

function parseDirection(parenthesis: string): Direction {
  if (parenthesis === '(') {
    return Direction.Up;
  } else {
    return Direction.Down;
  }
}

function getData(path: string): Direction[] {
  const decoder = new TextDecoder('utf-8');
  const data = decoder.decode(Deno.readFileSync(path));
  return [...data].map(parenthesis => parseDirection(parenthesis));
}

export default getData;
