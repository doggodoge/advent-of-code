import getData from './utils/getData.ts';
import parseRule from './utils/parseRule.ts';

const data = getData('data/data.txt');

function isValid(str: string): boolean {
  const [ruleText, password] = str.split(':').map((x) => x.trim());
  const rule = parseRule(ruleText);
  const chars = [...password];
  const left = chars[rule.min - 1];
  const right = chars[rule.max - 1];
  return (
    (left === rule.char && right !== rule.char) ||
    (left !== rule.char && right === rule.char)
  );
}

const result = data.filter((item) => isValid(item)).length;
console.log(`The number of valid passwords is: ${result}`);
