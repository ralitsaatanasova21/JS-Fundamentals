function solve(arr) {
  let serching = arr.shift().split(" ");
  let mywords = {};

  for (let elements of serching) {
    mywords[elements] = 0;
  }
  for (let word of arr) {
    if (mywords.hasOwnProperty(word)) {
      mywords[word] += 1;
    }
  }
  let entries = Object.entries(mywords).sort((a, b) => {
    return b[1] - a[1];
  });
  for (let entry of entries) {
    console.log(`${entry[0]} - ${entry[1]}`);
  }
}
solve([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
