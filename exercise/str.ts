/*
    str = "Hello World2345"
    output = [8, 2]

    str = "Purwadhika!"
    output = [9, 1]
*/

function myFunc(str: string) {
  const letter = str.replace(/[^a-z]/gi, "");
  const lower = letter.replace(/[A-Z]/g, "");

  return [lower.length, letter.length - lower.length];
}

console.log(myFunc("Hello World1234"));
console.log(myFunc("Purwadhika!"));
