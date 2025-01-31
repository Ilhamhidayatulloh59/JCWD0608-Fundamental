let a, b;
[a, b] = [10, 20];

// console.log(a);
// console.log(b);

const person = {
  name: "David",
  age: 25,
};

const { name, age } = person;

// console.log(person.name)
// console.log(person.age)

// console.log(name)
// console.log(age)

// spread oprator (copy all values)
const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];
const arr3: number[] = [...arr1, ...arr2];

console.log(arr3);

const user = {
  firstName: "Frengky",
  lastName: "Sihombing",
  greet() {
    console.log(`Hello ${this.firstName}`);
  },
};

user.greet()