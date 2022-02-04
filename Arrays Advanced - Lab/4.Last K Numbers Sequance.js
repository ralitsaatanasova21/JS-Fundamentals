function solve(n, k) {
  let arr = [];
  while (arr.length !== 0) {
    if (arr.length > 0) {
      let sum = 0;
      for (let i = arr.length - k; i <= arr.length - 1; i--) {
        if (i >= 0) {
          sum += arr[i];
        }
      }
      arr.push(sum);
    }else{
      arr.push(1);
    }
  }
  console.log(arr);
}
solve(6, 3);
