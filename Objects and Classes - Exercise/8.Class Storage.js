function solve(params) {
  class Storage {
    constructor(capacity) {
      this.capacity = capacity;
      this.storage = [];
    }

    get totalCost() {
      let sum = 0;
      this.storage.forEach((element) => {
        sum += element.price * element.quantity;
      });
      return sum;
    }

    addProduct(product) {
      this.capacity -= product.quantity;
      this.storage.push(product);
    }
    getProducts() {
      let e = [];
      this.storage.forEach((element) => {
        e.push(JSON.stringify(element));
      });
      return e.join(`\n`);
    }
  }
  let productOne = { name: "Cucamber", price: 1.5, quantity: 15 };

  let productTwo = { name: "Tomato", price: 0.9, quantity: 25 };

  let productThree = { name: "Bread", price: 1.1, quantity: 8 };

  let storage = new Storage(50);

  storage.addProduct(productOne);

  storage.addProduct(productTwo);

  storage.addProduct(productThree);

  console.log(storage.getProducts());

  console.log(storage.capacity);

  console.log(storage.totalCost);
}
solve();
