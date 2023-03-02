import { process } from "../intcodeComputer/index.ts";

function puzzleOne(codes: number[]): number[] {
    return process(codes);
}

export default puzzleOne;
