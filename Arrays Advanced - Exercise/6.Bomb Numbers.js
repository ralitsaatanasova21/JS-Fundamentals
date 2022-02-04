function solve(sequence, bomb) {
  let specialNum = bomb[0];
  let bombPower = bomb[1];

  while (sequence.includes(specialNum)) {
    let index = sequence.indexOf(specialNum);
    let elementRemove = bombPower * 2 + 1;
    let startIndex = index - bombPower;
    if (startIndex < 0) {
      elementRemove += startIndex;
      startIndex = 0;
    }
    sequence.splice(startIndex, elementRemove);
  }
  let finalResul = sequence.reduce((a, b) => {
    return a + b;
  }, 0);
  console.log(finalResul);
}
solve(
  [1, 2, 2, 4, 2, 2, 2, 9],

  [4, 2]
);
