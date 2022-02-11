// TODO: Find a better solution to this. There's definitely something
//  to do with recursion that would solve this problem in a better way.
const getTwoEntriesThatSumUpTo2020 = (data: number[]): number[] =>
  data.filter((a) => data.find((b) => b + a === 2020));

const getThreeEntriesThatSumTo2020 = (data: number[]): number[] =>
  data.filter((a) => data.find((b) => data.find((c) => c + b + a === 2020)));

export { getThreeEntriesThatSumTo2020, getTwoEntriesThatSumUpTo2020 };
