function solve(arr) {
  let array1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      continue;
    } else {
      array1.push(arr[i] * 2);
    }
  }
  console.log(array1.reverse().join(" "));
}
solve([10, 15, 20, 25]);
