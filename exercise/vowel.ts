/*
  input = "Purwadhika"
  output = 4

  input = "Bandung"
  outpur = 2

  input = "Amerika"
  output = 4
*/

function myFunc(str: string) {
  const arr: string[] = "aiueo".split("");

  return str.split("").filter((item) => arr.includes(item.toLowerCase())).length;
}

console.log(myFunc("Amerika"));
console.log(myFunc("Bandung"));
console.log(myFunc("Purwadhika"));
