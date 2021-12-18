function range(start: number, end: number): number[] {
  let rangeList: number[] = [];
  if (start > end) {
    for (let i = start; i >= end; i--) {
      rangeList = [...rangeList, i];
    }
    return rangeList;
  } else {
    for (let i = start; i <= end; i++) {
      rangeList = [...rangeList, i];
    }
  }
  return rangeList;
}

export default range;
