const fruits: string[] = ["banana", "apple", "jackfruit", "apple"];

const newFruits = new Set(fruits);
newFruits.add("cherry");
newFruits.delete("banana");

console.log(newFruits.has("jackfruit"));
console.log(newFruits);

newFruits.forEach((item) => console.log(item));
