function concat(arr: string[]) {
  const last = arr.pop();
  return arr.join() + `, and ${last}`;
}

console.log(concat(["apple", "banana", "cherry", "date"]));
