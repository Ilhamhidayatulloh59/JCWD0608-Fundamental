function addsArr(arr1: number[], arr2: number[]) {
  const res: number[] = [];
  for (let i = 0; i < arr1.length; i++) {
    res.push(arr1[i] + arr2[i]);
  }
  return res;
}

console.log(addsArr([1, 2, 3], [3, 2, 1]));
console.log(addsArr([1, 2, 3], [2, 3, 4]));
