/*
    format = "(xxx)-xxx-xxxx"
    input = "1234567890"
    output = "(123)-456-7890"
*/

function phone(str: string) {
  const first = str.slice(0, 3);
  const mid = str.slice(3, 6);
  const last = str.slice(6);

  return `(${first})-${mid}-${last}`;
}

function phone2(str: string) {
  return `(${str[0]}${str[1]}${str[2]})`;
}

function phone3(str: string) {
  let res = "(xxx)-xxx-xxxx";
  str.split("").forEach((item) => {
    res = res.replace("x", item);
  });
  return res;
}

console.log(phone("1234567890"));
console.log(phone2("1234567890"));
console.log(phone3("1234567890"));
