function permute(nums: number[]): number[][] {
  let result: number[] = [];

  let fact = function (length: number) {
    let res = 1;

    for (let i = length; i !== 0; i--) {
      res = i * res;
    }

    return res;
  };

  for (let i = 0; i < fact(nums.length); i++) {
    for (let j = 0; j < nums.length; j++) {
      let temp = nums[j + 1];
      nums[j + 1] = nums[j];
      nums[j] = temp;
    }
  }

  return [nums];
}

console.log(permute([1, 2, 3]));
