import { InfixExpression } from "../interfaces/index.ts";
import { Instruction } from "../enums/index.ts";

function parse(instructions: number[]): InfixExpression[] {
  let expressions: InfixExpression[] = [];
  instructions.forEach((instruction, index) => {
    switch (instruction) {
      case Instruction.Add:
        expressions = [
          ...expressions,
          {
            instruction,
            data: {
              // TODO: eww, clean this up at some point.
              x: instructions[instructions[index + 1] ?? 0] ?? 0,
              y: instructions[instructions[index + 2] ?? 0] ?? 0,
              outputIndex: instructions[index + 3] ?? 0,
            },
          },
        ];
        break;
      case Instruction.Multiply:
        expressions = [
          ...expressions,
          {
            instruction,
            data: {
              x: instructions[instructions[index + 1] ?? 0] ?? 0,
              y: instructions[instructions[index + 2] ?? 0] ?? 0,
              outputIndex: instructions[index + 3] ?? 0,
            },
          },
        ];
        break;
      default:
        break;
    }
  });
  return expressions;
}

export default parse;
