function solve(arr) {
  let targets = arr.shift().split(" ");
  arr.pop();

  for (let i = 0; i < arr.length; i++) {
    let row = arr[i].split(" ");
    let command = row[0];

    switch (command) {
      case "Shoot":
        let index = Number(row[1]);
        let power = Number(row[2]);
        if (index >= 0 && index < targets.length) {
          if (targets[index] > power) {
            targets[index] -= power;
          } else {
            targets.splice(index, 1);
          }
        }
        break;

      case "Add":
        let indexx = Number(row[1]);
        let value = Number(row[2]);
        if (indexx >= 0 && indexx < targets.length) {
          targets.splice(indexx, 0, value);
        } else {
          console.log(`Invalid placement!`);
        }
        break;

      case "Strike":
        let indexxx = Number(row[1]);
        let radius = Number(row[2]);
        let start = indexxx - radius;
        let end = indexxx + radius;
        if (
          start >= 0 &&
          start < targets.length &&
          end >= start &&
          end < targets.length
        ) {
          let deleteCount = radius * 2 + 1;
          targets.splice(start, deleteCount);
        } else {
          console.log(`Strike missed!`);
        }
        break;
    }
  }
  console.log(targets.join("|"));
}
// solve([
//   "52 74 23 44 96 110",
//   "Shoot 5 10",
//   "Shoot 1 80",
//   "Strike 2 1",
//   "Add 22 3",
//   "End",
// ]);
solve(["1 2 3 4 5", "Strike 0 1", "End"]);
