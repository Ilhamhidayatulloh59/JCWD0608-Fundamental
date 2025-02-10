/**
 * AA = 27
 * AB = 28
 */

function myFunc(str: string) {
  const arr = " ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let result = 0; // 28

  for (let i = 0; i < str.length; i++) {
    result = result * 26 + arr.indexOf(str[i]);
  }

  return result;
}

console.log(myFunc("AB")); // 28
