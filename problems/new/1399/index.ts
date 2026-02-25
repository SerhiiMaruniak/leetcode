export default function countLargestGroup(n: number): number {
  const map: Record<number, number> = {};
  let maxSize = 0;

  for (let i = 1; i <= n; i++) {
    const sum = i
      .toString()
      .split("")
      .reduce((acc, digit) => acc + Number(digit), 0);

    map[sum] = (map[sum] || 0) + 1;
    maxSize = Math.max(maxSize, map[sum]);
  }

  return Object.values(map).filter((count) => count === maxSize).length;
}

// Time Complexity O(n log n)
// Space Complexity O(log n)
// https://leetcode.com/problems/count-largest-group/submissions/1931110110

console.log(countLargestGroup(13));
