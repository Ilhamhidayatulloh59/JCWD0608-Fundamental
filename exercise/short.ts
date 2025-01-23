let num1: number = 42; // 27 // 18
let num2: number = 27; // 42 // 18 // 27
let num3: number = 18; // 42

if (num1 > num2) {
  let num = num1;
  num1 = num2;
  num2 = num;
}
if (num2 > num3) {
  let num = num2;
  num2 = num3;
  num3 = num;
}
if (num1 > num2) {
  let num = num1;
  num1 = num2;
  num2 = num;
}

console.log(num1, num2, num3);
