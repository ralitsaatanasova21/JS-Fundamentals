function solve(arr) {
  arr.pop();
  let sailIndex = arr.indexOf("Sail");

  let townsInput = arr.slice(0, sailIndex);
  let actionInput = arr.slice(sailIndex + 1);

  let towns = {};

  for (let line of townsInput) {
    line = line.split("||");
    let name = line[0];
    let population = +line[1];
    let gold = +line[2];

    if (!towns[name]) {
      towns[name] = {
        population: 0,
        gold: 0,
      };
    }
    towns[name].population += population;
    towns[name].gold += gold;
  }

  for (let curr of actionInput) {
    curr = curr.split("=>");
    let action = curr[0];
    let currTown = curr[1];

    if (action === "Plunder") {
      let people = +curr[2];
      let money = +curr[3];
      towns[currTown].population -= people;
      towns[currTown].gold -= money;

      console.log(
        `${currTown} plundered! ${money} gold stolen, ${people} citizens killed.`
      );
      if (towns[currTown].population <= 0 || towns[currTown].gold <= 0) {
        delete towns[currTown];
        console.log(`${currTown} has been wiped off the map!`);
      }
    } else if (action === "Prosper") {
      let money = +curr[2];
      if (money < 0) {
        console.log(`Gold added cannot be a negative number!`);
      } else {
        towns[currTown].gold += money;
        console.log(
          `${money} gold added to the city treasury. ${currTown} now has ${towns[currTown].gold} gold.`
        );
      }
    }
  }
  towns = Object.entries(towns);

  if (towns.length == 0) {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  } else {
    console.log(
      `Ahoy, Captain! There are ${towns.length} wealthy settlements to go to:`
    );
    towns.sort((townA, townB) => {
      let townAName = townA[0];
      let townBName = townB[0];
      let townAProp = townA[1];
      let townBProp = townB[1];

      if (townAProp.gold !== townBProp.gold) {
        return townBProp.gold - townAProp.gold;
      } else {
        return townAName.localeCompare(townBName);
      }
    });

    for (let city of towns) {
      let cityName = city[0];
      let properties = city[1];
      console.log(
        `${cityName} -> Population: ${properties.population} citizens, Gold: ${properties.gold} kg`
      );
    }
  }
}
solve([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
