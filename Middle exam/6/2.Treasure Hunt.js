function solve(arr) {
  let loot = arr.shift().split("|");
  arr.pop();
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let items = arr[i].split(" ");
    let command = items[0];
    items.shift();

    if (command === "Loot") {
      for (let item of items) {
        if (!loot.includes(item)) {
          loot.unshift(item);
        }
      }
    } else if (command === "Drop") {
      let index = Number(items[0]);
      if (index >= 0 && index < loot.length) {
        let removed = loot[index];
        loot.splice(index, 1);
        loot.push(removed);
      }
    } else if (command === "Steal") {
      let count = Number(items[0]);
      if (count > loot.length-1 || count === loot.length - 1) {
        console.log(loot.join(", "));
        loot = [];
      } else {
        let startIndex = loot.length - count;
        let stolen = loot.splice(startIndex, count);
        console.log(stolen.join(", "));
      }
    }
  }
  if (loot.length == 0) {
    console.log(`Failed treasure hunt.`);
  } else {
    for (let j = 0; j < loot.length; j++) {
      sum += loot[j].length;
    }
    let average = sum / loot.length;
    console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
  }
}

// solve([
//   "Gold|Silver|Bronze|Medallion|Cup",
//   "Loot Wood Gold Coins",
//   "Loot Silver Pistol",
//   "Drop 3",
//   "Steal 3",
//   "Yohoho!",
// ]);
// solve(["Diamonds|Silver|Shotgun|Gold",
// "Loot Silver Medals Coal",
// "Drop -1",
// "Drop 1",
// "Steal 6",
// "Yohoho!"]);

solve(["Diamonds|Silver|Shotgun|Gold",
"Steal 4",
"Yohoho!"]);
