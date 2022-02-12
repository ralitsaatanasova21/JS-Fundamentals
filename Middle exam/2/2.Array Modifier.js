function solve(commands) {
  let arr = commands.shift().split(" ").map(Number);

  for (let i = 0; i < commands.length; i++) {
    let [command, firstIndex, secondIndex] = commands[i].split(" ");
    if (command != "end") {
      firstIndex = Number(firstIndex);
      secondIndex = Number(secondIndex);
      switch (command) {
        case "swap":
          swap(arr, firstIndex, secondIndex);
          break;
        case "multiply":
          removeAt(arr, firstIndex, secondIndex);
          break;
        case "decrease":
        arr= decrease(arr);
          break;
      }
    } else {
      break;
    }
  }

  function swap(array, a, b) {
    ([array[a], array[b]] = [array[b], array[a]]);
  }

  function removeAt(arr, a, b) {
    let result = arr[a] * arr[b];
    arr.splice(a, 1, result);
  }

  function decrease(array) {
    const map1 = array.map((x) => x - 1);
    return map1;
  }

  console.log(arr.join(", "));
}
solve([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
