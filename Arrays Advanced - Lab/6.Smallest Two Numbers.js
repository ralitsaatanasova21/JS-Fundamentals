function solve(arr) {
  arr.slice(0, 2);
  let sorted = arr.sort((a, b) => {
    return a - b;
  });
  console.log(sorted.slice(0, 2).join(" "));
}
solve([30, 15, 50, 5]);
