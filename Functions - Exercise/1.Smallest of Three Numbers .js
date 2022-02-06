function result(a, b, c) {
  if (small(a, b) > c) {
    console.log(c);
  } else {
    console.log(small(a, b));
  }
  function small(num1, num2) {
    if (num1 > num2) {
      return num2;
    } else {
      return num1;
    }
  }
}
result(2, 5, 3);
