function myFunc(arr: number[], newItem: number) {
  if (arr.includes(newItem)) {
    return arr;
  } else {
    arr.push(newItem);
    return arr;
  }
}

console.log(myFunc([1, 2, 3, 4], 4));
console.log(myFunc([1, 2, 3, 4], 7)); // -1
