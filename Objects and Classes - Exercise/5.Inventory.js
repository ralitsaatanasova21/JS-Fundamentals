function solve(arr) {
  let heroes = [];

  for (let row of arr) {
    let [name, level, items] = row.split(" / ");

    let splited = items.split(", ");
    splited.sort((a, b) => a.localeCompare(b));

    let hero = {
      name: name,
      level: +level,
      items: splited,
    };
    heroes.push(hero);
  }
  let sortedByLevel = heroes.sort((a, b) => a.level - b.level);
  sortedByLevel.forEach((hero) => {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items.join(", ")}`);
  });
}
solve([
  "Isacc / 25 / Apple, GravityGun",

  "Derek / 12 / BarrelVest, DestructionSword",

  "Hes / 1 / Desolator, Sentinel, Antara",
]);
