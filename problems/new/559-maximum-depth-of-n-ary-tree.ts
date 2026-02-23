function maxDepth(root: any[]) {
  let groups = [];

  for (let i = 0; i < root.length; i++) {
    let temp = [];
    temp.push(root[i]);

    if (!root[i]) groups.push(temp);
  }

  return groups;
}

console.log(maxDepth([1, null, 3, 2, 4, null, 5, 6]));
