function kthCharacter(k: number): string {
  let ans: string = "a";

  function nextLetter(letter: string) {
    return letter === "z" ? "a" : String.fromCharCode(letter.charCodeAt(0) + 1);
  }

  while (ans.length <= k) {
    let next: string = "";
    for (let i = 0; i < ans.length; i++) {
      next += nextLetter(ans[i]);
    }
    ans += next;
  }

  return ans[k - 1];
}

// https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/submissions/1685986686

console.log(kthCharacter(5));
