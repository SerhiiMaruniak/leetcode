// export default function countLargestGroup(n: number): number {
//   let obj: Record<number, number[]> = {};

//   for (let i = 1; i <= n; i++) {
//     let sum = i
//       .toString()
//       .split("")
//       .map((elt) => parseInt(elt))
//       .reduce((a, b) => a + b);

//     if (obj[sum]) {
//       obj[sum].push(1);
//     } else {
//       obj[sum] = [];
//       obj[sum].push(1);
//     }
//   }

//   const objValues = Object.values(obj);
//   const maxLength = Math.max(...objValues.map((o) => o.length));
//   const filteredObj = objValues.filter((o) => o.length === maxLength);

//   return filteredObj.length;
// }

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
