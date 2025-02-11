function calculator(a: number, b: number, callback: (num: number) => void) {
  callback(a + b);
}

function displayer(num: number): void {
  console.log(num);
}

calculator(10, 5, displayer);
