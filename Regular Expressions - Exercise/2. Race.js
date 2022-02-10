function solve(arr) {
  let names = arr.shift();
  arr.pop();
  let obj = {};
  let sum = 0;

  for (let line of arr) {
    sum = 0;
    let name = /[A-Za-z]/g;
    let matchedName = line.match(name).join("");
    if (names.includes(matchedName)) {
      if (!obj.hasOwnProperty(matchedName)) {
        obj[matchedName] = 0;
      }
      let distance = /[0-9]/g;
      let matchedDistance = line.match(distance);
      for (let row of matchedDistance) {
        row = Number(row);
        sum += row;
      }
      obj[matchedName] += sum;
    }
  }
  let entries = Object.entries(obj);
  let sorted = entries.sort((a, b) => b[1] - a[1]).splice(0, 3);
  let result = [];
  for (let row of sorted) {
    result.push(row[0]);
  }
  console.log(`1st place: ${result[0]}`);
  console.log(`2nd place: ${result[1]}`);
  console.log(`3rd place: ${result[2]}`);
}
// solve([
//   "George, Peter, Bill, Tom",
//   "G4e@55or%6g6!68e!!@ ",
//   "R1@!3a$y4456@",
//   "B5@i@#123ll",
//   "G@e54o$r6ge#",
//   "7P%et^#e5346r",
//   "T$o553m&6",
//   "end of race",
// ]);
solve([
  "Ronald, Bill, Tom, Timmy, Maggie, Michonne",
  "Mi*&^%$ch123o!#$%#nne787) ",
  "%$$B(*&&)i89ll)*&) ",
  "R**(on%^&ald992) ",
  "T(*^^%immy77) ",
  "Ma10**$#g0g0g0i0e",
  "end of race",
]);
