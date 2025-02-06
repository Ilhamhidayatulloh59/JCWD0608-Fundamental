/*
    str = "helloWorld"
    output = ["hello", "World"]

    str = "helloPurwadhikaBandung"
    output = ["hello", "Purwadhika", "Bandung"]
 */

function split(str: string) {
  return str.split(/(?=[A-Z])/);
}

function split2(str: string) {
  let res: string = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      res += ` ${str[i]}`;
    } else {
      res += str[i];
    }
  }
  return res.split(" ");
}

console.log(split("helloPurwadhikaBandung"));
console.log(split2("helloPurwadhikaBandung"));

console.log("PurwadhikA".replace(/[a]/gi, "i"));
