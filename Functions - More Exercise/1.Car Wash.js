function carWash(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "soap":
        sum = increase(sum);
        break;
      case "water":
        sum = water(sum);
        break;
      case "vacuum cleaner":
        sum = vacuumCleaner(sum);
        break;
      case "mud":
        sum = mud(sum);
        break;
    }
  }
  function increase(num) {
    return num + 10;
  }
  function water(num) {
    return (num += (num * 20) / 100);
  }
  function vacuumCleaner(num) {
    return (num += (num * 25) / 100);
  }
  function mud(num) {
    return (num *= 0.9);
  }
  console.log(`The car is ${sum.toFixed(2)}% clean.`);
}
carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
// carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
