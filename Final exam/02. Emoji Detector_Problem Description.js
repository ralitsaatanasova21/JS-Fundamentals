function solve(arr) {
  let text = arr[0];

  let smileyRegex = /(\*\*|\:\:)([A-Z][a-z][a-z]+)\1/g;
  let digitRegex = /\d/g;

  let digits = text.match(digitRegex);
  let threshold = 1;
  digits.map((d) => (threshold *= Number(d)));
  console.log(`Cool threshold: ${threshold}`);

  let valid;
  let emojis = [];
  while ((valid = smileyRegex.exec(text))) {
    emojis.push(valid);
  }
  console.log(`${emojis.length} emojis found in the text. The cool ones are:`);

  for (let match of emojis) {
    let emojiText = match[2];
    let full = match[0];
    let coolness = 0;
    for (let letter of emojiText) {
      coolness += letter.charCodeAt();
    }
    if (coolness > threshold) {
      console.log(full);
    }
  }
}
solve([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
