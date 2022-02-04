function solve(commands) {
  let wagonsArr = commands.shift().split(" ").map(Number);
  let maxCapacityPeople = commands.shift(1).split(" ").map(Number);

  for (let i = 0; i < commands.length; i++) {
    let [command, number] = commands[i].split(" ");
    number = Number(number);
    if (command === "Add") {
      add(number);
    } else {
      command = Number(command);
      pass(command);
    }
  }

  function add(el) {
    wagonsArr.push(el);
  }

  function pass(command) {
    for (let j = 0; j < wagonsArr.length; j++) {
      let sum = command + wagonsArr[j];
      if (sum <= maxCapacityPeople) {
        wagonsArr[j] += command;
        break;
      }
    }
  }

  console.log(wagonsArr.join(" "));
}
solve(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
