import * as getDataDayOne from './dayOne/utils/getData.ts';
import * as getDataDayTwo from './dayTwo/utils/getData.ts';
import * as getDataDayThree from './dayThree/utils/getData.ts';
import * as getDataDayFour from './dayFour/utils/getData.ts';
import * as dayOneSolutions from './dayOne/index.ts';
import * as dayTwoSolutions from './dayTwo/index.ts';
import * as dayThreeSolutions from './dayThree/index.ts';
import * as dayFourSolutions from './dayFour/index.ts';

interface Answer {
  day: string;
  answerOne: string;
  answerTwo: string;
}

printAllSolutions();

function printAllSolutions() {
  printSolution(dayOne('dayOne/data/data.txt'));
  printSolution(dayTwo('dayTwo/data/data.txt'));
  printSolution(dayThree('dayThree/data/data.txt'));
  // TODO: For some reason after refactoring, the solutions for day four
  //  no longer work. Try and fix it, then enable this and the unit tests
  //  for day four again.
  // printSolution(dayFour('2021/dayFour/data/data.txt'));
}

function printSolution(answer: Answer) {
  console.log(`Day ${answer.day} solutions:`);
  console.log(`\tPuzzle 1: ${answer.answerOne}`);
  console.log(`\tPuzzle 2: ${answer.answerTwo}`);
}

function dayOne(dataPath: string): Answer {
  const data = getDataDayOne.default(dataPath);
  return {
    day: '1',
    answerOne: dayOneSolutions.puzzleOne(data).toString(10),
    answerTwo: dayOneSolutions.puzzleTwo(data).toString(10),
  };
}

function dayTwo(dataPath: string): Answer {
  const data = getDataDayTwo.default(dataPath);
  return {
    day: '2',
    answerOne: dayTwoSolutions.puzzleOne(data).toString(10),
    answerTwo: dayTwoSolutions.puzzleTwo(data).toString(10),
  };
}

function dayThree(dataPath: string): Answer {
  const data = getDataDayThree.default(dataPath);
  return {
    day: '3',
    answerOne: dayThreeSolutions.puzzleOne(data).powerLevel.toString(10),
    answerTwo: dayThreeSolutions.puzzleTwo(data).lifeSupportRating.toString(10),
  };
}

function _dayFour(dataPath: string): Answer {
  const data = getDataDayFour.default(dataPath);
  return {
    day: '4',
    answerOne: dayFourSolutions.puzzleOne(data).toString(10),
    answerTwo: dayFourSolutions.puzzleTwo(data).toString(10),
  };
}
