function solve(arr) {
  let names = {};

  for (let row of arr) {
    let sum = 0;
    let [name, cards] = row.split(": ");

    if (!names.hasOwnProperty(name)) {
      names[name] = { userCards: [], currSum: 0 };
    }
    let cardsArr = [];
    cardsArr.push(cards);

    let splitted = cardsArr[0].split(", ");

    for (let line of splitted) {
      if (!names[name].userCards.includes(line)) {
        let dqsno = line[line.length - 1];
        let lqvo = line.substring(0, line.length - 1);
        names[name].userCards.push(line);

        if (isNaN(Number(lqvo))) {
          switch (lqvo) {
            case "J":
              sum += 11;
              break;
            case "Q":
              sum += 12;
              break;
            case "K":
              sum += 13;
              break;
            case "A":
              sum += 14;
              break;
          }
        } else {
          sum += Number(lqvo);
        }

        switch (dqsno) {
          case "S":
            sum * 4;
            break;
          case "H":
            sum * 3;
            break;
          case "D":
            sum * 2;
            break;
          case "C":
            sum * 1;
            break;
        }

      }
    }
    names[name].currSum += sum;
  }
  let entries = Object.entries(names);
  for (let entry of entries) {
    console.log(`${entry[0]}: ${entry[1].currSum}`);
  }
}
solve([
  "Peter: 2C, 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
// solve([
//   "John: 2C, 4H, 9H, AS, QS",
//   "Slav: 3H, 10S, JC, KD, 5S, 10S",
//   "Alex: 6H, 7S, KC, KD, 5S, 10C",
//   "Thomas: QH, QC, JS, JD, JC",
//   "Slav: 6H, 7S, KC, KD, 5S, 10C",
//   "Thomas: QH, QC, JS, JD, JC",
//   "Alex: 6H, 7S, KC, KD, 5S, 10C",
//   "Thomas: QH, QC, JS, JD, JC",
//   "John: JD, JD, JD, JD",
// ]);
