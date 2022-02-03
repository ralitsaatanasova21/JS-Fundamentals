function solve(arr1, arr2, arr3) {
  let sum1 = Number(arr1[0]) + Number(arr1[1]) + Number(arr1[2]);
  let sum2 = Number(arr2[0]) + Number(arr2[1]) + Number(arr2[2]);
  let sum3 = Number(arr3[0]) + Number(arr3[1]) + Number(arr3[2]);
  let row1 = Number(arr1[0]) + Number(arr2[0]) + Number(arr3[0]);
  let row2 = Number(arr1[1]) + Number(arr2[1]) + Number(arr3[1]);
  let row3 = Number(arr1[2]) + Number(arr2[2]) + Number(arr3[2]);

  if (
    sum1 === sum2 &&
    sum1 === sum3 &&
    sum1 === row1 &&
    sum1 === row2 &&
    sum1 === row3
  ) {
    console.log("true");
  } else {
    console.log("false");
  }
}
solve(
  [4, 5, 6],

  [6, 5, 4],

  [5, 5, 5]
);
solve(
  [1, 0, 0],

  [0, 0, 1],

  [0, 1, 0]
);

solve(
  [11, 32, 45],

  [21, 0, 1],

  [21, 1, 1]
);
