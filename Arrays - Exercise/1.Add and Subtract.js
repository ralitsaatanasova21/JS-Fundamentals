function solve(arr) {
  let newArr = [];
  let oldArr = 0;
  let newSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = Number(arr[i]);
    oldArr += num;
    if (num % 2 == 0) {
      num += i;
      newArr.push(num);
      newSum += num;
    } else {
      num -= i;
      newArr.push(num);
      newSum += num;
    }
  }
  console.log(newArr);
  console.log(oldArr);
  console.log(newSum);
}
solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);
