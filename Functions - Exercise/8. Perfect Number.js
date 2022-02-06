function solve(num) {
  let half = num / 2;
  let count = 0;

  function sum(num) {
    for (let i = 0; i < half; i++) {
      if (num % i === 0) {
        count += i;
      }
    }
    return count + half;
  }

  function result(num) {
    if (sum(num) === num) {
      return `We have a perfect number!`;
    } else {
      return `It's not so perfect.`;
    }
  }
  console.log(result(num));
}
solve(6);
solve(28);
solve(1236498);
