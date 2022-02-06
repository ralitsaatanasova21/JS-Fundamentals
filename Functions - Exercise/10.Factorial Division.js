function solve(a, b) {
  function factorialize(num) {
    if (num < 0) return -1;
    else if (num == 0) return 1;
    else {
      return num * factorialize(num - 1);
    }
  }
  factorialize(a);
  function factorialize(num1) {
    if (num1 < 0) return -1;
    else if (num1 == 0) return 1;
    else {
      return num1 * factorialize(num1 - 1);
    }
  }
  factorialize(b);

  let result = factorialize(a) / factorialize(b);
  console.log(result.toFixed(2));
}
solve(5, 2);
