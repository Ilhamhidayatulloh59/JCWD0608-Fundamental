let word: string = 'Hello World'

let num: number = 2

let isFalse: boolean = false

let upperWord: string = word.toUpperCase() // HELLO WORLD
let lowerWord: string = word.toLowerCase() // hello world
let replaceWord: string = word.replace("e", "a").toLowerCase()

console.log(upperWord)
console.log(lowerWord)
console.log(replaceWord)

console.log(word.slice(6, 11))
console.log(word.length)
console.log(word.charAt(10))
console.log(word.concat("!"))
console.log(word.search("h"))

console.log(word.replace("o", "a"))

const message: string = `${word} Hello Purwadhika`
console.log(message)

// type conversion
console.log(typeof num.toString())
console.log(num.toExponential(2))
console.log(num.toPrecision(3))

console.log(Number("12asd"))

console.log(Boolean(0.1))
console.log(Boolean(0))
console.log(Boolean(" "))
