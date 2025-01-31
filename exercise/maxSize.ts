function myFunc(maxSize: number, ...num: number[]) {
    num.length = maxSize
    return num
}

console.log(myFunc(3, 5, 10, 24, 3, 6, 7, 8));
