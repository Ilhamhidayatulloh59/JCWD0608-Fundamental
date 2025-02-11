function pascal(n: number) {
  const res = [];
  for (let i = 0; i < n; i++) { // 2
    const arr: number[] = [];
    for (let j = 0; j <= i; j++) { // 1
      if (j == 0 || j == i) {
        arr.push(1);
      } else {
        arr.push(res[i - 1][j - 1] + res[i - 1][j]);
      }
    }
    res.push(arr);
  }
  return res;
}

console.log(pascal(5));
