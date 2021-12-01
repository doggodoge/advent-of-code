import getData from './utils/getData.ts';
import parseRule from './utils/parseRule.ts';

const data = getData('data/data.txt');

const isValid = (str: string): boolean => {
  const [ruleText, value] = str.split(':').map(x => x.trim());
  const rule = parseRule(ruleText);
  const numberOfRuleMatchingChars = [...value].filter(
    char => char === rule.char
  ).length;
  return (
    numberOfRuleMatchingChars <= rule.max &&
    numberOfRuleMatchingChars >= rule.min
  );
};

const result = data.filter(item => isValid(item)).length

console.log(`The number of valid passwords is: ${result}`);
