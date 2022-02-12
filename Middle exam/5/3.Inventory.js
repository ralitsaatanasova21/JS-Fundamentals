function solve(arr) {
  let collect = arr.shift().split(", ");
  arr.pop();
  for (let i = 0; i < arr.length; i++) {
    let [command, item] = arr[i].split(" - ");

    switch (command) {
      case "Collect":
        if (!collect.includes(item)) {
          collect.push(item);
        }
        break;
      case "Drop":
        if (collect.includes(item)) {
          let index = collect.indexOf(item);
          collect.splice(index, 1);
        }
        break;
      case "Renew":
        if (collect.includes(item)) {
          let index = collect.indexOf(item);
          collect.splice(index, 1);
          collect.push(item);
        }
        break;
      case "Combine Items":
        let newItem = item.split(":");
        let old = newItem[0];
        let neww = newItem[1];
        if (collect.includes(old)) {
          let index = collect.indexOf(old);
          collect.splice(index + 1, 0, neww);
        }
        break;
    }
  }
  console.log(collect.join(", "));
}
solve([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
// solve(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
