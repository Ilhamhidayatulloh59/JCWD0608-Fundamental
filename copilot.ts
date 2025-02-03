function calculateDaysBetweenDates(date1: Date, date2: Date): number {
  const millisecondsPerDay = 86_400_000; // 24 * 60 * 60 * 1000
  const diffInTime = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(diffInTime / millisecondsPerDay);
}

// Example usage:
const date1 = new Date("2023-01-01");
const date2 = new Date("2023-01-10");
console.log(calculateDaysBetweenDates(date1, date2)); // Output: 9

function sum(a: number, b: number): number {
  return a + b;
}

interface Student {
  name: string;
  email: string;
  age: Date;
  score: number;
}

interface StudentStatistics {
  score: {
    highest: number;
    lowest: number;
    average: number;
  };
  age: {
    highest: number;
    lowest: number;
    average: number;
  };
}

function calculateStudentStatistics(students: Student[]): StudentStatistics {
  if (students.length === 0) {
    throw new Error("Student array is empty");
  }

  let totalScore = 0;
  let totalAge = 0;
  let highestScore = students[0].score;
  let lowestScore = students[0].score;
  let highestAge = students[0].age;
  let lowestAge = students[0].age;

  students.forEach((student) => {
    totalScore += student.score;
    totalAge += new Date().getFullYear() - student.age.getFullYear();

    if (student.score > highestScore) {
      highestScore = student.score;
    }
    if (student.score < lowestScore) {
      lowestScore = student.score;
    }
    if (student.age > highestAge) {
      highestAge = student.age;
    }
    if (student.age < lowestAge) {
      lowestAge = student.age;
    }
  });

  const averageScore = totalScore / students.length;
  const averageAge = totalAge / students.length;

  return {
    score: {
      highest: highestScore,
      lowest: lowestScore,
      average: averageScore,
    },
    age: {
      highest: new Date().getFullYear() - highestAge.getFullYear(),
      lowest: new Date().getFullYear() - lowestAge.getFullYear(),
      average: averageAge,
    },
  };
}

class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  private products: { product: Product; qty: number }[] = [];
  private total: number = 0;

  addToCart(product: Product, qty: number): void {
    this.products.push({ product, qty });
    this.total += product.price * qty;
  }

  showTotal(): number {
    return this.total;
  }

  checkout(): {
    products: { name: string; price: number; qty: number }[];
    total: number;
  } {
    const transactionData = {
      products: this.products.map((p) => ({
        name: p.product.name,
        price: p.product.price,
        qty: p.qty,
      })),
      total: this.total,
    };
    this.products = [];
    this.total = 0;
    return transactionData;
  }
}

// Example usage:
const product1 = new Product("Apple", 1);
const product2 = new Product("Banana", 2);

const transaction = new Transaction();
transaction.addToCart(product1, 3);
transaction.addToCart(product2, 2);

console.log(transaction.showTotal()); // Output: 7
console.log(transaction.checkout()); // Output: { products: [{ name: 'Apple', price: 1, qty: 3 }, { name: 'Banana', price: 2, qty: 2 }], total: 7 }

/**
 * Multiplies two numbers and returns the result.
 * @param a - The first number to multiply.
 * @param b - The second number to multiply.
 * @returns The product of `a` and `b`.
 */
function multiply(a: number, b: number): number {
  if (!isFinite(a) || !isFinite(b)) {
    throw new Error("Inputs must be finite numbers");
  }
  return a * b;
}
