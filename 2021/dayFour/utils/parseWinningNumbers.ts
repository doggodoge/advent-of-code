function parseWinningNumbers(data: string): number[] {
  const scoresStr = data.split('\n')[0];
  return scoresStr.split(',').map(str => Number(str));
}

export default parseWinningNumbers;
