function solve(arr) {
  let n = +arr.shift();
  let colection = arr.slice(0, n);
  let obj = {};
  let newArr = arr.slice(n);
  newArr.pop();

  for (let row of colection) {
    row = row.split("<->");
    let name = row[0];
    let rarity = +row[1];

    obj[name] = {
      rarity: rarity,
      rating: [],
    };
  }

  for (let row of newArr) {
    row = row.split(": ");
    let command = row[0];
    let prop = row[1];
    prop = prop.split(" - ");
    let plant = prop[0];

    if (command === "Rate") {
      let rating = +prop[1];

      if (obj[plant]) {
        obj[plant].rating.push(rating);
      } else {
        console.log("error");
      }
    } else if (command == "Update") {
      let newRarity = +prop[1];

      if (obj[plant]) {
        obj[plant].rarity = newRarity;
      } else {
        console.log("error");
      }
    } else if (command === "Reset") {
      if (obj[plant]) {
        obj[plant].rating = [];
      } else {
        console.log("error");
      }
    }
  }
  let sorted = Object.keys(obj).sort(
    (a, b) =>
      obj[b].rarity - obj[a].rarity ||
      average(obj[b].rating) - average(obj[a].rating)
  );
  console.log("Plants for the exhibition:");

  for (let plant of sorted) {
    console.log(
      `- ${plant}; Rarity: ${obj[plant].rarity}; Rating: ${average(
        obj[plant].rating
      ).toFixed(2)}`
    );
  }

  function average(arr) {
    if (arr.length > 0) {
      return arr.reduce((a, b) => a + b, 0) / arr.length;
    } else {
      return 0;
    }
  }
}

solve([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
