let n: number = 7;

let divider: number = 0; // 2
for (let i = 1; i <= n; i++) {
  if (n % i == 0) divider++;
}

console.log(divider == 2 ? "Prime Number" : "Not a Prime Number");
