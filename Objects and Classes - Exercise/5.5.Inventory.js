function solve(arr) {
  let hero = [];
  for (let row of arr) {
    let [name, level, items] = row.split(" / ");

    let splited = items.split(", ");
    splited.sort((a, b) => a.localeCompare(b));

    let obj = {
      name: name,
      level: +level,
      items: splited,
    };
    hero.push(obj);
  }
  let sortedByLevel = hero.sort((a, b) => a.level - b.level);
  sortedByLevel.forEach((obj) => {
    console.log(`Hero: ${obj.name}`);
    console.log(`level => ${obj.level}`);
    console.log(`items => ${obj.items.join(", ")}`);
  });
}
solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
