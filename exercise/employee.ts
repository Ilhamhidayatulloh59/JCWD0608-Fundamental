class Employee {
  name: string;
  type: "Full-time" | "Part-time";
  #hour: number = 0;
  #bSallary: number;
  #otSallary: number;

  constructor(
    name: string,
    type: "Full-time" | "Part-time",
    bSallary: number,
    otSallary: number
  ) {
    this.name = name;
    this.type = type;
    this.#bSallary = bSallary;
    this.#otSallary = otSallary;
  }

  addHour(n: number) {
    this.#hour += n;
    return this.#hour;
  }

  getSallary() {
    if (this.#hour <= 6) {
      return this.#hour * this.#bSallary;
    } else {
      return this.#bSallary * 6 + this.#otSallary * (this.#hour - 6);
    }
  }
}

class FulltimeEmployee extends Employee {
  constructor(name: string) {
    super(name, "Full-time", 100000, 75000);
  }
}

class ParttimeEmployee extends Employee {
  constructor(name: string) {
    super(name, "Part-time", 50000, 30000);
  }
}

const employee1 = new FulltimeEmployee("Andi");
employee1.addHour(3); // 900000
console.log(employee1.getSallary());

const employee2 = new ParttimeEmployee("Budi");
employee2.addHour(7);
console.log(employee2.getSallary());
