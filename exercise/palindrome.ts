let str: string = "kasur rusak";
let reverseStr: string = ""; // nakam

for (let i = str.length - 1; i >= 0; i--) {
  //   console.log(str.charAt(i));
  reverseStr += str.charAt(i);
}

console.log(str == reverseStr ? "Palindrome" : "Not Palindrome");

let a = "1"
let b = 2

console.log(a + b)
console.log(1 + 2 + "3")