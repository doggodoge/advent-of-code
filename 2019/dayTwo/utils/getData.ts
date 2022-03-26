function getData(path: string): number[] {
  return Deno.readTextFileSync(path)
    .split(",")
    .map((numStr) => Number(numStr));
}

export default getData;
