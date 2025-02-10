/**
 * 0 = 1
 * 1 = 1
 * 2 = 2
 * 3 = 3
 * 4 -> 1,1,1,1 - 1,1,2 - 1,2,1 - 2,1,1 - 2,2 = 5
 * 5 -> 1,1,1,1,1 - 1,1,1,2 - 1,1,2,1 - 1,2,1,1 - 2,1,1,1
 *      1,2,2 - 2,1,2 - 2,2,1 = 8
 * 6 = 13
 * 7 = 21
 * 8 = 34
 */

function fibb(n: number) {
  const res: number[] = [1, 1];
  for (let i = 1; i < n; i++) {
    res.push(res[i - 1] + res[i]);
  }
  return res;
}

console.log(fibb(24));
