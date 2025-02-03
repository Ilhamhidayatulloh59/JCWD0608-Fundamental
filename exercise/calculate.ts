class Student {
  name: string;
  email: string;
  score: number;
  age: number;

  constructor(name: string, email: string, dob: string, score: number) {
    this.name = name;
    this.email = email;
    this.score = score;
    this.age = this.calculateAge(dob);
  }

  calculateAge(dob: string) {
    const date1 = new Date();
    const date2 = new Date(dob);
    const diff = date1.getTime() - date2.getTime();
    return Math.floor(diff / (24 * 60 * 60 * 1000) / 365);
  }
}

const student1 = new Student("Andi", "andi@gmail.com", "1999-01-01", 80);
const student2 = new Student("Budi", "budi@gmail.com", "1975-01-01", 85);
const student3 = new Student("Caca", "caca@gmail.com", "2001-05-05", 90);

const arrStudent: Student[] = [student1, student2, student3];

function myFunc(arr: Student[]) {
  const score = arr.map((item) => item.score); // [80, 85, 90]
  const age = arr.map((item) => item.age);

  return {
    score: {
      highest: Math.max(...score),
      lowest: Math.min(...score),
      average: score.reduce((a, b) => a + b) / score.length,
    },
    age: {
      highest: Math.max(...age),
      lowest: Math.min(...age),
      average: age.reduce((a, b) => a + b) / age.length,
    },
  };
}

console.log(myFunc(arrStudent));
