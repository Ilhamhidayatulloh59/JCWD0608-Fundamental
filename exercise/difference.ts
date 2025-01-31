function diff(arr1: number[], arr2: number[]) {
  const res: number[] = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      res.push(arr1[i]);
    }
    if (!arr1.includes(arr2[i])) {
      res.push(arr2[i]);
    }
  }
  return res;
}

console.log(diff([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
