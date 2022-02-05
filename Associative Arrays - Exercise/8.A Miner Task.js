function solve(arr) {
  let production = new Map();
  for (let i = 0; i < arr.length; i += 2) {
    let curr = arr[i];
    let quantity = Number(arr[i + 1]);
    if (!production.has(curr)) {
      production.set(curr, 0);
    }
    let updateQ = production.get(curr);
    updateQ += quantity;
    production.set(curr, updateQ);
  }
  for (let item of production) {
    console.log(`${item[0]} -> ${item[1]}`);
  }
}
solve(["Gold", "155", "Silver", "10", "Copper", "17"]);
