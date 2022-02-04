function solve(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      array.push(arr[i]);
    } else {
      array.unshift(arr[i]);
    }
  }
  console.log(array.join("\n"));
}
// solve(["7", "-2", "8", "9"]);
solve(['3', '-2', '0', '-1']);