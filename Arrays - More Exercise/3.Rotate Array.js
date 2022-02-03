function solve(arr) {
  let rotation = Number(arr[arr.length - 1]);
  arr.pop();
  for (let i = 0; i < rotation; i++) {
    arr.unshift(arr[arr.length - 1]);
    arr.pop();
  }
  console.log(arr.join(" "));
}
solve(["1", "2", "3", "4", "2"]);
solve(["Banana", "Orange", "Coconut", "Apple", "15"]);
