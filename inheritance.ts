class Kendaraan {
  roda: number;

  constructor(roda: number) {
    this.roda = roda;
  }

  berjalan() {
    console.log("Kendaran Berjalan");
  }
}

class Mobil extends Kendaraan {
  brand: string;
  price: number;

  constructor(brand: string, price: number) {
    super(4);
    this.brand = brand;
    this.price = price;
  }
}

const mobil1 = new Mobil("BMW", 800000000);
console.log(mobil1);

console.log(mobil1 instanceof Mobil)
console.log(mobil1 instanceof Kendaraan)
console.log(mobil1 instanceof Date)
