function solve(arr) {
  let storage = new Map();
  for (let row of arr) {
      row=row.split(" ");
    let product = row[0];
    let quantity = Number(row[1]);
    if (storage.has(product)) {
        let currQuan = storage.get(product);
        let newQuan = (currQuan += quantity);
        storage.set(product, newQuan);
    } else {
        storage.set(product, quantity);
    }
  }
  for (let key of storage) {
    console.log(`${key[0]} -> ${key[1]}`);
  }
}
solve(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
