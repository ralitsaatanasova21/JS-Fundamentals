function solve(arr) {
  let pirateShip = arr.shift().split(">").map(Number);
  let warShip = arr.shift().split(">").map(Number);
  let health = Number(arr.shift());
  arr.pop();
  let repair = 0;
  let sumP = 0;
  let sumW = 0;
  let isTrue = false;

  for (let i = 0; i < arr.length; i++) {
    let row = arr[i].split(" ");
    let command = row[0];

    switch (command) {
      case "Fire":
        let index = Number(row[1]);
        let damage = Number(row[2]);
        if (index >= 0 && index < warShip.length) {
          if (health > 0) {
            if (damage < warShip[index]) {
              warShip[index] -= damage;
            } else {
              console.log(`You won! The enemy ship has sunken.`);
              isTrue = true;
              break;
            }
          } else {
            console.log(`You won! The enemy ship has sunken.`);
            isTrue = true;
            break;
          }
        }
        break;

      case "Defend":
        let startIndex = Number(row[1]);
        let endIndex = Number(row[2]);
        let damagee = Number(row[3]);
        if (
          startIndex >= 0 &&
          startIndex < pirateShip.length &&
          endIndex > 0 &&
          endIndex < pirateShip.length
        ) {
          if (health > 0) {
            for (let i = startIndex; i <= endIndex; i++) {
              if (damagee < pirateShip[i]) {
                pirateShip[i] -= damagee;
              } else {
                console.log(`You lost! The pirate ship has sunken.`);
                isTrue = true;
                break;
              }
            }
          } else {
            console.log(`You lost! The pirate ship has sunken.`);
            isTrue = true;
            break;
          }
        }
        break;

      case "Repair":
        let indexR = Number(row[1]);
        let healthR = Number(row[2]);
        if (indexR >= 0 && indexR < pirateShip.length) {
          if (pirateShip[indexR] + healthR <= health) {
            pirateShip[indexR] += healthR;
          } else {
            pirateShip[indexR] = health;
          }
        }
        break;

      case "Status":
        let normalH = health * 0.2;
        for (let i = 0; i < pirateShip.length; i++) {
          if (pirateShip[i] < normalH) {
            repair++;
          }
        }
        if (repair > 0) {
          console.log(`${repair} sections need repair.`);
        }
        break;
    }
  }
  for (let i = 0; i < pirateShip.length; i++) {
    sumP += pirateShip[i];
  }
  for (let j = 0; j < warShip.length; j++) {
    sumW += warShip[j];
  }
  if (!isTrue) {
    console.log(`Pirate ship status: ${sumP}`);
    console.log(`Warship status: ${sumW}`);
  }
}
solve([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
// solve([
//   "2>3>4>5>2",
//   "6>7>8>9>10>11",
//   "20",
//   "Status",
//   "Fire 2 3",
//   "Defend 0 4 11",
//   "Repair 3 18",
//   "Retire",
// ]);
