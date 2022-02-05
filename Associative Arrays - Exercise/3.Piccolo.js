function solve(arr) {
  let parking = {};
  for (let element of arr) {
    let [command, number] = element.split(", ");
    if (command === "IN") {
      parking[number] = command;
    } else if (command === "OUT") {
      delete parking[number];
    }
  }
  let arrKeys = Object.keys(parking);
  let sorted = arrKeys.sort((a, b) => {
    return a.localeCompare(b);
  });
  for (let entry of sorted) {
    if (sorted.length > 0) {
      console.log(entry);
    } else {
      console.log(`Parking Lot is Empty`);
    }
  }
}
solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
