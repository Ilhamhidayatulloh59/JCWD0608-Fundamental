const amount = 1000;

const formatted = amount.toLocaleString("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 2,
});

console.log(formatted.replace("Rp", "Rp."));

// 100.000.000 ->

let n: number = 1000;
let nStr: string = n.toString(); // "1234567"
let res: string = "";

for (let i = nStr.length - 1; i >= 0; i--) {
  res = nStr.charAt(i) + res;
  if ((nStr.length - i) % 3 == 0 && nStr.length - i != nStr.length) {
    res = "." + res;
  }
}

console.log(`Rp. ${res},00`);
