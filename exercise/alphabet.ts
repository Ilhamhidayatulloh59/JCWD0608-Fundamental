/*
 a = 1, b = 2, c = 3, .... z = 26

 input = "Bandung"
 output = [2, 1, 14, 4, 21, 14, 7]

 input = "Abc"
 output = [1, 2, 3]
*/

function myFunc(str: string) {
  const alpha = " abcdefghijklmnopqrstuvwxyz";
  const result = [];

  for (let i = 0; i < str.length; i++) {
    let item = alpha.indexOf(str[i].toLowerCase());
    result.push(item);
  }

  return result;
}

console.log(myFunc("Bandung"));

const name = "123"; 

console.log(name[2]);
console.log(name.charAt(2));
