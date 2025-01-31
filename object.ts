interface ICar {
  brand: string;
  model: string;
  price?: number;
}

const car: ICar = {
  brand: "BMW",
  model: "M135i xDrive",
  price: 800000000,
};

// console.log(car);

interface IPerson {
  name: string;
  age: number;
  hobby?: string;
  address?: {
    city: string;
    country: string;
  };
}

const person: IPerson = {
  name: "Frangky",
  age: 26,
};

// add property
person.hobby = "Coding";
person.hobby = "Reading";
person.name = "David";

// delete property
delete person.hobby;

console.log(person.name);
console.log(person["age"]);

person.address = {
  city: "Bandung",
  country: "Indonesia",
};

// optional chaining ?
// console.log(person.address?.city);

// console.log(Object.keys(person));

interface IUser {
  name: string;
  email: string;
  age: number;
}

const user: IUser = {
  name: "Frengky",
  email: "frengky@gmail.com",
  age: 26,
};

for (let key in user) {
  console.log(key);
  console.log(user[key as keyof typeof user]);
}
