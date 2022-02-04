function solve(numbers, commands) {
  for (let command of commands) {
    let tokens = command.split(" ");
    let currCommand = tokens[0];
    
    if (currCommand === "add") {
      let index = Number(tokens[1]);
      let element = +tokens[2];
      numbers.splice(index, 0, element);

    } else if (currCommand === "addMany") {
      let index = Number(tokens[1]);
      tokens.splice(0, 2);

      let numberAdd = tokens.map(Number);
      numbers.splice(index, 0, ...numberAdd);
    } else if (currCommand === "contains") {
      let result = numbers.indexOf(+tokens[1]);
      console.log(result);

    } else if (currCommand === "remove") {
      let index = Number(tokens[1]);
      numbers.splice(index, 1);

    } else if (currCommand === "shift") {
      let possition = tokens[1];
      for (let i = 0; i < possition; i++) {
        let firstNum = numbers.shift(1);
        numbers.push(firstNum);
      }

    } else if (currCommand === "sumPairs") {
      let result = [];
      if (numbers.length % 2 != 0) {
        numbers.push(0);
      }
      for (let i = 0; i < numbers.length - 1; i+=2) {
        let sum = numbers[i] + numbers[i + 1];
        result.push(sum);
      }
      numbers = result;

    } else if (currCommand === "print") {
      console.log(`[ ${numbers.join(", ")} ]`);
    }
  }
}
solve(
  [1, 2, 4, 5, 6, 7],

  ["add 1 8", "contains 1", "contains 3", "print"]
);
