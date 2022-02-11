function solve(word) {
  let result = word[0];

  for (let i = 1; i < word.length; i++) {
    let curr = word[i];
    let before = word[i - 1];
    if (curr !== before) {
      result += curr;
    }
  }
  console.log(result);
}
solve("aaaaabbbbbcdddeeeedssaa");
solve("qqqwerqwecccwd");
