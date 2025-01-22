// Write a code to convert days to years, months, days

const n: number = 366

// const years: number = Math.floor(n / 365) // membulatkan ke bawah
// Math.ceil(), Math.round()

const num: number = n % 365 // 35

const years: number = (n - num) / 365
const months: number = Math.floor(num / 30)
const days: number = num % 30

console.log(`${n} days -> ${years} year, ${months} month, ${days} day`)

const date1: Date = new Date("2022-01-20")
const date2: Date = new Date("2022-02-22")

const diff: number = date2.getTime() - date1.getTime()

console.log(diff / (24 * 60 * 60 * 1000))