import countLargestGroup from "./index";

describe("index.countLargestGroup", () => {
  it.each([
    {
      n: 13,
      output: 4,
    },
    {
      n: 2,
      output: 2,
    },
  ])("input $n and output is $output", ({ n, output }) => {
    expect(countLargestGroup(n)).toBe(output);
  });
});
