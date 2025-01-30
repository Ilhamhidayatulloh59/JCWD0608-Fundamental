function minMax(arr: number[]) {
  arr.sort((a, b) => a - b); // sort ascending
  const lowest = arr[0];
  const highest = arr[arr.length - 1];
  const average = arr.reduce((a, b) => a + b) / arr.length;
  return { lowest, highest, average };
}

function minMax2(arr: number[]) {
  const lowest = Math.min(...arr);
  const highest = Math.max(...arr);
  const average = arr.reduce((a, b) => a + b) / arr.length;
  return { lowest, highest, average };
}

const arr = [12, 5, 23, 18, 4, 45, 32];

console.log(minMax(arr));
console.log(minMax2(arr));


// Math.ceil
// Math.floor
// Math.round

// Math.pow

// Math.random

Math.min(1, 2, 3, 4, 5, 6)