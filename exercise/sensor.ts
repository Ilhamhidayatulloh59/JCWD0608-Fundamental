/*
    sensor = ["anjing", "babi", "monyet"]
    word = "anjig"
    return = "a****g"
*/

function sensor(str: string) {
  const arrSensor: string[] = ["anjing", "babi", "monyet"];
  if (arrSensor.includes(str)) {
    const first = str.charAt(0);
    const last = str.charAt(str.length - 1);
    const mid = "*".repeat(str.length - 2);
    return `${first}${mid}${last}`;
  } else {
    return str;
  }
}

console.log(sensor("membabi buta"));
