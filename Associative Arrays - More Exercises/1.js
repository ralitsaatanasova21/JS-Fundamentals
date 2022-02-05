function solve(arr) {
  let garage = new Map();

  for (let row of arr) {
    row = row.split(" - ");
    let garageNum = row[0];
    let info = row[1];

    if (!garage.has(garageNum)) {
      garage.set(garageNum, []);
    }

    garage.get(garageNum).push(info);
  }

  for (let entry of garage) {
    console.log(`Garage № ${entry[0]}`);
    for (let el of entry[1]) {
      while (el.includes(":")) {
        el = el.replace(":", " -");
      }
      console.log(`--- ${el}`);
    }
  }
}
solve([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
