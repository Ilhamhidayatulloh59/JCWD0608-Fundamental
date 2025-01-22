let age: number = 21;

if (age >= 17) {
  console.log("You can now create an ID Card");
} else {
  console.log("You are not old enough to create an ID Card");
}

let grade: string = "A";

if (grade === "A") {
  console.log("Excellent Result!");
} else if (grade === "B") {
  console.log("Great Result!");
} else if (grade === "C") {
  console.log("Average Result!");
} else {
  console.log("Invalid Grade!");
}

let now: Date = new Date("2025-12-31");
let day: number = now.getDay(); // 0, 1 - 6

switch (day) {
  case 0:
    console.log("Minggu");
    break;
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jum'at");
    break;
  case 6:
    console.log("Sabtu");
    break;
  default:
    console.log("Invalid Day");
}

// let x: number = 6
// let y: number = 3

// console.log(x < 10 && y == 1 && x > y) // true

// console.log(!(x == y))

// let ganteng: boolean = true
// let kaya: boolean = false

// console.log(!(ganteng && kaya))

const str: string = "Typescript";

if (str == "Typescript") {
  console.log("Typescript");
} else {
  console.log("Not Typescript");
}

// ternary operator (mempersingkat conditional)
console.log(str == "Typescript" ? "Typescript" : "Not Typescript")

// short circuiting
// ||
let value: string = "Andi" // false
let name: string = value || "Budi"

console.log(name)