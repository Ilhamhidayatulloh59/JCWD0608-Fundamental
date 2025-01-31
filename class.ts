// const person1 = {
//   name: "David",
//   age: 25,
// };
// const person2 = {
//   name: "Andi",
//   age: 20,
// };
// const person3 = {
//   name: "Andi",
//   age: 20,
// };
// const person4 = {
//   name: "Andi",
//   age: 20,
// };

class Person {
  name: string;
  #age: number;
  static phi: number = 3.14;

  constructor(nama: string, umur: number) {
    this.name = nama;
    this.#age = umur;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const person1 = new Person("Andi", 20);
const person2 = new Person("Budi", 21);
const person3 = new Person("Caca", 22);
const person4 = new Person("Dodi", 23);

console.log(person1);
person2.greet();

console.log(Person.phi)
console.log(Date.now())
console.log(Math.PI)
