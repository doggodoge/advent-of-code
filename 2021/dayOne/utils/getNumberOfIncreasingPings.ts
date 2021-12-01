function getNumberOfIncreasingPings(pings: number[]): number {
  let numOfPingDistanceIncreases = 0;
  pings.forEach((ping, index) => {
    const prevPing = pings[index - 1];
    if (prevPing < ping) {
      numOfPingDistanceIncreases += 1;
    }
  });
  return numOfPingDistanceIncreases;
}

export default getNumberOfIncreasingPings;
