function solve(arr) {
  let list = [];
  let notgo = [];
  for (let i = 0; i < arr.length; i++) {
    let [name, ok, go] = arr[i].split(" ");
    if (go === "going!") {
      if (list.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        list.push(name);
      }
    } else {
      if (list.includes(name)) {
        let place = list.indexOf(name);
        list.splice(place, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }

  console.log(list.join("\n"));
}
solve([
  "Allie is going!",

  "George is going!",

  "John is not going!",

  "George is not going!",
]);
solve([
  "Tom is going!",

  "Annie is going!",

  "Tom is going!",

  "Garry is going!",

  "Jerry is going!",
]);
