// [] {}

interface IUser {
  name: string;
  age: number;
  hobby?: string; // optional
  address?: {
    city: string;
    country: string;
  };
}

const user1: IUser = {
  name: "Andi",
  age: 27,
};
const user2: IUser = {
  name: "Andi",
  age: 27,
};
const user3: IUser = {
  name: "Andi",
  age: 27,
};
const user4: IUser = {
  name: "Andi",
  age: 27,
};
const user5: IUser = {
  name: "Andi",
  age: 27,
};
const user6: IUser = {
  name: "Andi",
  age: 27,
};

console.log(user1.name);
console.log(user1["name"]);

// optional chaining
console.log(user1.address?.city);

const person: { name: string; age: number } = {
  name: "Budi",
  age: 20,
};
