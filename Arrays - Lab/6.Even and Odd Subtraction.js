function solve(arr) {
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = Number(arr[i]);
    if (num % 2 == 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }
  sumEven -= sumOdd;
  console.log(sumEven);
}
solve([1, 2, 3, 4, 5, 6]);
solve([3, 5, 7, 9]);
solve([2, 4, 6, 8, 10]);
