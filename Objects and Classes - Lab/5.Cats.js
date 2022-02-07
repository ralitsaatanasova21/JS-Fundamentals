function kitty(arr) {
  let cats = [];
  class Cat {
    constructor(name, age) {
      this.name=name,
        this.age=age,
        (this.meow = () => {
          console.log(`${this.name}, age ${this.age} says Meow`);
        });
    }
  }
  for (let keys of arr) {
    let row = keys.split(" ");
    let currCat = new Cat(row[0], row[1]);
    cats.push(currCat);
  }
  cats.forEach((s) => s.meow());
}
kitty(["Mellow 2", "Tom 5"]);
