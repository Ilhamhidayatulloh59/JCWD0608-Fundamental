class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const product1 = new Product("Apple", 10000);
const product2 = new Product("Banana", 20000);
const product3 = new Product("Cherry", 5000);
const product4 = new Product("Orange", 30000);

interface CartItem extends Product {
  qty: number;
  total: number;
}

class Transaction {
  total: number = 0;
  products: CartItem[] = [];

  addToCart(item: Product, qty: number) {
    const cartItem: CartItem = {
      ...item,
      qty: qty,
      total: item.price * qty,
    };
    this.products.push(cartItem);
    this.total += cartItem.total;
  }

  showTotal() {
    console.table(this.products);
    console.log(`Total: ${this.total}`);
  }

  checkout(money: number) {
    if (money < this.total) {
      throw new Error("Uang anda tidak cukup");
    } else {
      console.log(`Cash: ${money}`);
      console.log(`Return: ${money - this.total}`);
      console.log(`~~~ Thank You ~~~`);
    }
  }
}

const transaction1 = new Transaction();
transaction1.addToCart(product1, 5);
transaction1.addToCart(product4, 1);
transaction1.showTotal();
transaction1.checkout(100000);
