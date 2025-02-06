/*
    arr = [2, 1, 3, 4, 6, 5] -> [1, 2, 3, 4, 5, 6]
    output = [6, 1, 5, 2, 4, 3]

    arr = [30, 20, 10, 5, 15, 25]
    output = [30, 5, 25, 10, 20, 15]
*/

const arr = [2, 1, 3, 4, 6, 5];
const arr2 = [30, 20, 10, 5, 15, 25];

function myFunc(arr: number[]) {
  arr.sort((a, b) => a - b);
  const result: number[] = [];
  for (let i = 0; i < arr.length / 2; i++) {
    result.push(arr[arr.length - 1 - i]);
    result.push(arr[i]);
  }
  return result;
}

console.log(myFunc(arr));
console.log(myFunc(arr2));
