let capitall = "hello purwadhika bandung";
console.log(capitall.replace(/\b\w/g, (char) => char.toUpperCase()));

let result: string = "";

for (let i = 0; i < capitall.length; i++) {
  if (i == 0 || capitall.charAt(i - 1) == " ") {
    result += capitall.charAt(i).toUpperCase();
  } else {
    result += capitall.charAt(i).toLowerCase();
  }
}

console.log(result);
