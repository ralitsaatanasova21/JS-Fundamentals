function solve(arr1, arr2) {
  let cut = Number(arr2[0]);
  let cutStart = Number(arr2[1]);
  let searchNum = Number(arr2[2]);
  function length(array) {
    return array.splice(0, cut);
  }
  function remove(array) {
    return array.splice(cutStart, array.length);
  }
  function search(array) {
    let count = 0;
    for (i = 0; i < array.length; i++) {
      if (array[i] == searchNum) {
        count++;
      }
    }
    return count;
  }
  let result = length(arr1);
  let removing = remove(result);

  console.log(`Number ${searchNum} occurs ${search(removing)} times.`);
}
solve(
  [5, 2, 3, 4, 1, 6],

  [5, 2, 3]
);
solve([7, 1, 5, 8, 2, 7], 

    [3, 1, 5]);
