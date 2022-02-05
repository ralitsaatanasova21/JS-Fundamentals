function solve(arr) {
  let book = {};
  for (let row of arr) {
    row = row.split(":");
    let name = row[0];
    let adres = row[1];
    book[name] = adres;
  }
  let sorted = Object.keys(book);
  sorted.sort((a, b) => a.localeCompare(b));

  for (let key of sorted) {
    console.log(`${key} -> ${book[key]}`);
  }
}
solve([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
