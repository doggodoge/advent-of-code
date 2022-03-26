import { Instruction } from "./enums/index.ts";
import { parse } from "./parser/index.ts";

function process(instructions: number[]): number[] {
  const newInstructions = [...instructions];
  const expressions = parse(instructions);
  console.log(expressions);

  expressions.forEach((expression) => {
    if (expression.instruction === Instruction.Add) {
      const { x, y, outputIndex } = expression.data;
      newInstructions[outputIndex] = x + y;
    }
    if (expression.instruction === Instruction.Multiply) {
      const { x, y, outputIndex } = expression.data;
      newInstructions[outputIndex] = x * y;
    }
  });

  return newInstructions;
}

export { process };
