function solve(arr) {
  let numHeroes = Number(arr.shift());
  let heros = {};

  while (numHeroes > 0) {
    let line = arr.shift().split(" ");

    let heroName = line[0];
    let hp = +line[1];
    let mp = +line[2];

    if (hp > 100) {
      hp = 100;
    }
    if (mp > 200) {
      mp = 200;
    }

    heros[heroName] = [hp, mp];
    numHeroes--;
  }

  let [command, hero, amount, name] = arr.shift().split(" - ");

  while (command != "End") {
    switch (command) {
      case "CastSpell":
        if (heros.hasOwnProperty(hero)) {
          let currHeroArr = heros[hero];
          let currMP = currHeroArr[1];
          amount = +amount;
          if (currMP >= amount) {
            currMP -= amount;
            currHeroArr[1] = currMP;
            heros[hero] = currHeroArr;
            console.log(
              `${hero} has successfully cast ${name} and now has ${currMP} MP!`
            );
          } else {
            console.log(`${hero} does not have enough MP to cast ${name}!`);
          }
        }
        break;

      case "TakeDamage":
        if (heros.hasOwnProperty(hero)) {
          let currHeroArr = heros[hero];
          let currHP = currHeroArr[0];
          amount = +amount;
          currHP -= amount;
          if (currHP > 0) {
            currHeroArr[0] = currHP;
            heros[hero] = currHeroArr;
            console.log(
              `${hero} was hit for ${amount} HP by ${name} and now has ${currHP} HP left!`
            );
          } else {
            console.log(`${hero} has been killed by ${name}!`);
            delete heros[hero];
          }
        }
        break;

      case "Recharge":
        if (heros.hasOwnProperty(hero)) {
          let currHeroArr = heros[hero];
          let currMP = currHeroArr[1];
          let needMP = 200 - currMP;
          amount = +amount;
          currMP += amount;
          if (currMP > 200) {
            currMP = 200;
            amount = needMP;
          }
          currHeroArr[1] = currMP;
          heros[hero] = currHeroArr;
          console.log(`${hero} recharged for ${amount} MP!`);
        }
        break;

      case "Heal":
        if (heros.hasOwnProperty(hero)) {
          let currHeroArr = heros[hero];
          let currHP = currHeroArr[0];
          let needHP = 100 - currHP;
          amount = +amount;
          currHP += amount;
          if (currHP > 100) {
            currHP = 100;
            amount = needHP;
          }
          currHeroArr[0] = currHP;
          heros[hero] = currHeroArr;
          console.log(`${hero} healed for ${amount} HP!`);
        }
        break;
    }
    [command, hero, amount, name] = arr.shift().split(" - ");
  }

  let herosArr = Object.entries(heros);
  let sorted = herosArr.sort(sortHero);

  function sortHero(heroA, heroB) {
    let heronameA = heroA[0];
    let heronameB = heroB[0];
    let hpointA = heroA[1];
    let hpointB = heroB[1];
    let heroHPA = hpointA[0];
    let heroHPB = hpointB[0];

    if (heroHPA === heroHPB) {
      return heronameA.localeCompare(heronameB);
    } else {
      return heroHPB - heroHPA;
    }
  }

  let sortedHeros = Object.fromEntries(sorted);
  for (let hero in sortedHeros) {
    console.log(hero);
    let heropints = sortedHeros[hero];
    console.log(`  HP: ${heropints[0]}`);
    console.log(`  MP: ${heropints[1]}`);
  }
}
solve([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
