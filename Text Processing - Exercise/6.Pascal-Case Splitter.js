function solve(text) {
  let words = [];

  for (let i = 0; i < text.length; i++) {
    let curr = text[i].charCodeAt(0);
    if (curr >= 65 && curr <= 90) {
      words.push(text[i]);
    } else if (curr >= 97 && curr <= 122) {
      words[words.length - 1] += text[i];
    }
  }
  console.log(words.join(", "));
}
solve("SplitMeIfYouCanHaHaYouCantOrYouCan");
