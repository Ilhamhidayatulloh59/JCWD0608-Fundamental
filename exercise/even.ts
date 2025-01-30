function evenNumber(num: number[]) {
  return num.filter((i) => i % 2 == 0);
}

const evenNum = (num: number[]) => num.filter((i) => i % 2 == 0);

console.log(evenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

