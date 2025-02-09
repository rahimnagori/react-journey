import { sum } from "../sum";

test("sum function should return correct sum of two number input", () => {
  const result = sum(2, 3);

  expect(result).toBe(5);
});
