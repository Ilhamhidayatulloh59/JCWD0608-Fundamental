function romanToNum(str: string) {
  const roman: { [x: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = 0;

  for (let i = 0; i < str.length; i++) {
    const curr = roman[str.charAt(i)];
    const next = roman[str.charAt(i + 1)];

    curr < next ? (res -= curr) : (res += curr);
  }
  return res
}

console.log(romanToNum("VIII"));
console.log(romanToNum("IV"));
