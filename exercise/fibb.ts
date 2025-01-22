// 0, 1, 1, 2, 3, 5, 8, 13, 21

let n: number = 15; // 610

let a: number = 0; // 2
let b: number = 1; // 3

for (let i = 1; i < n; i++) {
  let next: number = a + b;
  a = b
  b = next
}

console.log(b)