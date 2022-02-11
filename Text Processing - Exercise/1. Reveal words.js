function solve(words, text) {
  let wordsArr = words.split(", ");

  for (let word of wordsArr) {
    let censored = "*".repeat(word.length);
    text = text.replace(censored, word);
  }
  console.log(text);
}
// solve("great", "softuni is ***** place for learning new programming languages");
solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
