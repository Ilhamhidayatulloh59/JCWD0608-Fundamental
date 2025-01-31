function findDup(arr: number[]) {
  arr.sort((a, b) => a - b);
  const res: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] == arr[i - 1] || arr[i] == arr[i + 1]) && !res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(findDup([1, 2, 2, 2, 3, 3, 4, 5, 5]));
