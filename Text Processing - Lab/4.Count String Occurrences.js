function solve(text, word) {
  let str = text.split(" ");
  let sum = 0;

  for (let row of str) {
    if (row === word) {
      sum++;
    }
  }
  console.log(sum);
}
solve("This is a word and it also is a sentence", "is");
solve(
  "softuni is great place for learning new programming languages",
  "softuni"
);
