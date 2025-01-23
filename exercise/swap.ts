let str: string = "The QuiCk BrOwN Fox";
let result: string = "";

for (let i = 0; i < str.length; i++) {
  if (str.charAt(i) == str.charAt(i).toUpperCase()) {
    result += str.charAt(i).toLowerCase();
  } else {
    result += str.charAt(i).toUpperCase();
  }
}

console.log(result)