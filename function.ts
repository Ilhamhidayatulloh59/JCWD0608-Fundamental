// function declaration
function sum(num1: number, num2: number) {
  return num1 + num2;
}

// function expression
const sum2 = function (num1: number, num2: number) {
  return num1 + num2;
};

// console.log(sum(10, 15));

function checkNumber(number: number) {
  return number % 2 == 0 ? "Even" : "Odd";
}

// console.log(checkNumber(22));
// console.log(checkNumber(51));
// console.log(checkNumber(112));

var a: number = 10;
let b: number = 11;

{
  var a: number = 12;
  let b: number = 13;
}

console.log(a, b);

// function square(num: number) {
//   var c: number = 14;
//   return num * num;
// }

// console.log(c)

// default paramater
function multiply(a: number, b: number = 1) {
  return a * b;
}

console.log(multiply(10, 3));

// rest parameter
function myFunc(a: string, b: string, ...other: string[]) {
  console.log(a);
  console.log(b);
  console.log(other);
}

myFunc("andi", "budi", "caca", "doni");

// nested function
function getMessage(firstName: string) {
  function sayHello() {
    return "Hello " + firstName;
  }

  function welcomeMessage() {
    return "Welcome to Purwadhika";
  }

  return sayHello() + ", " + welcomeMessage();
}

// console.log(getMessage("David"));

// closure function
function greating(name: string) {
  const defaultMessage: string = "Hello ";

  return function () {
    return defaultMessage + name;
  };
}

const greatingDavid = greating("David");
// console.log(greatingDavid());

// currying function
function multiplier(factor: number) {
  return function (number: number) {
    return factor * number;
  };
}

// const mul4 = multiplier(4);
// const mul3 = multiplier(3);

// console.log(mul4(3))
// console.log(mul4(5))
// console.log(mul3(5))

// recursive function
function countDown(fromNumber: number) {
  console.log(fromNumber);

  let nextNumber: number = fromNumber - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}

// countDown(10)

// arrow function
const sum3 = (num1: number, num2: number) => num1 + num2;

// console.log(sum3(1, 2))
const n = 1 / 0
console.log(isFinite(n))

const angka = "12"

console.log(parseInt(angka, 16))

