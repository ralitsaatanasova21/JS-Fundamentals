function solve(number) {
  const rowGenerator = (num) => {
    return `${num} `.repeat(num);
  };
  for (let i = 1; i <= number; i++) {
    console.log(rowGenerator(number));
  }
}
solve(3);
