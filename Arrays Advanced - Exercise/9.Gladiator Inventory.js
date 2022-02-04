function solve(arr) {
  let iventory = arr.shift().split(" ");

  for (let command of arr) {
    let com = command.split(" ");
    let currCommand = com[0];

    if (currCommand === "Buy") {
      let equipment = com[1];
      if (!iventory.includes(equipment)) {
        iventory.push(equipment);
      }
    } else if (currCommand === "Trash") {
      let equipment = com[1];
      if (iventory.includes(equipment)) {
        let index = iventory.indexOf(equipment);
        iventory.splice(index, 1);
      }
    } else if (currCommand === "Repair") {
      let equipment = com[1];
      if (iventory.includes(equipment)) {
        let index = iventory.indexOf(equipment);
        iventory.splice(index, 1);
        iventory.push(equipment);
      }
    } else if (currCommand === "Upgrade") {
      let upgradeElement = com[1].split("-");
      if (iventory.includes(upgradeElement[0])) {
        let index = iventory.indexOf(upgradeElement[0]);
        iventory.splice(
          index + 1,
          0,
          `${upgradeElement[0]}:${upgradeElement[1]}`
        );
      }
    }
  }
  console.log(iventory.join(" "));
}
solve([
  "SWORD Shield Spear",

  "Buy Bag",

  "Trash Shield",

  "Repair Spear",

  "Upgrade SWORD-Steel",
]);
