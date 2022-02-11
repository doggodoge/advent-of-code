function getData(path: string): number[] {
  const decoder = new TextDecoder('utf-8');
  const data: Uint8Array = Deno.readFileSync(path);
  return decoder
    .decode(data)
    .split('\n')
    .map((numberString) => Number(numberString));
}

export default getData;
