function solve(str, word) {
  let censored = "*".repeat(word.length);

  let nexText = str.replace(word, censored);
  while (nexText.includes(word)) {
    nexText = nexText.replace(word, censored);
  }
  console.log(nexText);
}
solve("A small sentence with some words", "small");
solve("Find the hided word", "hided");
