import divideString from "./index";

describe("index.divideString", () => {
  it.each([
    {
      string: "abcdefghi",
      k: 3,
      fill: "x",
      result: ["abc", "def", "ghi"],
    },
    {
      string: "abcdefghij",
      k: 3,
      fill: "x",
      result: ["abc", "def", "ghi", "jxx"],
    },
  ])(
    "should divide '$string' into $k groups and fill empty by $fill",
    ({ string, k, fill, result }) => {
      expect(divideString(string, k, fill)).toEqual(result);
    },
  );
});
