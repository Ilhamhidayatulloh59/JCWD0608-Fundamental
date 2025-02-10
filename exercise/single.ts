function myFunc(arr: number[]) {
  const set = new Set(arr);
  let res = -1;
  set.forEach((item) => {
    if (arr.filter((value) => value == item).length == 1) {
      res = item;
    }
  });

  return res;
}

console.log(myFunc([2, 2, 1]));
console.log(myFunc([4, 1, 2, 1, 2]));
