import { Instruction } from "../enums/index.ts";

interface InfixExpression {
  instruction: Instruction;
  data: {
    x: number;
    y: number;
    outputIndex: number;
  }
}

export default InfixExpression;
