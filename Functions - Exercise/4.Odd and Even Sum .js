function result(a) {
  function even(num) {
    let n = num.toString();
    let sumEven = 0;
    for (let i = 0; i < n.length; i++) {
        let first=Number(n[i]);
      if (first % 2 == 0) {
        sumEven += first;
      }
    }
    return sumEven
  }
  function odd(num1) {
    let n1 = num1.toString();
    let sumOdd = 0;
    for (let i = 0; i < n1.length; i++) {
        let first1=Number(n1[i]);
      if (first1 % 2 !== 0) {
        sumOdd += first1;
      }
    }
    return sumOdd
  }
  console.log(`Odd sum = ${odd(a)}, Even sum = ${even(a)}`);
}
result(1000435);
