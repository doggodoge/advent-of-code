function getData(path: string): number[] {
  let decoder = new TextDecoder('utf-8');
  return decoder
    .decode(Deno.readFileSync(path))
    .split('\n')
    .map(x => Number(x));
}

export default getData;
