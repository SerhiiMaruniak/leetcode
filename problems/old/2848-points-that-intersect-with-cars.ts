function numberOfPoints(nums: number[][]): number {
  let uniquePoints = new Set();

  for (let i = 0; i < nums.length; i++) {
    let start = nums[i][0];
    let end = nums[i][1];
    for (let j = start; j <= end; j++) {
      uniquePoints.add(j);
    }
  }

  return uniquePoints.size;
}

// https://leetcode.com/problems/points-that-intersect-with-cars/submissions/1687632662

console.log(
  numberOfPoints([
    [3, 6],
    [1, 5],
    [4, 7],
  ])
);
