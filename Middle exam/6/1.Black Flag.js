function solve(arr) {
  let days = Number(arr[0]);
  let dailyPlunder = Number(arr[1]);
  let expectedPlunder = Number(arr[2]);
  let plunders = 0;

  for (let i = 1; i <= days; i++) {
    plunders += dailyPlunder;
    if (i % 3 == 0 && i >= 3) {
      let third = (dailyPlunder * 50) / 100;
      plunders += third;
    }
    if (i % 5 == 0 && i >= 5) {
      plunders *= 0.7;
    }
  }
  if (plunders >= expectedPlunder) {
    console.log(`Ahoy! ${plunders.toFixed(2)} plunder gained.`);
  } else {
    let percet = (plunders / expectedPlunder) * 100;
    console.log(`Collected only ${percet.toFixed(2)}% of the plunder.`);
  }
}
solve(["10", "20", "380"]);
// solve(["5", "40", "100"]);
