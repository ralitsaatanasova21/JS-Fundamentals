function solve(arr) {
  let words = new Map();
  for (let word of arr) {
    if (words.has(word)) {
      let curCount = words.get(word);
      words.set(word, curCount + 1);
    } else {
      words.set(word, 1);
    }
  }
  let sorted = Array.from(words.entries()).sort((a, b) => b[1] - a[1]);
  for (let entry of sorted) {
    console.log(`${entry[0]} -> ${entry[1]} times`);
  }
}
solve([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
