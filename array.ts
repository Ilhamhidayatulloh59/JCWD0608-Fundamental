const arr = "aiueo".split(""); // ["a", "i", "u", "e", "o"]

for (let i = 0; i < arr.length; i++) {
  //   arr.push(arr[i]);
  //   console.log(arr[i]);
}

// map & forEach
// const arrNum = [1, 2, 3, 4, 5]; // [6, 7, 8, 9, 10]

// return array
// arrNum.map((item) => {
//   console.log(item);
// });

// tidak return array
// arrNum.forEach((item) => {
//   console.log(item);
// });

// const arrNum = [1, 2, 3, 4, 5]; // [6, 7, 8, 9, 10]

// const newArrNum: number[] = [];
// arrNum.forEach((item) => newArrNum.push(item + 5));
// console.log(newArrNum);

// const newArr2 = arrNum.map((item) => item + 5);
// console.log(newArr2)

// quiziz.com

// let num = 5;

// console.log(num++);
// console.log(num--);

// const str: string = "Purwadhika Jakarta"; // adhi

// console.log(str.slice(4, 8))
// console.log(str.substr(4, 4))
// console.log(str.substring(8, 4))

const arrNum = [1, 2, 3, 4, 5];

console.log(arrNum.some((item) => item > 3));
