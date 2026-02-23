export default function divideString(s: string, k: number, fill: string): string[] {
  let result: string[] = [];
  let loop = 1;

  for (let i = 0; loop <= Math.ceil(s.length / k); i += k) {
    let temp = new Array(k);
    let sl = s.slice(i, i + k).split("");
    for (let i = 0; i < temp.length; i++) {
      if (sl[i]) {
        temp[i] = sl[i];
      } else {
        temp[i] = fill;
      }
    }
    result.push(temp.join(""));
    loop += 1;
  }

  return result;
}

// Time Complexity O(n)
// Space Complexity O(n)
// https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/submissions/1928890195
