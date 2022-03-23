import { assertEquals } from "https://deno.land/std@0.130.0/testing/asserts.ts";
import sum from "./utils/sum.ts";

function fuelRequiredByComponent(componentMass: number): number {
  const fuelFunction = (mass: number) => (Math.floor(mass / 3) - 2);
  let fuelList = [fuelFunction(componentMass)];
  while (true) {
    const nextValue = fuelFunction(fuelList.at(-1) ?? 0);
    if (nextValue < 1) {
      break;
    }
    fuelList = [...fuelList, fuelFunction(fuelList.at(-1) ?? 0)];
  }
  return fuelList.reduce(sum);
}

Deno.test("fuelRequiredByComponent should return valid fuel values", () => {
  assertEquals(fuelRequiredByComponent(100756), 50346);
});

function puzzleTwo(data: number[]): number {
  return data
    .map(fuelRequiredByComponent)
    .reduce(sum);
}

export default puzzleTwo;
