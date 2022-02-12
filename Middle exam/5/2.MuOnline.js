function solve(str) {
  let array = str.split("|");
  let health = 100;
  let bitcoins = 0;
  let rooms = 0;
  let isDeath = false;

  for (let i = 0; i < array.length; i++) {
    if (isDeath) {
      break;
    }
    rooms++;

    let [command, number] = array[i].split(" ");
    number = Number(number);
    if (command === "chest") {
      bitcoins += number;
      console.log(`You found ${number} bitcoins.`);
    } else {
      switch (command) {
        case "potion":
          if (health + number <= 100) {
            health += number;
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);
          } else {
              let ostatuk=100-health;
              health = 100;
              console.log(`You healed for ${ostatuk} hp.`);
              console.log(`Current health: ${health} hp.`);
          }
          break;

        default:
          if (health > number) {
            health -= number;
            console.log(`You slayed ${command}.`);
          } else {
            console.log(`You died! Killed by ${command}.`);
            console.log(`Best room: ${rooms}`);
            isDeath = true;
            break;
          }
          break;
      }
    }
  }
  if (!isDeath) {
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
  }
}
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
// solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
