function solve(arr) {
  let text = arr.shift();
  arr.pop();

  for (let row of arr) {
    row = row.split(" ");
    let command = row[0];

    if (command === "TakeOdd") {
      let newString = "";
      for (i = 1; i < text.length; i++) {
        if (i % 2 != 0 && i > 0) {
          newString += text[i];
        }
      }
      text = newString;
      console.log(text);
    } else if (command == "Cut") {
      let index = +row[1];
      let length = +row[2];
      let first = text.slice(0, index);
      let last = text.slice(index + length);
      text = first + last;
      console.log(text);
    } else if (command === "Substitute") {
      let old = row[1];
      let newString = row[2];
      if (text.includes(old)) {
        while (text.includes(old)) {
          text = text.replace(old, newString);
        }
        console.log(text);
      } else {
        console.log("Nothing to replace!");
      }
    }
  }
  console.log(`Your password is: ${text}`);
}
solve([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
