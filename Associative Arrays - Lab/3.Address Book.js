function solve(arr) {
  let book = {};
  for (let row of arr) {
    row = row.split(":");
    let name = row[0];
    let adres = row[1];
    book[name] = [adres];
  }
  let sorted = Object.entries(book);
  sorted.sort((a, b) => {
    keyA = a[0];
    keyB = b[0];
    return keyA.localeCompare(keyB);
  });
  for (let entry of sorted) {
    console.log(`${entry[0]} -> ${entry[1]}`);
  }
}
solve([
  "Tim:Doe Crossing",

  "Bill:Nelson Place",

  "Peter:Carlyle Ave",

  "Bill:Ornery Rd",
]);
