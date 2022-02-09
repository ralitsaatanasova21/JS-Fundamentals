function solve(text) {
  let reg = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;

  let numbers = [];
  let valid;
  while ((valid = reg.exec(text)) !== null) {
    numbers.push(valid[0]);
  }
  console.log(numbers.join(", "));
}
solve(
  "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"
);
