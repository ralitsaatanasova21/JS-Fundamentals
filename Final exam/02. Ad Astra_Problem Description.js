function solve(arr) {
  let regex =
    /(\#|\|)(?<name>[A-Za-z\s]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<kcal>[1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9]|10000)\1/g;

  let neededkcalPerDay = 2000;
  let sum = 0;
  let days = 0;

  for (let line of arr) {
    let valid;
    while ((valid = regex.exec(line)) !== null) {
      let kcal = +valid.groups.kcal;
      sum += kcal;
    }
  }
  days = sum / neededkcalPerDay;
  console.log(`You have food to last you for: ${Math.floor(days)} days!`);
  for (let line of arr) {
    let valid;
    while ((valid = regex.exec(line)) !== null) {
      let name = valid.groups.name;
      let date = valid.groups.date;
      let kcal = +valid.groups.kcal;
      sum += kcal;
      console.log(`Item: ${name}, Best before: ${date}, Nutrition: ${kcal}`);
    }
  }
}
solve([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
