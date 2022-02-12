function solve(arr) {
  let energy = Number(arr.shift());
  let index = 0;
  let wins = 0;

  while (arr[index] != "End of battle" && energy >= 0) {
    let enemy = Number(arr[index]);
    if (energy >= enemy) {
      energy -= enemy;
      wins++;
    } else {
      console.log(
        `Not enough energy! Game ends with ${wins} won battles and ${energy} energy`
        );
        break;
      }
      if (wins % 3 == 0 && wins >= 3) {
        energy += wins;
      }

    index++;
  }
  if (arr[index] === "End of battle") {
    console.log(`Won battles: ${wins}. Energy left: ${energy}`);
  }
}
solve(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
solve(["200", "54", "14", "28", "13", "End of battle"]);
