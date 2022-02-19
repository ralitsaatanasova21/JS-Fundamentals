function solve(arr) {
  let activKey = arr.shift();
  arr.pop();

  for (let row of arr) {
    row = row.split(">>>");
    let command = row[0];

    if (command === "Contains") {
      let word = row[1];
      if (activKey.includes(word)) {
        console.log(`${activKey} contains ${word}`);
      } else {
        console.log(`Substring not found!`);
      }

    } else if (command === "Flip") {
      let startIndex = +row[2];
      let endIndex = +row[3];
      let first = activKey.substring(0, startIndex);
      let curr = activKey.substring(startIndex, endIndex);
      let last = activKey.substring(endIndex);
      if (row[1] === "Upper") {
        curr = curr.toUpperCase();
      } else if (row[1] === "Lower") {
        curr = curr.toLowerCase();
      }
      activKey = first + curr + last;
      console.log(activKey);

    } else if (command === "Slice") {
      let startIndex = +row[1];
      let endIndex = +row[2];
      let first = activKey.substring(0, startIndex);
      let last = activKey.substring(endIndex);
      activKey = first + last;
      console.log(activKey);
    }
  }
  console.log(`Your activation key is: ${activKey}`);
}

solve([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
