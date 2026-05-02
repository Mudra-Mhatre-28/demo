import sum from "./sum.js";

describe("sum", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  }),
  test("adds 7 + 9 to equal 16", () => {
    expect(sum(7, 9)).toBe(16);
  })
});