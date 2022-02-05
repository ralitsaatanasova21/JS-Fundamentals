function solve(arr) {
  let countries = {};

  for (let row of arr) {
    let [country, town, num] = row.split(" > ");
    let price = Number(num);

    if (!countries.hasOwnProperty(country)) {
      countries[country] = {};
    }
    if (!countries[country].hasOwnProperty(town)) {
      countries[country][town] = price;
    }
    if (countries[country][town] > price) {
      countries[country][town] = price;
    }
  }
  let key = Object.keys(countries);
  key.sort((a, b) => a.localeCompare(b));

  for (let item of key) {
    let sortedTown = Object.entries(countries[item]);
    sortedTown.sort((a, b) => a[1] - b[1]);

    let result = [];
    for (let town of sortedTown) {
      result.push(town.join(" -> "));
    }
    console.log(`${item} -> ${result.join(" ")}`);
  }
}
solve([
  "Bulgaria > Sofia > 500",

  "Bulgaria > Sopot > 800",

  "France > Paris > 2000",

  "Albania > Tirana > 1000",

  "Bulgaria > Sofia > 200",
]);
