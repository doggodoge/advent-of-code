import Rule from '../interfaces/Rule.ts';

function parseRule(ruleText: string): Rule {
  const [range, char] = ruleText.split(' ');
  const [min, max] = range.split('-');
  return {
    min: Number(min),
    max: Number(max),
    char,
  };
}

export default parseRule;