function solve(arr) {
  function sorting(arr) {
    return arr.sort((a, b) => {
      return a - b;
    });
  }
  function small(arr) {
    return arr.slice(0, arr.length / 2);
  }
  function big(arr) {
    return arr.slice(arr.length / 2).reverse();
  }
  function obshto(arr, bigArray, smallArray) {
    let result = [];
    let index = 0;
    for (let i = 0; i < arr.length; i += 2) {
      result.push(bigArray[index]);
      result.push(smallArray[index]);
      index++;
    }
    return result;
  }
  arr = sorting(arr);
  let golemi = big(arr);
  let malki = small(arr);
  let total = obshto(arr, golemi, malki);
  console.log(total.join(' '));
}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
// solve([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
