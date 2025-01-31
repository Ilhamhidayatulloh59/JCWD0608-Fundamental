function myFunc(arr: (string | number | null | boolean | undefined)[]) {
  return arr.filter((item) => typeof item == "number").reduce((a, b) => a + b);
}

console.log(myFunc(["3", 2, "string", 5, false, undefined, 1]));
