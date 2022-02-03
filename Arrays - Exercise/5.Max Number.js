function solve(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isTrue = true;
    let theBigest = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > theBigest) {
        isTrue = false;
        break;
      }
    }
    if (isTrue && !newArr.includes(theBigest)) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr.join(" "));
}
// solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
