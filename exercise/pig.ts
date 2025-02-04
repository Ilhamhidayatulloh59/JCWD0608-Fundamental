/*
  input = "Pig latin is cool !"
  output = "igPay atinlay siay oolcay !"
*/

function myFunc(str: string) {
  return str.split(" ").map((item) => {
    if (item.match(/[a-z]/i)) {
      return item.slice(1) + item[0] + "ay";
    } else {
      return item;
    }
  }).join(" ")
}

console.log(myFunc("Pig latin is cool !"));
