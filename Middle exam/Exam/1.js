function solve(arr) {
  let neededExperience = Number(arr.shift());
  let countBattles = Number(arr.shift());
  let sum = 0;
  let battleCount = 0;

  for (let i = 1; i <= countBattles; i++) {
    if (sum >= neededExperience) {
      break;
    }
    battleCount++;
    let tank = arr[i - 1];
    if (i % 3 === 0 && i >= 3) {
      sum += tank * 0.15 + tank;
    } else if (i % 5 === 0 && i >= 5) {
      sum += tank - tank * 0.1;
    } else if (i % 15 === 0 && i > 15) {
      sum += tank * 0.05 + tank;
    } else {
      sum += tank;
    }
  }
  if (neededExperience > sum) {
    console.log(
      `Player was not able to collect the needed experience, ${(
        neededExperience - sum
      ).toFixed(2)} more needed.`
    );
  } else {
    console.log(
      `Player successfully collected his needed experience for ${battleCount} battles.`
    );
  }
}
solve([500, 5, 50, 100, 200, 100, 30]);
