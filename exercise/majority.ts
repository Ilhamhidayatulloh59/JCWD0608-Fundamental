function myFunc(arr: number[]) {
  const set = new Set(arr);
  let res = null;
  set.forEach((item) => {
    if (arr.filter((value) => value == item).length > arr.length / 2) {
      res = item;
    }
  });
  return res;
}

console.log(myFunc([3, 2, 3]));
console.log(myFunc([2, 2, 1, 1, 1, 2, 2]));
