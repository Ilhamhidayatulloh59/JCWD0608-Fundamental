function secondSmall(arr: number[]) {
  arr.sort((a, b) => a - b);
  return arr[1];
}

console.log(secondSmall([5, 3, 1, 7, 2, 6]));
