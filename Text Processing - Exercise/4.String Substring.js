function solve(word, text) {
  let isFound = false;
  text = text.split(" ");
  for (let row of text) {
    row = row.toLowerCase();
    if (row == word) {
      console.log(word);
      isFound = true;
    }
  }
  if (!isFound) {
    console.log(`${word} not found!`);
  }
}
solve("javascript", "JavaScript is the best programming language");
solve("python", "JavaScript is the best programming language");
