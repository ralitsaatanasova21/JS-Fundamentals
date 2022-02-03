function solve(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = Number(arr1[i]);
    sum += arr1[i];
  }
  let areEqual = true;
  for (let j = 0; j < arr2.length; j++) {
    arr2[j] = Number(arr2[j]);
    if (arr1[j] != arr2[j]) {
      console.log(`Arrays are not identical. Found difference at ${j} index`);
      areEqual = false;
      break;
    }
  }
  if (areEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}
solve(["10", "20", "30"], ["10", "20", "30"]);
solve(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
solve(["1"], ["10"]);
