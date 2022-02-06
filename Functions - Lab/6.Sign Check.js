function numbers(a, b, c) {
  let sumNegative = 0;
  if (isNegative(a)) {
    sumNegative++;
  }
  if (isNegative(b)) {
    sumNegative++;
  }
  if (isNegative(c)) {
    sumNegative++;
  }
  if (sumNegative == 1 || sumNegative == 3) {
    console.log("Negative");
  } else {
    console.log("Positive");
  }

  function isNegative(number) {
    return number < 0;
  }
}
numbers(-5, 1, 1);
