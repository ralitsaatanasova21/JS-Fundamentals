function solve(arr) {
  let storage = {};

  for (let row of arr) {
    row = row.split(" ");
    let product = row[0];
    let quantity = Number(row[1]);
    if (!storage.hasOwnProperty(product)) {
      storage[product] = quantity;
    } else {
      let currQ = storage[product];
      storage[product] = currQ + quantity;
    }
  }

  for (let key in storage) {
    console.log(`${key} -> ${storage[key]}`);
  }
}
solve(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
