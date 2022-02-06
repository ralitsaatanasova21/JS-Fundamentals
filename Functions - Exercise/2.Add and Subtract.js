function result(a, b, c) {
  function sum(num1, num2) {
    return num1 + num2;
  }
  console.log(sum(a, b) - c);
}
result(23, 6, 10);
