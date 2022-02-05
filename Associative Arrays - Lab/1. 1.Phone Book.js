function solve(arr) {
  let book = {};

  for (let row of arr) {
    row = row.split(" ");
    let name = row[0];
    let number = row[1];
    book[name] = number;
  }
  for (let key in book) {
    console.log(`${key} -> ${book[key]}`);
  }
}
solve([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
